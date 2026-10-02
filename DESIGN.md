---
name: HSC Past Paper Log
description: A Year 12 study log drawn as a Sydney train network; every subject is a line, and its stops are the student's own assessments on the way to the HSC.
colors:
  enamel-ground: "#EEF1F5"
  panel-white: "#FFFFFF"
  well-grey: "#F3F5F8"
  signage-navy: "#0B1F45"
  navy-hover: "#1A3366"
  ink-secondary: "#4A5874"
  ink-tertiary: "#66728A"
  rule: "#D5DBE5"
  rule-strong: "#BCC5D3"
  band-muted: "#B9C4D8"
  selection-tint: "#CFE3F5"
  line-orange: "#F6891F"
  line-blue: "#0079AD"
  line-green: "#00824A"
  line-magenta: "#B8217F"
  line-deep-blue: "#00509A"
  line-teal: "#13777C"
  line-purple: "#6E4FA0"
  line-yellow: "#E3B505"
  signal-red: "#D92D20"
  signal-amber: "#B86E00"
  signal-green: "#12A150"
  signal-off: "#33415C"
  lamp-red-lit: "#FF5A4E"
  lamp-amber-lit: "#FFB020"
  lamp-green-lit: "#34D27A"
  red-tint: "#FDEFED"
  red-edge: "#F1B9B3"
  red-text: "#A3231A"
  amber-tint: "#FFF5E2"
  amber-edge: "#EDC98A"
  amber-text: "#8A5300"
  green-tint: "#E8F6EE"
  green-edge: "#A6D9BA"
  green-text: "#146A38"
  danger: "#B3261E"
typography:
  display:
    fontFamily: "Public Sans, -apple-system, BlinkMacSystemFont, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  clock:
    fontFamily: "Public Sans, -apple-system, BlinkMacSystemFont, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(3.2rem, 7vw, 5rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.03em"
    fontFeature: "tnum"
  headline:
    fontFamily: "Public Sans, -apple-system, BlinkMacSystemFont, Segoe UI, system-ui, sans-serif"
    fontSize: "1.6rem"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Public Sans, -apple-system, BlinkMacSystemFont, Segoe UI, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.005em"
  body:
    fontFamily: "Public Sans, -apple-system, BlinkMacSystemFont, Segoe UI, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
    fontFeature: "tnum"
  control:
    fontFamily: "Public Sans, -apple-system, BlinkMacSystemFont, Segoe UI, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 600
  label:
    fontFamily: "Public Sans, -apple-system, BlinkMacSystemFont, Segoe UI, system-ui, sans-serif"
    fontSize: "12.5px"
    fontWeight: 600
  line-code:
    fontFamily: "Public Sans, -apple-system, BlinkMacSystemFont, Segoe UI, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.02em"
  math:
    fontFamily: "STIX Two Math, math"
    fontSize: "1.08em"
rounded:
  tag: "4px"
  xs: "6px"
  sm: "8px"
  md: "10px"
  card: "12px"
  panel: "14px"
  pill: "999px"
  round: "50%"
spacing:
  xs: "6px"
  sm: "12px"
  md: "16px"
  lg: "22px"
  inset: "24px"
components:
  button-primary:
    backgroundColor: "{colors.signage-navy}"
    textColor: "{colors.panel-white}"
    typography: "{typography.control}"
    rounded: "{rounded.sm}"
    padding: "8px 14px"
    height: "40px"
  button-primary-hover:
    backgroundColor: "{colors.navy-hover}"
  button-secondary:
    backgroundColor: "{colors.panel-white}"
    textColor: "{colors.signage-navy}"
    typography: "{typography.control}"
    rounded: "{rounded.sm}"
    padding: "8px 14px"
    height: "40px"
  button-secondary-hover:
    backgroundColor: "{colors.well-grey}"
  button-big:
    rounded: "{rounded.sm}"
    padding: "10px 22px"
    height: "46px"
  line-badge:
    backgroundColor: "{colors.line-blue}"
    textColor: "{colors.panel-white}"
    typography: "{typography.line-code}"
    rounded: "{rounded.round}"
    size: "30px"
  paper-chip:
    backgroundColor: "{colors.panel-white}"
    textColor: "{colors.signage-navy}"
    rounded: "{rounded.sm}"
    padding: "6px 10px"
    height: "40px"
  paper-chip-ticked:
    backgroundColor: "{colors.line-blue}"
    textColor: "{colors.panel-white}"
  type-filter:
    backgroundColor: "transparent"
    textColor: "{colors.ink-secondary}"
    typography: "{typography.control}"
    rounded: "{rounded.sm}"
    padding: "6px 12px"
    height: "36px"
  type-filter-active:
    backgroundColor: "{colors.signage-navy}"
    textColor: "{colors.panel-white}"
  subject-card:
    backgroundColor: "{colors.panel-white}"
    textColor: "{colors.signage-navy}"
    rounded: "{rounded.card}"
    padding: "14px 16px 16px"
  panel:
    backgroundColor: "{colors.panel-white}"
    rounded: "{rounded.panel}"
  stop-panel:
    backgroundColor: "{colors.well-grey}"
    textColor: "{colors.signage-navy}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
  stop-tag:
    backgroundColor: "{colors.line-blue}"
    textColor: "{colors.panel-white}"
    rounded: "{rounded.pill}"
    padding: "1px 8px"
  stop-tag-sat:
    backgroundColor: "{colors.signage-navy}"
    textColor: "{colors.panel-white}"
  school-tag:
    backgroundColor: "{colors.signage-navy}"
    textColor: "{colors.panel-white}"
    rounded: "{rounded.pill}"
    padding: "1px 7px"
  first-run-panel:
    backgroundColor: "{colors.well-grey}"
    rounded: "{rounded.md}"
    padding: "16px 18px"
  dot-point:
    backgroundColor: "{colors.panel-white}"
    textColor: "{colors.signage-navy}"
    rounded: "{rounded.md}"
    padding: "10px 12px"
  dot-point-red:
    backgroundColor: "{colors.red-tint}"
    textColor: "{colors.red-text}"
  dot-point-amber:
    backgroundColor: "{colors.amber-tint}"
    textColor: "{colors.amber-text}"
  dot-point-green:
    backgroundColor: "{colors.green-tint}"
    textColor: "{colors.green-text}"
  dot-lamp-track:
    backgroundColor: "{colors.panel-white}"
    rounded: "{rounded.pill}"
    padding: "2px"
  dot-lamp:
    rounded: "{rounded.pill}"
    width: "30px"
    height: "26px"
  clock-face:
    backgroundColor: "{colors.signage-navy}"
    textColor: "{colors.panel-white}"
    typography: "{typography.clock}"
    rounded: "{rounded.card}"
    padding: "22px 16px"
  calendar-day:
    backgroundColor: "{colors.panel-white}"
    textColor: "{colors.signage-navy}"
    rounded: "{rounded.sm}"
    padding: "6px 7px 8px"
    height: "84px"
  calendar-stop-chip:
    backgroundColor: "{colors.line-blue}"
    textColor: "{colors.panel-white}"
    rounded: "{rounded.tag}"
    padding: "1px 6px"
  mode-tab-active:
    backgroundColor: "{colors.enamel-ground}"
    textColor: "{colors.signage-navy}"
    rounded: "10px 10px 0 0"
    padding: "11px 22px 12px"
  text-input:
    backgroundColor: "{colors.panel-white}"
    textColor: "{colors.signage-navy}"
    rounded: "{rounded.sm}"
    padding: "7px 10px"
    height: "36px"
---

# Design System: HSC Past Paper Log

## Overview

**Creative North Star: "The Network Map"**

Each subject a student takes is a Sydney train line they ride through Year 12, and its stops are the student's own assessments: AT1, AT2, AT3, Trials, then the HSC. The surface borrows from transit wayfinding: a pale enamel signage ground, crisp white panels, a navy sign band across the top, round line badges with two-letter codes, and route diagrams where built track is solid and planned track is a thin rule. It is a tool opened dozens of times a week, so it is dense, calm and code-led rather than decorative.

Colour has two strictly separate jobs. A subject's line colour means that subject: its progress along the route, its ticked papers, its selection, and its identity wherever the subject appears (badges, calendar stop chips, study-time bars). Confidence is a different instrument, red / amber / green, read out as a signal lamp in a navy head and set as three lamps on each dot point, and it always carries a text label. The system refuses both the dark SaaS dashboard and its cream-and-serif opposite; it is light, sans, and as plain as a platform sign.

Depth is almost nil: panels are signs bolted to a wall, defined by a 1px edge and a hairline under-rule, never a cast shadow. Navy is the one heavy surface, used for the band, the study clock face and small solid tags. Motion is short and functional (150ms colour changes, a small press-down on tap, a sliding segment thumb).

**Key Characteristics:**
- Enamel ground, white panels, navy ink, navy header band and navy clock face.
- One line colour per chosen subject, assigned by the student's subject order from an 8-colour set.
- Line colour is reserved for the subject's progress, selection and identity; confidence uses its own red / amber / green signal set, always labelled in words.
- Public Sans everywhere, heavy (800) for headings, the clock and line codes, tabular numerals throughout.
- The Year 12 route: five selectable stops on a track that is solid up to the next stop, with a well-grey stop panel beneath.

## Colors

A cool, low-chroma signage palette with navy ink, carrying eight saturated line colours and a separate signal set with its own tints.

### Primary
- **Signage Navy** (signage-navy): the ink for all text, the header band, the study clock face, primary buttons, the active type filter, solid tags ("Sat", "Your school", today's date in the calendar), the selected calendar day's edge, focus rings, checkbox accent and the confidence lamp housing. It is both the sign and the writing on it.
- **Navy Hover** (navy-hover): hover state of the primary button only.

### Secondary: the line set
Eight line colours, assigned in order to the student's chosen subjects (wrapping after eight) and set as `--line` / `--on` on each subject's wrapper:
- **Line Orange** (line-orange) with navy text, **Line Blue** (line-blue), **Line Green** (line-green), **Line Magenta** (line-magenta), **Line Deep Blue** (line-deep-blue), **Line Teal** (line-teal), **Line Purple** (line-purple), each with white text, and **Line Yellow** (line-yellow) with navy text. Line Blue is the default `--line` when no subject is in scope.

### Tertiary: the signal set
- **Signal Red / Amber / Green** (signal-red, signal-amber, signal-green): confidence dots and summary, the dot-point lamps, and the stacked syllabus meter. Amber is set dark enough to read as a ring on white.
- **Lit Lamps** (lamp-red-lit, lamp-amber-lit, lamp-green-lit): brighter versions used only inside the navy lamp head, where they read as lit against **Signal Off** (signal-off).
- **Signal tints** (red-tint / red-edge / red-text, amber-tint / amber-edge / amber-text, green-tint / green-edge / green-text): a dot point marked with a light takes the pale tint as its fill, the edge as its border, and the dark text colour for its tag ("Amber: getting there"). Green text also carries the "Saved" confirmation in the stop panel.
- **Danger** (danger): destructive account actions and invalid inputs.

### Neutral
- **Enamel Ground** (enamel-ground): page background and the open mode tab, which joins the band to the page.
- **Panel White** (panel-white): cards, panels, chips, inputs, calendar days, dialogs, and white text on navy.
- **Well Grey** (well-grey): the stop panel and first-run panel fill, hover fill for buttons and chips, segmented-control track.
- **Ink Secondary** (ink-secondary): supporting copy, unselected filters, links, help lines.
- **Ink Tertiary** (ink-tertiary): counts, dates, term labels, weekday heads; on white panels only.
- **Rule** (rule) and **Rule Strong** (rule-strong): hairline dividers and panel edges; control borders and planned track.
- **Band Muted** (band-muted): secondary text on navy (band stats, inactive tabs, clock caption).
- **Selection Tint** (selection-tint): text selection background, with navy text.

### Named Rules
**The Reserved Line Rule.** A subject's line colour belongs to that subject: built track, passed stops, ticked chips, the Next stop tag, the completed-log dot, the selected card's outline, its calendar stop chips and study-time bars. Never use it for confidence, generic buttons, headings or decoration.

**The Separate Signal Rule.** Confidence is red / amber / green, never a line colour, and every confidence state is spelled out in text ("Needs work", "Getting there", "Confident", a "Red: needs work" tag, or a counted summary). Colour alone never carries it.

**The Readable Code Rule.** Light line colours (orange, yellow) carry navy text; all others carry white. Any new line colour must pass AA against its `--on` text before it joins the set.

## Typography

**Display Font:** Public Sans (with -apple-system, BlinkMacSystemFont, Segoe UI, system-ui, sans-serif)
**Body Font:** Public Sans
**Math Font:** STIX Two Math (self-hosted, used only inside formulas and downloaded only when a formula is on screen)

**Character:** One civic, government-signage sans for everything, worked hard at weight 800 for headings, the clock and line codes and left at 400 to 700 for reading and controls. Numerals are tabular everywhere so counts, dates, marks and the clock line up.

Public Sans is currently served from the Google Fonts CDN; self-hosting it like STIX Two Math is an open gap awaiting the owner's go-ahead, not a design decision.

### Hierarchy
- **Clock** (800, clamp(3.2rem, 7vw, 5rem), 1, -0.03em): the study timer readout on the navy clock face, the largest type in the system.
- **Display** (800, clamp(1.5rem, 3vw, 2rem), 1.1, -0.02em): the site title in the header band.
- **Headline** (800, 1.6rem, 1.15, -0.02em): the open subject's name; dialog titles step down to 1.3rem, the calendar month to 1.2rem.
- **Module title** (700, 1.1rem, 1.3, -0.01em): syllabus module headings.
- **Title** (700, 16px, 1.3): section labels ("Your subjects", "Completed", "Get the papers", "By school"), stop-panel and first-run headings, in sentence case.
- **Route** (700 to 800, 14 to 15px): stop names under each station and the "Next stop: X · date · in N days" header; the next stop goes to 800.
- **Body** (400, 16px, 1.5): running text; dot-point text is 14.5px/1.45; notes are capped near 75ch.
- **Control** (600, 13.5 to 14.5px): buttons, tabs, filters, segmented controls, field labels; big timer buttons go to 15.5px.
- **Label** (500 to 700, 11.5 to 13.5px): counts, dates, term labels under stops (12px), tags (12.5px, 700), calendar chips (11.5px, 700).
- **Line code** (800, 12px, 0.02em): two-letter code inside the line badge (16px in the large badge).
- **Math** (STIX Two Math, 1.08em): MathML formulas inside dot points only.

### Named Rules
**The One Face Rule.** Public Sans carries every role; hierarchy comes from weight and size, not a second family. STIX Two Math is for formulas only.

**The Sentence Case Rule.** Headings, labels, tabs, tags and buttons are sentence case, like station signage. Uppercase is limited to the two-letter line codes and assessment codes that are themselves acronyms (AT1, HSC).

## Layout

A single centred column up to 1280px with 16px side gutters. The header band runs full-bleed with the same inner width. Below it, a grid of subject cards (`auto-fill`, minimum 220px, 12px gaps), then the subject view: a main panel and a 320px sticky side column (completed log, or the selected day in Study timer) with a 20px gap. Content inside panels uses a 24px horizontal inset; vertical rhythm between page blocks is 22px.

The route spreads its five stops in equal columns across the panel head, with the stop panel directly below. Paper lists snap to timetable columns: each school or year is a row with a fixed label column (64px for years, 150 to 200px for schools) and a chip grid of `auto-fill` minimum 108px. The filter bar is sticky with a translucent white fill and blur. In Study timer the clock face and its controls sit side by side (1 : 1.1), above a seven-column month calendar with 4px gaps and 84px days.

Responsive: below 860px the side column drops under the main panel and stops sticking, and the clock stacks above its controls. Below 560px insets shrink to 16px, subject cards go to two columns, row labels stack above their chips, term labels under stops hide, dot-point lamps drop under their text, timer presets go to two columns, calendar days shrink to 56px and hide their minutes, mode tabs stretch to full width and the confidence control becomes a three-column grid. On coarse pointers every control grows to a 44px minimum height, and dot lamps to 44px square.

## Elevation & Depth

Flat. Panels, cards, calendar days and stop panels are signs, not sheets: a 1px rule edge on the enamel ground plus a single hairline under-rule, with no blur. Tonal steps do the rest: white panels on enamel, well-grey insets inside white panels, navy for the heaviest surfaces. Real shadows exist only for things genuinely above the page (dialogs and the toast) and as a 1px contact under a selected segment thumb.

### Shadow Vocabulary
- **Hairline** (`0 1px 0 rgb(11 31 69 / .05)`): all cards and panels at rest.
- **Thumb** (`0 1px 2px rgb(0 0 0 / .16)`): the selected segment in segmented, timer-preset and confidence controls.
- **Sheet** (`0 24px 48px -16px rgb(0 0 0 / .35)`): dialogs, over a navy backdrop at 40%.
- **Toast** (`0 10px 24px -10px rgb(0 0 0 / .4)`): the undo toast.

### Named Rules
**The Sign Edge Rule.** Sign panels are edges, not shadows. Resting surfaces get the 1px rule and the Hairline and nothing heavier; selection is shown by a line-colour or navy edge, never by raising the surface.

## Shapes

Two shape families. Circles belong to the network: line badges, station pins, mini-route dots, signal lamps, the brand mark, check badges, the log's line dot, the calendar's today marker. Softly rounded rectangles belong to the furniture: 4px for calendar stop chips and the mark tag inside a chip, 6px inside segmented controls, 8px for buttons, chips, inputs, filters and calendar days, 10px for dot points, the stop and first-run panels and tabs, 12px for subject cards and the clock face, 14px for panels and dialogs. Pills (999px) are reserved for the lamp head, the dot-lamp track and its lamps, tags (Next stop, Sat, Your school, Timing), meters and the signed-in avatar button. Track is drawn as a 2px planned rule that becomes a 6px solid line once built.

## Components

### Buttons
Plain and firm, like a ticket-machine key.
- **Shape:** gently rounded (8px), 40px minimum height, 600 weight at 14px. The big variant (46px, 15.5px) is for the timer's Start / Pause / Finish.
- **Primary:** navy fill, white text, navy hover deepening.
- **Secondary:** white with a strong rule border; hover shifts the border to tertiary ink and the fill to well grey.
- **On the band:** transparent with a translucent white border.
- **Press:** scale to 0.98 on active. Focus is a 2px navy outline offset 2px (white on navy surfaces).
- **Text links as buttons:** underlined secondary ink with a 3px offset.

### Chips (paper toggles)
- **Style:** white, strong rule border, 8px radius, 40px tall, a small grey dot, year in 500 weight with a lighter type suffix.
- **Ticked:** filled with the subject's line colour, `--on` text, and a small navy check badge breaking the top-right corner. HSC papers are set in 700.
- **Mark:** an entered mark sits in a small translucent dark tag inside the chip.

### Tags
Small pills in 700 weight at 12 to 12.5px. **Next stop** and **Timing / Paused** take the line colour; **Sat** and **Your school** are solid navy. A tag always names its state in words.

### Type filters and segmented controls
Filters are borderless tabs that fill navy when active, with a count in lighter type. Segmented controls sit in a well-grey track with a sliding white thumb (300ms, `cubic-bezier(.32, .72, 0, 1)`); the timer presets (Count up, 25, 45, 60 min) use the same track with a non-sliding white selected segment and disable while a session runs.

### Cards / Containers
- **Subject card:** white, 12px radius, rule edge, Hairline. Line badge and name in the head with the confidence lamp top-right; then a mini route (five dots on a thin line-colour track, sat stops filled, the next stop larger and ringed) beside "Next: AT2"; then counts ("4 papers done · 2 this week", "avg 78"). No percentage. In Study timer the row shows minutes this week and a Timing tag, and the foot reads the next stop and its date. Selected cards take a 2px line-colour outline.
- **Panel:** white, 14px radius, rule edge, Hairline; sections inside divide with 1px rules and a 24px inset. The completed panel ends with a "Get the papers" block of source links.
- **First-run panel:** well grey, 10px radius, rule edge; a 700 heading and a short line asking the student to tag modules with the term they're taught, with term selects below.

### Inputs / Fields
- **Style:** white fill, strong rule border, 8px radius (10px and 48px tall in the account dialog). Labels sit above in 600 secondary ink at 13px.
- **Hover / Focus:** border to tertiary ink on hover and to navy on focus. Invalid fields take the danger border.
- **School picker:** a "Your school" label and select set inline in the By school heading; the chosen school's row carries the navy "Your school" tag.

### Navigation
The navy band holds the brand mark, title and stats. Mode tabs (Past papers, Syllabus, Study timer) sit on its lower edge with 10px top corners; the open tab takes the enamel ground colour so it joins the page. A skip link ("Skip to completed papers") appears in navy on focus.

### Line Badge
A round badge in the subject's line colour with a two-letter code (X1, CH, PH). 30px in cards, 26px in the day panel, 46px beside the open subject's name. The code is the subject's identity across every view, including calendar chips ("X1 AT2").

### Year 12 Route (signature)
Five stops per subject: AT1 (Term 4), AT2 (Term 1), AT3 (Term 2), Trials (Term 3), HSC. Each station is a button that selects its stop (`aria-current`, controlling the stop panel): a ringed pin in the line colour, filled with a check once sat, the stop name below in 700 navy, and the term or the student's own date below that in tertiary ink. Track runs solid in the line colour up to the next stop, half-solid into it, then thin rule beyond. The next stop gets a larger pin and an 800 name; the selected stop gets an underlined name and a soft line-colour halo. The head reads "Next stop: AT2 · 3 Mar · in 152 days" and "1 of 5 stops passed". Pins grow slightly on hover.

### Stop Panel
A well-grey inset (10px radius, rule edge) under the route. Head: the stop name with a Next stop or Sat tag, then Date and Your mark fields and an "I've sat this" checkbox. A help line asks for the date from the school calendar, or offers to mark a past date as sat; "Saved" confirms in green text. Below, rows divided by rules: the student's school's papers for that stop as chips, the practice count ("2 of 31 trial papers done as practice") with a "Show trial papers" button, and the syllabus modules tagged to that term with their green count.

### Signal Lamp
A navy pill holding three 8px lamps that sit dark at Signal Off and light in their brighter lamp colour when set. It is the read-out on subject cards; setting subject confidence happens in a labelled three-way control in the subject view.

### Dot-point Lamps
Each syllabus dot point ends in a white pill track (rule-strong edge) holding three lamp buttons, a radiogroup. Each lamp is a 12px ring in its signal colour; hover half-fills and grows it, choosing fills it solid. A marked dot point takes its signal tint, edge and a dark text tag naming the state ("Amber: getting there"). Arrow keys move between lamps.

### Study Timer
- **Clock face:** navy, 12px radius, the Clock readout in white, a band-muted caption ("left in your 45 min block"), and a thin progress bar in the line colour on a translucent white track.
- **Controls:** timer presets, a "Working on" field, big Start / Pause and Finish and log buttons, a Discard link.
- **Month calendar:** seven columns of white 8px day buttons with a rule edge. A day shows its number (navy pill for today), line-colour stop chips with code and stop name, minutes studied, and a strip of per-subject bars in their line colours sized by minutes. The selected day takes a 2px navy edge.
- **Day panel:** the side column lists that day's stops with badges, its sessions with Remove links, and an add-time form for study done without the timer.

## Do's and Don'ts

### Do:
- **Do** give each chosen subject one line colour from the eight-colour set, in subject order, and use it only for that subject's progress, selection and identity.
- **Do** label every confidence state in words beside its red / amber / green colour.
- **Do** draw progress as track: a thin planned rule with the solid built line in the line colour, stops as ringed pins that fill when sat.
- **Do** keep Public Sans for every role, with 800 for headings, the clock and line codes, and tabular numerals.
- **Do** keep tertiary ink on white panels; use secondary ink for small text sitting directly on the enamel ground or well grey.
- **Do** keep controls at 44px minimum on touch devices and keep keyboard focus visible with the 2px outline.
- **Do** define panels with a 1px rule edge and the Hairline; use well grey for insets inside a panel.

### Don't:
- **Don't** use a line colour to signal confidence, or a signal colour to show progress.
- **Don't** switch to a dark dashboard ground or to a cream paper ground with serif headings.
- **Don't** add a second display or body typeface; STIX Two Math stays inside formulas.
- **Don't** raise resting cards or panels with soft or heavy shadows; show selection with a line-colour or navy edge.
- **Don't** reduce a subject's progress to a percentage on its card; show where it is on the route and what's next.
- **Don't** set headings, labels or buttons in uppercase or add small tracked labels above headings; uppercase is only for line codes and acronyms.
