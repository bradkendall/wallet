"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shell_component_1 = require("./shell/shell.component");
var authentication_guard_1 = require("./authentication/authentication.guard");
/**
 * Provides helper methods to create routes.
 */
var Route = /** @class */ (function () {
    function Route() {
    }
    /**
     * Creates routes using the shell component.
     * @param routes The routes to add.
     * @return {Routes} The new routes using shell as the base.
     */
    Route.withShell = function (routes) {
        return [{
                path: '',
                component: shell_component_1.ShellComponent,
                children: routes,
                // Reuse ShellComponent instance when navigating between child views
                data: { reuse: true }
            }];
    };
    /**
     * Creates routes using the shell component and authentication.
     * @param routes The routes to add.
     * @return {Routes} The new routes using shell as the base.
     */
    Route.withAuthenticatedShell = function (routes) {
        return [{
                path: '',
                component: shell_component_1.ShellComponent,
                children: routes,
                canActivate: [authentication_guard_1.AuthenticationGuard],
                // Reuse ShellComponent instance when navigating between child views
                data: { reuse: true }
            }];
    };
    return Route;
}());
exports.Route = Route;
//# sourceMappingURL=route.service.js.map