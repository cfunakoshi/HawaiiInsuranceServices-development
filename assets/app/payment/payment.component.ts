import { Component } from "@angular/core";

import { TitleComponent } from "../title/title.component";
@Component({
    selector: 'my-payment',
    template: `
        <my-title [title]="title"></my-title>
    `,
    directives: [TitleComponent],
    styles: [`
    `]
})
export class PaymentComponent {
    
    title: string = "Payment Plans";
}