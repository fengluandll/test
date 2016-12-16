interface IFlipOptions {
    direction: string;
    onBefore?: () => void;
    onAnimation?: () => void;
    onEnd?: () => void;
    speed?: number;
    color?: string;
    content?: string;
}

interface JQuery {
    flip(input: IFlipOptions): JQuery;
    revertFlip();
}