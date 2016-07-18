import { Component, Input } from "@angular/core";

@Component({
    selector: 'my-title',
    template: `
        <nav class="row">
            <div class="col-md-8 col-md-offset-2" id="textbox">
                <div class="alignleft">
                    <h3>{{title}}</h3>
                </div>
                <div class="alignright">
                </div>
                <div style="clear: both;"></div>
            </div>
        </nav>
        <div class="row trim spacing">
        </div>
    `,
    styles: [`
        * {
            -webkit-border-radius: 0 !important;
            -moz-border-radius: 0 !important;
            border-radius: 0 !important;
        }

        nav {
            bottom: 0;
            height: 90px;
            background-color: #3F3E3D;
            border-color: #3F3E3D;
        }

        #textbox {
            top: 15%;
        }

        .alignleft {
            float: left;
            text-align: center;
            color: white;
        }

        .alignright {
            float: right;
        }
    `]
})
export class TitleComponent {
    @Input() title: string;
}