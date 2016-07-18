import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { VehicleComponent } from "./vehicle/vehicle.component";
import { HouseComponent } from "./house/house.component";
import { PaymentComponent } from "./payment/payment.component";
import { ContactComponent } from "./contact/contact.component";
import { HeaderComponent } from "./header.component";
import { FooterComponent } from "./footer.component";
@Component({
    selector: 'my-app',
    template: ` 
        <div class="container">
            <my-header></my-header>
            <router-outlet></router-outlet>
        </div>
        <my-footer></my-footer>
    `,
    directives: [ROUTER_DIRECTIVES, HeaderComponent, FooterComponent]
})
@Routes([
    {path: '/', component: HomeComponent},
    {path: '/vehicleinsurance', component: VehicleComponent},
    {path: '/homeinsurance', component: HouseComponent},
    {path: '/paymentplans', component: PaymentComponent},
    {path: '/contact', component: ContactComponent}
])
export class AppComponent {
    
}