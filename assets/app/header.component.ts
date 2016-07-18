import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";
@Component({
    selector: 'my-header',
    template: `
        <header class="row">
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a [routerLink]="['/']">LOGO</a>
                    </div>
                    <ul class="nav navbar-nav">
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a [routerLink]="['/vehicleinsurance']">Vehicle Insurance</a></li>
                        <li><a [routerLink]="['/homeinsurance']">Homeowners/Renters Insurance</a></li>
                        <li><a [routerLink]="['/paymentplans']">Payment Plans</a></li>
                        <li><a [routerLink]="['/contact']">Contact</a></li>
                     </ul>
                </div>
            </nav>
        </header>
    `,
    directives: [ROUTER_DIRECTIVES],
    styles: [`
        * {
            -webkit-border-radius: 0 !important;
            -moz-border-radius: 0 !important;
            border-radius: 0 !important;
        }

        .navbar {
            margin-bottom: 0;
            background: rgba(255, 255, 255, .5);
            border-color: transparent;
            z-index: 10;
        }
    
        ul {
          text-align: center;  
        }
        
        li {
            float: none;
            display: inline-block;

        }

        .nav >li >a {
            padding-top: 30px;
            padding-bottom: 30px;
            font-size: 14px;
            font-family: Impact, Charcoal, sans-serif;
            color: black;
        }

        .nav >li >a {
            padding-top: 30px;
            padding-bottom: 30px;
            font-size: 14px;
            font-family: Impact, Charcoal, sans-serif;
            color: black;
            text-transform: uppercase;
        }

        .nav >li >a:hover {
            color: red;
        }
    `]
})
export class HeaderComponent {
    
}