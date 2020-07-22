(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-client-page-client-page-module"],{

/***/ "./src/app/modules/client-page/client-page-page/client-page-page.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/client-page/client-page-page/client-page-page.component.ts ***!
  \************************************************************************************/
/*! exports provided: ClientPagePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientPagePageComponent", function() { return ClientPagePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_modules_client_page_client_page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/client-page/client-page.service */ "./src/app/modules/client-page/client-page.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _ui_rap_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/rap/breadcrumbs/breadcrumbs.component */ "./src/app/modules/ui/rap/breadcrumbs/breadcrumbs.component.ts");






class ClientPagePageComponent {
    constructor(route, 
    // private ngxService: NgxUiLoaderService,
    clientPage, title, meta) {
        this.route = route;
        this.clientPage = clientPage;
        this.title = title;
        this.meta = meta;
        this.alias = null;
        this.getByAliasHandler = (data) => {
            // this.ngxService.stopAll();
            this.clientPage.page = data.data;
            this.updateMeta();
            this.updateBreadcrumbs();
        };
    }
    ngOnInit() {
        this.initBreadcrumbs();
        this.route.params.subscribe((data) => {
            this.alias = data["alias"];
            this.getByAlias();
        });
    }
    getByAlias() {
        // this.ngxService.start();
        this.clientPage.getByAlias(this.alias).subscribe(this.getByAliasHandler);
    }
    initBreadcrumbs() {
        this.breadcrumbs = [
            {
                link: "/",
                title: "Homepage",
            },
        ];
    }
    updateBreadcrumbs() {
        var _a, _b;
        this.initBreadcrumbs();
        this.breadcrumbs.push({
            link: `page/${this.clientPage.page.alias}`,
            title: (_b = (_a = this.clientPage.page) === null || _a === void 0 ? void 0 : _a.description) === null || _b === void 0 ? void 0 : _b.title,
        });
    }
    updateMeta() {
        var _a, _b, _c, _d, _e, _f;
        let title = ((_b = (_a = this.clientPage.page) === null || _a === void 0 ? void 0 : _a.description) === null || _b === void 0 ? void 0 : _b.title) + ` | ShowU`;
        let desc = (_d = (_c = this.clientPage.page) === null || _c === void 0 ? void 0 : _c.description) === null || _d === void 0 ? void 0 : _d.meta_description;
        let keys = (_f = (_e = this.clientPage.page) === null || _e === void 0 ? void 0 : _e.description) === null || _f === void 0 ? void 0 : _f.meta_keywords;
        this.title.setTitle(title);
        this.meta.updateTag({ name: "description", content: desc });
        this.meta.updateTag({ name: "keywords", content: keys });
    }
}
ClientPagePageComponent.ɵfac = function ClientPagePageComponent_Factory(t) { return new (t || ClientPagePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modules_client_page_client_page_service__WEBPACK_IMPORTED_MODULE_2__["ClientPageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"])); };
ClientPagePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientPagePageComponent, selectors: [["app-client-page-page"]], decls: 6, vars: 3, consts: [[3, "breadcrumbs"], [1, "card"], [1, "d4", "text-center", "flex", "row", "center", "v_center", 2, "width", "100%"], [2, "margin-top", "0"], [3, "innerHTML"]], template: function ClientPagePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rap-breadcrumbs", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("breadcrumbs", ctx.breadcrumbs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.clientPage.page == null ? null : ctx.clientPage.page.description.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.clientPage.page == null ? null : ctx.clientPage.page.description.text, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [_ui_rap_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbsComponent"]], styles: [".card[_ngcontent-%COMP%] {\n  padding: 16px;\n  background-color: white;\n  box-shadow: 0 1px 3px rgba(178, 178, 178, 0.14), 0 1px 2px rgba(178, 178, 178, 0.24);\n  border-radius: 5px;\n}\nrap-breadcrumbs[_ngcontent-%COMP%] {\n  margin: 16px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92b2xvZGFidWtvdnNraWovRGVza3RvcC9uZy1zaG93dS1jbGllbnQvc3JjL3N0eWxlcy9yYWlzaW5zL192YXJpYWJsZXMuc2NzcyIsIi9Vc2Vycy92b2xvZGFidWtvdnNraWovRGVza3RvcC9uZy1zaG93dS1jbGllbnQvc3JjL2FwcC9tb2R1bGVzL2NsaWVudC1wYWdlL2NsaWVudC1wYWdlLXBhZ2UvY2xpZW50LXBhZ2UtcGFnZS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy92b2xvZGFidWtvdnNraWovRGVza3RvcC9uZy1zaG93dS1jbGllbnQvc3JjL3N0eWxlcy9yYWlzaW5zL19tYXRlcmlhbC1zaGFkb3cubWl4aW4uc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9jbGllbnQtcGFnZS9jbGllbnQtcGFnZS1wYWdlL2NsaWVudC1wYWdlLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUEsa0JBQUE7QUE4QkEsZUFBQTtBQUlBLDJCQUFBO0FBT0EsZUFBQTtBQUVBLGtCQUFBO0FBaUNBLGVBQUE7QUMvRUE7RUFDRSxhREpNO0VDS04sdUJER007RUVRSixvRkFBQTtFRFRGLGtCRCtCTztBRzNCVDtBRkRBO0VBQ0UsY0FBQTtBRUlGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jbGllbnQtcGFnZS9jbGllbnQtcGFnZS1wYWdlL2NsaWVudC1wYWdlLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkc3BhY2U6IDE2cHg7XHJcblxyXG4kdGltZTogLjJzO1xyXG4kbW90aW9uOiBlYXNlLWluLW91dDtcclxuJGVsYXN0aWM6IGN1YmljLWJlemllciguNzUsLTAuNSwwLDEuNzUpO1xyXG5cclxuLyogI3JlZ2lvbiBDb2xvcnMqL1xyXG5cclxuJHdoaXRlOiB3aGl0ZSAhZGVmYXVsdDtcclxuXHJcbiRncmF5MTAwOiAjZmFmYWZhICFkZWZhdWx0O1xyXG4kZ3JheTIwMDogI2VjZWNlYyAhZGVmYXVsdDtcclxuJGdyYXkzMDA6ICNjNGM0YzQgIWRlZmF1bHQ7XHJcbiRncmF5NDAwOiAjYjJiMmIyICFkZWZhdWx0O1xyXG4kZ3JheTUwMDogIzgwODA4MCAhZGVmYXVsdDtcclxuJGdyYXk2MDA6ICM2NDY0NjQgIWRlZmF1bHQ7XHJcbiRncmF5NzAwOiAjNDg0ODQ4ICFkZWZhdWx0O1xyXG4kZ3JheTgwMDogIzMyMzIzMiAhZGVmYXVsdDtcclxuJGdyYXk4NTA6ICMyNDI0MjQgIWRlZmF1bHQ7XHJcbiRncmF5OTAwOiAjMTYxNjE2ICFkZWZhdWx0O1xyXG5cclxuJGJsYWNrOiBibGFjayAhZGVmYXVsdDtcclxuXHJcbiRibHVlOiAgICAjMTY2NDk2ICFkZWZhdWx0O1xyXG4kcmVkOiAgICAgI2Q0MzI0OCAhZGVmYXVsdDtcclxuJGdyZWVuOiAgICMxNmIwNjQgIWRlZmF1bHQ7XHJcbiR5ZWxsb3c6ICAjZmJjNTMxICFkZWZhdWx0O1xyXG4kb3JhbmdlOiAgI2ZmODAxNiAhZGVmYXVsdDtcclxuJGluZGlnbzogICM2NDE2ZTAgIWRlZmF1bHQ7XHJcbiRwaW5rOiAgICAjZTAzMmIyICFkZWZhdWx0O1xyXG4kdGVhbDogICAgIzE2YzQ5NiAhZGVmYXVsdDtcclxuJHZpb2xldDogICMzOTRGNkMgIWRlZmF1bHQ7XHJcblxyXG4kYmxlYXI6ICRncmF5MjAwO1xyXG4kc21va2U6ICRncmF5MjAwO1xyXG5cclxuLyogI2VuZHJlZ2lvbiAqL1xyXG5cclxuJHJhZGl1czogNXB4O1xyXG5cclxuLyogI3JlZ2lvbiBDb2xvcnMgT3ZlcnJpZGUqL1xyXG5cclxuJHJlZDogIzlGMTk0MTtcclxuXHJcbi8vIHNldCBwcmltYXJ5IGNvbG9yXHJcbiRwcmltYXJ5OiAkcmVkO1xyXG5cclxuLyogI2VuZHJlZ2lvbiAqL1xyXG5cclxuLyogI3JlZ2lvbiBGb250cyAqL1xyXG5cclxuXHJcbiRmb250RmFtaWx5U2Fuc1NlcmlmOiBcIk9wZW4gc2Fuc1wiLCBcIlNlZ29lIFVJXCIsIEFyaWFsLCBzYW5zLXNlcmlmICFkZWZhdWx0O1xyXG4vLyAkZm9udEZhbWlseVNhbnNTZXJpZjogXCJPcGVuIHNhbnNcIiwgXCJTZWdvZSBVSVwiLCBBcmlhbCwgc2Fucy1zZXJpZiwgIWRlZmF1bHQ7XHJcbiRmb250RmFtaWx5TW9ub3NwYWNlOiAgQ29uc29sYXMsIFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlICFkZWZhdWx0O1xyXG4kZm9udEZhbWlseTogJGZvbnRGYW1pbHlTYW5zU2VyaWYgIWRlZmF1bHQ7XHJcblxyXG5cclxuJGZvbnRTaXplOiAxcmVtICFkZWZhdWx0O1xyXG4kZm9udFNpemVMYXJnZTogKDEuMjhyZW0pICFkZWZhdWx0O1xyXG4kZm9udFNpemVTbWFsbDogKC44cmVtKSAhZGVmYXVsdDtcclxuXHJcbiRmb250V2VpZ2h0TGlnaHQ6IDMwMCAhZGVmYXVsdDtcclxuJGZvbnRXZWlnaHROb3JtYWw6IDQwMCAhZGVmYXVsdDtcclxuJGZvbnRXZWlnaHRCb2xkOiA3MDAgIWRlZmF1bHQ7XHJcblxyXG4kZm9udFdlaWdodDogJGZvbnRXZWlnaHROb3JtYWwgIWRlZmF1bHQ7XHJcbiRsaW5lSGVpZ2h0OiAxLjE1ICFkZWZhdWx0O1xyXG5cclxuJGZvbnRTaXplSDE6IDIuMjhyZW0gIWRlZmF1bHQ7XHJcbiRmb250U2l6ZUgyOiAxLjk2cmVtICFkZWZhdWx0O1xyXG4kZm9udFNpemVIMzogMS42NHJlbSAhZGVmYXVsdDtcclxuJGZvbnRTaXplSDQ6IDEuMzJyZW0gIWRlZmF1bHQ7XHJcbiRmb250U2l6ZUg1OiAxLjE2cmVtICFkZWZhdWx0O1xyXG4kZm9udFNpemVINjogJGZvbnRTaXplICFkZWZhdWx0O1xyXG5cclxuXHJcbiRmb250U2l6ZUQxOiAzLjU2cmVtICFkZWZhdWx0O1xyXG4kZm9udFNpemVEMjogMi4yOHJlbSAhZGVmYXVsdDtcclxuJGZvbnRTaXplRDM6IDEuNjRyZW0gIWRlZmF1bHQ7XHJcbiRmb250U2l6ZUQ0OiAxLjMycmVtICFkZWZhdWx0O1xyXG5cclxuLyogI2VuZHJlZ2lvbiAqL1xyXG5cclxuLy8gZ29sZGVuIHJhdGlvXHJcblxyXG4kZ3Jfc2hvcnRlcjogMzguMTk2NjtcclxuJGdyX2xvbmdlcjogNjEuODAzNDsiLCJAaW1wb3J0IFwifnNyYy9zdHlsZXMvcmFpc2lucy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJ+c3JjL3N0eWxlcy9yYWlzaW5zL21peGluc1wiO1xuXG4uY2FyZCB7XG4gIHBhZGRpbmc6ICRzcGFjZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICBAaW5jbHVkZSBtYXRlcmlhbC1zaGFkb3coMSwgMSwgJGdyYXk0MDApO1xuICBib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xufVxuXG5yYXAtYnJlYWRjcnVtYnMge1xuICBtYXJnaW46ICRzcGFjZSAwO1xufVxuIiwiLy8tIE1peGluOiBNYXRlcmlhbCBTaGFkb3dcbi8vL1xuLy8vIEJveCBzaGFkb3dzIGJhc2VkIG9uIDUgTWF0ZXJpYWwgRGVzaWduIHByZXNldHM7XG4vLy9cbi8vLyBAcGFyYW0ge3ZhcmlhYmxlfSAkei1kZXB0aCBbMV0gLSBzaGFkb3cgZGlzdGFuY2Ugb24gei1heGlzXG4vLy8gQHBhcmFtIHt2YXJpYWJsZX0gJHN0cmVuZ3RoIFsxXSAtIG11bHRpcGxpZXIgZm9yIHNoYWRvdyBzdHJlbmd0aC9kYXJrbmVzc1xuLy8vIEBwYXJhbSB7dmFyaWFibGV9ICRjb2xvciBbMV0gLSBzaGFkb3cgY29sb3Jcbi8vLyBAZ3JvdXAgbGF5b3V0XG4vLy8gQGV4YW1wbGVcbi8vLyAgIGRpdiB7XG4vLy8gICAgIEBpbmNsdWRlIG1hdGVyaWFsLXNoYWRvdygzKTtcbi8vLyAgIH1cbi8vLyBAbGluayBodHRwczovL2NvZGVwZW4uaW8vZGJveC9wZW4vUmF3QkVXXG4vLy8gQGF1dGhvciBcIkRhbmllbCBCb3hcIlxuQG1peGluIG1hdGVyaWFsLXNoYWRvdygkei1kZXB0aDogMSwgJHN0cmVuZ3RoOiAxLCAkY29sb3I6IGJsYWNrKSB7XG4gIEBpZiAkei1kZXB0aCA9PSAxIHtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgkY29sb3IsICRzdHJlbmd0aCAqIDAuMTQpLFxuICAgICAgMCAxcHggMnB4IHJnYmEoJGNvbG9yLCAkc3RyZW5ndGggKiAwLjI0KTtcbiAgfVxuICBAaWYgJHotZGVwdGggPT0gMiB7XG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoJGNvbG9yLCAkc3RyZW5ndGggKiAwLjE2KSxcbiAgICAgIDAgM3B4IDZweCByZ2JhKCRjb2xvciwgJHN0cmVuZ3RoICogMC4yMyk7XG4gIH1cbiAgQGlmICR6LWRlcHRoID09IDMge1xuICAgIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoJGNvbG9yLCAkc3RyZW5ndGggKiAwLjE5KSxcbiAgICAgIDAgNnB4IDZweCByZ2JhKCRjb2xvciwgJHN0cmVuZ3RoICogMC4yMyk7XG4gIH1cbiAgQGlmICR6LWRlcHRoID09IDQge1xuICAgIGJveC1zaGFkb3c6IDAgMTVweCAzMHB4IHJnYmEoJGNvbG9yLCAkc3RyZW5ndGggKiAwLjI1KSxcbiAgICAgIDAgMTBweCAxMHB4IHJnYmEoJGNvbG9yLCAkc3RyZW5ndGggKiAwLjIyKTtcbiAgfVxuICBAaWYgJHotZGVwdGggPT0gNSB7XG4gICAgYm94LXNoYWRvdzogMCAyMHB4IDQwcHggcmdiYSgkY29sb3IsICRzdHJlbmd0aCAqIDAuMyksXG4gICAgICAwIDE1cHggMTJweCByZ2JhKCRjb2xvciwgJHN0cmVuZ3RoICogMC4yMik7XG4gIH1cbiAgQGlmICgkei1kZXB0aCA8IDEpIG9yICgkei1kZXB0aCA+IDUpIHtcbiAgICBAd2FybiBcIiR6LWRlcHRoIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA1XCI7XG4gIH1cbn1cbiIsIi8qICNyZWdpb24gQ29sb3JzKi9cbi8qICNlbmRyZWdpb24gKi9cbi8qICNyZWdpb24gQ29sb3JzIE92ZXJyaWRlKi9cbi8qICNlbmRyZWdpb24gKi9cbi8qICNyZWdpb24gRm9udHMgKi9cbi8qICNlbmRyZWdpb24gKi9cbi5jYXJkIHtcbiAgcGFkZGluZzogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDE3OCwgMTc4LCAxNzgsIDAuMTQpLCAwIDFweCAycHggcmdiYSgxNzgsIDE3OCwgMTc4LCAwLjI0KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5yYXAtYnJlYWRjcnVtYnMge1xuICBtYXJnaW46IDE2cHggMDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientPagePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-client-page-page",
                templateUrl: "./client-page-page.component.html",
                styleUrls: ["./client-page-page.component.scss"],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: src_app_modules_client_page_client_page_service__WEBPACK_IMPORTED_MODULE_2__["ClientPageService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/client-page/client-page-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/client-page/client-page-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ClientPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientPageRoutingModule", function() { return ClientPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _client_page_page_client_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client-page-page/client-page-page.component */ "./src/app/modules/client-page/client-page-page/client-page-page.component.ts");





const routes = [
    {
        path: ":alias",
        component: _client_page_page_client_page_page_component__WEBPACK_IMPORTED_MODULE_2__["ClientPagePageComponent"],
    },
];
class ClientPageRoutingModule {
}
ClientPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ClientPageRoutingModule });
ClientPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ClientPageRoutingModule_Factory(t) { return new (t || ClientPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ClientPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/client-page/client-page.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/client-page/client-page.module.ts ***!
  \***********************************************************/
/*! exports provided: ClientPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientPageModule", function() { return ClientPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _client_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client-page-routing.module */ "./src/app/modules/client-page/client-page-routing.module.ts");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/ui.module */ "./src/app/modules/ui/ui.module.ts");
/* harmony import */ var _client_page_page_client_page_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client-page-page/client-page-page.component */ "./src/app/modules/client-page/client-page-page/client-page-page.component.ts");






class ClientPageModule {
}
ClientPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ClientPageModule });
ClientPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ClientPageModule_Factory(t) { return new (t || ClientPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ui_ui_module__WEBPACK_IMPORTED_MODULE_3__["UiModule"],
            _client_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["ClientPageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ClientPageModule, { declarations: [_client_page_page_client_page_page_component__WEBPACK_IMPORTED_MODULE_4__["ClientPagePageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ui_ui_module__WEBPACK_IMPORTED_MODULE_3__["UiModule"],
        _client_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["ClientPageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_client_page_page_client_page_page_component__WEBPACK_IMPORTED_MODULE_4__["ClientPagePageComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ui_ui_module__WEBPACK_IMPORTED_MODULE_3__["UiModule"],
                    _client_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["ClientPageRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/client-page/client-page.service.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/client-page/client-page.service.ts ***!
  \************************************************************/
/*! exports provided: ClientPageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientPageService", function() { return ClientPageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class ClientPageService {
    constructor(http) {
        this.http = http;
    }
    getByAlias(alias) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].host + `client/getPageByAlias?alias=${alias}`);
    }
}
ClientPageService.ɵfac = function ClientPageService_Factory(t) { return new (t || ClientPageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ClientPageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ClientPageService, factory: ClientPageService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientPageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=src-app-modules-client-page-client-page-module-es2015.js.map