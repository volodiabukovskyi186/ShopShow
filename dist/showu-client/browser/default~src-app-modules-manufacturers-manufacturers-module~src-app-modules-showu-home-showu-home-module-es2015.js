(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~src-app-modules-manufacturers-manufacturers-module~src-app-modules-showu-home-showu-home-module"],{

/***/ "./src/app/modules/manufacturers/manufacturer-page/manufacturer-page.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/manufacturers/manufacturer-page/manufacturer-page.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ManufacturerPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManufacturerPageComponent", function() { return ManufacturerPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_modules_manufacturers_manufacturers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/manufacturers/manufacturers.service */ "./src/app/modules/manufacturers/manufacturers.service.ts");
/* harmony import */ var _product_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../product/product.service */ "./src/app/modules/product/product.service.ts");
/* harmony import */ var _ui_rap_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/rap/breadcrumbs/breadcrumbs.component */ "./src/app/modules/ui/rap/breadcrumbs/breadcrumbs.component.ts");
/* harmony import */ var _product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../product/product-list/product-list.component */ "./src/app/modules/product/product-list/product-list.component.ts");








// import { IManufacturerReviews } from 'src/app/modules/review/review';
// import { ProductService } from 'src/app/modules/product/product.service';
class ManufacturerPageComponent {
    constructor(route, 
    // private ngxService: NgxUiLoaderService,
    manufacturer, product) {
        this.route = route;
        this.manufacturer = manufacturer;
        this.product = product;
        this.breadcrumbs = [
            {
                link: "/",
                title: "Homepage",
            },
            {
                link: "manufacturers",
                title: "Manufacturers",
            },
        ];
        this.host = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].hoststatic;
        this.id = 0;
        this.getByIdHandler = (data) => {
            // this.ngxService.stopAll();
            this.manufacturer.item = data.data;
            // link: "manufacturer" + "/" + this.id,
            this.breadcrumbs.push({
                link: `manufacturer/${this.id}`,
                title: this.manufacturer.item.name,
            });
        };
        this.getByManufacturerHandler = data => {
            // this.ngxService.stopAll();
            this.product.products = data;
            // this.product.products.data.products.forEach(item=> {
            //   let src:any = JSON.parse(item.image.src);
            //   console.log(src);
            //   item.image.src_mini = src.src_mini;
            //   item.image.src = src.src;
            // })
        };
    }
    ngOnInit() {
        // this.ngxService.start();
        this.route.params.subscribe((data) => {
            // set lang
            this.id = data["id"];
            this.manufacturer.getBy(this.id).subscribe(this.getByIdHandler);
            this.product.getByManufacturer(this.id).subscribe(this.getByManufacturerHandler);
        });
    }
}
ManufacturerPageComponent.ɵfac = function ManufacturerPageComponent_Factory(t) { return new (t || ManufacturerPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modules_manufacturers_manufacturers_service__WEBPACK_IMPORTED_MODULE_3__["ManufacturersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"])); };
ManufacturerPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManufacturerPageComponent, selectors: [["app-manufacturer-page"]], decls: 19, vars: 6, consts: [[3, "breadcrumbs"], [1, "row"], [1, "col", "col-side"], [1, "col"], [1, "card", "radius"], [1, "golden"], [1, "short"], [1, "ratio", 2, "background-color", "white"], [1, "r3x1"], [1, "contain", 3, "src", "alt"], [1, "long", "padding"], [2, "margin-top", "0"], [2, "margin", "16px", 3, "products"]], template: function ManufacturerPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rap-breadcrumbs", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Filters will be here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-product-list", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("breadcrumbs", ctx.breadcrumbs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.host + (ctx.manufacturer.item == null ? null : ctx.manufacturer.item.image == null ? null : ctx.manufacturer.item.image.src_mini), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.manufacturer.item == null ? null : ctx.manufacturer.item.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.manufacturer.item.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.manufacturer.item == null ? null : ctx.manufacturer.item.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("products", ctx.product.products.data.products);
    } }, directives: [_ui_rap_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbsComponent"], _product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_6__["ProductListComponent"]], styles: [".golden[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  flex-direction: row;\n  align-items: center;\n}\n.golden[_ngcontent-%COMP%]   .long[_ngcontent-%COMP%] {\n  flex-basis: 61.8034%;\n  max-width: 61.8034%;\n}\n.golden[_ngcontent-%COMP%]   .short[_ngcontent-%COMP%] {\n  flex-basis: 38.1966%;\n  max-width: 38.1966%;\n}\n.col-side[_ngcontent-%COMP%] {\n  flex-basis: 196px;\n  max-width: 196px;\n}\n.card[_ngcontent-%COMP%] {\n  background-color: white;\n  box-shadow: 0 1px 3px rgba(178, 178, 178, 0.14), 0 1px 2px rgba(178, 178, 178, 0.24);\n  margin: 0 16px;\n}\napp-review-card[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92b2xvZGFidWtvdnNraWovRGVza3RvcC9uZy1zaG93dS1jbGllbnQvc3JjL3N0eWxlcy9yYWlzaW5zL192YXJpYWJsZXMuc2NzcyIsIi9Vc2Vycy92b2xvZGFidWtvdnNraWovRGVza3RvcC9uZy1zaG93dS1jbGllbnQvc3JjL2FwcC9tb2R1bGVzL21hbnVmYWN0dXJlcnMvbWFudWZhY3R1cmVyLXBhZ2UvbWFudWZhY3R1cmVyLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFudWZhY3R1cmVycy9tYW51ZmFjdHVyZXItcGFnZS9tYW51ZmFjdHVyZXItcGFnZS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy92b2xvZGFidWtvdnNraWovRGVza3RvcC9uZy1zaG93dS1jbGllbnQvc3JjL3N0eWxlcy9yYWlzaW5zL19taXhpbnMuc2NzcyIsIi9Vc2Vycy92b2xvZGFidWtvdnNraWovRGVza3RvcC9uZy1zaG93dS1jbGllbnQvc3JjL3N0eWxlcy9yYWlzaW5zL19tYXRlcmlhbC1zaGFkb3cubWl4aW4uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQSxrQkFBQTtBQThCQSxlQUFBO0FBSUEsMkJBQUE7QUFPQSxlQUFBO0FBRUEsa0JBQUE7QUFpQ0EsZUFBQTtBQy9FQTtFQUNFLGFBQUE7RUFDQSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0lGO0FESEU7RUVFQSxvQkZEcUI7RUVFckIsbUJGRnFCO0FDTXZCO0FESkU7RUVEQSxvQkZFcUI7RUVEckIsbUJGQ3FCO0FDT3ZCO0FESEE7RUVORSxpQkZPbUI7RUVObkIsZ0JGTW1CO0FDT3JCO0FESkE7RUFDRSx1QkRiTTtFSVFKLG9GQUFBO0VIT0YsY0FBQTtBQ09GO0FESkE7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsU0Q1Qk07QUVtQ1IiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21hbnVmYWN0dXJlcnMvbWFudWZhY3R1cmVyLXBhZ2UvbWFudWZhY3R1cmVyLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkc3BhY2U6IDE2cHg7XHJcblxyXG4kdGltZTogLjJzO1xyXG4kbW90aW9uOiBlYXNlLWluLW91dDtcclxuJGVsYXN0aWM6IGN1YmljLWJlemllciguNzUsLTAuNSwwLDEuNzUpO1xyXG5cclxuLyogI3JlZ2lvbiBDb2xvcnMqL1xyXG5cclxuJHdoaXRlOiB3aGl0ZSAhZGVmYXVsdDtcclxuXHJcbiRncmF5MTAwOiAjZmFmYWZhICFkZWZhdWx0O1xyXG4kZ3JheTIwMDogI2VjZWNlYyAhZGVmYXVsdDtcclxuJGdyYXkzMDA6ICNjNGM0YzQgIWRlZmF1bHQ7XHJcbiRncmF5NDAwOiAjYjJiMmIyICFkZWZhdWx0O1xyXG4kZ3JheTUwMDogIzgwODA4MCAhZGVmYXVsdDtcclxuJGdyYXk2MDA6ICM2NDY0NjQgIWRlZmF1bHQ7XHJcbiRncmF5NzAwOiAjNDg0ODQ4ICFkZWZhdWx0O1xyXG4kZ3JheTgwMDogIzMyMzIzMiAhZGVmYXVsdDtcclxuJGdyYXk4NTA6ICMyNDI0MjQgIWRlZmF1bHQ7XHJcbiRncmF5OTAwOiAjMTYxNjE2ICFkZWZhdWx0O1xyXG5cclxuJGJsYWNrOiBibGFjayAhZGVmYXVsdDtcclxuXHJcbiRibHVlOiAgICAjMTY2NDk2ICFkZWZhdWx0O1xyXG4kcmVkOiAgICAgI2Q0MzI0OCAhZGVmYXVsdDtcclxuJGdyZWVuOiAgICMxNmIwNjQgIWRlZmF1bHQ7XHJcbiR5ZWxsb3c6ICAjZmJjNTMxICFkZWZhdWx0O1xyXG4kb3JhbmdlOiAgI2ZmODAxNiAhZGVmYXVsdDtcclxuJGluZGlnbzogICM2NDE2ZTAgIWRlZmF1bHQ7XHJcbiRwaW5rOiAgICAjZTAzMmIyICFkZWZhdWx0O1xyXG4kdGVhbDogICAgIzE2YzQ5NiAhZGVmYXVsdDtcclxuJHZpb2xldDogICMzOTRGNkMgIWRlZmF1bHQ7XHJcblxyXG4kYmxlYXI6ICRncmF5MjAwO1xyXG4kc21va2U6ICRncmF5MjAwO1xyXG5cclxuLyogI2VuZHJlZ2lvbiAqL1xyXG5cclxuJHJhZGl1czogNXB4O1xyXG5cclxuLyogI3JlZ2lvbiBDb2xvcnMgT3ZlcnJpZGUqL1xyXG5cclxuJHJlZDogIzlGMTk0MTtcclxuXHJcbi8vIHNldCBwcmltYXJ5IGNvbG9yXHJcbiRwcmltYXJ5OiAkcmVkO1xyXG5cclxuLyogI2VuZHJlZ2lvbiAqL1xyXG5cclxuLyogI3JlZ2lvbiBGb250cyAqL1xyXG5cclxuXHJcbiRmb250RmFtaWx5U2Fuc1NlcmlmOiBcIk9wZW4gc2Fuc1wiLCBcIlNlZ29lIFVJXCIsIEFyaWFsLCBzYW5zLXNlcmlmICFkZWZhdWx0O1xyXG4vLyAkZm9udEZhbWlseVNhbnNTZXJpZjogXCJPcGVuIHNhbnNcIiwgXCJTZWdvZSBVSVwiLCBBcmlhbCwgc2Fucy1zZXJpZiwgIWRlZmF1bHQ7XHJcbiRmb250RmFtaWx5TW9ub3NwYWNlOiAgQ29uc29sYXMsIFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlICFkZWZhdWx0O1xyXG4kZm9udEZhbWlseTogJGZvbnRGYW1pbHlTYW5zU2VyaWYgIWRlZmF1bHQ7XHJcblxyXG5cclxuJGZvbnRTaXplOiAxcmVtICFkZWZhdWx0O1xyXG4kZm9udFNpemVMYXJnZTogKDEuMjhyZW0pICFkZWZhdWx0O1xyXG4kZm9udFNpemVTbWFsbDogKC44cmVtKSAhZGVmYXVsdDtcclxuXHJcbiRmb250V2VpZ2h0TGlnaHQ6IDMwMCAhZGVmYXVsdDtcclxuJGZvbnRXZWlnaHROb3JtYWw6IDQwMCAhZGVmYXVsdDtcclxuJGZvbnRXZWlnaHRCb2xkOiA3MDAgIWRlZmF1bHQ7XHJcblxyXG4kZm9udFdlaWdodDogJGZvbnRXZWlnaHROb3JtYWwgIWRlZmF1bHQ7XHJcbiRsaW5lSGVpZ2h0OiAxLjE1ICFkZWZhdWx0O1xyXG5cclxuJGZvbnRTaXplSDE6IDIuMjhyZW0gIWRlZmF1bHQ7XHJcbiRmb250U2l6ZUgyOiAxLjk2cmVtICFkZWZhdWx0O1xyXG4kZm9udFNpemVIMzogMS42NHJlbSAhZGVmYXVsdDtcclxuJGZvbnRTaXplSDQ6IDEuMzJyZW0gIWRlZmF1bHQ7XHJcbiRmb250U2l6ZUg1OiAxLjE2cmVtICFkZWZhdWx0O1xyXG4kZm9udFNpemVINjogJGZvbnRTaXplICFkZWZhdWx0O1xyXG5cclxuXHJcbiRmb250U2l6ZUQxOiAzLjU2cmVtICFkZWZhdWx0O1xyXG4kZm9udFNpemVEMjogMi4yOHJlbSAhZGVmYXVsdDtcclxuJGZvbnRTaXplRDM6IDEuNjRyZW0gIWRlZmF1bHQ7XHJcbiRmb250U2l6ZUQ0OiAxLjMycmVtICFkZWZhdWx0O1xyXG5cclxuLyogI2VuZHJlZ2lvbiAqL1xyXG5cclxuLy8gZ29sZGVuIHJhdGlvXHJcblxyXG4kZ3Jfc2hvcnRlcjogMzguMTk2NjtcclxuJGdyX2xvbmdlcjogNjEuODAzNDsiLCJAaW1wb3J0IFwifnNyYy9zdHlsZXMvcmFpc2lucy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJ+c3JjL3N0eWxlcy9yYWlzaW5zL21peGluc1wiO1xuXG4uZ29sZGVuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLmxvbmcge1xuICAgIEBpbmNsdWRlIGNvbC13aWR0aCgjeyRncl9sb25nZXIgKyBcIiVcIn0pO1xuICB9XG4gIC5zaG9ydCB7XG4gICAgQGluY2x1ZGUgY29sLXdpZHRoKCN7JGdyX3Nob3J0ZXIgKyBcIiVcIn0pO1xuICB9XG59XG5cbi5jb2wtc2lkZSB7XG4gIEBpbmNsdWRlIGNvbC13aWR0aCgxOTZweCk7XG59XG5cbi5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICBAaW5jbHVkZSBtYXRlcmlhbC1zaGFkb3coMSwgMSwgJGdyYXk0MDApO1xuICBtYXJnaW46IDAgJHNwYWNlO1xufVxuXG5hcHAtcmV2aWV3LWNhcmQge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6ICRzcGFjZTtcbn1cbiIsIi8qICNyZWdpb24gQ29sb3JzKi9cbi8qICNlbmRyZWdpb24gKi9cbi8qICNyZWdpb24gQ29sb3JzIE92ZXJyaWRlKi9cbi8qICNlbmRyZWdpb24gKi9cbi8qICNyZWdpb24gRm9udHMgKi9cbi8qICNlbmRyZWdpb24gKi9cbi5nb2xkZW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmdvbGRlbiAubG9uZyB7XG4gIGZsZXgtYmFzaXM6IDYxLjgwMzQlO1xuICBtYXgtd2lkdGg6IDYxLjgwMzQlO1xufVxuLmdvbGRlbiAuc2hvcnQge1xuICBmbGV4LWJhc2lzOiAzOC4xOTY2JTtcbiAgbWF4LXdpZHRoOiAzOC4xOTY2JTtcbn1cblxuLmNvbC1zaWRlIHtcbiAgZmxleC1iYXNpczogMTk2cHg7XG4gIG1heC13aWR0aDogMTk2cHg7XG59XG5cbi5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDE3OCwgMTc4LCAxNzgsIDAuMTQpLCAwIDFweCAycHggcmdiYSgxNzgsIDE3OCwgMTc4LCAwLjI0KTtcbiAgbWFyZ2luOiAwIDE2cHg7XG59XG5cbmFwcC1yZXZpZXctY2FyZCB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMTZweDtcbn0iLCJAaW1wb3J0ICdtYXRlcmlhbC1zaGFkb3cubWl4aW4nO1xuXG5AbWl4aW4gemVybyB7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuQG1peGluIGNvbC13aWR0aCgkd2lkdGgpIHtcbiAgZmxleC1iYXNpczogJHdpZHRoO1xuICBtYXgtd2lkdGg6ICR3aWR0aDtcbn1cblxuQG1peGluIHNjcmVlbi13KCRtdykge1xuICBAbWVkaWEgKG1heC13aWR0aDogJG13KSB7XG4gICAgICBAY29udGVudFxuICB9XG59XG5cbkBtaXhpbiB0cmFuc2l0aW9uKCRlbGVtZW50OiBhbGwsICR0OiAkdGltZSwgJGRlbGF5OiAwcykge1xuICBAaWYgJGVsZW1lbnQ9PWRlZmF1bHQge1xuICAgICAgJGVsZW1lbnQ6IGFsbDtcbiAgfVxuICBAaWYgJHQ9PWRlZmF1bHQge1xuICAgICAgJHQ6ICR0aW1lO1xuICB9XG4gIEBpZiAkZGVsYXk9PWRlZmF1bHQge1xuICAgICAgJGRlbGF5OiAwcztcbiAgfVxuICB0cmFuc2l0aW9uOiAkZWxlbWVudCAkdCAkbW90aW9uICRkZWxheTtcbn0iLCIvLy0gTWl4aW46IE1hdGVyaWFsIFNoYWRvd1xuLy8vXG4vLy8gQm94IHNoYWRvd3MgYmFzZWQgb24gNSBNYXRlcmlhbCBEZXNpZ24gcHJlc2V0cztcbi8vL1xuLy8vIEBwYXJhbSB7dmFyaWFibGV9ICR6LWRlcHRoIFsxXSAtIHNoYWRvdyBkaXN0YW5jZSBvbiB6LWF4aXNcbi8vLyBAcGFyYW0ge3ZhcmlhYmxlfSAkc3RyZW5ndGggWzFdIC0gbXVsdGlwbGllciBmb3Igc2hhZG93IHN0cmVuZ3RoL2RhcmtuZXNzXG4vLy8gQHBhcmFtIHt2YXJpYWJsZX0gJGNvbG9yIFsxXSAtIHNoYWRvdyBjb2xvclxuLy8vIEBncm91cCBsYXlvdXRcbi8vLyBAZXhhbXBsZVxuLy8vICAgZGl2IHtcbi8vLyAgICAgQGluY2x1ZGUgbWF0ZXJpYWwtc2hhZG93KDMpO1xuLy8vICAgfVxuLy8vIEBsaW5rIGh0dHBzOi8vY29kZXBlbi5pby9kYm94L3Blbi9SYXdCRVdcbi8vLyBAYXV0aG9yIFwiRGFuaWVsIEJveFwiXG5AbWl4aW4gbWF0ZXJpYWwtc2hhZG93KCR6LWRlcHRoOiAxLCAkc3RyZW5ndGg6IDEsICRjb2xvcjogYmxhY2spIHtcbiAgQGlmICR6LWRlcHRoID09IDEge1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKCRjb2xvciwgJHN0cmVuZ3RoICogMC4xNCksXG4gICAgICAwIDFweCAycHggcmdiYSgkY29sb3IsICRzdHJlbmd0aCAqIDAuMjQpO1xuICB9XG4gIEBpZiAkei1kZXB0aCA9PSAyIHtcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgkY29sb3IsICRzdHJlbmd0aCAqIDAuMTYpLFxuICAgICAgMCAzcHggNnB4IHJnYmEoJGNvbG9yLCAkc3RyZW5ndGggKiAwLjIzKTtcbiAgfVxuICBAaWYgJHotZGVwdGggPT0gMyB7XG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgkY29sb3IsICRzdHJlbmd0aCAqIDAuMTkpLFxuICAgICAgMCA2cHggNnB4IHJnYmEoJGNvbG9yLCAkc3RyZW5ndGggKiAwLjIzKTtcbiAgfVxuICBAaWYgJHotZGVwdGggPT0gNCB7XG4gICAgYm94LXNoYWRvdzogMCAxNXB4IDMwcHggcmdiYSgkY29sb3IsICRzdHJlbmd0aCAqIDAuMjUpLFxuICAgICAgMCAxMHB4IDEwcHggcmdiYSgkY29sb3IsICRzdHJlbmd0aCAqIDAuMjIpO1xuICB9XG4gIEBpZiAkei1kZXB0aCA9PSA1IHtcbiAgICBib3gtc2hhZG93OiAwIDIwcHggNDBweCByZ2JhKCRjb2xvciwgJHN0cmVuZ3RoICogMC4zKSxcbiAgICAgIDAgMTVweCAxMnB4IHJnYmEoJGNvbG9yLCAkc3RyZW5ndGggKiAwLjIyKTtcbiAgfVxuICBAaWYgKCR6LWRlcHRoIDwgMSkgb3IgKCR6LWRlcHRoID4gNSkge1xuICAgIEB3YXJuIFwiJHotZGVwdGggbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDVcIjtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManufacturerPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-manufacturer-page",
                templateUrl: "./manufacturer-page.component.html",
                styleUrls: ["./manufacturer-page.component.scss"],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: src_app_modules_manufacturers_manufacturers_service__WEBPACK_IMPORTED_MODULE_3__["ManufacturersService"] }, { type: _product_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/manufacturers/manufacturers-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/manufacturers/manufacturers-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ManufacturersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManufacturersRoutingModule", function() { return ManufacturersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _manufactures_page_manufactures_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manufactures-page/manufactures-page.component */ "./src/app/modules/manufacturers/manufactures-page/manufactures-page.component.ts");
/* harmony import */ var _manufacturer_page_manufacturer_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manufacturer-page/manufacturer-page.component */ "./src/app/modules/manufacturers/manufacturer-page/manufacturer-page.component.ts");






const routes = [
    {
        path: "",
        component: _manufactures_page_manufactures_page_component__WEBPACK_IMPORTED_MODULE_2__["ManufacturesPageComponent"],
    },
    {
        path: ":id",
        component: _manufacturer_page_manufacturer_page_component__WEBPACK_IMPORTED_MODULE_3__["ManufacturerPageComponent"],
    },
];
class ManufacturersRoutingModule {
}
ManufacturersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ManufacturersRoutingModule });
ManufacturersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ManufacturersRoutingModule_Factory(t) { return new (t || ManufacturersRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ManufacturersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManufacturersRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/manufacturers/manufacturers-slider/manufacturers-slider.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/manufacturers/manufacturers-slider/manufacturers-slider.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ManufacturersSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManufacturersSliderComponent", function() { return ManufacturersSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const _c0 = function (a0) { return [a0]; };
function ManufacturersSliderComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r177 = ctx.$implicit;
    const ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, "/manufacturers/" + m_r177.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r176.hoststatic + (m_r177.image == null ? null : m_r177.image.src), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", m_r177.name);
} }
class ManufacturersSliderComponent {
    constructor() {
        this.list = [];
        this.hoststatic = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].hoststatic;
    }
    ngOnInit() {
    }
    moveRight() { }
    moveLeft() { }
}
ManufacturersSliderComponent.ɵfac = function ManufacturersSliderComponent_Factory(t) { return new (t || ManufacturersSliderComponent)(); };
ManufacturersSliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManufacturersSliderComponent, selectors: [["app-manufacturers-slider"]], inputs: { list: "list" }, decls: 7, vars: 1, consts: [[1, "flex", "right"], [1, "button", "transparent", "prev", 3, "click"], [1, "button", "transparent", "next", 3, "click"], [2, "overflow", "hidden", "flex-direction", "row"], ["drag-scroll-item", "", "class", "ratio", 3, "routerLink", 4, "ngFor", "ngForOf"], ["drag-scroll-item", "", 1, "ratio", 3, "routerLink"], [1, "r3x1"], [1, "contain", 3, "src", "alt"]], template: function ManufacturersSliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManufacturersSliderComponent_Template_button_click_1_listener() { return ctx.moveLeft(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManufacturersSliderComponent_Template_button_click_3_listener() { return ctx.moveRight(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ManufacturersSliderComponent_a_6_Template, 3, 5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.list);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n[drag-scroll-item][_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 0 1px 3px rgba(178, 178, 178, 0.14), 0 1px 2px rgba(178, 178, 178, 0.24);\n  border-radius: 5px;\n}\n[drag-scroll-item][_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 5px;\n}\n[drag-scroll-item][_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  flex-shrink: 0;\n  width: calc(20% - 32px);\n  background-color: white;\n  margin: 16px;\n  box-shadow: 0 1px 3px rgba(178, 178, 178, 0.14), 0 1px 2px rgba(178, 178, 178, 0.24);\n  transition: all 0.2s ease-in-out 0s;\n  border-radius: 5px;\n}\n[drag-scroll-item][_ngcontent-%COMP%]:hover {\n  box-shadow: 0 3px 6px rgba(128, 128, 128, 0.16), 0 3px 6px rgba(128, 128, 128, 0.23);\n  transform: scale(1.005);\n}\n@media (max-width: 800px) {\n  [drag-scroll-item][_ngcontent-%COMP%] {\n    width: calc(33% - 16px);\n    margin: 8px;\n  }\n}\n@media (max-width: 480px) {\n  [drag-scroll-item][_ngcontent-%COMP%] {\n    width: calc(50% - 16px);\n    margin: 8px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92b2xvZGFidWtvdnNraWovRGVza3RvcC9uZy1zaG93dS1jbGllbnQvc3JjL3N0eWxlcy9yYWlzaW5zL192YXJpYWJsZXMuc2NzcyIsIi9Vc2Vycy92b2xvZGFidWtvdnNraWovRGVza3RvcC9uZy1zaG93dS1jbGllbnQvc3JjL2FwcC9tb2R1bGVzL21hbnVmYWN0dXJlcnMvbWFudWZhY3R1cmVycy1zbGlkZXIvbWFudWZhY3R1cmVycy1zbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFudWZhY3R1cmVycy9tYW51ZmFjdHVyZXJzLXNsaWRlci9tYW51ZmFjdHVyZXJzLXNsaWRlci5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy92b2xvZGFidWtvdnNraWovRGVza3RvcC9uZy1zaG93dS1jbGllbnQvc3JjL3N0eWxlcy9yYWlzaW5zL19tYXRlcmlhbC1zaGFkb3cubWl4aW4uc2NzcyIsIi9Vc2Vycy92b2xvZGFidWtvdnNraWovRGVza3RvcC9uZy1zaG93dS1jbGllbnQvc3JjL3N0eWxlcy9yYWlzaW5zL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQSxrQkFBQTtBQThCQSxlQUFBO0FBSUEsMkJBQUE7QUFPQSxlQUFBO0FBRUEsa0JBQUE7QUFpQ0EsZUFBQTtBQy9FQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsWUFBQTtBQ0lGO0FEREE7RUFDRSxXQUFBO0VFTUUsb0ZBQUE7RUZKRixrQkQwQk87QUV0QlQ7QURIRTtFQUNFLGtCRHdCSztBRW5CVDtBRERBO0VBQ0UseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkRkTTtFQ2VOLFlEdkJNO0VHZ0JKLG9GQUFBO0VDY0YsbUNBQUE7RUhKQSxrQkRZTztBRVJUO0FESEU7RUVQRSxvRkFBQTtFRlNBLHVCQUFBO0FDS0o7QUVuQkU7RUhtQkE7SUFDRSx1QkFBQTtJQUNBLFdBQUE7RUNJRjtBQUNGO0FFMUJFO0VIMEJBO0lBQ0UsdUJBQUE7SUFDQSxXQUFBO0VDR0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFudWZhY3R1cmVycy9tYW51ZmFjdHVyZXJzLXNsaWRlci9tYW51ZmFjdHVyZXJzLXNsaWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRzcGFjZTogMTZweDtcclxuXHJcbiR0aW1lOiAuMnM7XHJcbiRtb3Rpb246IGVhc2UtaW4tb3V0O1xyXG4kZWxhc3RpYzogY3ViaWMtYmV6aWVyKC43NSwtMC41LDAsMS43NSk7XHJcblxyXG4vKiAjcmVnaW9uIENvbG9ycyovXHJcblxyXG4kd2hpdGU6IHdoaXRlICFkZWZhdWx0O1xyXG5cclxuJGdyYXkxMDA6ICNmYWZhZmEgIWRlZmF1bHQ7XHJcbiRncmF5MjAwOiAjZWNlY2VjICFkZWZhdWx0O1xyXG4kZ3JheTMwMDogI2M0YzRjNCAhZGVmYXVsdDtcclxuJGdyYXk0MDA6ICNiMmIyYjIgIWRlZmF1bHQ7XHJcbiRncmF5NTAwOiAjODA4MDgwICFkZWZhdWx0O1xyXG4kZ3JheTYwMDogIzY0NjQ2NCAhZGVmYXVsdDtcclxuJGdyYXk3MDA6ICM0ODQ4NDggIWRlZmF1bHQ7XHJcbiRncmF5ODAwOiAjMzIzMjMyICFkZWZhdWx0O1xyXG4kZ3JheTg1MDogIzI0MjQyNCAhZGVmYXVsdDtcclxuJGdyYXk5MDA6ICMxNjE2MTYgIWRlZmF1bHQ7XHJcblxyXG4kYmxhY2s6IGJsYWNrICFkZWZhdWx0O1xyXG5cclxuJGJsdWU6ICAgICMxNjY0OTYgIWRlZmF1bHQ7XHJcbiRyZWQ6ICAgICAjZDQzMjQ4ICFkZWZhdWx0O1xyXG4kZ3JlZW46ICAgIzE2YjA2NCAhZGVmYXVsdDtcclxuJHllbGxvdzogICNmYmM1MzEgIWRlZmF1bHQ7XHJcbiRvcmFuZ2U6ICAjZmY4MDE2ICFkZWZhdWx0O1xyXG4kaW5kaWdvOiAgIzY0MTZlMCAhZGVmYXVsdDtcclxuJHBpbms6ICAgICNlMDMyYjIgIWRlZmF1bHQ7XHJcbiR0ZWFsOiAgICAjMTZjNDk2ICFkZWZhdWx0O1xyXG4kdmlvbGV0OiAgIzM5NEY2QyAhZGVmYXVsdDtcclxuXHJcbiRibGVhcjogJGdyYXkyMDA7XHJcbiRzbW9rZTogJGdyYXkyMDA7XHJcblxyXG4vKiAjZW5kcmVnaW9uICovXHJcblxyXG4kcmFkaXVzOiA1cHg7XHJcblxyXG4vKiAjcmVnaW9uIENvbG9ycyBPdmVycmlkZSovXHJcblxyXG4kcmVkOiAjOUYxOTQxO1xyXG5cclxuLy8gc2V0IHByaW1hcnkgY29sb3JcclxuJHByaW1hcnk6ICRyZWQ7XHJcblxyXG4vKiAjZW5kcmVnaW9uICovXHJcblxyXG4vKiAjcmVnaW9uIEZvbnRzICovXHJcblxyXG5cclxuJGZvbnRGYW1pbHlTYW5zU2VyaWY6IFwiT3BlbiBzYW5zXCIsIFwiU2Vnb2UgVUlcIiwgQXJpYWwsIHNhbnMtc2VyaWYgIWRlZmF1bHQ7XHJcbi8vICRmb250RmFtaWx5U2Fuc1NlcmlmOiBcIk9wZW4gc2Fuc1wiLCBcIlNlZ29lIFVJXCIsIEFyaWFsLCBzYW5zLXNlcmlmLCAhZGVmYXVsdDtcclxuJGZvbnRGYW1pbHlNb25vc3BhY2U6ICBDb25zb2xhcywgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2UgIWRlZmF1bHQ7XHJcbiRmb250RmFtaWx5OiAkZm9udEZhbWlseVNhbnNTZXJpZiAhZGVmYXVsdDtcclxuXHJcblxyXG4kZm9udFNpemU6IDFyZW0gIWRlZmF1bHQ7XHJcbiRmb250U2l6ZUxhcmdlOiAoMS4yOHJlbSkgIWRlZmF1bHQ7XHJcbiRmb250U2l6ZVNtYWxsOiAoLjhyZW0pICFkZWZhdWx0O1xyXG5cclxuJGZvbnRXZWlnaHRMaWdodDogMzAwICFkZWZhdWx0O1xyXG4kZm9udFdlaWdodE5vcm1hbDogNDAwICFkZWZhdWx0O1xyXG4kZm9udFdlaWdodEJvbGQ6IDcwMCAhZGVmYXVsdDtcclxuXHJcbiRmb250V2VpZ2h0OiAkZm9udFdlaWdodE5vcm1hbCAhZGVmYXVsdDtcclxuJGxpbmVIZWlnaHQ6IDEuMTUgIWRlZmF1bHQ7XHJcblxyXG4kZm9udFNpemVIMTogMi4yOHJlbSAhZGVmYXVsdDtcclxuJGZvbnRTaXplSDI6IDEuOTZyZW0gIWRlZmF1bHQ7XHJcbiRmb250U2l6ZUgzOiAxLjY0cmVtICFkZWZhdWx0O1xyXG4kZm9udFNpemVINDogMS4zMnJlbSAhZGVmYXVsdDtcclxuJGZvbnRTaXplSDU6IDEuMTZyZW0gIWRlZmF1bHQ7XHJcbiRmb250U2l6ZUg2OiAkZm9udFNpemUgIWRlZmF1bHQ7XHJcblxyXG5cclxuJGZvbnRTaXplRDE6IDMuNTZyZW0gIWRlZmF1bHQ7XHJcbiRmb250U2l6ZUQyOiAyLjI4cmVtICFkZWZhdWx0O1xyXG4kZm9udFNpemVEMzogMS42NHJlbSAhZGVmYXVsdDtcclxuJGZvbnRTaXplRDQ6IDEuMzJyZW0gIWRlZmF1bHQ7XHJcblxyXG4vKiAjZW5kcmVnaW9uICovXHJcblxyXG4vLyBnb2xkZW4gcmF0aW9cclxuXHJcbiRncl9zaG9ydGVyOiAzOC4xOTY2O1xyXG4kZ3JfbG9uZ2VyOiA2MS44MDM0OyIsIkBpbXBvcnQgXCJ+c3JjL3N0eWxlcy9yYWlzaW5zL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIn5zcmMvc3R5bGVzL3JhaXNpbnMvbWl4aW5zXCI7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBncmFiO1xufVxuXG5bZHJhZy1zY3JvbGwtaXRlbV0ge1xuICB3aWR0aDogMTAwJTtcbiAgQGluY2x1ZGUgbWF0ZXJpYWwtc2hhZG93KDEsIDEsICRncmF5NDAwKTtcbiAgYm9yZGVyLXJhZGl1czogJHJhZGl1cztcbiAgaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiAgJHJhZGl1cztcbiAgfVxufVxuXG5bZHJhZy1zY3JvbGwtaXRlbV0ge1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHdpZHRoOiBjYWxjKDIwJSAtICN7JHNwYWNlICogMn0pO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4gIG1hcmdpbjogJHNwYWNlO1xuICBAaW5jbHVkZSBtYXRlcmlhbC1zaGFkb3coMSwgMSwgJGdyYXk0MDApO1xuICBAaW5jbHVkZSB0cmFuc2l0aW9uKCk7XG4gIGJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG4gICY6aG92ZXIge1xuICAgIEBpbmNsdWRlIG1hdGVyaWFsLXNoYWRvdygyLCAxLCAkZ3JheTUwMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAwNSk7XG4gIH1cbn1cblxuQGluY2x1ZGUgc2NyZWVuLXcoODAwcHgpIHtcbiAgW2RyYWctc2Nyb2xsLWl0ZW1dIHtcbiAgICB3aWR0aDogY2FsYygzMyUgLSAjeyRzcGFjZX0pO1xuICAgIG1hcmdpbjogJHNwYWNlLzI7XG4gIH1cbn1cblxuQGluY2x1ZGUgc2NyZWVuLXcoNDgwcHgpIHtcbiAgW2RyYWctc2Nyb2xsLWl0ZW1dIHtcbiAgICB3aWR0aDogY2FsYyg1MCUgLSAjeyRzcGFjZX0pO1xuICAgIG1hcmdpbjogJHNwYWNlLzI7XG4gIH1cbn1cblxuLy8gLm5leHQsIC5wcmV2IHtcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgdG9wOiA1MCU7XG4vLyAgICAgbGVmdDogMDtcbi8vICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4vLyB9XG5cbi8vIC5uZXh0IHtcbi8vICAgICBsZWZ0OiB1bnNldDtcbi8vICAgICByaWdodDogMDtcbi8vIH1cbiIsIi8qICNyZWdpb24gQ29sb3JzKi9cbi8qICNlbmRyZWdpb24gKi9cbi8qICNyZWdpb24gQ29sb3JzIE92ZXJyaWRlKi9cbi8qICNlbmRyZWdpb24gKi9cbi8qICNyZWdpb24gRm9udHMgKi9cbi8qICNlbmRyZWdpb24gKi9cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBncmFiO1xufVxuXG5bZHJhZy1zY3JvbGwtaXRlbV0ge1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMTc4LCAxNzgsIDE3OCwgMC4xNCksIDAgMXB4IDJweCByZ2JhKDE3OCwgMTc4LCAxNzgsIDAuMjQpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5bZHJhZy1zY3JvbGwtaXRlbV0gaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5bZHJhZy1zY3JvbGwtaXRlbV0ge1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHdpZHRoOiBjYWxjKDIwJSAtIDMycHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAxNnB4O1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgxNzgsIDE3OCwgMTc4LCAwLjE0KSwgMCAxcHggMnB4IHJnYmEoMTc4LCAxNzgsIDE3OCwgMC4yNCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0IDBzO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5bZHJhZy1zY3JvbGwtaXRlbV06aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yMyk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMDUpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcbiAgW2RyYWctc2Nyb2xsLWl0ZW1dIHtcbiAgICB3aWR0aDogY2FsYygzMyUgLSAxNnB4KTtcbiAgICBtYXJnaW46IDhweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIFtkcmFnLXNjcm9sbC1pdGVtXSB7XG4gICAgd2lkdGg6IGNhbGMoNTAlIC0gMTZweCk7XG4gICAgbWFyZ2luOiA4cHg7XG4gIH1cbn0iLCIvLy0gTWl4aW46IE1hdGVyaWFsIFNoYWRvd1xuLy8vXG4vLy8gQm94IHNoYWRvd3MgYmFzZWQgb24gNSBNYXRlcmlhbCBEZXNpZ24gcHJlc2V0cztcbi8vL1xuLy8vIEBwYXJhbSB7dmFyaWFibGV9ICR6LWRlcHRoIFsxXSAtIHNoYWRvdyBkaXN0YW5jZSBvbiB6LWF4aXNcbi8vLyBAcGFyYW0ge3ZhcmlhYmxlfSAkc3RyZW5ndGggWzFdIC0gbXVsdGlwbGllciBmb3Igc2hhZG93IHN0cmVuZ3RoL2RhcmtuZXNzXG4vLy8gQHBhcmFtIHt2YXJpYWJsZX0gJGNvbG9yIFsxXSAtIHNoYWRvdyBjb2xvclxuLy8vIEBncm91cCBsYXlvdXRcbi8vLyBAZXhhbXBsZVxuLy8vICAgZGl2IHtcbi8vLyAgICAgQGluY2x1ZGUgbWF0ZXJpYWwtc2hhZG93KDMpO1xuLy8vICAgfVxuLy8vIEBsaW5rIGh0dHBzOi8vY29kZXBlbi5pby9kYm94L3Blbi9SYXdCRVdcbi8vLyBAYXV0aG9yIFwiRGFuaWVsIEJveFwiXG5AbWl4aW4gbWF0ZXJpYWwtc2hhZG93KCR6LWRlcHRoOiAxLCAkc3RyZW5ndGg6IDEsICRjb2xvcjogYmxhY2spIHtcbiAgQGlmICR6LWRlcHRoID09IDEge1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKCRjb2xvciwgJHN0cmVuZ3RoICogMC4xNCksXG4gICAgICAwIDFweCAycHggcmdiYSgkY29sb3IsICRzdHJlbmd0aCAqIDAuMjQpO1xuICB9XG4gIEBpZiAkei1kZXB0aCA9PSAyIHtcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgkY29sb3IsICRzdHJlbmd0aCAqIDAuMTYpLFxuICAgICAgMCAzcHggNnB4IHJnYmEoJGNvbG9yLCAkc3RyZW5ndGggKiAwLjIzKTtcbiAgfVxuICBAaWYgJHotZGVwdGggPT0gMyB7XG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgkY29sb3IsICRzdHJlbmd0aCAqIDAuMTkpLFxuICAgICAgMCA2cHggNnB4IHJnYmEoJGNvbG9yLCAkc3RyZW5ndGggKiAwLjIzKTtcbiAgfVxuICBAaWYgJHotZGVwdGggPT0gNCB7XG4gICAgYm94LXNoYWRvdzogMCAxNXB4IDMwcHggcmdiYSgkY29sb3IsICRzdHJlbmd0aCAqIDAuMjUpLFxuICAgICAgMCAxMHB4IDEwcHggcmdiYSgkY29sb3IsICRzdHJlbmd0aCAqIDAuMjIpO1xuICB9XG4gIEBpZiAkei1kZXB0aCA9PSA1IHtcbiAgICBib3gtc2hhZG93OiAwIDIwcHggNDBweCByZ2JhKCRjb2xvciwgJHN0cmVuZ3RoICogMC4zKSxcbiAgICAgIDAgMTVweCAxMnB4IHJnYmEoJGNvbG9yLCAkc3RyZW5ndGggKiAwLjIyKTtcbiAgfVxuICBAaWYgKCR6LWRlcHRoIDwgMSkgb3IgKCR6LWRlcHRoID4gNSkge1xuICAgIEB3YXJuIFwiJHotZGVwdGggbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDVcIjtcbiAgfVxufVxuIiwiQGltcG9ydCAnbWF0ZXJpYWwtc2hhZG93Lm1peGluJztcblxuQG1peGluIHplcm8ge1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbkBtaXhpbiBjb2wtd2lkdGgoJHdpZHRoKSB7XG4gIGZsZXgtYmFzaXM6ICR3aWR0aDtcbiAgbWF4LXdpZHRoOiAkd2lkdGg7XG59XG5cbkBtaXhpbiBzY3JlZW4tdygkbXcpIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRtdykge1xuICAgICAgQGNvbnRlbnRcbiAgfVxufVxuXG5AbWl4aW4gdHJhbnNpdGlvbigkZWxlbWVudDogYWxsLCAkdDogJHRpbWUsICRkZWxheTogMHMpIHtcbiAgQGlmICRlbGVtZW50PT1kZWZhdWx0IHtcbiAgICAgICRlbGVtZW50OiBhbGw7XG4gIH1cbiAgQGlmICR0PT1kZWZhdWx0IHtcbiAgICAgICR0OiAkdGltZTtcbiAgfVxuICBAaWYgJGRlbGF5PT1kZWZhdWx0IHtcbiAgICAgICRkZWxheTogMHM7XG4gIH1cbiAgdHJhbnNpdGlvbjogJGVsZW1lbnQgJHQgJG1vdGlvbiAkZGVsYXk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManufacturersSliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-manufacturers-slider',
                templateUrl: './manufacturers-slider.component.html',
                styleUrls: ['./manufacturers-slider.component.scss']
            }]
    }], function () { return []; }, { list: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/modules/manufacturers/manufacturers.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/manufacturers/manufacturers.module.ts ***!
  \***************************************************************/
/*! exports provided: ManufacturersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManufacturersModule", function() { return ManufacturersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _manufacturers_slider_manufacturers_slider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manufacturers-slider/manufacturers-slider.component */ "./src/app/modules/manufacturers/manufacturers-slider/manufacturers-slider.component.ts");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/ui.module */ "./src/app/modules/ui/ui.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _manufactures_page_manufactures_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manufactures-page/manufactures-page.component */ "./src/app/modules/manufacturers/manufactures-page/manufactures-page.component.ts");
/* harmony import */ var _manufacturer_page_manufacturer_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manufacturer-page/manufacturer-page.component */ "./src/app/modules/manufacturers/manufacturer-page/manufacturer-page.component.ts");
/* harmony import */ var _manufacturers_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./manufacturers-routing.module */ "./src/app/modules/manufacturers/manufacturers-routing.module.ts");
/* harmony import */ var _product_product_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../product/product.module */ "./src/app/modules/product/product.module.ts");










class ManufacturersModule {
}
ManufacturersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ManufacturersModule });
ManufacturersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ManufacturersModule_Factory(t) { return new (t || ManufacturersModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _manufacturers_routing_module__WEBPACK_IMPORTED_MODULE_7__["ManufacturersRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _ui_ui_module__WEBPACK_IMPORTED_MODULE_3__["UiModule"], _product_product_module__WEBPACK_IMPORTED_MODULE_8__["ProductModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ManufacturersModule, { declarations: [_manufacturers_slider_manufacturers_slider_component__WEBPACK_IMPORTED_MODULE_2__["ManufacturersSliderComponent"],
        _manufactures_page_manufactures_page_component__WEBPACK_IMPORTED_MODULE_5__["ManufacturesPageComponent"],
        _manufacturer_page_manufacturer_page_component__WEBPACK_IMPORTED_MODULE_6__["ManufacturerPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _manufacturers_routing_module__WEBPACK_IMPORTED_MODULE_7__["ManufacturersRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _ui_ui_module__WEBPACK_IMPORTED_MODULE_3__["UiModule"], _product_product_module__WEBPACK_IMPORTED_MODULE_8__["ProductModule"]], exports: [_manufacturers_slider_manufacturers_slider_component__WEBPACK_IMPORTED_MODULE_2__["ManufacturersSliderComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManufacturersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _manufacturers_slider_manufacturers_slider_component__WEBPACK_IMPORTED_MODULE_2__["ManufacturersSliderComponent"],
                    _manufactures_page_manufactures_page_component__WEBPACK_IMPORTED_MODULE_5__["ManufacturesPageComponent"],
                    _manufacturer_page_manufacturer_page_component__WEBPACK_IMPORTED_MODULE_6__["ManufacturerPageComponent"],
                ],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _manufacturers_routing_module__WEBPACK_IMPORTED_MODULE_7__["ManufacturersRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _ui_ui_module__WEBPACK_IMPORTED_MODULE_3__["UiModule"], _product_product_module__WEBPACK_IMPORTED_MODULE_8__["ProductModule"]],
                exports: [_manufacturers_slider_manufacturers_slider_component__WEBPACK_IMPORTED_MODULE_2__["ManufacturersSliderComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/manufacturers/manufacturers.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/manufacturers/manufacturers.service.ts ***!
  \****************************************************************/
/*! exports provided: ManufacturersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManufacturersService", function() { return ManufacturersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _core_app_lang_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/app-lang.service */ "./src/app/modules/core/app-lang.service.ts");





class ManufacturersService {
    constructor(http, appLang) {
        this.http = http;
        this.appLang = appLang;
        this.list = [];
        this.count = 0;
        this.take = 20;
        this.page = 1;
        this.lang = "en";
        this.item = {
            code: 0,
            description: null,
            id: 0,
            image_id: 0,
            meta_description: null,
            meta_keywords: null,
            name: null,
            rating: 0,
            src: {
                src: null,
                src_mini: null,
            },
            image: {
                src: null,
                src_mini: null,
            },
            status: 1,
        };
    }
    get() {
        let skip = this.page * this.take - this.take;
        let lang = this.appLang.current;
        let params = `?lang=${lang}&skip=${skip}&take=${this.take}`;
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].manufacturers + params);
    }
    getBy(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].manufacturers + `/${id}`);
    }
}
ManufacturersService.ɵfac = function ManufacturersService_Factory(t) { return new (t || ManufacturersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_app_lang_service__WEBPACK_IMPORTED_MODULE_3__["AppLangService"])); };
ManufacturersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ManufacturersService, factory: ManufacturersService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManufacturersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _core_app_lang_service__WEBPACK_IMPORTED_MODULE_3__["AppLangService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/manufacturers/manufactures-page/manufactures-page.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/manufacturers/manufactures-page/manufactures-page.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ManufacturesPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManufacturesPageComponent", function() { return ManufacturesPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_modules_manufacturers_manufacturers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/manufacturers/manufacturers.service */ "./src/app/modules/manufacturers/manufacturers.service.ts");
/* harmony import */ var _ui_rap_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/rap/breadcrumbs/breadcrumbs.component */ "./src/app/modules/ui/rap/breadcrumbs/breadcrumbs.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ui_rap_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/rap/pagination/pagination.component */ "./src/app/modules/ui/rap/pagination/pagination.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

// import { NgxUiLoaderService } from "ngx-ui-loader";







const _c0 = function (a0) { return [a0]; };
function ManufacturesPageComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "View product");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r179 = ctx.$implicit;
    const ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, "/manufacturers/" + item_r179.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r178.hoststatic + (item_r179.image == null ? null : item_r179.image.src), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("alt", item_r179.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("raisins-show-rating medium rating-", item_r179.rating, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, "/manufacturers/" + item_r179.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r179.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, "/manufacturers/" + item_r179.id));
} }
class ManufacturesPageComponent {
    constructor(
    // private ngxService: NgxUiLoaderService,
    manufacturer) {
        this.manufacturer = manufacturer;
        this.hoststatic = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].hoststatic;
        this.Math = Math;
        this.breadcrumbs = [
            {
                link: "/",
                title: "Homepage"
            },
            {
                link: "manufacturers",
                title: "Manufacturers"
            }
        ];
        this.getHandler = data => {
            this.manufacturer.list = data.data ? data.data : data;
            this.manufacturer.count = data.count ? data.count : data.length;
            // this.ngxService.stopAll();
        };
    }
    pageToHandler(page) {
        this.manufacturer.page = page;
    }
    pagePrevHandler() {
        this.manufacturer.page--;
    }
    pageNextHandler() {
        this.manufacturer.page++;
    }
    pageChangedHandler() {
        this.get();
    }
    ngOnInit() {
        this.get();
    }
    get() {
        this.manufacturer.get().subscribe(this.getHandler);
        // this.ngxService.start();
    }
}
ManufacturesPageComponent.ɵfac = function ManufacturesPageComponent_Factory(t) { return new (t || ManufacturesPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modules_manufacturers_manufacturers_service__WEBPACK_IMPORTED_MODULE_2__["ManufacturersService"])); };
ManufacturesPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManufacturesPageComponent, selectors: [["app-manufactures-page"]], decls: 7, vars: 5, consts: [[3, "breadcrumbs"], [1, "d4", "text-center", "flex", "row", "center", "v_center", 2, "width", "100%"], [2, "margin-top", "0"], [1, "manufacturers"], ["class", "manufacturer", 4, "ngFor", "ngForOf"], [1, "radius", 3, "page", "total", "pagesToShow", "goNext", "goPrev", "goPage", "pageChanged"], [1, "manufacturer"], ["routerLinkActive", "router-link-active", 3, "routerLink"], [1, "ratio"], [1, "r3x1"], [1, "contain", 3, "src", "alt"], [1, "padding"], [1, "rating"], [1, "flex", "center"], ["routerLinkActive", "router-link-active", 1, "button", "more", 3, "routerLink"]], template: function ManufacturesPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rap-breadcrumbs", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Our Manufacturers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ManufacturesPageComponent_div_5_Template, 18, 15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-pagination", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("goNext", function ManufacturesPageComponent_Template_app_pagination_goNext_6_listener() { return ctx.pageNextHandler(); })("goPrev", function ManufacturesPageComponent_Template_app_pagination_goPrev_6_listener() { return ctx.pagePrevHandler(); })("goPage", function ManufacturesPageComponent_Template_app_pagination_goPage_6_listener($event) { return ctx.pageToHandler($event); })("pageChanged", function ManufacturesPageComponent_Template_app_pagination_pageChanged_6_listener() { return ctx.pageChangedHandler(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("breadcrumbs", ctx.breadcrumbs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.manufacturer.list);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("page", ctx.manufacturer.page)("total", ctx.Math.ceil(ctx.manufacturer.count / ctx.manufacturer.take))("pagesToShow", 5);
    } }, directives: [_ui_rap_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ui_rap_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__["PaginationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n}\n.manufacturers[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.manufacturers[_ngcontent-%COMP%]   .manufacturer[_ngcontent-%COMP%] {\n  transform-origin: center bottom;\n  background-color: white;\n  width: calc(25% - 32px);\n  margin: 16px;\n  box-shadow: 0 1px 3px rgba(178, 178, 178, 0.14), 0 1px 2px rgba(178, 178, 178, 0.24);\n  transition: all 0.2s ease-in-out 0s;\n  border-radius: 5px;\n}\n.manufacturers[_ngcontent-%COMP%]   .manufacturer[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 3px 6px rgba(128, 128, 128, 0.16), 0 3px 6px rgba(128, 128, 128, 0.23);\n  transform: scale(1.005);\n}\n.manufacturers[_ngcontent-%COMP%]   .manufacturer[_ngcontent-%COMP%]   .ratio[_ngcontent-%COMP%], .manufacturers[_ngcontent-%COMP%]   .manufacturer[_ngcontent-%COMP%]   .cinema[_ngcontent-%COMP%], .manufacturers[_ngcontent-%COMP%]   .manufacturer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n.manufacturers[_ngcontent-%COMP%]   .manufacturer[_ngcontent-%COMP%]   .raisins-show-rating[_ngcontent-%COMP%] {\n  margin: 4px 0;\n}\n.more[_ngcontent-%COMP%] {\n  font-weight: normal;\n  padding: 4px 0;\n  border-bottom: 2px solid transparent;\n  color: #9F1941;\n  text-decoration: none;\n  background-color: unset;\n  transition: all 0.2s ease-in-out 0s;\n}\n.more[_ngcontent-%COMP%]:hover {\n  border-color: #9F1941;\n  background-color: unset;\n}\n.more[_ngcontent-%COMP%]:active {\n  background-color: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92b2xvZGFidWtvdnNraWovRGVza3RvcC9uZy1zaG93dS1jbGllbnQvc3JjL3N0eWxlcy9yYWlzaW5zL192YXJpYWJsZXMuc2NzcyIsIi9Vc2Vycy92b2xvZGFidWtvdnNraWovRGVza3RvcC9uZy1zaG93dS1jbGllbnQvc3JjL2FwcC9tb2R1bGVzL21hbnVmYWN0dXJlcnMvbWFudWZhY3R1cmVzLXBhZ2UvbWFudWZhY3R1cmVzLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFudWZhY3R1cmVycy9tYW51ZmFjdHVyZXMtcGFnZS9tYW51ZmFjdHVyZXMtcGFnZS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy92b2xvZGFidWtvdnNraWovRGVza3RvcC9uZy1zaG93dS1jbGllbnQvc3JjL3N0eWxlcy9yYWlzaW5zL19tYXRlcmlhbC1zaGFkb3cubWl4aW4uc2NzcyIsIi9Vc2Vycy92b2xvZGFidWtvdnNraWovRGVza3RvcC9uZy1zaG93dS1jbGllbnQvc3JjL3N0eWxlcy9yYWlzaW5zL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQSxrQkFBQTtBQThCQSxlQUFBO0FBSUEsMkJBQUE7QUFPQSxlQUFBO0FBRUEsa0JBQUE7QUFpQ0EsZUFBQTtBQy9FQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQ0lGO0FEREE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDSUo7QURGSTtFQUVJLCtCQUFBO0VBQ0EsdUJEUkE7RUNTQSx1QkFBQTtFQUNBLFlEbEJBO0VHZ0JKLG9GQUFBO0VDY0YsbUNBQUE7RUhUTSxrQkRpQkM7QUVkVDtBREZRO0VFRkosb0ZBQUE7RUZJUSx1QkFBQTtBQ0laO0FERlE7RUFDSSwyQkRXSDtFQ1ZHLDRCRFVIO0FFTlQ7QURGUztFQUNJLGFBQUE7QUNJYjtBRENBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0NBQUE7RUFDQSxjREVFO0VDREYscUJBQUE7RUFDQSx1QkFBQTtFR1pGLG1DQUFBO0FGZUY7QURBSTtFQUNFLHFCREpBO0VDS0EsdUJBQUE7QUNFTjtBREFJO0VBQ0UsdUJBQUE7QUNFTiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFudWZhY3R1cmVycy9tYW51ZmFjdHVyZXMtcGFnZS9tYW51ZmFjdHVyZXMtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRzcGFjZTogMTZweDtcclxuXHJcbiR0aW1lOiAuMnM7XHJcbiRtb3Rpb246IGVhc2UtaW4tb3V0O1xyXG4kZWxhc3RpYzogY3ViaWMtYmV6aWVyKC43NSwtMC41LDAsMS43NSk7XHJcblxyXG4vKiAjcmVnaW9uIENvbG9ycyovXHJcblxyXG4kd2hpdGU6IHdoaXRlICFkZWZhdWx0O1xyXG5cclxuJGdyYXkxMDA6ICNmYWZhZmEgIWRlZmF1bHQ7XHJcbiRncmF5MjAwOiAjZWNlY2VjICFkZWZhdWx0O1xyXG4kZ3JheTMwMDogI2M0YzRjNCAhZGVmYXVsdDtcclxuJGdyYXk0MDA6ICNiMmIyYjIgIWRlZmF1bHQ7XHJcbiRncmF5NTAwOiAjODA4MDgwICFkZWZhdWx0O1xyXG4kZ3JheTYwMDogIzY0NjQ2NCAhZGVmYXVsdDtcclxuJGdyYXk3MDA6ICM0ODQ4NDggIWRlZmF1bHQ7XHJcbiRncmF5ODAwOiAjMzIzMjMyICFkZWZhdWx0O1xyXG4kZ3JheTg1MDogIzI0MjQyNCAhZGVmYXVsdDtcclxuJGdyYXk5MDA6ICMxNjE2MTYgIWRlZmF1bHQ7XHJcblxyXG4kYmxhY2s6IGJsYWNrICFkZWZhdWx0O1xyXG5cclxuJGJsdWU6ICAgICMxNjY0OTYgIWRlZmF1bHQ7XHJcbiRyZWQ6ICAgICAjZDQzMjQ4ICFkZWZhdWx0O1xyXG4kZ3JlZW46ICAgIzE2YjA2NCAhZGVmYXVsdDtcclxuJHllbGxvdzogICNmYmM1MzEgIWRlZmF1bHQ7XHJcbiRvcmFuZ2U6ICAjZmY4MDE2ICFkZWZhdWx0O1xyXG4kaW5kaWdvOiAgIzY0MTZlMCAhZGVmYXVsdDtcclxuJHBpbms6ICAgICNlMDMyYjIgIWRlZmF1bHQ7XHJcbiR0ZWFsOiAgICAjMTZjNDk2ICFkZWZhdWx0O1xyXG4kdmlvbGV0OiAgIzM5NEY2QyAhZGVmYXVsdDtcclxuXHJcbiRibGVhcjogJGdyYXkyMDA7XHJcbiRzbW9rZTogJGdyYXkyMDA7XHJcblxyXG4vKiAjZW5kcmVnaW9uICovXHJcblxyXG4kcmFkaXVzOiA1cHg7XHJcblxyXG4vKiAjcmVnaW9uIENvbG9ycyBPdmVycmlkZSovXHJcblxyXG4kcmVkOiAjOUYxOTQxO1xyXG5cclxuLy8gc2V0IHByaW1hcnkgY29sb3JcclxuJHByaW1hcnk6ICRyZWQ7XHJcblxyXG4vKiAjZW5kcmVnaW9uICovXHJcblxyXG4vKiAjcmVnaW9uIEZvbnRzICovXHJcblxyXG5cclxuJGZvbnRGYW1pbHlTYW5zU2VyaWY6IFwiT3BlbiBzYW5zXCIsIFwiU2Vnb2UgVUlcIiwgQXJpYWwsIHNhbnMtc2VyaWYgIWRlZmF1bHQ7XHJcbi8vICRmb250RmFtaWx5U2Fuc1NlcmlmOiBcIk9wZW4gc2Fuc1wiLCBcIlNlZ29lIFVJXCIsIEFyaWFsLCBzYW5zLXNlcmlmLCAhZGVmYXVsdDtcclxuJGZvbnRGYW1pbHlNb25vc3BhY2U6ICBDb25zb2xhcywgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2UgIWRlZmF1bHQ7XHJcbiRmb250RmFtaWx5OiAkZm9udEZhbWlseVNhbnNTZXJpZiAhZGVmYXVsdDtcclxuXHJcblxyXG4kZm9udFNpemU6IDFyZW0gIWRlZmF1bHQ7XHJcbiRmb250U2l6ZUxhcmdlOiAoMS4yOHJlbSkgIWRlZmF1bHQ7XHJcbiRmb250U2l6ZVNtYWxsOiAoLjhyZW0pICFkZWZhdWx0O1xyXG5cclxuJGZvbnRXZWlnaHRMaWdodDogMzAwICFkZWZhdWx0O1xyXG4kZm9udFdlaWdodE5vcm1hbDogNDAwICFkZWZhdWx0O1xyXG4kZm9udFdlaWdodEJvbGQ6IDcwMCAhZGVmYXVsdDtcclxuXHJcbiRmb250V2VpZ2h0OiAkZm9udFdlaWdodE5vcm1hbCAhZGVmYXVsdDtcclxuJGxpbmVIZWlnaHQ6IDEuMTUgIWRlZmF1bHQ7XHJcblxyXG4kZm9udFNpemVIMTogMi4yOHJlbSAhZGVmYXVsdDtcclxuJGZvbnRTaXplSDI6IDEuOTZyZW0gIWRlZmF1bHQ7XHJcbiRmb250U2l6ZUgzOiAxLjY0cmVtICFkZWZhdWx0O1xyXG4kZm9udFNpemVINDogMS4zMnJlbSAhZGVmYXVsdDtcclxuJGZvbnRTaXplSDU6IDEuMTZyZW0gIWRlZmF1bHQ7XHJcbiRmb250U2l6ZUg2OiAkZm9udFNpemUgIWRlZmF1bHQ7XHJcblxyXG5cclxuJGZvbnRTaXplRDE6IDMuNTZyZW0gIWRlZmF1bHQ7XHJcbiRmb250U2l6ZUQyOiAyLjI4cmVtICFkZWZhdWx0O1xyXG4kZm9udFNpemVEMzogMS42NHJlbSAhZGVmYXVsdDtcclxuJGZvbnRTaXplRDQ6IDEuMzJyZW0gIWRlZmF1bHQ7XHJcblxyXG4vKiAjZW5kcmVnaW9uICovXHJcblxyXG4vLyBnb2xkZW4gcmF0aW9cclxuXHJcbiRncl9zaG9ydGVyOiAzOC4xOTY2O1xyXG4kZ3JfbG9uZ2VyOiA2MS44MDM0OyIsIkBpbXBvcnQgXCJ+c3JjL3N0eWxlcy9yYWlzaW5zL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIn5zcmMvc3R5bGVzL3JhaXNpbnMvbWl4aW5zXCI7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm1hbnVmYWN0dXJlcnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAubWFudWZhY3R1cmVyIHtcbiAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQ7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgd2lkdGg6IGNhbGMoMjUlIC0gI3skc3BhY2UqMn0pO1xuICAgICAgICBtYXJnaW46ICRzcGFjZTtcbiAgICAgICAgQGluY2x1ZGUgbWF0ZXJpYWwtc2hhZG93KDEsIDEsICRncmF5NDAwKTtcbiAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbigpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIG1hdGVyaWFsLXNoYWRvdygyLCAxLCAkZ3JheTUwMCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDA1KTtcbiAgICAgICAgfVxuICAgICAgICAucmF0aW8sIC5jaW5lbWEsIGltZyAge1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJHJhZGl1cztcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkcmFkaXVzO1xuICAgICAgICB9XG4gICAgICAgICAucmFpc2lucy1zaG93LXJhdGluZyB7XG4gICAgICAgICAgICAgbWFyZ2luOiAkc3BhY2UvNCAwO1xuICAgICAgICAgfVxuICAgIH1cbn1cblxuLm1vcmUge1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgcGFkZGluZzogJHNwYWNlLzQgMDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICRwcmltYXJ5O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcbiAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKCk7XG4gIFxuICAgICY6aG92ZXIge1xuICAgICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xuICAgIH1cbiAgICAmOmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcbiAgICB9XG4gIH0iLCIvKiAjcmVnaW9uIENvbG9ycyovXG4vKiAjZW5kcmVnaW9uICovXG4vKiAjcmVnaW9uIENvbG9ycyBPdmVycmlkZSovXG4vKiAjZW5kcmVnaW9uICovXG4vKiAjcmVnaW9uIEZvbnRzICovXG4vKiAjZW5kcmVnaW9uICovXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5tYW51ZmFjdHVyZXJzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLm1hbnVmYWN0dXJlcnMgLm1hbnVmYWN0dXJlciB7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogY2FsYygyNSUgLSAzMnB4KTtcbiAgbWFyZ2luOiAxNnB4O1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgxNzgsIDE3OCwgMTc4LCAwLjE0KSwgMCAxcHggMnB4IHJnYmEoMTc4LCAxNzgsIDE3OCwgMC4yNCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0IDBzO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ubWFudWZhY3R1cmVycyAubWFudWZhY3R1cmVyOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMjMpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDA1KTtcbn1cbi5tYW51ZmFjdHVyZXJzIC5tYW51ZmFjdHVyZXIgLnJhdGlvLCAubWFudWZhY3R1cmVycyAubWFudWZhY3R1cmVyIC5jaW5lbWEsIC5tYW51ZmFjdHVyZXJzIC5tYW51ZmFjdHVyZXIgaW1nIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xufVxuLm1hbnVmYWN0dXJlcnMgLm1hbnVmYWN0dXJlciAucmFpc2lucy1zaG93LXJhdGluZyB7XG4gIG1hcmdpbjogNHB4IDA7XG59XG5cbi5tb3JlIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgcGFkZGluZzogNHB4IDA7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICM5RjE5NDE7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0IDBzO1xufVxuLm1vcmU6aG92ZXIge1xuICBib3JkZXItY29sb3I6ICM5RjE5NDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xufVxuLm1vcmU6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XG59IiwiLy8tIE1peGluOiBNYXRlcmlhbCBTaGFkb3dcbi8vL1xuLy8vIEJveCBzaGFkb3dzIGJhc2VkIG9uIDUgTWF0ZXJpYWwgRGVzaWduIHByZXNldHM7XG4vLy9cbi8vLyBAcGFyYW0ge3ZhcmlhYmxlfSAkei1kZXB0aCBbMV0gLSBzaGFkb3cgZGlzdGFuY2Ugb24gei1heGlzXG4vLy8gQHBhcmFtIHt2YXJpYWJsZX0gJHN0cmVuZ3RoIFsxXSAtIG11bHRpcGxpZXIgZm9yIHNoYWRvdyBzdHJlbmd0aC9kYXJrbmVzc1xuLy8vIEBwYXJhbSB7dmFyaWFibGV9ICRjb2xvciBbMV0gLSBzaGFkb3cgY29sb3Jcbi8vLyBAZ3JvdXAgbGF5b3V0XG4vLy8gQGV4YW1wbGVcbi8vLyAgIGRpdiB7XG4vLy8gICAgIEBpbmNsdWRlIG1hdGVyaWFsLXNoYWRvdygzKTtcbi8vLyAgIH1cbi8vLyBAbGluayBodHRwczovL2NvZGVwZW4uaW8vZGJveC9wZW4vUmF3QkVXXG4vLy8gQGF1dGhvciBcIkRhbmllbCBCb3hcIlxuQG1peGluIG1hdGVyaWFsLXNoYWRvdygkei1kZXB0aDogMSwgJHN0cmVuZ3RoOiAxLCAkY29sb3I6IGJsYWNrKSB7XG4gIEBpZiAkei1kZXB0aCA9PSAxIHtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgkY29sb3IsICRzdHJlbmd0aCAqIDAuMTQpLFxuICAgICAgMCAxcHggMnB4IHJnYmEoJGNvbG9yLCAkc3RyZW5ndGggKiAwLjI0KTtcbiAgfVxuICBAaWYgJHotZGVwdGggPT0gMiB7XG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoJGNvbG9yLCAkc3RyZW5ndGggKiAwLjE2KSxcbiAgICAgIDAgM3B4IDZweCByZ2JhKCRjb2xvciwgJHN0cmVuZ3RoICogMC4yMyk7XG4gIH1cbiAgQGlmICR6LWRlcHRoID09IDMge1xuICAgIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoJGNvbG9yLCAkc3RyZW5ndGggKiAwLjE5KSxcbiAgICAgIDAgNnB4IDZweCByZ2JhKCRjb2xvciwgJHN0cmVuZ3RoICogMC4yMyk7XG4gIH1cbiAgQGlmICR6LWRlcHRoID09IDQge1xuICAgIGJveC1zaGFkb3c6IDAgMTVweCAzMHB4IHJnYmEoJGNvbG9yLCAkc3RyZW5ndGggKiAwLjI1KSxcbiAgICAgIDAgMTBweCAxMHB4IHJnYmEoJGNvbG9yLCAkc3RyZW5ndGggKiAwLjIyKTtcbiAgfVxuICBAaWYgJHotZGVwdGggPT0gNSB7XG4gICAgYm94LXNoYWRvdzogMCAyMHB4IDQwcHggcmdiYSgkY29sb3IsICRzdHJlbmd0aCAqIDAuMyksXG4gICAgICAwIDE1cHggMTJweCByZ2JhKCRjb2xvciwgJHN0cmVuZ3RoICogMC4yMik7XG4gIH1cbiAgQGlmICgkei1kZXB0aCA8IDEpIG9yICgkei1kZXB0aCA+IDUpIHtcbiAgICBAd2FybiBcIiR6LWRlcHRoIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA1XCI7XG4gIH1cbn1cbiIsIkBpbXBvcnQgJ21hdGVyaWFsLXNoYWRvdy5taXhpbic7XG5cbkBtaXhpbiB6ZXJvIHtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG5AbWl4aW4gY29sLXdpZHRoKCR3aWR0aCkge1xuICBmbGV4LWJhc2lzOiAkd2lkdGg7XG4gIG1heC13aWR0aDogJHdpZHRoO1xufVxuXG5AbWl4aW4gc2NyZWVuLXcoJG13KSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkbXcpIHtcbiAgICAgIEBjb250ZW50XG4gIH1cbn1cblxuQG1peGluIHRyYW5zaXRpb24oJGVsZW1lbnQ6IGFsbCwgJHQ6ICR0aW1lLCAkZGVsYXk6IDBzKSB7XG4gIEBpZiAkZWxlbWVudD09ZGVmYXVsdCB7XG4gICAgICAkZWxlbWVudDogYWxsO1xuICB9XG4gIEBpZiAkdD09ZGVmYXVsdCB7XG4gICAgICAkdDogJHRpbWU7XG4gIH1cbiAgQGlmICRkZWxheT09ZGVmYXVsdCB7XG4gICAgICAkZGVsYXk6IDBzO1xuICB9XG4gIHRyYW5zaXRpb246ICRlbGVtZW50ICR0ICRtb3Rpb24gJGRlbGF5O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManufacturesPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-manufactures-page",
                templateUrl: "./manufactures-page.component.html",
                styleUrls: ["./manufactures-page.component.scss"]
            }]
    }], function () { return [{ type: src_app_modules_manufacturers_manufacturers_service__WEBPACK_IMPORTED_MODULE_2__["ManufacturersService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~src-app-modules-manufacturers-manufacturers-module~src-app-modules-showu-home-showu-home-module-es2015.js.map