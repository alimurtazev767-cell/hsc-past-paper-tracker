# HSC Past Paper Log: website version

The tracker as a normal website: a static page hosted on **Vercel**, with **Supabase** for accounts so each person's ticks follow them across devices. It is the same page and design as the Artifact (version 10) and the same paper lists.

Without Supabase set up, the site still works: ticks are saved in each visitor's browser only.

## Fastest path: put it online now, add logins later

Deploy it with no Supabase first. Everything works, and ticks are saved in each visitor's own browser.

**Option A, GitHub (same as a typical Vercel site):**
1. On GitHub, create a new repository and upload everything in this folder (unzip `hsc-past-paper-log-website.zip` first, then drag the files in).
2. On vercel.com, choose **Add New > Project**, then **Import** that repository.
3. Leave **Framework Preset** as **Other** and don't change the build settings. `vercel.json` already sets **Build Command** `node build.mjs` and **Output Directory** `dist`. Skip the environment variables for now.
4. Choose **Deploy**. You get a `https://<name>.vercel.app` link. Every later push to GitHub redeploys it.

**Option B, Vercel CLI (no GitHub):** in a terminal inside this folder, with Node installed:
```
npx vercel          # log in, answer the prompts with the defaults; gives a preview link
npx vercel --prod   # puts it on your main .vercel.app address
```

**Option C, no build at all:** the `site/` folder is a complete static site on its own (open `site/index.html`). Deploy just that folder, for example by running `npx vercel --prod` inside `site/`, and set Framework Preset to **Other** with no build command. This way can't turn on logins later without switching to A or B.

**Adding logins later:** follow steps 2 to 5 below. Then add `SUPABASE_URL` and `SUPABASE_PUBLISHABLE_KEY` in Vercel under **Settings > Environment Variables** and redeploy. A Sign in button appears once those are set.

## What's in this folder

| Path | What it is |
| --- | --- |
| `site/index.html` | The tracker page, with a Sign in button added |
| `site/config.js` | Empty placeholder (logins off). The build replaces it with your Supabase settings |
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
- **Optional, Google sign-in** (sends no emails, so it avoids the 2-per-hour limit). Steps from Supabase's "Login with Google" guide, checked 2 October 2026:
  1. In Supabase, open **Authentication > Sign In / Providers > Google** and copy the **Callback URL** it shows (it looks like `https://abcdefgh.supabase.co/auth/v1/callback`). Leave the page open.
  2. At console.cloud.google.com, pick or create a project. Open **Google Auth Platform > Branding** and fill in the app name and your email (this is what students see on Google's "Choose an account" screen).
  3. Open **Data Access** and add the scopes `openid`, `.../auth/userinfo.email` and `.../auth/userinfo.profile`.
  4. Open **Clients > Create client**. Application type: **Web application**. Under **Authorized JavaScript origins** add your site, for example `https://hsc-past-paper-log-website.vercel.app`. Under **Authorized redirect URIs** paste the Callback URL from step 1. Choose **Create** and copy the **Client ID** and **Client secret**.
  5. Back in Supabase's Google page, turn Google on, paste the Client ID and Client secret, and **Save**.
  6. Set `ENABLE_GOOGLE_SIGNIN=true` in step 4 below. Without it the Google button stays hidden.
  - [Unverified] Google may show an "unverified app" warning or limit sign-ins to test users until the app is published under **Audience**. Check that page if students can't sign in with Google.

### 4. Deploy on Vercel

**If you linked Supabase through Vercel's Supabase integration**, skip step 3 below: the integration adds `SUPABASE_URL` and `SUPABASE_PUBLISHABLE_KEY` (and `NEXT_PUBLIC_` copies) itself, and the build reads those. It also adds `SUPABASE_SECRET_KEY`, which the build never reads. You still need to run the SQL (step 2), set the URL Configuration (step 5) and redeploy.

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
- add the same address followed by `/**` to **Redirect URLs** (for example `https://hsc-past-paper-log-website.vercel.app/**`)
- optional, so sign-in also works on Vercel preview links: add `https://*-<your-vercel-account-slug>.vercel.app/**` (this pattern is Supabase's own Vercel example)

Without this, the links in confirmation and password-reset emails send people to `localhost`.

### 6. Check it

Open the site, choose **Sign in > Create an account**, tick a paper, then open the site on your phone and sign in. The tick should be there. The line under the title says "Synced to your account" when it's working.

## Test on your own computer (optional)

With Node 20 or newer: copy `.env.example` to `.env.local`, fill in the two values, then run `npm start` and open http://localhost:5173. Add `http://localhost:5173` to Supabase's Redirect URLs if you want email links to come back to your computer.

## How accounts behave

- Ticks, marks, papers you added and your chosen subjects are stored as one row per person in the `progress` table. Row Level Security means a signed-in person can only read or change their own row, and signed-out visitors can't read the table at all.
- If someone ticks papers before signing in, those ticks are added to their account the first time they sign in, and nothing is lost on either side: papers ticked in either place stay ticked (the earlier date is kept), and where both have a mark or start year, the account's value is kept. A short message says how many papers were added.
- A browser that is already signed in treats the account as the main copy, so unticking a paper on one device isn't undone by another. Edits that couldn't upload (offline, or the tab closed straight away) are uploaded on the next visit.
- Signing out removes that person's ticks from the browser, so a shared school computer doesn't show the last person's progress.
- Your ticks in the claude.ai Artifact don't move across automatically. They're stored inside claude.ai, not in this site.

## Things to check before sharing it widely

- **THSC's terms.** The THSC Online repository's licence (github.com/thsconline/s, LICENSE, revised 2026-08-08) says material may be used for non-commercial, educational purposes only (term 9). It also says a site linking to all or a significant portion of THSC's pages could count as a "substantial copy" (term 7), and that publishing a copy needs informal permission from the owner, which "will most likely be granted if sought" (terms 2 and 6). This site lists paper names, not the papers, and links to THSC's subject pages, but I can't tell whether THSC would see that as a substantial copy. The safest step is to email THSC Online and ask before sharing the link publicly. Their README says: "Please email for permission if wanting to publish a copy of the HTML code including on Github pages, as a courtesy."
- **NESA papers.** The site only names NESA's HSC papers and links to NESA's own page. It doesn't host any NESA files.
- **Privacy.** Accounts store an email address. If students under 18 will sign up, consider a short privacy note on the page saying what's stored (email, ticks, marks) and how to ask for deletion. You can delete someone in Supabase under **Authentication > Users**, which also deletes their progress row.
- **Free plan limits.** [Unverified] Supabase's free plan pauses projects after about a week with no activity, and Vercel's free Hobby plan is for non-commercial use. Check both companies' current pricing pages before relying on this.

## The sign-in screens

- **Sign in / Create account** in one sheet with a sliding switch, plus **Continue with Google** when it's turned on.
- Show/hide password, a live strength bar and "N more characters needed" hint (8 characters minimum), and a Caps Lock warning on sign in.
- Plain-English errors: wrong password, email not confirmed (with a "Send it again" link), account already exists, too many tries, expired email link, no internet.
- "Check your email" screens after sign-up and "Forgot password?", with a resend link that waits 60 seconds between sends.
- Signed in, the header shows a round initial with a green dot (amber if syncing failed). It opens an account sheet with the email, sign-in method, papers done, sync status, **Change password** (email accounts only) and **Sign out**.
- With no Supabase settings, none of this shows and the site works exactly as before.

## What was tested

- The database rules were run in a local PostgreSQL 16 with a stand-in for Supabase's `auth.uid()`: a person could read and update only their own row, could not write someone else's, signed-out access was refused, and oversized data was rejected. This is a stand-in, not a real Supabase project.
- The page was run in Chromium against a fake Supabase server using the real Supabase library: guest ticks survive a reload, a wrong password shows "Invalid login credentials", signing in uploads guest ticks, new ticks sync, a second device pulls them, a reload keeps you signed in, and signing out clears the browser. There's no sideways scrolling at phone width. It has not yet been tried against a real Supabase project or on Vercel.
- The new sign-in screens (2 October 2026) were run in Chromium at desktop and phone width against a fake Supabase server using the real Supabase library: 42 checks passed, covering every screen and error above, guest ticks merging on sign-in, an untick surviving a reload, a failed upload retried on the next visit, password change and reset, an expired email link, and Google sign-in (faked). The fake server copies Supabase's documented replies; a real project may word some errors differently, in which case the site shows Supabase's own message.
