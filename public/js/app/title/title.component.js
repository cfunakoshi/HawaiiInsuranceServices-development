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
var TitleComponent = (function () {
    function TitleComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TitleComponent.prototype, "title", void 0);
    TitleComponent = __decorate([
        core_1.Component({
            selector: 'my-title',
            template: "\n        <nav class=\"row\">\n            <div class=\"col-md-8 col-md-offset-2\" id=\"textbox\">\n                <div class=\"alignleft\">\n                    <h3>{{title}}</h3>\n                </div>\n                <div class=\"alignright\">\n                </div>\n                <div style=\"clear: both;\"></div>\n            </div>\n        </nav>\n        <div class=\"row trim spacing\">\n        </div>\n    ",
            styles: ["\n        * {\n            -webkit-border-radius: 0 !important;\n            -moz-border-radius: 0 !important;\n            border-radius: 0 !important;\n        }\n\n        nav {\n            bottom: 0;\n            height: 90px;\n            background-color: #3F3E3D;\n            border-color: #3F3E3D;\n        }\n\n        #textbox {\n            top: 15%;\n        }\n\n        .alignleft {\n            float: left;\n            text-align: center;\n            color: white;\n        }\n\n        .alignright {\n            float: right;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], TitleComponent);
    return TitleComponent;
}());
exports.TitleComponent = TitleComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpdGxlL3RpdGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWlDLGVBQWUsQ0FBQyxDQUFBO0FBK0NqRDtJQUFBO0lBRUEsQ0FBQztJQURHO1FBQUMsWUFBSyxFQUFFOztpREFBQTtJQTlDWjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsMmFBYVQ7WUFDRCxNQUFNLEVBQUUsQ0FBQyxzakJBMkJSLENBQUM7U0FDTCxDQUFDOztzQkFBQTtJQUdGLHFCQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSxzQkFBYyxpQkFFMUIsQ0FBQSIsImZpbGUiOiJ0aXRsZS90aXRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS10aXRsZScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG5hdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiIGlkPVwidGV4dGJveFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGlnbmxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPnt7dGl0bGV9fTwvaDM+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsaWducmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiY2xlYXI6IGJvdGg7XCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uYXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgdHJpbSBzcGFjaW5nXCI+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgc3R5bGVzOiBbYFxuICAgICAgICAqIHtcbiAgICAgICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBuYXYge1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNGM0UzRDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzNGM0UzRDtcbiAgICAgICAgfVxuXG4gICAgICAgICN0ZXh0Ym94IHtcbiAgICAgICAgICAgIHRvcDogMTUlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFsaWdubGVmdCB7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hbGlnbnJpZ2h0IHtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgfVxuICAgIGBdXG59KVxuZXhwb3J0IGNsYXNzIFRpdGxlQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
