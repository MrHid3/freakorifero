import Bigos from "./Bigos"

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
    resizable: boolean;
    parent: Bigos;


    constructor(id: number, x: number, y: number, width: number, height: number, content: string, context: HTMLElement, parent: Bigos) {
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
        this.resizable = false;
        this.parent = parent;

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
        this.coloseum();
    }

    ragDoll(){
        this.div.addEventListener("mousedown", (e) => {
            this.draggable = true;
            this.prevPosX = e.clientX;
            this.prevPosY = e.clientY;
            this.div.classList.add("unselectable")
            document.addEventListener("mouseup", () => {
                this.draggable = false;
                this.resizable = false;
                this.div.classList.remove("unselectable");
            })
            document.addEventListener("mousemove", (e) => {
                this.currentPosX = this.prevPosX - e.clientX;
                this.currentPosY = this.prevPosY - e.clientY;
                this.prevPosX = e.clientX;
                this.prevPosY = e.clientY;
                if (this.draggable && !this.resizable) {
                    this.div.style.top = (this.div.offsetTop - this.currentPosY) + 'px';
                    this.div.style.left = (this.div.offsetLeft - this.currentPosX) + 'px';
                } else if (this.resizable){
                    this.div.style.width = (this.div.offsetWidth - this.currentPosX) + 'px';
                    this.div.style.height = this.div.offsetHeight - this.currentPosY + 'px';
                }
            })
        })

        this.context.appendChild(this.div);
    }

    starDestroyer(){
        let div = document.createElement("div");
        div.classList.add("detroit");
        div.addEventListener("click", () => {
            this.context.removeChild(this.div);
            document.querySelector(".na")!.innerText = "na lodówce: " + --this.parent.na;
        })
        this.div.appendChild(div);
    }

    coloseum(){
        let div = document.createElement("div");
        div.classList.add("rome");
        div.addEventListener("mousedown", () => {
            this.resizable = true;
            this.draggable = false;
        })
        this.div.appendChild(div);
    }
}