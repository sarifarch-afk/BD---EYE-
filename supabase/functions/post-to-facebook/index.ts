// Posts each new BD Eye report to the BD Eye Facebook page, with a link back to the site.
// Called by a Supabase Database Webhook on INSERT into public.reports (set up in step 4).
// Secrets to add in Supabase > Edge Functions > Secrets:
//   FB_PAGE_ID, FB_PAGE_TOKEN (a long-lived Page access token), SITE_URL, WEBHOOK_SECRET
const AREAS: Record<string, string> = {
  uttara: "Uttara", mirpur: "Mirpur", bashundhara: "Bashundhara", banani: "Banani", gulshan: "Gulshan",
  badda: "Badda", mohammadpur: "Mohammadpur", tejgaon: "Tejgaon & Farmgate", rampura: "Rampura",
  dhanmondi: "Dhanmondi", khilgaon: "Khilgaon", motijheel: "Motijheel", oldDhaka: "Old Dhaka", jatrabari: "Jatrabari",
};
const CATS: Record<string, string> = {
  traffic: "🚦 Traffic", water: "🌊 Waterlogging", outage: "⚡ Power/gas/water cut", safety: "🛡️ Safety",
  prices: "🛒 Necessities & prices", service: "🏛️ Public service", other: "📌 Problem",
};

Deno.serve(async (req) => {
  if (req.headers.get("x-webhook-secret") !== Deno.env.get("WEBHOOK_SECRET")) {
    return new Response("Not allowed", { status: 401 });
  }
  const payload = await req.json().catch(() => null);
  const r = payload?.record;
  if (payload?.type !== "INSERT" || !r?.id) return new Response("Ignored", { status: 200 });

  const site = (Deno.env.get("SITE_URL") ?? "").replace(/\/?$/, "/");
  const link = `${site}#r-${r.id}`;
  const where = [AREAS[r.area] ?? r.area, r.place].filter(Boolean).join(", ");
  const message = [
    `${CATS[r.category] ?? "📌 Problem"} · ${where}`,
    r.title,
    r.description ? `\n${String(r.description).slice(0, 400)}` : "",
    `\nSeen this too? Confirm or add an update on BD Eye 👇`,
  ].filter(Boolean).join("\n");

  const pageId = Deno.env.get("FB_PAGE_ID");
  const token = Deno.env.get("FB_PAGE_TOKEN");
  const hasPhoto = Array.isArray(r.photos) && r.photos.length > 0;
  const url = hasPhoto
    ? `https://graph.facebook.com/v21.0/${pageId}/photos`
    : `https://graph.facebook.com/v21.0/${pageId}/feed`;
  const body = hasPhoto
    ? { url: r.photos[0], caption: `${message}\n${link}`, access_token: token }
    : { message, link, access_token: token };

  const res = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
  const out = await res.text();
  if (!res.ok) console.error("Facebook said:", out);
  return new Response(out, { status: res.ok ? 200 : 502 });
});
