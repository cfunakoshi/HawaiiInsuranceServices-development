"use strict";
///<reference path="../../typings.d.ts"/>
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [router_1.ROUTER_PROVIDERS, core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy }), http_1.HTTP_PROVIDERS]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlDQUF5QztBQUN6Qyx5Q0FBMEIsbUNBQW1DLENBQUMsQ0FBQTtBQUM5RCx1QkFBaUMsaUJBQWlCLENBQUMsQ0FBQTtBQUNuRCx1QkFBdUQsaUJBQWlCLENBQUMsQ0FBQTtBQUN6RSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMscUJBQStCLGVBQWUsQ0FBQyxDQUFBO0FBRS9DLDhCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBRS9DLG9DQUFTLENBQUMsNEJBQVksRUFBRSxDQUFDLHlCQUFnQixFQUFFLGNBQU8sQ0FBQyx5QkFBZ0IsRUFBRSxFQUFDLFFBQVEsRUFBRSw2QkFBb0IsRUFBQyxDQUFDLEVBQUUscUJBQWMsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiYm9vdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MuZC50c1wiLz5cbmltcG9ydCB7IGJvb3RzdHJhcCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XG5pbXBvcnQgeyBST1VURVJfUFJPVklERVJTIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTG9jYXRpb25TdHJhdGVneSwgSGFzaExvY2F0aW9uU3RyYXRlZ3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBwcm92aWRlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEhUVFBfUFJPVklERVJTIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuXG5ib290c3RyYXAoQXBwQ29tcG9uZW50LCBbUk9VVEVSX1BST1ZJREVSUywgcHJvdmlkZShMb2NhdGlvblN0cmF0ZWd5LCB7dXNlQ2xhc3M6IEhhc2hMb2NhdGlvblN0cmF0ZWd5fSksIEhUVFBfUFJPVklERVJTXSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
