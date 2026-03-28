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
    static refresh(soft?: boolean): void;
    paused(value?: boolean): ScrollSmoother;
    scrollTop(value?: number): number;
    scrollTo(target: any, smooth?: boolean, position?: string): void;
    kill(): void;
  }
  export { ScrollSmoother };
  export default ScrollSmoother;
}
