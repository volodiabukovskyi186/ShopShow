(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-showu-home-showu-home-module"],{

/***/ "./src/app/modules/showu-home/showu-home-page/showu-home-page.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/showu-home/showu-home-page/showu-home-page.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ShowuHomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowuHomePageComponent", function() { return ShowuHomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _collection_collection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../collection/collection.service */ "./src/app/modules/collection/collection.service.ts");
/* harmony import */ var _core_app_lang_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/app-lang.service */ "./src/app/modules/core/app-lang.service.ts");
/* harmony import */ var _sallers_sallers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../sallers/sallers.service */ "./src/app/modules/sallers/sallers.service.ts");
/* harmony import */ var _product_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../product/product.service */ "./src/app/modules/product/product.service.ts");
/* harmony import */ var _manufacturers_manufacturers_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../manufacturers/manufacturers.service */ "./src/app/modules/manufacturers/manufacturers.service.ts");
/* harmony import */ var _review_review_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../review/review.service */ "./src/app/modules/review/review.service.ts");
/* harmony import */ var _sallers_sallers_slider_sallers_slider_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../sallers/sallers-slider/sallers-slider.component */ "./src/app/modules/sallers/sallers-slider/sallers-slider.component.ts");
/* harmony import */ var _ui_show_u_title_title_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/show-u/title/title.component */ "./src/app/modules/ui/show-u/title/title.component.ts");
/* harmony import */ var _welcome_statistic_welcome_statistic_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../welcome-statistic/welcome-statistic.component */ "./src/app/modules/showu-home/welcome-statistic/welcome-statistic.component.ts");
/* harmony import */ var _collection_collection_item_collection_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../collection/collection-item/collection-item.component */ "./src/app/modules/collection/collection-item/collection-item.component.ts");
/* harmony import */ var _product_product_slider_product_slider_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../product/product-slider/product-slider.component */ "./src/app/modules/product/product-slider/product-slider.component.ts");
/* harmony import */ var _review_rewiew_block_rewiew_block_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../review/rewiew-block/rewiew-block.component */ "./src/app/modules/review/rewiew-block/rewiew-block.component.ts");
/* harmony import */ var _manufacturers_manufacturers_slider_manufacturers_slider_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../manufacturers/manufacturers-slider/manufacturers-slider.component */ "./src/app/modules/manufacturers/manufacturers-slider/manufacturers-slider.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");


















const _c0 = function () { return ["/", "collections", "view"]; };
function ShowuHomePageComponent_app_collection_item_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-collection-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    const item_r226 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r226)("buttonText", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, "collection.details"))("routerLinks", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
} }
const _c1 = function () { return ["/", "collections"]; };
const _c2 = function (a0) { return { title: a0, cover: "assets/collections.png", subtitle: null, id: 0 }; };
class ShowuHomePageComponent {
    constructor(platformId, collection, appLang, slider, product, manufacturer, review) {
        this.platformId = platformId;
        this.collection = collection;
        this.appLang = appLang;
        this.slider = slider;
        this.product = product;
        this.manufacturer = manufacturer;
        this.review = review;
        this.getLastReviewsHandler = data => {
            this.review.data = data.data;
        };
        this.getHandler = (data) => {
            this.manufacturer.list = data.data;
            this.manufacturer.count = data.count;
        };
        this.sallerHandler = (data) => {
            this.slider.promotions = data;
        };
        this.collectionHandler = (data) => {
            this.collection.list = data.data;
        };
        this.i = 1;
        this.data = "2020-07-13";
    }
    ngOnInit() {
        this.slider.getProm().subscribe(this.sallerHandler);
        this.collection.getLastThree().subscribe(this.collectionHandler);
        this.review.get().subscribe(this.getLastReviewsHandler);
        this.manufacturer.get().subscribe(this.getHandler);
        this.product.getPopular().subscribe((data) => {
            this.product.popular = data.data.products;
        });
        this.product.getSallers().subscribe((data) => {
            this.product.sallers = data.data.products;
        });
    }
    onClick() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            this.i++;
            localStorage.setItem("showu", "showu" + this.i);
        }
    }
}
ShowuHomePageComponent.ɵfac = function ShowuHomePageComponent_Factory(t) { return new (t || ShowuHomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_collection_collection_service__WEBPACK_IMPORTED_MODULE_2__["CollectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_app_lang_service__WEBPACK_IMPORTED_MODULE_3__["AppLangService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sallers_sallers_service__WEBPACK_IMPORTED_MODULE_4__["SallersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_manufacturers_manufacturers_service__WEBPACK_IMPORTED_MODULE_6__["ManufacturersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_review_review_service__WEBPACK_IMPORTED_MODULE_7__["ReviewService"])); };
ShowuHomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowuHomePageComponent, selectors: [["app-showu-home-page"]], decls: 28, vars: 43, consts: [[3, "auto", "timeout", "slides"], [3, "title", "subtitle"], [2, "margin-bottom", "2rem"], [3, "title"], [1, "collections"], [3, "item", "buttonText", "routerLinks", 4, "ngFor", "ngForOf"], [3, "routerLinks", "buttonText", "host", "item"], [3, "products"], [3, "reviews"], [3, "list"], [3, "item", "buttonText", "routerLinks"]], template: function ShowuHomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sallers-slider", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "show-u-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-welcome-statistic", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "show-u-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ShowuHomePageComponent_app_collection_item_8_Template, 2, 6, "app-collection-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-collection-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "show-u-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-product-slider", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "show-u-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-rewiew-block", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "show-u-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-product-slider", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "show-u-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-manufacturers-slider", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("auto", true)("timeout", 5000)("slides", ctx.slider.promotions.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 20, "main.wellcome"))("subtitle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 22, "main.openUkraine"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 24, "main.newCollection"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.collection.list);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinks", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](40, _c1))("buttonText", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 26, "main.viewMoreCollection"))("host", null)("item", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](41, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 28, "main.moreCollections")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 30, "main.bestSellers"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("products", ctx.product.sallers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 32, "main.lastReviews"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("reviews", ctx.review.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 34, "main.popularProducts"))("subtitle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 36, "main.comeClearUsNow"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("products", ctx.product.popular);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 38, "main.ourManufacturers"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("list", ctx.manufacturer.list);
    } }, directives: [_sallers_sallers_slider_sallers_slider_component__WEBPACK_IMPORTED_MODULE_8__["SallersSliderComponent"], _ui_show_u_title_title_component__WEBPACK_IMPORTED_MODULE_9__["TitleComponent"], _welcome_statistic_welcome_statistic_component__WEBPACK_IMPORTED_MODULE_10__["WelcomeStatisticComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _collection_collection_item_collection_item_component__WEBPACK_IMPORTED_MODULE_11__["CollectionItemComponent"], _product_product_slider_product_slider_component__WEBPACK_IMPORTED_MODULE_12__["ProductSliderComponent"], _review_rewiew_block_rewiew_block_component__WEBPACK_IMPORTED_MODULE_13__["RewiewBlockComponent"], _manufacturers_manufacturers_slider_manufacturers_slider_component__WEBPACK_IMPORTED_MODULE_14__["ManufacturersSliderComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n}\n.collections[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.collections[_ngcontent-%COMP%]   app-collection-item[_ngcontent-%COMP%] {\n  width: calc(50% - 16px);\n  margin: 8px;\n}\n@media (max-width: 1024px) {\n  .collections[_ngcontent-%COMP%]   app-collection-item[_ngcontent-%COMP%] {\n    width: calc(50% - 16px);\n    margin: 8px;\n  }\n}\n@media (max-width: 640px) {\n  .collections[_ngcontent-%COMP%]   app-collection-item[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 8px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92b2xvZGFidWtvdnNraWovRGVza3RvcC9uZy1zaG93dS1jbGllbnQxL3NyYy9zdHlsZXMvcmFpc2lucy9fdmFyaWFibGVzLnNjc3MiLCIvVXNlcnMvdm9sb2RhYnVrb3Zza2lqL0Rlc2t0b3Avbmctc2hvd3UtY2xpZW50MS9zcmMvYXBwL21vZHVsZXMvc2hvd3UtaG9tZS9zaG93dS1ob21lLXBhZ2Uvc2hvd3UtaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3Nob3d1LWhvbWUvc2hvd3UtaG9tZS1wYWdlL3Nob3d1LWhvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy92b2xvZGFidWtvdnNraWovRGVza3RvcC9uZy1zaG93dS1jbGllbnQxL3NyYy9zdHlsZXMvcmFpc2lucy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUEsa0JBQUE7QUE4QkEsZUFBQTtBQUlBLDJCQUFBO0FBT0EsZUFBQTtBQUVBLGtCQUFBO0FBaUNBLGVBQUE7QUMvRUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUNJRjtBRERBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0lGO0FERkU7RUFDRSx1QkFBQTtFQUNBLFdBQUE7QUNJSjtBQ0pFO0VGTUU7SUFDRSx1QkFBQTtJQUNBLFdBQUE7RUNFSjtBQUNGO0FDWEU7RUZlRTtJQUNFLFdBQUE7SUFDQSxXQUFBO0VDREo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hvd3UtaG9tZS9zaG93dS1ob21lLXBhZ2Uvc2hvd3UtaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHNwYWNlOiAxNnB4O1xyXG5cclxuJHRpbWU6IC4ycztcclxuJG1vdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiRlbGFzdGljOiBjdWJpYy1iZXppZXIoLjc1LC0wLjUsMCwxLjc1KTtcclxuXHJcbi8qICNyZWdpb24gQ29sb3JzKi9cclxuXHJcbiR3aGl0ZTogd2hpdGUgIWRlZmF1bHQ7XHJcblxyXG4kZ3JheTEwMDogI2ZhZmFmYSAhZGVmYXVsdDtcclxuJGdyYXkyMDA6ICNlY2VjZWMgIWRlZmF1bHQ7XHJcbiRncmF5MzAwOiAjYzRjNGM0ICFkZWZhdWx0O1xyXG4kZ3JheTQwMDogI2IyYjJiMiAhZGVmYXVsdDtcclxuJGdyYXk1MDA6ICM4MDgwODAgIWRlZmF1bHQ7XHJcbiRncmF5NjAwOiAjNjQ2NDY0ICFkZWZhdWx0O1xyXG4kZ3JheTcwMDogIzQ4NDg0OCAhZGVmYXVsdDtcclxuJGdyYXk4MDA6ICMzMjMyMzIgIWRlZmF1bHQ7XHJcbiRncmF5ODUwOiAjMjQyNDI0ICFkZWZhdWx0O1xyXG4kZ3JheTkwMDogIzE2MTYxNiAhZGVmYXVsdDtcclxuXHJcbiRibGFjazogYmxhY2sgIWRlZmF1bHQ7XHJcblxyXG4kYmx1ZTogICAgIzE2NjQ5NiAhZGVmYXVsdDtcclxuJHJlZDogICAgICNkNDMyNDggIWRlZmF1bHQ7XHJcbiRncmVlbjogICAjMTZiMDY0ICFkZWZhdWx0O1xyXG4keWVsbG93OiAgI2ZiYzUzMSAhZGVmYXVsdDtcclxuJG9yYW5nZTogICNmZjgwMTYgIWRlZmF1bHQ7XHJcbiRpbmRpZ286ICAjNjQxNmUwICFkZWZhdWx0O1xyXG4kcGluazogICAgI2UwMzJiMiAhZGVmYXVsdDtcclxuJHRlYWw6ICAgICMxNmM0OTYgIWRlZmF1bHQ7XHJcbiR2aW9sZXQ6ICAjMzk0RjZDICFkZWZhdWx0O1xyXG5cclxuJGJsZWFyOiAkZ3JheTIwMDtcclxuJHNtb2tlOiAkZ3JheTIwMDtcclxuXHJcbi8qICNlbmRyZWdpb24gKi9cclxuXHJcbiRyYWRpdXM6IDVweDtcclxuXHJcbi8qICNyZWdpb24gQ29sb3JzIE92ZXJyaWRlKi9cclxuXHJcbiRyZWQ6ICM5RjE5NDE7XHJcblxyXG4vLyBzZXQgcHJpbWFyeSBjb2xvclxyXG4kcHJpbWFyeTogJHJlZDtcclxuXHJcbi8qICNlbmRyZWdpb24gKi9cclxuXHJcbi8qICNyZWdpb24gRm9udHMgKi9cclxuXHJcblxyXG4kZm9udEZhbWlseVNhbnNTZXJpZjogXCJPcGVuIHNhbnNcIiwgXCJTZWdvZSBVSVwiLCBBcmlhbCwgc2Fucy1zZXJpZiAhZGVmYXVsdDtcclxuLy8gJGZvbnRGYW1pbHlTYW5zU2VyaWY6IFwiT3BlbiBzYW5zXCIsIFwiU2Vnb2UgVUlcIiwgQXJpYWwsIHNhbnMtc2VyaWYsICFkZWZhdWx0O1xyXG4kZm9udEZhbWlseU1vbm9zcGFjZTogIENvbnNvbGFzLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZSAhZGVmYXVsdDtcclxuJGZvbnRGYW1pbHk6ICRmb250RmFtaWx5U2Fuc1NlcmlmICFkZWZhdWx0O1xyXG5cclxuXHJcbiRmb250U2l6ZTogMXJlbSAhZGVmYXVsdDtcclxuJGZvbnRTaXplTGFyZ2U6ICgxLjI4cmVtKSAhZGVmYXVsdDtcclxuJGZvbnRTaXplU21hbGw6ICguOHJlbSkgIWRlZmF1bHQ7XHJcblxyXG4kZm9udFdlaWdodExpZ2h0OiAzMDAgIWRlZmF1bHQ7XHJcbiRmb250V2VpZ2h0Tm9ybWFsOiA0MDAgIWRlZmF1bHQ7XHJcbiRmb250V2VpZ2h0Qm9sZDogNzAwICFkZWZhdWx0O1xyXG5cclxuJGZvbnRXZWlnaHQ6ICRmb250V2VpZ2h0Tm9ybWFsICFkZWZhdWx0O1xyXG4kbGluZUhlaWdodDogMS4xNSAhZGVmYXVsdDtcclxuXHJcbiRmb250U2l6ZUgxOiAyLjI4cmVtICFkZWZhdWx0O1xyXG4kZm9udFNpemVIMjogMS45NnJlbSAhZGVmYXVsdDtcclxuJGZvbnRTaXplSDM6IDEuNjRyZW0gIWRlZmF1bHQ7XHJcbiRmb250U2l6ZUg0OiAxLjMycmVtICFkZWZhdWx0O1xyXG4kZm9udFNpemVINTogMS4xNnJlbSAhZGVmYXVsdDtcclxuJGZvbnRTaXplSDY6ICRmb250U2l6ZSAhZGVmYXVsdDtcclxuXHJcblxyXG4kZm9udFNpemVEMTogMy41NnJlbSAhZGVmYXVsdDtcclxuJGZvbnRTaXplRDI6IDIuMjhyZW0gIWRlZmF1bHQ7XHJcbiRmb250U2l6ZUQzOiAxLjY0cmVtICFkZWZhdWx0O1xyXG4kZm9udFNpemVENDogMS4zMnJlbSAhZGVmYXVsdDtcclxuXHJcbi8qICNlbmRyZWdpb24gKi9cclxuXHJcbi8vIGdvbGRlbiByYXRpb1xyXG5cclxuJGdyX3Nob3J0ZXI6IDM4LjE5NjY7XHJcbiRncl9sb25nZXI6IDYxLjgwMzQ7IiwiQGltcG9ydCBcIn5zcmMvc3R5bGVzL3JhaXNpbnMvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwifnNyYy9zdHlsZXMvcmFpc2lucy9taXhpbnNcIjtcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY29sbGVjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgYXBwLWNvbGxlY3Rpb24taXRlbSB7XG4gICAgd2lkdGg6IGNhbGMoNTAlIC0gI3skc3BhY2V9KTtcbiAgICBtYXJnaW46ICRzcGFjZS8yO1xuICB9XG59XG5cbkBpbmNsdWRlIHNjcmVlbi13KDEwMjRweCkge1xuICAuY29sbGVjdGlvbnMge1xuICAgIGFwcC1jb2xsZWN0aW9uLWl0ZW0ge1xuICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gI3skc3BhY2V9KTtcbiAgICAgIG1hcmdpbjogJHNwYWNlLzI7XG4gICAgfVxuICB9XG59XG5cbkBpbmNsdWRlIHNjcmVlbi13KDY0MHB4KSB7XG4gIC5jb2xsZWN0aW9ucyB7XG4gICAgYXBwLWNvbGxlY3Rpb24taXRlbSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbjogJHNwYWNlLzI7XG4gICAgfVxuICB9XG59XG4iLCIvKiAjcmVnaW9uIENvbG9ycyovXG4vKiAjZW5kcmVnaW9uICovXG4vKiAjcmVnaW9uIENvbG9ycyBPdmVycmlkZSovXG4vKiAjZW5kcmVnaW9uICovXG4vKiAjcmVnaW9uIEZvbnRzICovXG4vKiAjZW5kcmVnaW9uICovXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jb2xsZWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5jb2xsZWN0aW9ucyBhcHAtY29sbGVjdGlvbi1pdGVtIHtcbiAgd2lkdGg6IGNhbGMoNTAlIC0gMTZweCk7XG4gIG1hcmdpbjogOHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5jb2xsZWN0aW9ucyBhcHAtY29sbGVjdGlvbi1pdGVtIHtcbiAgICB3aWR0aDogY2FsYyg1MCUgLSAxNnB4KTtcbiAgICBtYXJnaW46IDhweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIC5jb2xsZWN0aW9ucyBhcHAtY29sbGVjdGlvbi1pdGVtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDhweDtcbiAgfVxufSIsIkBpbXBvcnQgJ21hdGVyaWFsLXNoYWRvdy5taXhpbic7XG5cbkBtaXhpbiB6ZXJvIHtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG5AbWl4aW4gY29sLXdpZHRoKCR3aWR0aCkge1xuICBmbGV4LWJhc2lzOiAkd2lkdGg7XG4gIG1heC13aWR0aDogJHdpZHRoO1xufVxuXG5AbWl4aW4gc2NyZWVuLXcoJG13KSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkbXcpIHtcbiAgICAgIEBjb250ZW50XG4gIH1cbn1cblxuQG1peGluIHRyYW5zaXRpb24oJGVsZW1lbnQ6IGFsbCwgJHQ6ICR0aW1lLCAkZGVsYXk6IDBzKSB7XG4gIEBpZiAkZWxlbWVudD09ZGVmYXVsdCB7XG4gICAgICAkZWxlbWVudDogYWxsO1xuICB9XG4gIEBpZiAkdD09ZGVmYXVsdCB7XG4gICAgICAkdDogJHRpbWU7XG4gIH1cbiAgQGlmICRkZWxheT09ZGVmYXVsdCB7XG4gICAgICAkZGVsYXk6IDBzO1xuICB9XG4gIHRyYW5zaXRpb246ICRlbGVtZW50ICR0ICRtb3Rpb24gJGRlbGF5O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowuHomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-showu-home-page",
                templateUrl: "./showu-home-page.component.html",
                styleUrls: ["./showu-home-page.component.scss"],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }, { type: _collection_collection_service__WEBPACK_IMPORTED_MODULE_2__["CollectionService"] }, { type: _core_app_lang_service__WEBPACK_IMPORTED_MODULE_3__["AppLangService"] }, { type: _sallers_sallers_service__WEBPACK_IMPORTED_MODULE_4__["SallersService"] }, { type: _product_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] }, { type: _manufacturers_manufacturers_service__WEBPACK_IMPORTED_MODULE_6__["ManufacturersService"] }, { type: _review_review_service__WEBPACK_IMPORTED_MODULE_7__["ReviewService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/showu-home/showu-home-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/showu-home/showu-home-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ShowuHomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowuHomeRoutingModule", function() { return ShowuHomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _showu_home_page_showu_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showu-home-page/showu-home-page.component */ "./src/app/modules/showu-home/showu-home-page/showu-home-page.component.ts");





const routes = [
    {
        path: "",
        component: _showu_home_page_showu_home_page_component__WEBPACK_IMPORTED_MODULE_2__["ShowuHomePageComponent"]
    }
];
class ShowuHomeRoutingModule {
}
ShowuHomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ShowuHomeRoutingModule });
ShowuHomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ShowuHomeRoutingModule_Factory(t) { return new (t || ShowuHomeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ShowuHomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowuHomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/showu-home/showu-home.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/showu-home/showu-home.module.ts ***!
  \*********************************************************/
/*! exports provided: ShowuHomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowuHomeModule", function() { return ShowuHomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _showu_home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showu-home-routing.module */ "./src/app/modules/showu-home/showu-home-routing.module.ts");
/* harmony import */ var _showu_home_page_showu_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./showu-home-page/showu-home-page.component */ "./src/app/modules/showu-home/showu-home-page/showu-home-page.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/core.module */ "./src/app/modules/core/core.module.ts");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/ui.module */ "./src/app/modules/ui/ui.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _sallers_sallers_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sallers/sallers.module */ "./src/app/modules/sallers/sallers.module.ts");
/* harmony import */ var _collection_collection_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../collection/collection.module */ "./src/app/modules/collection/collection.module.ts");
/* harmony import */ var _welcome_statistic_welcome_statistic_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./welcome-statistic/welcome-statistic.component */ "./src/app/modules/showu-home/welcome-statistic/welcome-statistic.component.ts");
/* harmony import */ var _review_review_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../review/review.module */ "./src/app/modules/review/review.module.ts");
/* harmony import */ var _manufacturers_manufacturers_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../manufacturers/manufacturers.module */ "./src/app/modules/manufacturers/manufacturers.module.ts");
/* harmony import */ var _product_product_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../product/product.module */ "./src/app/modules/product/product.module.ts");














class ShowuHomeModule {
}
ShowuHomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ShowuHomeModule });
ShowuHomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ShowuHomeModule_Factory(t) { return new (t || ShowuHomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _showu_home_routing_module__WEBPACK_IMPORTED_MODULE_2__["ShowuHomeRoutingModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
            _ui_ui_module__WEBPACK_IMPORTED_MODULE_5__["UiModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
            _collection_collection_module__WEBPACK_IMPORTED_MODULE_8__["CollectionModule"],
            _review_review_module__WEBPACK_IMPORTED_MODULE_10__["ReviewModule"],
            _manufacturers_manufacturers_module__WEBPACK_IMPORTED_MODULE_11__["ManufacturersModule"],
            _product_product_module__WEBPACK_IMPORTED_MODULE_12__["ProductModule"],
            _sallers_sallers_module__WEBPACK_IMPORTED_MODULE_7__["SallersModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ShowuHomeModule, { declarations: [_showu_home_page_showu_home_page_component__WEBPACK_IMPORTED_MODULE_3__["ShowuHomePageComponent"], _welcome_statistic_welcome_statistic_component__WEBPACK_IMPORTED_MODULE_9__["WelcomeStatisticComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _showu_home_routing_module__WEBPACK_IMPORTED_MODULE_2__["ShowuHomeRoutingModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
        _ui_ui_module__WEBPACK_IMPORTED_MODULE_5__["UiModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
        _collection_collection_module__WEBPACK_IMPORTED_MODULE_8__["CollectionModule"],
        _review_review_module__WEBPACK_IMPORTED_MODULE_10__["ReviewModule"],
        _manufacturers_manufacturers_module__WEBPACK_IMPORTED_MODULE_11__["ManufacturersModule"],
        _product_product_module__WEBPACK_IMPORTED_MODULE_12__["ProductModule"],
        _sallers_sallers_module__WEBPACK_IMPORTED_MODULE_7__["SallersModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowuHomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_showu_home_page_showu_home_page_component__WEBPACK_IMPORTED_MODULE_3__["ShowuHomePageComponent"], _welcome_statistic_welcome_statistic_component__WEBPACK_IMPORTED_MODULE_9__["WelcomeStatisticComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _showu_home_routing_module__WEBPACK_IMPORTED_MODULE_2__["ShowuHomeRoutingModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                    _ui_ui_module__WEBPACK_IMPORTED_MODULE_5__["UiModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                    _collection_collection_module__WEBPACK_IMPORTED_MODULE_8__["CollectionModule"],
                    _review_review_module__WEBPACK_IMPORTED_MODULE_10__["ReviewModule"],
                    _manufacturers_manufacturers_module__WEBPACK_IMPORTED_MODULE_11__["ManufacturersModule"],
                    _product_product_module__WEBPACK_IMPORTED_MODULE_12__["ProductModule"],
                    _sallers_sallers_module__WEBPACK_IMPORTED_MODULE_7__["SallersModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/showu-home/welcome-statistic/welcome-statistic.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/showu-home/welcome-statistic/welcome-statistic.component.ts ***!
  \*************************************************************************************/
/*! exports provided: WelcomeStatisticComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeStatisticComponent", function() { return WelcomeStatisticComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ui_rap_svg_ico_svg_ico_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/rap/svg-ico/svg-ico.component */ "./src/app/modules/ui/rap/svg-ico/svg-ico.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");





function WelcomeStatisticComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rap-svg-ico", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r228 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r228.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, item_r228.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 5, item_r228.description));
} }
class WelcomeStatisticComponent {
    constructor() {
        this.list = [
            {
                icon: "assets/icons/delivery.svg",
                title: "main.QUICK_SHIPPING_WORLDWIDE",
                description: "main.order_from",
            },
            {
                icon: "assets/icons/returns.svg",
                title: "main.DAYS_RETURN",
                description: "main.order_from",
            },
            {
                icon: "assets/icons/safety.svg",
                title: "main.SHOP_WITH_CONFIDENCE",
                description: "main.order_from",
            },
        ];
    }
    ngOnInit() { }
}
WelcomeStatisticComponent.ɵfac = function WelcomeStatisticComponent_Factory(t) { return new (t || WelcomeStatisticComponent)(); };
WelcomeStatisticComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomeStatisticComponent, selectors: [["app-welcome-statistic"]], inputs: { list: "list" }, decls: 1, vars: 1, consts: [["class", "item", 4, "ngFor", "ngForOf"], [1, "item"], [3, "src"], [1, "info"]], template: function WelcomeStatisticComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WelcomeStatisticComponent_div_0_Template, 9, 7, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.list);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _ui_rap_svg_ico_svg_ico_component__WEBPACK_IMPORTED_MODULE_2__["SvgIcoComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: ["[_nghost-%COMP%] {\n  position: relative;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 16px;\n}\n.item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 32px 16px;\n  background-color: white;\n  transform-origin: bottom center;\n  box-shadow: 0 1px 3px rgba(178, 178, 178, 0.14), 0 1px 2px rgba(178, 178, 178, 0.24);\n  transition: all 0.2s ease-in-out 0s;\n  border-radius: 5px;\n}\n.item[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 3px 6px rgba(128, 128, 128, 0.16), 0 3px 6px rgba(128, 128, 128, 0.23);\n  transform: scale(1.01);\n}\n.item[_ngcontent-%COMP%]   rap-svg-ico[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  margin-right: 16px;\n  fill: #9F1941;\n}\n.item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 4px 0;\n}\n.item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: 200;\n  font-size: 1.64rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92b2xvZGFidWtvdnNraWovRGVza3RvcC9uZy1zaG93dS1jbGllbnQxL3NyYy9zdHlsZXMvcmFpc2lucy9fdmFyaWFibGVzLnNjc3MiLCIvVXNlcnMvdm9sb2RhYnVrb3Zza2lqL0Rlc2t0b3Avbmctc2hvd3UtY2xpZW50MS9zcmMvYXBwL21vZHVsZXMvc2hvd3UtaG9tZS93ZWxjb21lLXN0YXRpc3RpYy93ZWxjb21lLXN0YXRpc3RpYy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9zaG93dS1ob21lL3dlbGNvbWUtc3RhdGlzdGljL3dlbGNvbWUtc3RhdGlzdGljLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3ZvbG9kYWJ1a292c2tpai9EZXNrdG9wL25nLXNob3d1LWNsaWVudDEvc3JjL3N0eWxlcy9yYWlzaW5zL19tYXRlcmlhbC1zaGFkb3cubWl4aW4uc2NzcyIsIi9Vc2Vycy92b2xvZGFidWtvdnNraWovRGVza3RvcC9uZy1zaG93dS1jbGllbnQxL3NyYy9zdHlsZXMvcmFpc2lucy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUEsa0JBQUE7QUE4QkEsZUFBQTtBQUlBLDJCQUFBO0FBT0EsZUFBQTtBQUVBLGtCQUFBO0FBaUNBLGVBQUE7QUMvRUE7RUFDRSxrQkFBQTtFQUVBLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLFNEUk07QUVXUjtBREFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUVBLHVCRFRNO0VDV04sK0JBQUE7RUVIRSxvRkFBQTtFQ2NGLG1DQUFBO0VIUkEsa0JEZ0JPO0FFZlQ7QURBRTtFRUhFLG9GQUFBO0VGS0Esc0JBQUE7QUNFSjtBRENFO0VBQ0UsV0EzQkc7RUE0QkgsWUE1Qkc7RUE2Qkgsa0JEL0JJO0VDZ0NKLGFEVUU7QUVUTjtBREVFO0VBQ0UsT0FBQTtBQ0FKO0FERUk7RUFDRSxhQUFBO0FDQU47QURHSTs7RUFFRSxnQkFBQTtFQUNBLGtCRDBCTztBRTNCYiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hvd3UtaG9tZS93ZWxjb21lLXN0YXRpc3RpYy93ZWxjb21lLXN0YXRpc3RpYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRzcGFjZTogMTZweDtcclxuXHJcbiR0aW1lOiAuMnM7XHJcbiRtb3Rpb246IGVhc2UtaW4tb3V0O1xyXG4kZWxhc3RpYzogY3ViaWMtYmV6aWVyKC43NSwtMC41LDAsMS43NSk7XHJcblxyXG4vKiAjcmVnaW9uIENvbG9ycyovXHJcblxyXG4kd2hpdGU6IHdoaXRlICFkZWZhdWx0O1xyXG5cclxuJGdyYXkxMDA6ICNmYWZhZmEgIWRlZmF1bHQ7XHJcbiRncmF5MjAwOiAjZWNlY2VjICFkZWZhdWx0O1xyXG4kZ3JheTMwMDogI2M0YzRjNCAhZGVmYXVsdDtcclxuJGdyYXk0MDA6ICNiMmIyYjIgIWRlZmF1bHQ7XHJcbiRncmF5NTAwOiAjODA4MDgwICFkZWZhdWx0O1xyXG4kZ3JheTYwMDogIzY0NjQ2NCAhZGVmYXVsdDtcclxuJGdyYXk3MDA6ICM0ODQ4NDggIWRlZmF1bHQ7XHJcbiRncmF5ODAwOiAjMzIzMjMyICFkZWZhdWx0O1xyXG4kZ3JheTg1MDogIzI0MjQyNCAhZGVmYXVsdDtcclxuJGdyYXk5MDA6ICMxNjE2MTYgIWRlZmF1bHQ7XHJcblxyXG4kYmxhY2s6IGJsYWNrICFkZWZhdWx0O1xyXG5cclxuJGJsdWU6ICAgICMxNjY0OTYgIWRlZmF1bHQ7XHJcbiRyZWQ6ICAgICAjZDQzMjQ4ICFkZWZhdWx0O1xyXG4kZ3JlZW46ICAgIzE2YjA2NCAhZGVmYXVsdDtcclxuJHllbGxvdzogICNmYmM1MzEgIWRlZmF1bHQ7XHJcbiRvcmFuZ2U6ICAjZmY4MDE2ICFkZWZhdWx0O1xyXG4kaW5kaWdvOiAgIzY0MTZlMCAhZGVmYXVsdDtcclxuJHBpbms6ICAgICNlMDMyYjIgIWRlZmF1bHQ7XHJcbiR0ZWFsOiAgICAjMTZjNDk2ICFkZWZhdWx0O1xyXG4kdmlvbGV0OiAgIzM5NEY2QyAhZGVmYXVsdDtcclxuXHJcbiRibGVhcjogJGdyYXkyMDA7XHJcbiRzbW9rZTogJGdyYXkyMDA7XHJcblxyXG4vKiAjZW5kcmVnaW9uICovXHJcblxyXG4kcmFkaXVzOiA1cHg7XHJcblxyXG4vKiAjcmVnaW9uIENvbG9ycyBPdmVycmlkZSovXHJcblxyXG4kcmVkOiAjOUYxOTQxO1xyXG5cclxuLy8gc2V0IHByaW1hcnkgY29sb3JcclxuJHByaW1hcnk6ICRyZWQ7XHJcblxyXG4vKiAjZW5kcmVnaW9uICovXHJcblxyXG4vKiAjcmVnaW9uIEZvbnRzICovXHJcblxyXG5cclxuJGZvbnRGYW1pbHlTYW5zU2VyaWY6IFwiT3BlbiBzYW5zXCIsIFwiU2Vnb2UgVUlcIiwgQXJpYWwsIHNhbnMtc2VyaWYgIWRlZmF1bHQ7XHJcbi8vICRmb250RmFtaWx5U2Fuc1NlcmlmOiBcIk9wZW4gc2Fuc1wiLCBcIlNlZ29lIFVJXCIsIEFyaWFsLCBzYW5zLXNlcmlmLCAhZGVmYXVsdDtcclxuJGZvbnRGYW1pbHlNb25vc3BhY2U6ICBDb25zb2xhcywgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2UgIWRlZmF1bHQ7XHJcbiRmb250RmFtaWx5OiAkZm9udEZhbWlseVNhbnNTZXJpZiAhZGVmYXVsdDtcclxuXHJcblxyXG4kZm9udFNpemU6IDFyZW0gIWRlZmF1bHQ7XHJcbiRmb250U2l6ZUxhcmdlOiAoMS4yOHJlbSkgIWRlZmF1bHQ7XHJcbiRmb250U2l6ZVNtYWxsOiAoLjhyZW0pICFkZWZhdWx0O1xyXG5cclxuJGZvbnRXZWlnaHRMaWdodDogMzAwICFkZWZhdWx0O1xyXG4kZm9udFdlaWdodE5vcm1hbDogNDAwICFkZWZhdWx0O1xyXG4kZm9udFdlaWdodEJvbGQ6IDcwMCAhZGVmYXVsdDtcclxuXHJcbiRmb250V2VpZ2h0OiAkZm9udFdlaWdodE5vcm1hbCAhZGVmYXVsdDtcclxuJGxpbmVIZWlnaHQ6IDEuMTUgIWRlZmF1bHQ7XHJcblxyXG4kZm9udFNpemVIMTogMi4yOHJlbSAhZGVmYXVsdDtcclxuJGZvbnRTaXplSDI6IDEuOTZyZW0gIWRlZmF1bHQ7XHJcbiRmb250U2l6ZUgzOiAxLjY0cmVtICFkZWZhdWx0O1xyXG4kZm9udFNpemVINDogMS4zMnJlbSAhZGVmYXVsdDtcclxuJGZvbnRTaXplSDU6IDEuMTZyZW0gIWRlZmF1bHQ7XHJcbiRmb250U2l6ZUg2OiAkZm9udFNpemUgIWRlZmF1bHQ7XHJcblxyXG5cclxuJGZvbnRTaXplRDE6IDMuNTZyZW0gIWRlZmF1bHQ7XHJcbiRmb250U2l6ZUQyOiAyLjI4cmVtICFkZWZhdWx0O1xyXG4kZm9udFNpemVEMzogMS42NHJlbSAhZGVmYXVsdDtcclxuJGZvbnRTaXplRDQ6IDEuMzJyZW0gIWRlZmF1bHQ7XHJcblxyXG4vKiAjZW5kcmVnaW9uICovXHJcblxyXG4vLyBnb2xkZW4gcmF0aW9cclxuXHJcbiRncl9zaG9ydGVyOiAzOC4xOTY2O1xyXG4kZ3JfbG9uZ2VyOiA2MS44MDM0OyIsIkBpbXBvcnQgXCJ+c3JjL3N0eWxlcy9yYWlzaW5zL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIn5zcmMvc3R5bGVzL3JhaXNpbnMvbWl4aW5zXCI7XG4kc2l6ZTogNDhweDtcbjpob3N0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gIGdhcDogJHNwYWNlO1xufVxuXG4uaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6ICRzcGFjZSoyICRzcGFjZTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG5cbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGNlbnRlcjtcbiAgQGluY2x1ZGUgbWF0ZXJpYWwtc2hhZG93KDEsIDEsICRncmF5NDAwKTtcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbigpO1xuICBib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICAmOmhvdmVyIHtcbiAgICBAaW5jbHVkZSBtYXRlcmlhbC1zaGFkb3coMiwgMSwgJGdyYXk1MDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XG4gIH1cblxuICByYXAtc3ZnLWljbyB7XG4gICAgd2lkdGg6ICRzaXplO1xuICAgIGhlaWdodDogJHNpemU7XG4gICAgbWFyZ2luLXJpZ2h0OiAkc3BhY2U7XG4gICAgZmlsbDogJHByaW1hcnk7XG4gIH1cblxuICAuaW5mbyB7XG4gICAgZmxleDogMTtcblxuICAgIGg2IHtcbiAgICAgIG1hcmdpbjogJHNwYWNlLzQgMDtcbiAgICB9XG5cbiAgICBzcGFuLFxuICAgIGEge1xuICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgIGZvbnQtc2l6ZTogJGZvbnRTaXplSDM7XG4gICAgfVxuICB9XG59XG4iLCIvKiAjcmVnaW9uIENvbG9ycyovXG4vKiAjZW5kcmVnaW9uICovXG4vKiAjcmVnaW9uIENvbG9ycyBPdmVycmlkZSovXG4vKiAjZW5kcmVnaW9uICovXG4vKiAjcmVnaW9uIEZvbnRzICovXG4vKiAjZW5kcmVnaW9uICovXG46aG9zdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgZ2FwOiAxNnB4O1xufVxuXG4uaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMycHggMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDE3OCwgMTc4LCAxNzgsIDAuMTQpLCAwIDFweCAycHggcmdiYSgxNzgsIDE3OCwgMTc4LCAwLjI0KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQgMHM7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5pdGVtOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMjMpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xufVxuLml0ZW0gcmFwLXN2Zy1pY28ge1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gIGZpbGw6ICM5RjE5NDE7XG59XG4uaXRlbSAuaW5mbyB7XG4gIGZsZXg6IDE7XG59XG4uaXRlbSAuaW5mbyBoNiB7XG4gIG1hcmdpbjogNHB4IDA7XG59XG4uaXRlbSAuaW5mbyBzcGFuLFxuLml0ZW0gLmluZm8gYSB7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIGZvbnQtc2l6ZTogMS42NHJlbTtcbn0iLCIvLy0gTWl4aW46IE1hdGVyaWFsIFNoYWRvd1xuLy8vXG4vLy8gQm94IHNoYWRvd3MgYmFzZWQgb24gNSBNYXRlcmlhbCBEZXNpZ24gcHJlc2V0cztcbi8vL1xuLy8vIEBwYXJhbSB7dmFyaWFibGV9ICR6LWRlcHRoIFsxXSAtIHNoYWRvdyBkaXN0YW5jZSBvbiB6LWF4aXNcbi8vLyBAcGFyYW0ge3ZhcmlhYmxlfSAkc3RyZW5ndGggWzFdIC0gbXVsdGlwbGllciBmb3Igc2hhZG93IHN0cmVuZ3RoL2RhcmtuZXNzXG4vLy8gQHBhcmFtIHt2YXJpYWJsZX0gJGNvbG9yIFsxXSAtIHNoYWRvdyBjb2xvclxuLy8vIEBncm91cCBsYXlvdXRcbi8vLyBAZXhhbXBsZVxuLy8vICAgZGl2IHtcbi8vLyAgICAgQGluY2x1ZGUgbWF0ZXJpYWwtc2hhZG93KDMpO1xuLy8vICAgfVxuLy8vIEBsaW5rIGh0dHBzOi8vY29kZXBlbi5pby9kYm94L3Blbi9SYXdCRVdcbi8vLyBAYXV0aG9yIFwiRGFuaWVsIEJveFwiXG5AbWl4aW4gbWF0ZXJpYWwtc2hhZG93KCR6LWRlcHRoOiAxLCAkc3RyZW5ndGg6IDEsICRjb2xvcjogYmxhY2spIHtcbiAgQGlmICR6LWRlcHRoID09IDEge1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKCRjb2xvciwgJHN0cmVuZ3RoICogMC4xNCksXG4gICAgICAwIDFweCAycHggcmdiYSgkY29sb3IsICRzdHJlbmd0aCAqIDAuMjQpO1xuICB9XG4gIEBpZiAkei1kZXB0aCA9PSAyIHtcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgkY29sb3IsICRzdHJlbmd0aCAqIDAuMTYpLFxuICAgICAgMCAzcHggNnB4IHJnYmEoJGNvbG9yLCAkc3RyZW5ndGggKiAwLjIzKTtcbiAgfVxuICBAaWYgJHotZGVwdGggPT0gMyB7XG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgkY29sb3IsICRzdHJlbmd0aCAqIDAuMTkpLFxuICAgICAgMCA2cHggNnB4IHJnYmEoJGNvbG9yLCAkc3RyZW5ndGggKiAwLjIzKTtcbiAgfVxuICBAaWYgJHotZGVwdGggPT0gNCB7XG4gICAgYm94LXNoYWRvdzogMCAxNXB4IDMwcHggcmdiYSgkY29sb3IsICRzdHJlbmd0aCAqIDAuMjUpLFxuICAgICAgMCAxMHB4IDEwcHggcmdiYSgkY29sb3IsICRzdHJlbmd0aCAqIDAuMjIpO1xuICB9XG4gIEBpZiAkei1kZXB0aCA9PSA1IHtcbiAgICBib3gtc2hhZG93OiAwIDIwcHggNDBweCByZ2JhKCRjb2xvciwgJHN0cmVuZ3RoICogMC4zKSxcbiAgICAgIDAgMTVweCAxMnB4IHJnYmEoJGNvbG9yLCAkc3RyZW5ndGggKiAwLjIyKTtcbiAgfVxuICBAaWYgKCR6LWRlcHRoIDwgMSkgb3IgKCR6LWRlcHRoID4gNSkge1xuICAgIEB3YXJuIFwiJHotZGVwdGggbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDVcIjtcbiAgfVxufVxuIiwiQGltcG9ydCAnbWF0ZXJpYWwtc2hhZG93Lm1peGluJztcblxuQG1peGluIHplcm8ge1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbkBtaXhpbiBjb2wtd2lkdGgoJHdpZHRoKSB7XG4gIGZsZXgtYmFzaXM6ICR3aWR0aDtcbiAgbWF4LXdpZHRoOiAkd2lkdGg7XG59XG5cbkBtaXhpbiBzY3JlZW4tdygkbXcpIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRtdykge1xuICAgICAgQGNvbnRlbnRcbiAgfVxufVxuXG5AbWl4aW4gdHJhbnNpdGlvbigkZWxlbWVudDogYWxsLCAkdDogJHRpbWUsICRkZWxheTogMHMpIHtcbiAgQGlmICRlbGVtZW50PT1kZWZhdWx0IHtcbiAgICAgICRlbGVtZW50OiBhbGw7XG4gIH1cbiAgQGlmICR0PT1kZWZhdWx0IHtcbiAgICAgICR0OiAkdGltZTtcbiAgfVxuICBAaWYgJGRlbGF5PT1kZWZhdWx0IHtcbiAgICAgICRkZWxheTogMHM7XG4gIH1cbiAgdHJhbnNpdGlvbjogJGVsZW1lbnQgJHQgJG1vdGlvbiAkZGVsYXk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeStatisticComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-welcome-statistic",
                templateUrl: "./welcome-statistic.component.html",
                styleUrls: ["./welcome-statistic.component.scss"],
            }]
    }], function () { return []; }, { list: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=src-app-modules-showu-home-showu-home-module-es2015.js.map