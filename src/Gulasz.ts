export class Gulasz {
    id: number;
    x: number;
    y: number;
    width: number;
    height: number;
    content: string;
    context: HTMLElement;
    div: HTMLElement;
    currentPosX: number;
    currentPosY: number;
    prevPosX: number;
    prevPosY: number;
    draggable: boolean;

    constructor(id: number, x: number, y: number, width: number, height: number, content: string, context: HTMLElement) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.content = content;
        this.context = context;
        this.div = document.createElement("div");
        this.currentPosX = 0;
        this.currentPosY = 0;
        this.prevPosX = 0;
        this.prevPosY = 0;
        this.draggable = false;
        this.create();
    }

    create(){
        this.div.id = this.id.toString();
        this.div.innerText = this.content;
        this.div.style.width = this.width + "px";
        this.div.style.height = this.height + "px";
        this.div.classList.add("gulasz");
        this.div.style.top = this.x + "px";
        this.div.style.left = this.y + "px";

        this.ragDoll()
        this.starDestroyer();
    }

    ragDoll(){
        this.div.addEventListener("mousedown", (e) => {
            this.draggable = true;
            this.prevPosX = e.clientX;
            this.prevPosY = e.clientY;
            document.addEventListener("mouseup", () => {
                this.draggable = false;
            })
            document.addEventListener("mousemove", (e) => {
                if(!this.draggable) return;
                this.currentPosX = this.prevPosX - e.clientX;
                this.currentPosY = this.prevPosY - e.clientY;
                this.prevPosX = e.clientX;
                this.prevPosY = e.clientY;
                this.div.style.top = (this.div.offsetTop - this.currentPosY) + 'px';
                this.div.style.left = (this.div.offsetLeft - this.currentPosX) + 'px';
            })
        })
        this.context.appendChild(this.div);
    }

    starDestroyer(){
        let div = document.createElement("div");
        div.classList.add("detroit");
        div.addEventListener("click", () => {
            this.context.removeChild(this.div);
        })
        this.div.appendChild(div);
    }
}