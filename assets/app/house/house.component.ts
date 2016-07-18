import { Component } from "@angular/core";

import { TitleComponent } from "../title/title.component";
@Component({
    selector: 'my-house-insurance',
    template: `
        <my-title [title]="title"></my-title>
    `,
    directives: [TitleComponent],
    styles: [`
    `]
})
export class HouseComponent {
    
    title: string = "Homeowner/Renter Insurance";
}