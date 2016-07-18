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
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var vehicle_component_1 = require("./vehicle/vehicle.component");
var house_component_1 = require("./house/house.component");
var payment_component_1 = require("./payment/payment.component");
var contact_component_1 = require("./contact/contact.component");
var header_component_1 = require("./header.component");
var footer_component_1 = require("./footer.component");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: " \n        <div class=\"container\">\n            <my-header></my-header>\n            <router-outlet></router-outlet>\n        </div>\n        <my-footer></my-footer>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES, header_component_1.HeaderComponent, footer_component_1.FooterComponent]
        }),
        router_1.Routes([
            { path: '/', component: home_component_1.HomeComponent },
            { path: '/vehicleinsurance', component: vehicle_component_1.VehicleComponent },
            { path: '/homeinsurance', component: house_component_1.HouseComponent },
            { path: '/paymentplans', component: payment_component_1.PaymentComponent },
            { path: '/contact', component: contact_component_1.ContactComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBMEMsaUJBQWlCLENBQUMsQ0FBQTtBQUU1RCwrQkFBOEIsdUJBQXVCLENBQUMsQ0FBQTtBQUN0RCxrQ0FBaUMsNkJBQTZCLENBQUMsQ0FBQTtBQUMvRCxnQ0FBK0IseUJBQXlCLENBQUMsQ0FBQTtBQUN6RCxrQ0FBaUMsNkJBQTZCLENBQUMsQ0FBQTtBQUMvRCxrQ0FBaUMsNkJBQTZCLENBQUMsQ0FBQTtBQUMvRCxpQ0FBZ0Msb0JBQW9CLENBQUMsQ0FBQTtBQUNyRCxpQ0FBZ0Msb0JBQW9CLENBQUMsQ0FBQTtBQW1CckQ7SUFBQTtJQUVBLENBQUM7SUFwQkQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLCtLQU1UO1lBQ0QsVUFBVSxFQUFFLENBQUMsMEJBQWlCLEVBQUUsa0NBQWUsRUFBRSxrQ0FBZSxDQUFDO1NBQ3BFLENBQUM7UUFDRCxlQUFNLENBQUM7WUFDSixFQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUM7WUFDckMsRUFBQyxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsU0FBUyxFQUFFLG9DQUFnQixFQUFDO1lBQ3hELEVBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFDO1lBQ25ELEVBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsb0NBQWdCLEVBQUM7WUFDcEQsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBQztTQUNsRCxDQUFDOztvQkFBQTtJQUdGLG1CQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSxvQkFBWSxlQUV4QixDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcywgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lL2hvbWUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBWZWhpY2xlQ29tcG9uZW50IH0gZnJvbSBcIi4vdmVoaWNsZS92ZWhpY2xlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSG91c2VDb21wb25lbnQgfSBmcm9tIFwiLi9ob3VzZS9ob3VzZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IFBheW1lbnRDb21wb25lbnQgfSBmcm9tIFwiLi9wYXltZW50L3BheW1lbnQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDb250YWN0Q29tcG9uZW50IH0gZnJvbSBcIi4vY29udGFjdC9jb250YWN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vaGVhZGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRm9vdGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vZm9vdGVyLmNvbXBvbmVudFwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8bXktaGVhZGVyPjwvbXktaGVhZGVyPlxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPG15LWZvb3Rlcj48L215LWZvb3Rlcj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgSGVhZGVyQ29tcG9uZW50LCBGb290ZXJDb21wb25lbnRdXG59KVxuQFJvdXRlcyhbXG4gICAge3BhdGg6ICcvJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50fSxcbiAgICB7cGF0aDogJy92ZWhpY2xlaW5zdXJhbmNlJywgY29tcG9uZW50OiBWZWhpY2xlQ29tcG9uZW50fSxcbiAgICB7cGF0aDogJy9ob21laW5zdXJhbmNlJywgY29tcG9uZW50OiBIb3VzZUNvbXBvbmVudH0sXG4gICAge3BhdGg6ICcvcGF5bWVudHBsYW5zJywgY29tcG9uZW50OiBQYXltZW50Q29tcG9uZW50fSxcbiAgICB7cGF0aDogJy9jb250YWN0JywgY29tcG9uZW50OiBDb250YWN0Q29tcG9uZW50fVxuXSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICAgIFxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
