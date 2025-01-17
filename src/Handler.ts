import {Bigos} from "./Bigos.ts"

export class Handler {
    gar : Bigos[] = [];
    context: HTMLElement;

    constructor(context: HTMLElement) {
         this.context = context;

         this.test();
    }

    test(){
        document.addEventListener("DOMContentLoaded", () => {
            new Bigos("test", this.context);
        });
    }
}