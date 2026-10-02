---
name: HSC Past Paper Log
description: A Year 12 study log drawn as a Sydney train network; every subject is a line, every finished paper a station passed.
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
  line-orange: "#F6891F"
  line-blue: "#0079AD"
  line-green: "#00824A"
  line-magenta: "#B8217F"
  line-deep-blue: "#00509A"
  line-teal: "#13777C"
  line-purple: "#6E4FA0"
  line-yellow: "#E3B505"
  signal-red: "#D92D20"
  signal-amber: "#E08A00"
  signal-green: "#12A150"
  signal-off: "#33415C"
  lamp-red-lit: "#FF5A4E"
  lamp-amber-lit: "#FFB020"
  lamp-green-lit: "#34D27A"
  danger: "#B3261E"
typography:
  display:
    fontFamily: "Public Sans, -apple-system, BlinkMacSystemFont, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.02em"
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
rounded:
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

Each subject a student takes is a Sydney train line they ride through Year 12, and every finished paper is a station passed. The surface borrows from transit wayfinding: a pale enamel signage ground, crisp white panels, a navy sign band across the top, round line badges with two-letter codes, and line diagrams where built track is solid and planned track is a thin rule. It is a tool opened dozens of times a week, so it is dense, calm and code-led rather than decorative.

Colour has two strictly separate jobs. A subject's line colour means progress and nothing else: built track, ticked papers, passed stations, the selected subject. Confidence is a different instrument, a red / amber / green signal lamp set in a navy head, and it always carries a text label. The system refuses both the dark SaaS dashboard and its cream-and-serif opposite; it is light, sans, and as plain as a platform sign.

Depth is quiet: white panels sit on the enamel ground with a hairline rule and a soft lift, never floating. Motion is short and functional (150ms colour changes, a 350ms meter fill, a small press-down on tap).

**Key Characteristics:**
- Enamel ground, white panels, navy ink and navy header band.
- One line colour per chosen subject, assigned by the student's subject order from an 8-colour set.
- Line colour is reserved for progress; confidence uses its own signal lamp.
- Public Sans everywhere, heavy (800) for headings and figures, tabular numerals throughout.
- The HSC line diagram: stations are real toggles on a track that is solid up to the next stop.

## Colors

A cool, low-chroma signage palette with navy ink, carrying eight saturated line colours and a separate signal set.

### Primary
- **Signage Navy** (signage-navy): the ink for all text and the header band, primary buttons, the active type filter, focus rings, checkbox accent and the confidence lamp housing. It is both the sign and the writing on it.
- **Navy Hover** (navy-hover): hover state of the primary button only.

### Secondary: the line set
Eight line colours, assigned in order to the student's chosen subjects (wrapping after eight) and set as `--line` / `--on` on each subject's wrapper:
- **Line Orange** (line-orange) with navy text, **Line Blue** (line-blue), **Line Green** (line-green), **Line Magenta** (line-magenta), **Line Deep Blue** (line-deep-blue), **Line Teal** (line-teal), **Line Purple** (line-purple), each with white text, and **Line Yellow** (line-yellow) with navy text. Line Blue is the default `--line` when no subject is in scope.

### Tertiary: the signal set
- **Signal Red / Amber / Green** (signal-red, signal-amber, signal-green): confidence dots, the confidence summary, syllabus dot-point check circles and the stacked syllabus meter. Dot points marked red / amber / green also take a pale tint fill with a matching border and a darker text tag naming the state.
- **Lit Lamps** (lamp-red-lit, lamp-amber-lit, lamp-green-lit): brighter versions used only inside the navy lamp head, where they read as lit against **Signal Off** (signal-off).
- **Danger** (danger): destructive account actions and invalid inputs.

### Neutral
- **Enamel Ground** (enamel-ground): page background and the open mode tab, which joins the band to the page.
- **Panel White** (panel-white): cards, panels, chips, inputs, dialogs, and white text on navy.
- **Well Grey** (well-grey): hover fill for buttons and chips, segmented-control track.
- **Ink Secondary** (ink-secondary): supporting copy, unselected filters, links.
- **Ink Tertiary** (ink-tertiary): counts, dates, fractions; on white panels only.
- **Rule** (rule) and **Rule Strong** (rule-strong): hairline dividers and panel edges; control borders and planned track.
- **Band Muted** (band-muted): secondary text on the navy band and inactive tabs.

### Named Rules
**The Reserved Line Rule.** A subject's line colour marks progress and selection only: meters, passed stations, ticked chips, the completed-log dot, the selected card's outline. Never use it for confidence, buttons, headings or decoration.

**The Separate Signal Rule.** Confidence is red / amber / green in its own lamp, never in a line colour, and every confidence state is spelled out in text ("Needs work", "Getting there", "Confident", or a counted summary). Colour alone never carries it.

**The Readable Code Rule.** Light line colours (orange, yellow) carry navy text; all others carry white. Any new line colour must pass AA against its `--on` text before it joins the set.

## Typography

**Display Font:** Public Sans (with -apple-system, BlinkMacSystemFont, Segoe UI, system-ui, sans-serif)
**Body Font:** Public Sans
**Math Font:** STIX Two Math (self-hosted, loaded only when a formula is on screen)

**Character:** One civic, government-signage sans for everything, worked hard at weight 800 for headings, line codes and percentages and left at 400 to 600 for reading and controls. Numerals are tabular everywhere so counts and marks line up.

### Hierarchy
- **Display** (800, clamp(1.5rem, 3vw, 2rem), 1.1, -0.02em): the site title in the header band.
- **Headline** (800, 1.6rem, 1.15, -0.02em): the open subject's name; dialog titles step down to 1.3rem.
- **Module title** (700, 1.1rem, 1.3, -0.01em): syllabus module headings.
- **Title** (700, 16px, 1.3): section labels ("Your subjects", "Completed", "By school") in sentence case.
- **Figure** (800, 20px, -0.02em): progress percentage on a subject card.
- **Body** (400, 16px, 1.5): running text; dot-point text is 14.5px/1.45; notes are capped near 75ch.
- **Control** (600, 13.5 to 14.5px): buttons, tabs, filters, segmented controls, station year labels (12.5px).
- **Label** (500 to 600, 12 to 13.5px): counts, dates, hints, fractions.
- **Line code** (800, 12px, 0.02em): two-letter code inside the line badge (16px in the large badge).

### Named Rules
**The One Face Rule.** Public Sans carries every role; hierarchy comes from weight and size, not a second family. STIX Two Math is for formulas only.

**The Sentence Case Rule.** Headings, labels, tabs and buttons are sentence case, like station signage. Uppercase is limited to the two-letter line codes.

## Layout

A single centred column up to 1280px with 16px side gutters. The header band runs full-bleed with the same inner width. Below it, a grid of subject cards (`auto-fill`, minimum 220px, 12px gaps), then the subject view: a main panel and a 320px sticky completed-log column with a 20px gap. Content inside panels uses a 24px horizontal inset; vertical rhythm between page blocks is 22px.

Paper lists snap to timetable columns: each school or year is a row with a fixed label column (64px for years, 150 to 200px for schools) and a chip grid of `auto-fill` minimum 108px. The filter bar is sticky with a translucent white fill and blur.

Responsive: below 860px the log drops under the main panel and stops sticking. Below 560px insets shrink to 16px, subject cards go to two columns, row labels stack above their chips, mode tabs stretch to full width and the confidence control becomes a three-column grid. On coarse pointers every control grows to a 44px minimum height.

## Elevation & Depth

Mostly flat and tonal. Panels and cards are white on the enamel ground, separated by a 1px rule and a soft two-layer lift that reads as a sheet laid on a surface, not a floating tile. Stronger shadows exist only for things genuinely above the page: dialogs and the toast. Segmented-control thumbs get a 1px contact shadow.

### Shadow Vocabulary
- **Lift** (`0 1px 2px rgb(0 0 0 / .06), 0 6px 16px -12px rgb(0 0 0 / .2)`): all cards and panels at rest.
- **Thumb** (`0 1px 2px rgb(0 0 0 / .16)`): the selected segment in segmented and confidence controls.
- **Sheet** (`0 24px 48px -16px rgb(0 0 0 / .35)`): dialogs, over a navy backdrop at 40%.
- **Toast** (`0 10px 24px -10px rgb(0 0 0 / .4)`): the undo toast.

### Named Rules
**The Laid Sheet Rule.** Resting surfaces use Lift and nothing heavier. Selection is shown by the line colour on the border, not by raising the card.

## Shapes

Two shape families. Circles belong to the network: line badges, station pins, signal lamps, the brand mark, check badges, the log's line dot. Softly rounded rectangles belong to the furniture: 6px inside segmented controls, 8px for buttons, chips, inputs and filters, 10px for dot points and tabs, 12px for subject cards, 14px for panels and dialogs. Pills (999px) are reserved for the lamp head, meters and the signed-in avatar button. Track is drawn as a 2px planned rule that becomes a 6px solid line once built.

## Components

### Buttons
Plain and firm, like a ticket-machine key.
- **Shape:** gently rounded (8px), 40px minimum height, 600 weight at 14px.
- **Primary:** navy fill, white text, navy hover deepening.
- **Secondary:** white with a strong rule border; hover shifts the border to tertiary ink and the fill to well grey.
- **On the band:** transparent with a translucent white border.
- **Press:** scale to 0.98 on active. Focus is a 2px navy outline offset 2px (white on navy surfaces).
- **Text links as buttons:** underlined secondary ink with a 3px offset.

### Chips (paper toggles)
- **Style:** white, strong rule border, 8px radius, 40px tall, a small grey dot, year in 500 weight with a lighter type suffix.
- **Ticked:** filled with the subject's line colour, `--on` text, and a small navy check badge breaking the top-right corner. HSC papers are set in 700.
- **Mark:** an entered mark sits in a small translucent dark tag inside the chip.

### Type filters and segmented controls
Filters are borderless tabs that fill navy when active, with a count in lighter type. Segmented controls sit in a well-grey track with a sliding white thumb (300ms, `cubic-bezier(.32, .72, 0, 1)`).

### Cards / Containers
- **Subject card:** white, 12px radius, rule border, Lift. Line badge and name in the head, the confidence lamp top-right, then percentage, a thin line meter and the paper fraction. Selected cards take a 2px line-colour outline.
- **Panel:** white, 14px radius, rule border, Lift; sections inside divide with 1px rules and a 24px inset.

### Inputs / Fields
- **Style:** white fill, strong rule border, 8px radius (10px and 48px tall in the account dialog).
- **Hover / Focus:** border to tertiary ink on hover and to navy on focus. Invalid fields take the danger border.

### Navigation
The navy band holds the brand mark, title and stats. Mode tabs (Past papers, Syllabus) sit on its lower edge with 10px top corners; the open tab takes the enamel ground colour so it joins the page.

### Line Badge
A round badge in the subject's line colour with a two-letter code (X1, CH, PH). 30px in cards, 46px beside the open subject's name. The code is the subject's identity across every view.

### Signal Lamp
A navy pill holding three 8px lamps that sit dark at Signal Off and light in their brighter lamp colour when set. It is the read-out; setting confidence happens in a labelled three-way control beside it, and the same three colours appear as text-labelled tints on syllabus dot points.

### HSC Line Diagram (signature)
One station per HSC paper, oldest to newest. Each station is a real `aria-pressed` toggle: a ringed pin in the line colour, filled with a check when done, with the year below. Track runs solid in the line colour up to the next stop, half-solid into it, then thin rule beyond. The next stop gets a larger pin and an 800-weight year, and the route head reads "Next stop" and "stations passed". Pins grow slightly on hover.

## Do's and Don'ts

### Do:
- **Do** give each chosen subject one line colour from the eight-colour set, in subject order, and use it only for that subject's progress and selection.
- **Do** label every confidence state in words beside its red / amber / green colour.
- **Do** draw progress as track: a thin planned rule with the solid built line in the line colour.
- **Do** keep Public Sans for every role, with 800 for headings and figures, and tabular numerals.
- **Do** keep tertiary ink on white panels; use secondary ink for small text sitting directly on the enamel ground.
- **Do** keep controls at 44px minimum on touch devices and keep keyboard focus visible with the 2px outline.

### Don't:
- **Don't** use a line colour to signal confidence, or a signal colour to show progress.
- **Don't** switch to a dark dashboard ground or to a cream paper ground with serif headings.
- **Don't** add a second display or body typeface.
- **Don't** raise resting cards with heavier shadows; show selection with the line-colour outline.
- **Don't** set headings, labels or buttons in uppercase or add small tracked labels above headings; uppercase is only for line codes.
