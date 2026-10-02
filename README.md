# HSC Past Paper Log: website version

The tracker as a normal website: a static page hosted on **Vercel**, with **Supabase** for accounts so each person's ticks follow them across devices. It is the same page and design as the Artifact (version 10) and the same paper lists.

Without Supabase set up, the site still works: ticks are saved in each visitor's browser only.

## What's in this folder

| Path | What it is |
| --- | --- |
| `site/index.html` | The tracker page, with a Sign in button added |
| `site/data/*.json` | Paper lists for the 33 subjects (copied unchanged from the Artifact) |
| `site/vendor/supabase.js` | Supabase's browser library, v2.117.2 (MIT licence), served from your own site |
| `build.mjs` | Copies `site/` to `dist/` and writes `dist/config.js` from your environment variables |
| `vercel.json` | Tells Vercel to run `node build.mjs` and publish `dist/` |
| `supabase/schema.sql` | Creates the one table the site uses, with rules so people only see their own data |
| `.env.example` | The three settings, for local testing |

## Set it up

You need free accounts on GitHub, Supabase and Vercel.

### 1. Put the folder on GitHub

Make a new **private** repository (for example `hsc-past-paper-log`) and upload everything in this folder except `dist/` (the `.gitignore` already leaves it out). Vercel deploys from that repository.

### 2. Create the Supabase project

1. At supabase.com, choose **New project**. Pick the **Sydney** region so it's close to your users. Save the database password somewhere safe; the site doesn't need it.
2. Open **SQL Editor**, choose **New query**, paste the whole of `supabase/schema.sql`, and choose **Run**. It's safe to run again later.
3. Open **Project Settings > API Keys** (or the **Connect** button at the top). Copy:
   - the **Project URL**, which looks like `https://abcdefgh.supabase.co`
   - the **publishable key** (`sb_publishable_...`), or on older projects the **anon** key.
   Never use the **secret** or **service_role** key. The build stops with an error if you paste one.

### 3. Decide how sign-up emails work

Supabase's built-in email sender only sends **2 emails per hour** for the whole project (Supabase docs, "Rate limits"). That covers confirmation emails and password resets, so it's fine for testing and too low for a class.

Pick one. (The URL Configuration and SMTP page locations were checked in Supabase's docs on 2 October 2026; the exact place of the **Confirm email** switch wasn't, so if it isn't where described, look under **Authentication** for the Email provider's settings.)

- **Simplest:** in **Authentication > Sign In / Providers > Email**, turn off **Confirm email**. People can sign up and start straight away with no email. The catch: nobody's email is checked, and "Forgot password?" still uses the 2-per-hour sender.
- **Better for many users:** keep confirmation on and connect your own email service under **Authentication > Emails > SMTP Settings** (Resend, Postmark, SendGrid and similar have free tiers). Then raise the limit in **Authentication > Rate Limits**.
- **Optional:** add Google sign-in under **Authentication > Sign In / Providers > Google** (it needs a Google Cloud OAuth client; Supabase's page walks through it). Then set `ENABLE_GOOGLE_SIGNIN=true` in step 4. Google sign-in sends no emails.

### 4. Deploy on Vercel

1. At vercel.com, choose **Add New > Project** and import the GitHub repository from step 1.
2. Leave **Framework Preset** as **Other**. `vercel.json` already sets the build command and output folder.
3. Under **Environment Variables**, add:
   - `SUPABASE_URL`: the Project URL from step 2
   - `SUPABASE_PUBLISHABLE_KEY`: the publishable (or anon) key from step 2
   - `ENABLE_GOOGLE_SIGNIN`: `true` only if you did the Google step, otherwise leave it out
4. Choose **Deploy**. The build log should say `Built dist/ with accounts on`.

If you change an environment variable later, redeploy: Vercel only applies changes to new deployments.

### 5. Tell Supabase your website's address

Copy your Vercel address (for example `https://hsc-past-paper-log.vercel.app`). In Supabase, open **Authentication > URL Configuration** and:

- set **Site URL** to that address
- add the same address to **Redirect URLs**

Without this, the links in confirmation and password-reset emails send people to `localhost`.

### 6. Check it

Open the site, choose **Sign in > Create an account**, tick a paper, then open the site on your phone and sign in. The tick should be there. The line under the title says "Synced to your account" when it's working.

## Test on your own computer (optional)

With Node 20 or newer: copy `.env.example` to `.env.local`, fill in the two values, then run `npm start` and open http://localhost:5173. Add `http://localhost:5173` to Supabase's Redirect URLs if you want email links to come back to your computer.

## How accounts behave

- Ticks, marks, papers you added and your chosen subjects are stored as one row per person in the `progress` table. Row Level Security means a signed-in person can only read or change their own row, and signed-out visitors can't read the table at all.
- If someone ticks papers before making an account, those ticks are copied into the new account the first time they sign in. If the account already has progress, the account's copy wins.
- Signing out removes that person's ticks from the browser, so a shared school computer doesn't show the last person's progress.
- Your ticks in the claude.ai Artifact don't move across automatically. They're stored inside claude.ai, not in this site.

## Things to check before sharing it widely

- **THSC's terms.** The THSC Online repository's licence (github.com/thsconline/s, LICENSE, revised 2026-08-08) says material may be used for non-commercial, educational purposes only (term 9). It also says a site linking to all or a significant portion of THSC's pages could count as a "substantial copy" (term 7), and that publishing a copy needs informal permission from the owner, which "will most likely be granted if sought" (terms 2 and 6). This site lists paper names, not the papers, and links to THSC's subject pages, but I can't tell whether THSC would see that as a substantial copy. The safest step is to email THSC Online and ask before sharing the link publicly. Their README says: "Please email for permission if wanting to publish a copy of the HTML code including on Github pages, as a courtesy."
- **NESA papers.** The site only names NESA's HSC papers and links to NESA's own page. It doesn't host any NESA files.
- **Privacy.** Accounts store an email address. If students under 18 will sign up, consider a short privacy note on the page saying what's stored (email, ticks, marks) and how to ask for deletion. You can delete someone in Supabase under **Authentication > Users**, which also deletes their progress row.
- **Free plan limits.** [Unverified] Supabase's free plan pauses projects after about a week with no activity, and Vercel's free Hobby plan is for non-commercial use. Check both companies' current pricing pages before relying on this.

## What was tested

- The database rules were run in a local PostgreSQL 16 with a stand-in for Supabase's `auth.uid()`: a person could read and update only their own row, could not write someone else's, signed-out access was refused, and oversized data was rejected. This is a stand-in, not a real Supabase project.
- The page was run in Chromium against a fake Supabase server using the real Supabase library: guest ticks survive a reload, a wrong password shows "Invalid login credentials", signing in uploads guest ticks, new ticks sync, a second device pulls them, a reload keeps you signed in, and signing out clears the browser. There's no sideways scrolling at phone width. It has not yet been tried against a real Supabase project or on Vercel.
# hsc-past-paper-tracker
# hsc-past-paper-tracker
