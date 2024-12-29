import {Gulasz} from './Gulasz.ts'

export class Bigos {
    name: string;
    notes: Gulasz[];
    context: HTMLElement;
    readonly defaultx = 50;
    readonly defaulty = 50;
    readonly defaultheight = 200;
    readonly defaultwidth = 200;

    constructor(name: string, context: HTMLElement) {
        this.name = name;
        this.context = context;
        this.notes = [];
        let div = document.createElement("div");
        div.classList.add("creator")
        div.addEventListener("click", () => {
            this.newGulasz();
        })
        context.append(div)

        this.test();
    }

    newGulasz(){
        let id = this.notes.length;
        let x = this.defaultx;
        let y = this.defaulty;
        let height = this.defaultheight;
        let width = this.defaultheight;
        this.notes.push(new Gulasz(id, x, y, width, height, "skibidi toilet goni mnie śpiewając te piosenke", this.context))
    }

    test(){
        console.log("Test");
        this.newGulasz();
    }
}