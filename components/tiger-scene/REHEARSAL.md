# Altcorp tiger material reveal

Original target: a minimal live studio website, rather than a separate product video.

- StageShow source: MIT core Stage + Act, adapted from the cursorless `payout-flow` arrival and settle choreography. Required source files and license are in `vendor/stageshow`.
- Focal object: the previous stalking tiger, adapted to neutral charcoal, engraved screenprint detail and silver enamel edges. Existing artwork remains intact. The new 1536 × 1024 WebP is 88,210 bytes.
- Story: image readiness; small material arrival; one enamel light pass; permanent settled poster. Around three seconds, played once in view. No cursor, looping shimmer, fictional product UI or text-loading effect.
- Wide composition: 1536 × 1024. Compact composition: 390 × 450, a closer crop around the face and front paw. The text and controls are outside the decorative Stage, always accessible.
- Slow loading: choreography waits for the priority image to load and decode; abort-aware Act waits stop the sequence offscreen. Image errors leave all real page content intact.
- Reduced motion: Stage poster with CSS enforcing opacity 1, no transform, no filter and zero transition. Verified through browser media emulation at 320px.

## Verification

Supported in-app browser checks: 1536px desktop and 390px mobile composition, 320px overflow, once-only arrival/mid/poster captures, mobile menu modal focus and Escape restoration, portfolio anchor, reduced-motion final still. Desktop/mobile final views preserve a readable hero and one continuous frosted portfolio panel. The seven approved projects and statuses remain, with no parked KeyboardShortcuts link.

Fresh-eye review examined code plus arrival/mid/poster and mobile captures. It identified the image readiness timing issue, which was corrected before release.

Build, TypeScript, ESLint, contact encoding tests and static portfolio-preservation checks passed. Homepage main content is 102 words versus 451 previously (77% fewer). Referenced JavaScript gzip total is approximately 194 KB versus 178 KB previously; no new npm dependencies or external animation services were added.

QA evidence is stored in the adjacent workspace `qa-minimal-tiger` directory. StageShow's headless `film.mjs --gate` was not run: this environment requires browser interactions through the supported computer-use API. Manual supported-browser rehearsal was used; no claim of that CLI gate passing is made. No full automated accessibility audit or simulated slow-network film was run.
