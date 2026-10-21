
const corsHeaders = {
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "no-store"
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: corsHeaders
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204 });
    }

    if (url.pathname === "/api/health" && request.method === "GET") {
      return json({
        ok: true,
        app: "SABI SMS",
        configured: Boolean(
          env.VONAGE_API_KEY &&
          env.VONAGE_API_SECRET &&
          env.APP_PASSWORD
        )
      });
    }

    if (url.pathname !== "/api/send" || request.method !== "POST") {
      return json({ error: "Endpoint nuk u gjet." }, 404);
    }

    if (
      !env.VONAGE_API_KEY ||
      !env.VONAGE_API_SECRET ||
      !env.APP_PASSWORD
    ) {
      return json({ error: "Serveri nuk është konfiguruar." }, 503);
    }

    try {
      const body = await request.json();

      if (body.password !== env.APP_PASSWORD) {
        return json({ error: "Fjalëkalim i gabuar." }, 401);
      }

      const phone = String(body.phone || "").replace(/\D/g, "");
      const text = String(body.text || "").trim();

      if (!/^3556\d{8}$/.test(phone)) {
        return json({
          error: "Vendos një numër celular shqiptar, p.sh. 3556XXXXXXXX."
        }, 400);
      }

      if (!text || text.length > 1000) {
        return json({
          error: "Mesazhi duhet të ketë 1–1000 karaktere."
        }, 400);
      }

      if (body.confirm !== true) {
        return json({
          error: "Konfirmo që ke të drejtë t'i dërgosh mesazh marrësit."
        }, 400);
      }

      const form = new URLSearchParams({
        api_key: env.VONAGE_API_KEY,
        api_secret: env.VONAGE_API_SECRET,
        from: env.SMS_FROM || "SABI",
        to: phone,
        text
      });

      const response = await fetch(
        "https://rest.nexmo.com/sms/json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: form.toString()
        }
      );

      const data = await response.json();
      const result = data.messages?.[0];

      if (!response.ok || !result || result.status !== "0") {
        return json({
          error: result?.["error-text"] ||
            "Ofruesi nuk e pranoi SMS-në.",
          providerStatus: result?.status || "unknown"
        }, 502);
      }

      return json({
        ok: true,
        message: "SMS u pranua për dërgim nga ofruesi.",
        messageId: result["message-id"] || null,
        cost: result["message-price"] || null
      });
    } catch {
      return json({
        error: "Gabim gjatë kërkesës. Provo përsëri."
      }, 500);
    }
  }
};
