import { Component } from "@angular/core";

import { TitleComponent } from "../title/title.component";
@Component({
    selector: 'my-contact',
    template: `
        <my-title [title]="title"></my-title>
    `,
    directives: [TitleComponent],
    styles: [`
    `]
})
export class ContactComponent {
    
    title: string = "Contact";
}