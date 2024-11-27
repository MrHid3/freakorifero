import {Gulasz} from './Gulasz.ts'

export class Bigos {
    name: string;
    notes: Gulasz[] = [];
    context: HTMLElement;

    constructor(name: string, context: HTMLElement) {
        this.name = name;
        this.context = context;
        this.test();
    }

    test(){
        let tak = new Gulasz(0, 200, 200, 200, 200, "tak", this.context);
        this.notes.push(tak);
    }
}