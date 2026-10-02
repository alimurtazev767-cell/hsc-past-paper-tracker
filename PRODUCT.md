# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Year 12 students in the owner's own school year (NSW HSC cohort), working through past papers in the months before the HSC. They mostly use it on a laptop at a desk, during study sessions at home or in the library, ticking papers off as they finish them. Phone use is secondary.

## Product Purpose

A personal log of HSC exam practice: students tick off the HSC papers, school trial papers and assessment tasks they have done, subject by subject, record marks, and rate how confident they feel (red / amber / green) per subject and per syllabus dot point. Success is a student who can see at a glance what they have done, what is left, and where to spend their next study session.

## Positioning

Built on THSC Online's school-by-school paper lists and NESA's HSC papers and Year 12 syllabuses, so the paper and dot-point lists match exactly what NSW students already download and study from. Made by a student in the cohort, for the cohort.

## Operating Context

- Students download papers from THSC Online and NESA, sit them, then come back to tick them off and enter a mark.
- Two modes: Past papers (HSC, trials, half yearlies, AT1 to AT4, by school or by year) and Syllabus (Year 12 dot points per module, tagged by term).
- Optional Supabase account syncs ticks across devices; without it, ticks stay in the browser.
- Static site on Vercel: `site/index.html` (home), `site/tracker.html` (tracker), data in `site/data/`.

## Capabilities and Constraints

- 33 subjects of paper lists; syllabus dot points for Maths Adv / Ext 1 / Ext 2, English Std / Adv / Ext 1, Chemistry, Physics and HMS.
- Plain static HTML, CSS and JS with no framework; `build.mjs` copies `site/` to `dist/`.
- Lists only paper names; it never hosts the papers themselves.
- Free and non-commercial, for students' private study.

## Evidence on Hand

- Paper lists in `site/data/*.json`, copied from THSC Online and NESA (2 October 2026).
- Syllabus dot points in `site/data/syllabus/`, from NESA's NSW Curriculum website (© NESA).
- No testimonials, user counts or school endorsements exist; do not invent them. The site is not made or endorsed by NESA or THSC.

## Product Principles

- Get students to the paper list fast; the tracker is a tool they open often, not a page they admire.
- Progress should feel honest and encouraging, never like a judgement on how far behind they are.
- Desktop first: design for a laptop at a desk, then make phones work.
- Keep sources and attribution visible and accurate.

## Accessibility & Inclusion

Keyboard use must work throughout, since students tick dozens of papers in a sitting. Text and controls meet WCAG AA contrast. Confidence colours always carry a text label, never colour alone.
