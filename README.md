# BD Eye

Dhaka's problems, seen by everyone. People report everyday problems (traffic, waterlogging, power/gas/water cuts, safety, prices, poor services) with photos and an area. Others confirm them, talk about them and update their status (Reported → Acknowledged → Solved).

The app is one website that people can add to their phone's home screen, so it works like an app without the Play Store or App Store.

## What it runs on (all free to start)

| Part | Service | What it does |
|---|---|---|
| Code | GitHub | Stores these files |
| Database, photos, logins | Supabase (free plan) | Saves reports, comments, votes and photos; email and Facebook sign-in |
| Website | Netlify (free plan) | Puts the site online and updates it whenever the code changes |
| Facebook page | Supabase Edge Function | Posts every new report to the BD Eye page |

## Files

- `index.html`, `styles.css`, `app.js`: the app itself
- `config.js`: the only file you edit; it holds your Supabase and Facebook details
- `manifest.webmanifest`, `sw.js`, `icons/`: make it installable on phones and fast to open
- `supabase/schema.sql`: sets up the database, its safety rules and photo storage (run once in Supabase's SQL Editor)
- `supabase/functions/post-to-facebook/`: posts new reports to the Facebook page

Until `config.js` is filled in, the site runs in preview mode with example reports.

## Setup steps

1. **GitHub:** create a free account and an empty private repository called `bd-eye`.
2. **Supabase:** create a free project, run `supabase/schema.sql` in the SQL Editor, then copy the Project URL and anon key into `config.js`.
3. **Netlify:** sign in with GitHub, choose "Import from Git", pick `bd-eye`, and deploy. Put the site address into `config.js` as `siteUrl`, and into Supabase under Authentication → URL Configuration → Site URL.
4. **Facebook:** create the BD Eye page, turn on Facebook login in Supabase, and set up the auto-post function with the page's access token.

Who can do what: anyone can read. Signed-in people can post, confirm, comment, change a report's status (recorded in the conversation) and report comments. A comment reported by 2 people is hidden. People can delete only their own posts and comments.
