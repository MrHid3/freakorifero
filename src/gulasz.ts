export class Gulasz {
    x: number;
    y: number;
    width: number;
    height: number;
    content: string;
    context: HTMLElement;
    div: HTMLElement;

    constructor(x = 200, y = 200, width = 200, height = 200, content = "", context: HTMLElement) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.content = content;
        this.context = context;
    }

    create(){
        this.div = document.createElement("div");

    }
}