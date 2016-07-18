import { Component } from "@angular/core";

import { TitleComponent } from "../title/title.component";
@Component({
    selector: 'my-vehicle-insurance',
    template: `
        <my-title [title]="title"></my-title>
    `,
    directives: [TitleComponent],
    styles: [`
    `]
})
export class VehicleComponent {
    
    title: string = "Vehicle Insurance";
}