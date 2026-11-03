"use client";

import Image from "next/image";
import { useCallback, useRef } from "react";
import { Stage } from "@/vendor/stageshow/stage";
import type { Act } from "@/vendor/stageshow/act";
import "./tiger.css";

type TigerState = { arrived: boolean; lit: boolean };
const initial: TigerState = { arrived: false, lit: false };
const poster: TigerState = { arrived: true, lit: false };

// Adapted from StageShow's cursorless payout-flow: overlapping arrivals,
// once in view, then a settled poster. No fake UI or content loading state.
async function reveal(a: Act<TigerState>) {
  a.mark("first-paint");
  await a.wait(160);
  a.put({ arrived: true });
  a.mark("material-arrival");
  await a.wait(650);
  a.put({ lit: true });
  a.mark("enamel-light");
  await a.wait(900);
  a.put({ lit: false });
  await a.wait(1300);
  a.mark("settled-poster");
}

export function TigerScene() {
  const image = useRef<HTMLImageElement>(null);
  const playWhenReady = useCallback(async (a: Act<TigerState>) => {
    // Priority loading must not let a cold connection miss the reveal.
    // Act waits abort when the stage leaves view or reduced motion changes.
    while (!image.current?.complete) await a.wait(80);
    if (!image.current.naturalWidth) return;
    await image.current.decode().catch(() => undefined);
    await a.wait(0);
    await reveal(a);
  }, []);
  return (
    <div className="tiger-art" aria-hidden="true">
      <Stage<TigerState> width={1536} height={1024} compact={{ below: 760, width: 390, height: 450 }} initial={initial} poster={poster} script={playWhenReady} play="once" theme="dark" palette="mono" fill className="tiger-stage">
        {(state) => (
          <div className="tiger-material" data-arrived={state.arrived} data-lit={state.lit}>
            <Image ref={image} src="/art/tiger-monochrome.webp" alt="" width={1536} height={1024} priority sizes="(max-width: 760px) 720px, 100vw" className="tiger-image" />
          </div>
        )}
      </Stage>
    </div>
  );
}
