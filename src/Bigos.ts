import {Gulasz} from './Gulasz.ts'

export class Bigos {
    name: string;
    notes: Gulasz[] = [];
    context: HTMLElement;
    readonly defaultx = 50;
    readonly defaulty = 50;
    readonly defaultheight = 200;
    readonly defaultwidth = 200;

    constructor(name: string, context: HTMLElement) {
        this.name = name;
        this.context = context;
        this.test();
    }

    newGulasz(){
        let id = this.notes.length;
        let x = this.defaultx;
        let y = this.defaulty;
        let height = this.defaultheight;
        let width = this.defaultheight;
        this.notes.push(new Gulasz(id, x, y, width, height, "notka", this.context))
    }

    test(){
        this.newGulasz()
    }
}