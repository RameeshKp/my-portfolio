declare module "gsap-trial/SplitText" {
  import type { gsap } from "gsap";

  export interface SplitTextOptions {
    type?: string;
    linesClass?: string;
    wordsClass?: string;
    charsClass?: string;
  }

  export class SplitText {
    static register(core: typeof gsap): void;

    chars: Element[];
    lines: Element[];
    words: Element[];

    constructor(
      target: gsap.TweenTarget | gsap.TweenTarget[],
      options?: SplitTextOptions
    );

    revert(): void;
  }
}
