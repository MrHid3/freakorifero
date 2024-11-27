export class Gulasz {
    id: number;
    x: number;
    y: number;
    width: number;
    height: number;
    content: string;
    context: HTMLElement;
    div: HTMLElement;

    constructor(id: number, x: number, y: number, width: number, height: number, content: string, context: HTMLElement) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.content = content;
        this.context = context;
        this.div = document.createElement("div");
        this.create()
    }

    create(){
        this.div.id = this.id.toString();
        this.div.innerText = this.content;
        this.div.style.width = this.width + "px";
        this.div.style.height = this.height + "px";
        this.div.classList.add("gulasz");
        this.context.appendChild(this.div);
    }
}