"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'my-footer',
            template: "\n        <div class=\"row trim\">\n        </div>\n        <nav class=\"row\">   \n            <div class=\"col-md-10 col-md-offset-1\" id=\"textbox\">\n                <div class=\"alignleft\"> \n                </div>\n                <div class=\"alignright\">\n                </div>\n                <div style=\"clear: both;\"></div>\n            </div>\n        </nav>\n        <footer>\n            <div class=\"col-md-10 col-md-offset-1\" id=\"textbox\">\n                <div class=\"alignleft\"> \n                </div>\n                <div class=\"alignright\">\n                </div>\n                <div style=\"clear: both;\"></div>\n            </div>\n        </footer>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES],
            styles: ["\n        * {\n            -webkit-border-radius: 0 !important;\n            -moz-border-radius: 0 !important;\n            border-radius: 0 !important;\n        }\n\n        nav {\n            height: 110px;\n            background-color: #3F3E3D;\n            border-bottom-color: #D5D5D5;\n        }\n\n        #textbox {\n            padding-top: 20px;\n        }\n\n        .alignleft {\n            float: left;\n            text-align: center;\n        }\n\n        .alignright {\n            float: right;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBa0MsaUJBQWlCLENBQUMsQ0FBQTtBQXFEcEQ7SUFBQTtJQUNBLENBQUM7SUFyREQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLDJyQkFxQlQ7WUFDRCxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztZQUMvQixNQUFNLEVBQUUsQ0FBQyxvaEJBeUJSLENBQUM7U0FDTCxDQUFDOzt1QkFBQTtJQUVGLHNCQUFDO0FBQUQsQ0FEQSxBQUNDLElBQUE7QUFEWSx1QkFBZSxrQkFDM0IsQ0FBQSIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1mb290ZXInLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgdHJpbVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPG5hdiBjbGFzcz1cInJvd1wiPiAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMCBjb2wtbWQtb2Zmc2V0LTFcIiBpZD1cInRleHRib3hcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWxpZ25sZWZ0XCI+IFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGlnbnJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImNsZWFyOiBib3RoO1wiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMCBjb2wtbWQtb2Zmc2V0LTFcIiBpZD1cInRleHRib3hcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWxpZ25sZWZ0XCI+IFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGlnbnJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImNsZWFyOiBib3RoO1wiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcbiAgICBzdHlsZXM6IFtgXG4gICAgICAgICoge1xuICAgICAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIG5hdiB7XG4gICAgICAgICAgICBoZWlnaHQ6IDExMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNGM0UzRDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNENUQ1RDU7XG4gICAgICAgIH1cblxuICAgICAgICAjdGV4dGJveCB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hbGlnbmxlZnQge1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuYWxpZ25yaWdodCB7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIH1cbiAgICBgXVxufSlcbmV4cG9ydCBjbGFzcyBGb290ZXJDb21wb25lbnQge1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
