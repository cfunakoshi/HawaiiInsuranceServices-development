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
var title_component_1 = require("../title/title.component");
var HouseComponent = (function () {
    function HouseComponent() {
        this.title = "Homeowner/Renter Insurance";
    }
    HouseComponent = __decorate([
        core_1.Component({
            selector: 'my-house-insurance',
            template: "\n        <my-title [title]=\"title\"></my-title>\n    ",
            directives: [title_component_1.TitleComponent],
            styles: ["\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], HouseComponent);
    return HouseComponent;
}());
exports.HouseComponent = HouseComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvdXNlL2hvdXNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBRTFDLGdDQUErQiwwQkFBMEIsQ0FBQyxDQUFBO0FBVTFEO0lBQUE7UUFFSSxVQUFLLEdBQVcsNEJBQTRCLENBQUM7SUFDakQsQ0FBQztJQVpEO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsUUFBUSxFQUFFLHlEQUVUO1lBQ0QsVUFBVSxFQUFFLENBQUMsZ0NBQWMsQ0FBQztZQUM1QixNQUFNLEVBQUUsQ0FBQyxRQUNSLENBQUM7U0FDTCxDQUFDOztzQkFBQTtJQUlGLHFCQUFDO0FBQUQsQ0FIQSxBQUdDLElBQUE7QUFIWSxzQkFBYyxpQkFHMUIsQ0FBQSIsImZpbGUiOiJob3VzZS9ob3VzZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBUaXRsZUNvbXBvbmVudCB9IGZyb20gXCIuLi90aXRsZS90aXRsZS5jb21wb25lbnRcIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktaG91c2UtaW5zdXJhbmNlJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8bXktdGl0bGUgW3RpdGxlXT1cInRpdGxlXCI+PC9teS10aXRsZT5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtUaXRsZUNvbXBvbmVudF0sXG4gICAgc3R5bGVzOiBbYFxuICAgIGBdXG59KVxuZXhwb3J0IGNsYXNzIEhvdXNlQ29tcG9uZW50IHtcbiAgICBcbiAgICB0aXRsZTogc3RyaW5nID0gXCJIb21lb3duZXIvUmVudGVyIEluc3VyYW5jZVwiO1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
