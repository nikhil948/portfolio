declare module 'gsap-trial/SplitText' {
  class SplitText {
    chars: Element[];
    words: Element[];
    lines: Element[];
    constructor(target: any, vars?: any);
    revert(): void;
  }
  export { SplitText };
  export default SplitText;
}

declare module 'gsap-trial/ScrollSmoother' {
  class ScrollSmoother {
    static create(vars?: any): ScrollSmoother;
    paused(value?: boolean): ScrollSmoother;
  }
  export { ScrollSmoother };
  export default ScrollSmoother;
}
