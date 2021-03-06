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
var ContactComponent = (function () {
    function ContactComponent() {
        this.title = "Contact";
    }
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'my-contact',
            template: "\n        <my-title [title]=\"title\"></my-title>\n    ",
            directives: [title_component_1.TitleComponent],
            styles: ["\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QvY29udGFjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUUxQyxnQ0FBK0IsMEJBQTBCLENBQUMsQ0FBQTtBQVUxRDtJQUFBO1FBRUksVUFBSyxHQUFXLFNBQVMsQ0FBQztJQUM5QixDQUFDO0lBWkQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLHlEQUVUO1lBQ0QsVUFBVSxFQUFFLENBQUMsZ0NBQWMsQ0FBQztZQUM1QixNQUFNLEVBQUUsQ0FBQyxRQUNSLENBQUM7U0FDTCxDQUFDOzt3QkFBQTtJQUlGLHVCQUFDO0FBQUQsQ0FIQSxBQUdDLElBQUE7QUFIWSx3QkFBZ0IsbUJBRzVCLENBQUEiLCJmaWxlIjoiY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IFRpdGxlQ29tcG9uZW50IH0gZnJvbSBcIi4uL3RpdGxlL3RpdGxlLmNvbXBvbmVudFwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1jb250YWN0JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8bXktdGl0bGUgW3RpdGxlXT1cInRpdGxlXCI+PC9teS10aXRsZT5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtUaXRsZUNvbXBvbmVudF0sXG4gICAgc3R5bGVzOiBbYFxuICAgIGBdXG59KVxuZXhwb3J0IGNsYXNzIENvbnRhY3RDb21wb25lbnQge1xuICAgIFxuICAgIHRpdGxlOiBzdHJpbmcgPSBcIkNvbnRhY3RcIjtcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
