import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";
@Component({
    selector: 'my-footer',
    template: `
        <div class="row trim">
        </div>
        <nav class="row">   
            <div class="col-md-10 col-md-offset-1" id="textbox">
                <div class="alignleft"> 
                </div>
                <div class="alignright">
                </div>
                <div style="clear: both;"></div>
            </div>
        </nav>
        <footer>
            <div class="col-md-10 col-md-offset-1" id="textbox">
                <div class="alignleft"> 
                </div>
                <div class="alignright">
                </div>
                <div style="clear: both;"></div>
            </div>
        </footer>
    `,
    directives: [ROUTER_DIRECTIVES],
    styles: [`
        * {
            -webkit-border-radius: 0 !important;
            -moz-border-radius: 0 !important;
            border-radius: 0 !important;
        }

        nav {
            height: 110px;
            background-color: #3F3E3D;
            border-bottom-color: #D5D5D5;
        }

        #textbox {
            padding-top: 20px;
        }

        .alignleft {
            float: left;
            text-align: center;
        }

        .alignright {
            float: right;
        }
    `]
})
export class FooterComponent {
}