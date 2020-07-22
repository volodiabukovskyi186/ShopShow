function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~src-app-modules-collection-collection-module~src-app-modules-showu-home-showu-home-module"], {
  /***/
  "./src/app/modules/collection/collection-item/collection-item.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/modules/collection/collection-item/collection-item.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: CollectionItemComponent */

  /***/
  function srcAppModulesCollectionCollectionItemCollectionItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CollectionItemComponent", function () {
      return CollectionItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function CollectionItemComponent_h2_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.item == null ? null : ctx_r0.item.title);
      }
    }

    function CollectionItemComponent_h6_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.item == null ? null : ctx_r1.item.subtitle);
      }
    }

    function CollectionItemComponent_div_3_a_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r3.routerLinksWithId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.buttonText);
      }
    }

    function CollectionItemComponent_div_3_a_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r4.routerLinks);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.buttonText);
      }
    }

    function CollectionItemComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CollectionItemComponent_div_3_a_1_Template, 2, 2, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CollectionItemComponent_div_3_a_2_Template, 2, 2, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.item == null ? null : ctx_r2.item.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r2.item == null ? null : ctx_r2.item.id));
      }
    }

    var CollectionItemComponent =
    /*#__PURE__*/
    function () {
      function CollectionItemComponent() {
        _classCallCheck(this, CollectionItemComponent);

        this.buttonText = "View";
        this.routerLinks = [];
        this.ratio = "imax";
        this.host = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].hoststatic;
      }

      _createClass(CollectionItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "routerLinksWithId",
        get: function get() {
          return this.item.id != null ? [].concat(_toConsumableArray(this.routerLinks), [this.item.id]) : this.routerLinks;
        }
      }]);

      return CollectionItemComponent;
    }();

    CollectionItemComponent.ɵfac = function CollectionItemComponent_Factory(t) {
      return new (t || CollectionItemComponent)();
    };

    CollectionItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CollectionItemComponent,
      selectors: [["app-collection-item"]],
      inputs: {
        item: "item",
        buttonText: "buttonText",
        routerLinks: "routerLinks",
        ratio: "ratio",
        host: "host"
      },
      decls: 7,
      vars: 5,
      consts: [[1, "title"], [4, "ngIf"], ["class", "flex", 4, "ngIf"], [1, "ratio", "collection-item"], [1, "square"], [1, "contain", 3, "src", "alt"], [1, "flex"], ["class", "more", 3, "routerLink", 4, "ngIf"], [1, "more", 3, "routerLink"]],
      template: function CollectionItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CollectionItemComponent_h2_1_Template, 2, 1, "h2", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CollectionItemComponent_h6_2_Template, 2, 1, "h6", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CollectionItemComponent_div_3_Template, 3, 2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item == null ? null : ctx.item.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item == null ? null : ctx.item.subtitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.routerLinks.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.host != null ? ctx.host + (ctx.item == null ? null : ctx.item.image == null ? null : ctx.item.image.src_mini) : ctx.item == null ? null : ctx.item.cover, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.item == null ? null : ctx.item.title);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: ["[_nghost-%COMP%] {\n  position: relative;\n  background-color: #f2f2f2;\n  box-shadow: 0 1px 3px rgba(178, 178, 178, 0.14), 0 1px 2px rgba(178, 178, 178, 0.24);\n  transition: all 0.2s ease-in-out 0s;\n  transform-origin: center bottom;\n  border-radius: 5px;\n}\n[_nghost-%COMP%]:hover {\n  box-shadow: 0 3px 6px rgba(128, 128, 128, 0.16), 0 3px 6px rgba(128, 128, 128, 0.23);\n  transform: scale(1.005);\n}\n.collection-item[_ngcontent-%COMP%] {\n  width: 60%;\n  margin: 16px;\n  margin-left: auto;\n}\n.collection-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 5px;\n}\n.title[_ngcontent-%COMP%] {\n  z-index: 100;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  left: 32px;\n  width: 50%;\n}\n.title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  font-size: 2.1rem;\n  font-weight: lighter;\n}\n.title[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  font-size: 1.05rem;\n  font-weight: bold;\n  color: #9d9d9d;\n}\n.more[_ngcontent-%COMP%] {\n  font-weight: normal;\n  padding: 4px;\n  margin-top: 48px;\n  margin-bottom: 33%;\n  border-bottom: 2px solid transparent;\n  color: #9F1941;\n  text-decoration: none;\n  transition: all 0.2s ease-in-out 0s;\n}\n.more[_ngcontent-%COMP%]:hover {\n  border-color: #9F1941;\n}\n.medium[_nghost-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n}\n.medium[_nghost-%COMP%]   .title[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.medium[_nghost-%COMP%]   .more[_ngcontent-%COMP%] {\n  margin-bottom: unset;\n}\n@media (max-width: 1440px) {\n  [_nghost-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  [_nghost-%COMP%]   .title[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  [_nghost-%COMP%]   .more[_ngcontent-%COMP%] {\n    margin-bottom: unset;\n  }\n\n  .medium[_nghost-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n  .medium[_nghost-%COMP%]   .title[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .medium[_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .more[_ngcontent-%COMP%] {\n    margin-top: 16px;\n  }\n}\n@media (max-width: 1024px) {\n  [_nghost-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n  [_nghost-%COMP%]   .title[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  [_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .more[_ngcontent-%COMP%] {\n    margin-top: 16px;\n  }\n\n  .medium[_nghost-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .medium[_nghost-%COMP%]   .title[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .medium[_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .more[_ngcontent-%COMP%] {\n    margin-top: 8px;\n  }\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  [_nghost-%COMP%]   .title[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  [_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .more[_ngcontent-%COMP%] {\n    margin-top: 8px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92b2xvZGFidWtvdnNraWovRGVza3RvcC9uZy1zaG93dS1jbGllbnQvc3JjL3N0eWxlcy9yYWlzaW5zL192YXJpYWJsZXMuc2NzcyIsIi9Vc2Vycy92b2xvZGFidWtvdnNraWovRGVza3RvcC9uZy1zaG93dS1jbGllbnQvc3JjL2FwcC9tb2R1bGVzL2NvbGxlY3Rpb24vY29sbGVjdGlvbi1pdGVtL2NvbGxlY3Rpb24taXRlbS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy92b2xvZGFidWtvdnNraWovRGVza3RvcC9uZy1zaG93dS1jbGllbnQvc3JjL3N0eWxlcy9yYWlzaW5zL19tYXRlcmlhbC1zaGFkb3cubWl4aW4uc2NzcyIsIi9Vc2Vycy92b2xvZGFidWtvdnNraWovRGVza3RvcC9uZy1zaG93dS1jbGllbnQvc3JjL3N0eWxlcy9yYWlzaW5zL19taXhpbnMuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9jb2xsZWN0aW9uL2NvbGxlY3Rpb24taXRlbS9jb2xsZWN0aW9uLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUEsa0JBQUE7QUE4QkEsZUFBQTtBQUlBLDJCQUFBO0FBT0EsZUFBQTtBQUVBLGtCQUFBO0FBaUNBLGVBQUE7QUMvRUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VDV0Usb0ZBQUE7RUNjRixtQ0FBQTtFRnRCQSwrQkFBQTtFQUNBLGtCRDZCTztBSXpCVDtBSEhFO0VDVUUsb0ZBQUE7RURSQSx1QkFBQTtBR0tKO0FIREE7RUFDRSxVQUFBO0VBQ0EsWURsQk07RUNtQk4saUJBQUE7QUdJRjtBSEhFO0VBR0Usa0JEZUs7QUlaVDtBSENBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FHRUY7QUhERTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FHR0o7QUhERTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBR0dKO0FIQ0E7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxjRGRJO0VDZUoscUJBQUE7RUUzQkEsbUNBQUE7QUM4QkY7QUhBRTtFQUNFLHFCRG5CRTtBSXFCTjtBSEtNO0VBQ0UsaUJBQUE7QUdGUjtBSElNO0VBQ0UsZUFBQTtBR0ZSO0FIS0k7RUFDRSxvQkFBQTtBR0hOO0FEMURFO0VGcUVJO0lBQ0UsZUFBQTtFR1BOO0VIU0k7SUFDRSxlQUFBO0VHUE47RUhVRTtJQUNFLG9CQUFBO0VHUko7O0VIYUk7SUFDRSxpQkFBQTtFR1ZOO0VIWUk7SUFDRSxlQUFBO0VHVk47RUhZSTtJQUNFLGdCRHhHQTtFSThGTjtBQUNGO0FEaEZFO0VGa0dJO0lBQ0UsaUJBQUE7RUdmTjtFSGlCSTtJQUNFLGVBQUE7RUdmTjtFSGlCSTtJQUNFLGdCRHhIQTtFSXlHTjs7RUhxQkk7SUFDRSxpQkFBQTtFR2xCTjtFSG9CSTtJQUNFLGlCQUFBO0VHbEJOO0VIb0JJO0lBQ0UsZUFBQTtFR2xCTjtBQUNGO0FEckdFO0VGK0hJO0lBQ0UsaUJBQUE7RUd2Qk47RUh5Qkk7SUFDRSxpQkFBQTtFR3ZCTjtFSHlCSTtJQUNFLGVBQUE7RUd2Qk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29sbGVjdGlvbi9jb2xsZWN0aW9uLWl0ZW0vY29sbGVjdGlvbi1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHNwYWNlOiAxNnB4O1xyXG5cclxuJHRpbWU6IC4ycztcclxuJG1vdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiRlbGFzdGljOiBjdWJpYy1iZXppZXIoLjc1LC0wLjUsMCwxLjc1KTtcclxuXHJcbi8qICNyZWdpb24gQ29sb3JzKi9cclxuXHJcbiR3aGl0ZTogd2hpdGUgIWRlZmF1bHQ7XHJcblxyXG4kZ3JheTEwMDogI2ZhZmFmYSAhZGVmYXVsdDtcclxuJGdyYXkyMDA6ICNlY2VjZWMgIWRlZmF1bHQ7XHJcbiRncmF5MzAwOiAjYzRjNGM0ICFkZWZhdWx0O1xyXG4kZ3JheTQwMDogI2IyYjJiMiAhZGVmYXVsdDtcclxuJGdyYXk1MDA6ICM4MDgwODAgIWRlZmF1bHQ7XHJcbiRncmF5NjAwOiAjNjQ2NDY0ICFkZWZhdWx0O1xyXG4kZ3JheTcwMDogIzQ4NDg0OCAhZGVmYXVsdDtcclxuJGdyYXk4MDA6ICMzMjMyMzIgIWRlZmF1bHQ7XHJcbiRncmF5ODUwOiAjMjQyNDI0ICFkZWZhdWx0O1xyXG4kZ3JheTkwMDogIzE2MTYxNiAhZGVmYXVsdDtcclxuXHJcbiRibGFjazogYmxhY2sgIWRlZmF1bHQ7XHJcblxyXG4kYmx1ZTogICAgIzE2NjQ5NiAhZGVmYXVsdDtcclxuJHJlZDogICAgICNkNDMyNDggIWRlZmF1bHQ7XHJcbiRncmVlbjogICAjMTZiMDY0ICFkZWZhdWx0O1xyXG4keWVsbG93OiAgI2ZiYzUzMSAhZGVmYXVsdDtcclxuJG9yYW5nZTogICNmZjgwMTYgIWRlZmF1bHQ7XHJcbiRpbmRpZ286ICAjNjQxNmUwICFkZWZhdWx0O1xyXG4kcGluazogICAgI2UwMzJiMiAhZGVmYXVsdDtcclxuJHRlYWw6ICAgICMxNmM0OTYgIWRlZmF1bHQ7XHJcbiR2aW9sZXQ6ICAjMzk0RjZDICFkZWZhdWx0O1xyXG5cclxuJGJsZWFyOiAkZ3JheTIwMDtcclxuJHNtb2tlOiAkZ3JheTIwMDtcclxuXHJcbi8qICNlbmRyZWdpb24gKi9cclxuXHJcbiRyYWRpdXM6IDVweDtcclxuXHJcbi8qICNyZWdpb24gQ29sb3JzIE92ZXJyaWRlKi9cclxuXHJcbiRyZWQ6ICM5RjE5NDE7XHJcblxyXG4vLyBzZXQgcHJpbWFyeSBjb2xvclxyXG4kcHJpbWFyeTogJHJlZDtcclxuXHJcbi8qICNlbmRyZWdpb24gKi9cclxuXHJcbi8qICNyZWdpb24gRm9udHMgKi9cclxuXHJcblxyXG4kZm9udEZhbWlseVNhbnNTZXJpZjogXCJPcGVuIHNhbnNcIiwgXCJTZWdvZSBVSVwiLCBBcmlhbCwgc2Fucy1zZXJpZiAhZGVmYXVsdDtcclxuLy8gJGZvbnRGYW1pbHlTYW5zU2VyaWY6IFwiT3BlbiBzYW5zXCIsIFwiU2Vnb2UgVUlcIiwgQXJpYWwsIHNhbnMtc2VyaWYsICFkZWZhdWx0O1xyXG4kZm9udEZhbWlseU1vbm9zcGFjZTogIENvbnNvbGFzLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZSAhZGVmYXVsdDtcclxuJGZvbnRGYW1pbHk6ICRmb250RmFtaWx5U2Fuc1NlcmlmICFkZWZhdWx0O1xyXG5cclxuXHJcbiRmb250U2l6ZTogMXJlbSAhZGVmYXVsdDtcclxuJGZvbnRTaXplTGFyZ2U6ICgxLjI4cmVtKSAhZGVmYXVsdDtcclxuJGZvbnRTaXplU21hbGw6ICguOHJlbSkgIWRlZmF1bHQ7XHJcblxyXG4kZm9udFdlaWdodExpZ2h0OiAzMDAgIWRlZmF1bHQ7XHJcbiRmb250V2VpZ2h0Tm9ybWFsOiA0MDAgIWRlZmF1bHQ7XHJcbiRmb250V2VpZ2h0Qm9sZDogNzAwICFkZWZhdWx0O1xyXG5cclxuJGZvbnRXZWlnaHQ6ICRmb250V2VpZ2h0Tm9ybWFsICFkZWZhdWx0O1xyXG4kbGluZUhlaWdodDogMS4xNSAhZGVmYXVsdDtcclxuXHJcbiRmb250U2l6ZUgxOiAyLjI4cmVtICFkZWZhdWx0O1xyXG4kZm9udFNpemVIMjogMS45NnJlbSAhZGVmYXVsdDtcclxuJGZvbnRTaXplSDM6IDEuNjRyZW0gIWRlZmF1bHQ7XHJcbiRmb250U2l6ZUg0OiAxLjMycmVtICFkZWZhdWx0O1xyXG4kZm9udFNpemVINTogMS4xNnJlbSAhZGVmYXVsdDtcclxuJGZvbnRTaXplSDY6ICRmb250U2l6ZSAhZGVmYXVsdDtcclxuXHJcblxyXG4kZm9udFNpemVEMTogMy41NnJlbSAhZGVmYXVsdDtcclxuJGZvbnRTaXplRDI6IDIuMjhyZW0gIWRlZmF1bHQ7XHJcbiRmb250U2l6ZUQzOiAxLjY0cmVtICFkZWZhdWx0O1xyXG4kZm9udFNpemVENDogMS4zMnJlbSAhZGVmYXVsdDtcclxuXHJcbi8qICNlbmRyZWdpb24gKi9cclxuXHJcbi8vIGdvbGRlbiByYXRpb1xyXG5cclxuJGdyX3Nob3J0ZXI6IDM4LjE5NjY7XHJcbiRncl9sb25nZXI6IDYxLjgwMzQ7IiwiQGltcG9ydCBcIn5zcmMvc3R5bGVzL3JhaXNpbnMvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwifnNyYy9zdHlsZXMvcmFpc2lucy9taXhpbnNcIjtcblxuOmhvc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIEBpbmNsdWRlIG1hdGVyaWFsLXNoYWRvdygxLCAxLCAkZ3JheTQwMCk7XG4gIEBpbmNsdWRlIHRyYW5zaXRpb24oKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcbiAgYm9yZGVyLXJhZGl1czogJHJhZGl1cztcbiAgJjpob3ZlciB7XG4gICAgQGluY2x1ZGUgbWF0ZXJpYWwtc2hhZG93KDIsIDEsICRncmF5NTAwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDA1KTtcbiAgfVxufVxuXG4uY29sbGVjdGlvbi1pdGVtIHtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luOiAkc3BhY2U7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBpbWcge1xuICAgIC8vIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkcmFkaXVzO1xuICAgIC8vIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkcmFkaXVzO1xuICAgIGJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG4gIH1cbn1cblxuLnRpdGxlIHtcbiAgei1pbmRleDogMTAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbGVmdDogJHNwYWNlICogMjtcbiAgd2lkdGg6IDUwJTtcbiAgaDIge1xuICAgIG1hcmdpbjogJHNwYWNlLzIgMDtcbiAgICBmb250LXNpemU6IDIuMXJlbTtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgfVxuICBoNiB7XG4gICAgbWFyZ2luOiAkc3BhY2UvMiAwO1xuICAgIGZvbnQtc2l6ZTogMS4wNXJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzlkOWQ5ZDtcbiAgfVxufVxuXG4ubW9yZSB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHBhZGRpbmc6ICRzcGFjZS80O1xuICBtYXJnaW4tdG9wOiAkc3BhY2UgKiAzO1xuICBtYXJnaW4tYm90dG9tOiAzMyU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICRwcmltYXJ5O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIEBpbmNsdWRlIHRyYW5zaXRpb24oKTtcblxuICAmOmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6ICRwcmltYXJ5O1xuICB9XG59XG5cbjpob3N0IHtcbiAgJi5tZWRpdW0ge1xuICAgIC50aXRsZSB7XG4gICAgICBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgICAgfVxuICAgICAgaDYge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICB9XG4gICAgfVxuICAgIC5tb3JlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IHVuc2V0O1xuICAgIH1cbiAgfVxufVxuXG5AaW5jbHVkZSBzY3JlZW4tdygxNDQwcHgpIHtcbiAgOmhvc3Qge1xuICAgIC50aXRsZSB7XG4gICAgICBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgIH1cbiAgICAgIGg2IHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgfVxuICAgIH1cbiAgICAubW9yZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiB1bnNldDtcbiAgICB9XG4gIH1cbiAgOmhvc3QubWVkaXVtIHtcbiAgICAudGl0bGUge1xuICAgICAgaDIge1xuICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgIH1cbiAgICAgIGg2IHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgfVxuICAgICAgLm1vcmUge1xuICAgICAgICBtYXJnaW4tdG9wOiAkc3BhY2U7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBpbmNsdWRlIHNjcmVlbi13KDEwMjRweCkge1xuICA6aG9zdCB7XG4gICAgLnRpdGxlIHtcbiAgICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICB9XG4gICAgICBoNiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIH1cbiAgICAgIC5tb3JlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogJHNwYWNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICA6aG9zdC5tZWRpdW0ge1xuICAgIC50aXRsZSB7XG4gICAgICBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgfVxuICAgICAgaDYge1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgIH1cbiAgICAgIC5tb3JlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogJHNwYWNlLzI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBpbmNsdWRlIHNjcmVlbi13KDc2OHB4KSB7XG4gIDpob3N0IHtcbiAgICAudGl0bGUge1xuICAgICAgaDIge1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgIH1cbiAgICAgIGg2IHtcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICB9XG4gICAgICAubW9yZSB7XG4gICAgICAgIG1hcmdpbi10b3A6ICRzcGFjZS8yO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLy8tIE1peGluOiBNYXRlcmlhbCBTaGFkb3dcbi8vL1xuLy8vIEJveCBzaGFkb3dzIGJhc2VkIG9uIDUgTWF0ZXJpYWwgRGVzaWduIHByZXNldHM7XG4vLy9cbi8vLyBAcGFyYW0ge3ZhcmlhYmxlfSAkei1kZXB0aCBbMV0gLSBzaGFkb3cgZGlzdGFuY2Ugb24gei1heGlzXG4vLy8gQHBhcmFtIHt2YXJpYWJsZX0gJHN0cmVuZ3RoIFsxXSAtIG11bHRpcGxpZXIgZm9yIHNoYWRvdyBzdHJlbmd0aC9kYXJrbmVzc1xuLy8vIEBwYXJhbSB7dmFyaWFibGV9ICRjb2xvciBbMV0gLSBzaGFkb3cgY29sb3Jcbi8vLyBAZ3JvdXAgbGF5b3V0XG4vLy8gQGV4YW1wbGVcbi8vLyAgIGRpdiB7XG4vLy8gICAgIEBpbmNsdWRlIG1hdGVyaWFsLXNoYWRvdygzKTtcbi8vLyAgIH1cbi8vLyBAbGluayBodHRwczovL2NvZGVwZW4uaW8vZGJveC9wZW4vUmF3QkVXXG4vLy8gQGF1dGhvciBcIkRhbmllbCBCb3hcIlxuQG1peGluIG1hdGVyaWFsLXNoYWRvdygkei1kZXB0aDogMSwgJHN0cmVuZ3RoOiAxLCAkY29sb3I6IGJsYWNrKSB7XG4gIEBpZiAkei1kZXB0aCA9PSAxIHtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgkY29sb3IsICRzdHJlbmd0aCAqIDAuMTQpLFxuICAgICAgMCAxcHggMnB4IHJnYmEoJGNvbG9yLCAkc3RyZW5ndGggKiAwLjI0KTtcbiAgfVxuICBAaWYgJHotZGVwdGggPT0gMiB7XG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoJGNvbG9yLCAkc3RyZW5ndGggKiAwLjE2KSxcbiAgICAgIDAgM3B4IDZweCByZ2JhKCRjb2xvciwgJHN0cmVuZ3RoICogMC4yMyk7XG4gIH1cbiAgQGlmICR6LWRlcHRoID09IDMge1xuICAgIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoJGNvbG9yLCAkc3RyZW5ndGggKiAwLjE5KSxcbiAgICAgIDAgNnB4IDZweCByZ2JhKCRjb2xvciwgJHN0cmVuZ3RoICogMC4yMyk7XG4gIH1cbiAgQGlmICR6LWRlcHRoID09IDQge1xuICAgIGJveC1zaGFkb3c6IDAgMTVweCAzMHB4IHJnYmEoJGNvbG9yLCAkc3RyZW5ndGggKiAwLjI1KSxcbiAgICAgIDAgMTBweCAxMHB4IHJnYmEoJGNvbG9yLCAkc3RyZW5ndGggKiAwLjIyKTtcbiAgfVxuICBAaWYgJHotZGVwdGggPT0gNSB7XG4gICAgYm94LXNoYWRvdzogMCAyMHB4IDQwcHggcmdiYSgkY29sb3IsICRzdHJlbmd0aCAqIDAuMyksXG4gICAgICAwIDE1cHggMTJweCByZ2JhKCRjb2xvciwgJHN0cmVuZ3RoICogMC4yMik7XG4gIH1cbiAgQGlmICgkei1kZXB0aCA8IDEpIG9yICgkei1kZXB0aCA+IDUpIHtcbiAgICBAd2FybiBcIiR6LWRlcHRoIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA1XCI7XG4gIH1cbn1cbiIsIkBpbXBvcnQgJ21hdGVyaWFsLXNoYWRvdy5taXhpbic7XG5cbkBtaXhpbiB6ZXJvIHtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG5AbWl4aW4gY29sLXdpZHRoKCR3aWR0aCkge1xuICBmbGV4LWJhc2lzOiAkd2lkdGg7XG4gIG1heC13aWR0aDogJHdpZHRoO1xufVxuXG5AbWl4aW4gc2NyZWVuLXcoJG13KSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkbXcpIHtcbiAgICAgIEBjb250ZW50XG4gIH1cbn1cblxuQG1peGluIHRyYW5zaXRpb24oJGVsZW1lbnQ6IGFsbCwgJHQ6ICR0aW1lLCAkZGVsYXk6IDBzKSB7XG4gIEBpZiAkZWxlbWVudD09ZGVmYXVsdCB7XG4gICAgICAkZWxlbWVudDogYWxsO1xuICB9XG4gIEBpZiAkdD09ZGVmYXVsdCB7XG4gICAgICAkdDogJHRpbWU7XG4gIH1cbiAgQGlmICRkZWxheT09ZGVmYXVsdCB7XG4gICAgICAkZGVsYXk6IDBzO1xuICB9XG4gIHRyYW5zaXRpb246ICRlbGVtZW50ICR0ICRtb3Rpb24gJGRlbGF5O1xufSIsIi8qICNyZWdpb24gQ29sb3JzKi9cbi8qICNlbmRyZWdpb24gKi9cbi8qICNyZWdpb24gQ29sb3JzIE92ZXJyaWRlKi9cbi8qICNlbmRyZWdpb24gKi9cbi8qICNyZWdpb24gRm9udHMgKi9cbi8qICNlbmRyZWdpb24gKi9cbjpob3N0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgxNzgsIDE3OCwgMTc4LCAwLjE0KSwgMCAxcHggMnB4IHJnYmEoMTc4LCAxNzgsIDE3OCwgMC4yNCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0IDBzO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG46aG9zdDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMTYpLCAwIDNweCA2cHggcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjIzKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAwNSk7XG59XG5cbi5jb2xsZWN0aW9uLWl0ZW0ge1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW46IDE2cHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuLmNvbGxlY3Rpb24taXRlbSBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi50aXRsZSB7XG4gIHotaW5kZXg6IDEwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGxlZnQ6IDMycHg7XG4gIHdpZHRoOiA1MCU7XG59XG4udGl0bGUgaDIge1xuICBtYXJnaW46IDhweCAwO1xuICBmb250LXNpemU6IDIuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG4udGl0bGUgaDYge1xuICBtYXJnaW46IDhweCAwO1xuICBmb250LXNpemU6IDEuMDVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzlkOWQ5ZDtcbn1cblxuLm1vcmUge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBwYWRkaW5nOiA0cHg7XG4gIG1hcmdpbi10b3A6IDQ4cHg7XG4gIG1hcmdpbi1ib3R0b206IDMzJTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzlGMTk0MTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dCAwcztcbn1cbi5tb3JlOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjOUYxOTQxO1xufVxuXG46aG9zdC5tZWRpdW0gLnRpdGxlIGgyIHtcbiAgZm9udC1zaXplOiAxLjhyZW07XG59XG46aG9zdC5tZWRpdW0gLnRpdGxlIGg2IHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuOmhvc3QubWVkaXVtIC5tb3JlIHtcbiAgbWFyZ2luLWJvdHRvbTogdW5zZXQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxNDQwcHgpIHtcbiAgOmhvc3QgLnRpdGxlIGgyIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbiAgOmhvc3QgLnRpdGxlIGg2IHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbiAgOmhvc3QgLm1vcmUge1xuICAgIG1hcmdpbi1ib3R0b206IHVuc2V0O1xuICB9XG5cbiAgOmhvc3QubWVkaXVtIC50aXRsZSBoMiB7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gIH1cbiAgOmhvc3QubWVkaXVtIC50aXRsZSBoNiB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG4gIDpob3N0Lm1lZGl1bSAudGl0bGUgLm1vcmUge1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgOmhvc3QgLnRpdGxlIGgyIHtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgfVxuICA6aG9zdCAudGl0bGUgaDYge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuICA6aG9zdCAudGl0bGUgLm1vcmUge1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gIH1cblxuICA6aG9zdC5tZWRpdW0gLnRpdGxlIGgyIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxuICA6aG9zdC5tZWRpdW0gLnRpdGxlIGg2IHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgfVxuICA6aG9zdC5tZWRpdW0gLnRpdGxlIC5tb3JlIHtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICA6aG9zdCAudGl0bGUgaDIge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG4gIDpob3N0IC50aXRsZSBoNiB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gIH1cbiAgOmhvc3QgLnRpdGxlIC5tb3JlIHtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CollectionItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-collection-item",
          templateUrl: "./collection-item.component.html",
          styleUrls: ["./collection-item.component.scss"]
        }]
      }], function () {
        return [];
      }, {
        item: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        buttonText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        routerLinks: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        ratio: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        host: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/collection/collection-page/collection-page.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/modules/collection/collection-page/collection-page.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: CollectionPageComponent */

  /***/
  function srcAppModulesCollectionCollectionPageCollectionPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CollectionPageComponent", function () {
      return CollectionPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_modules_collection_collection_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/modules/collection/collection.service */
    "./src/app/modules/collection/collection.service.ts");
    /* harmony import */


    var _ui_rap_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../ui/rap/breadcrumbs/breadcrumbs.component */
    "./src/app/modules/ui/rap/breadcrumbs/breadcrumbs.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _collection_item_collection_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../collection-item/collection-item.component */
    "./src/app/modules/collection/collection-item/collection-item.component.ts");

    var _c0 = function _c0() {
      return ["/", "collections", "view"];
    };

    function CollectionPageComponent_app_collection_item_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-collection-item", 3);
      }

      if (rf & 2) {
        var item_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r6)("buttonText", "Shop now")("routerLinks", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
      }
    } // import { NgxUiLoaderService } from "ngx-ui-loader";


    var CollectionPageComponent =
    /*#__PURE__*/
    function () {
      function CollectionPageComponent( // private ngxService: NgxUiLoaderService,
      collection) {
        var _this = this;

        _classCallCheck(this, CollectionPageComponent);

        this.collection = collection;
        this.breadcrumbs = [{
          link: "/",
          title: "Homepage"
        }, {
          link: "collection",
          title: "Collection"
        }];

        this.collectionHandler = function (data) {
          _this.collection.list = data.data; // this.ngxService.stopAll();
        };
      }

      _createClass(CollectionPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.collection.get().subscribe(this.collectionHandler);
        }
      }]);

      return CollectionPageComponent;
    }();

    CollectionPageComponent.ɵfac = function CollectionPageComponent_Factory(t) {
      return new (t || CollectionPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modules_collection_collection_service__WEBPACK_IMPORTED_MODULE_1__["CollectionService"]));
    };

    CollectionPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CollectionPageComponent,
      selectors: [["app-collection-page"]],
      decls: 6,
      vars: 2,
      consts: [[3, "breadcrumbs"], [1, "collections"], ["class", "medium", 3, "item", "buttonText", "routerLinks", 4, "ngFor", "ngForOf"], [1, "medium", 3, "item", "buttonText", "routerLinks"]],
      template: function CollectionPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rap-breadcrumbs", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CollectionPageComponent_app_collection_item_2_Template, 1, 4, "app-collection-item", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("breadcrumbs", ctx.breadcrumbs);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.collection.list);
        }
      },
      directives: [_ui_rap_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _collection_item_collection_item_component__WEBPACK_IMPORTED_MODULE_4__["CollectionItemComponent"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n}\n.collections[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.collections[_ngcontent-%COMP%]   app-collection-item[_ngcontent-%COMP%] {\n  width: calc(33% - 16px);\n  margin: 8px;\n}\n@media (max-width: 768px) {\n  .collections[_ngcontent-%COMP%]   app-collection-item[_ngcontent-%COMP%] {\n    width: calc(50% - 16px);\n    margin: 8px;\n  }\n}\n@media (max-width: 640px) {\n  .collections[_ngcontent-%COMP%]   app-collection-item[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 8px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92b2xvZGFidWtvdnNraWovRGVza3RvcC9uZy1zaG93dS1jbGllbnQvc3JjL3N0eWxlcy9yYWlzaW5zL192YXJpYWJsZXMuc2NzcyIsIi9Vc2Vycy92b2xvZGFidWtvdnNraWovRGVza3RvcC9uZy1zaG93dS1jbGllbnQvc3JjL2FwcC9tb2R1bGVzL2NvbGxlY3Rpb24vY29sbGVjdGlvbi1wYWdlL2NvbGxlY3Rpb24tcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9jb2xsZWN0aW9uL2NvbGxlY3Rpb24tcGFnZS9jb2xsZWN0aW9uLXBhZ2UuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvdm9sb2RhYnVrb3Zza2lqL0Rlc2t0b3Avbmctc2hvd3UtY2xpZW50L3NyYy9zdHlsZXMvcmFpc2lucy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUEsa0JBQUE7QUE4QkEsZUFBQTtBQUlBLDJCQUFBO0FBT0EsZUFBQTtBQUVBLGtCQUFBO0FBaUNBLGVBQUE7QUMvRUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUNJRjtBRERBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0lGO0FERkU7RUFDRSx1QkFBQTtFQUNBLFdBQUE7QUNJSjtBQ0pFO0VGTUU7SUFDRSx1QkFBQTtJQUNBLFdBQUE7RUNFSjtBQUNGO0FDWEU7RUZlRTtJQUNFLFdBQUE7SUFDQSxXQUFBO0VDREo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29sbGVjdGlvbi9jb2xsZWN0aW9uLXBhZ2UvY29sbGVjdGlvbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHNwYWNlOiAxNnB4O1xyXG5cclxuJHRpbWU6IC4ycztcclxuJG1vdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiRlbGFzdGljOiBjdWJpYy1iZXppZXIoLjc1LC0wLjUsMCwxLjc1KTtcclxuXHJcbi8qICNyZWdpb24gQ29sb3JzKi9cclxuXHJcbiR3aGl0ZTogd2hpdGUgIWRlZmF1bHQ7XHJcblxyXG4kZ3JheTEwMDogI2ZhZmFmYSAhZGVmYXVsdDtcclxuJGdyYXkyMDA6ICNlY2VjZWMgIWRlZmF1bHQ7XHJcbiRncmF5MzAwOiAjYzRjNGM0ICFkZWZhdWx0O1xyXG4kZ3JheTQwMDogI2IyYjJiMiAhZGVmYXVsdDtcclxuJGdyYXk1MDA6ICM4MDgwODAgIWRlZmF1bHQ7XHJcbiRncmF5NjAwOiAjNjQ2NDY0ICFkZWZhdWx0O1xyXG4kZ3JheTcwMDogIzQ4NDg0OCAhZGVmYXVsdDtcclxuJGdyYXk4MDA6ICMzMjMyMzIgIWRlZmF1bHQ7XHJcbiRncmF5ODUwOiAjMjQyNDI0ICFkZWZhdWx0O1xyXG4kZ3JheTkwMDogIzE2MTYxNiAhZGVmYXVsdDtcclxuXHJcbiRibGFjazogYmxhY2sgIWRlZmF1bHQ7XHJcblxyXG4kYmx1ZTogICAgIzE2NjQ5NiAhZGVmYXVsdDtcclxuJHJlZDogICAgICNkNDMyNDggIWRlZmF1bHQ7XHJcbiRncmVlbjogICAjMTZiMDY0ICFkZWZhdWx0O1xyXG4keWVsbG93OiAgI2ZiYzUzMSAhZGVmYXVsdDtcclxuJG9yYW5nZTogICNmZjgwMTYgIWRlZmF1bHQ7XHJcbiRpbmRpZ286ICAjNjQxNmUwICFkZWZhdWx0O1xyXG4kcGluazogICAgI2UwMzJiMiAhZGVmYXVsdDtcclxuJHRlYWw6ICAgICMxNmM0OTYgIWRlZmF1bHQ7XHJcbiR2aW9sZXQ6ICAjMzk0RjZDICFkZWZhdWx0O1xyXG5cclxuJGJsZWFyOiAkZ3JheTIwMDtcclxuJHNtb2tlOiAkZ3JheTIwMDtcclxuXHJcbi8qICNlbmRyZWdpb24gKi9cclxuXHJcbiRyYWRpdXM6IDVweDtcclxuXHJcbi8qICNyZWdpb24gQ29sb3JzIE92ZXJyaWRlKi9cclxuXHJcbiRyZWQ6ICM5RjE5NDE7XHJcblxyXG4vLyBzZXQgcHJpbWFyeSBjb2xvclxyXG4kcHJpbWFyeTogJHJlZDtcclxuXHJcbi8qICNlbmRyZWdpb24gKi9cclxuXHJcbi8qICNyZWdpb24gRm9udHMgKi9cclxuXHJcblxyXG4kZm9udEZhbWlseVNhbnNTZXJpZjogXCJPcGVuIHNhbnNcIiwgXCJTZWdvZSBVSVwiLCBBcmlhbCwgc2Fucy1zZXJpZiAhZGVmYXVsdDtcclxuLy8gJGZvbnRGYW1pbHlTYW5zU2VyaWY6IFwiT3BlbiBzYW5zXCIsIFwiU2Vnb2UgVUlcIiwgQXJpYWwsIHNhbnMtc2VyaWYsICFkZWZhdWx0O1xyXG4kZm9udEZhbWlseU1vbm9zcGFjZTogIENvbnNvbGFzLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZSAhZGVmYXVsdDtcclxuJGZvbnRGYW1pbHk6ICRmb250RmFtaWx5U2Fuc1NlcmlmICFkZWZhdWx0O1xyXG5cclxuXHJcbiRmb250U2l6ZTogMXJlbSAhZGVmYXVsdDtcclxuJGZvbnRTaXplTGFyZ2U6ICgxLjI4cmVtKSAhZGVmYXVsdDtcclxuJGZvbnRTaXplU21hbGw6ICguOHJlbSkgIWRlZmF1bHQ7XHJcblxyXG4kZm9udFdlaWdodExpZ2h0OiAzMDAgIWRlZmF1bHQ7XHJcbiRmb250V2VpZ2h0Tm9ybWFsOiA0MDAgIWRlZmF1bHQ7XHJcbiRmb250V2VpZ2h0Qm9sZDogNzAwICFkZWZhdWx0O1xyXG5cclxuJGZvbnRXZWlnaHQ6ICRmb250V2VpZ2h0Tm9ybWFsICFkZWZhdWx0O1xyXG4kbGluZUhlaWdodDogMS4xNSAhZGVmYXVsdDtcclxuXHJcbiRmb250U2l6ZUgxOiAyLjI4cmVtICFkZWZhdWx0O1xyXG4kZm9udFNpemVIMjogMS45NnJlbSAhZGVmYXVsdDtcclxuJGZvbnRTaXplSDM6IDEuNjRyZW0gIWRlZmF1bHQ7XHJcbiRmb250U2l6ZUg0OiAxLjMycmVtICFkZWZhdWx0O1xyXG4kZm9udFNpemVINTogMS4xNnJlbSAhZGVmYXVsdDtcclxuJGZvbnRTaXplSDY6ICRmb250U2l6ZSAhZGVmYXVsdDtcclxuXHJcblxyXG4kZm9udFNpemVEMTogMy41NnJlbSAhZGVmYXVsdDtcclxuJGZvbnRTaXplRDI6IDIuMjhyZW0gIWRlZmF1bHQ7XHJcbiRmb250U2l6ZUQzOiAxLjY0cmVtICFkZWZhdWx0O1xyXG4kZm9udFNpemVENDogMS4zMnJlbSAhZGVmYXVsdDtcclxuXHJcbi8qICNlbmRyZWdpb24gKi9cclxuXHJcbi8vIGdvbGRlbiByYXRpb1xyXG5cclxuJGdyX3Nob3J0ZXI6IDM4LjE5NjY7XHJcbiRncl9sb25nZXI6IDYxLjgwMzQ7IiwiQGltcG9ydCBcIn5zcmMvc3R5bGVzL3JhaXNpbnMvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwifnNyYy9zdHlsZXMvcmFpc2lucy9taXhpbnNcIjtcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY29sbGVjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgYXBwLWNvbGxlY3Rpb24taXRlbSB7XG4gICAgd2lkdGg6IGNhbGMoMzMlIC0gI3skc3BhY2V9KTtcbiAgICBtYXJnaW46ICRzcGFjZS8yO1xuICB9XG59XG5cbkBpbmNsdWRlIHNjcmVlbi13KDc2OHB4KSB7XG4gIC5jb2xsZWN0aW9ucyB7XG4gICAgYXBwLWNvbGxlY3Rpb24taXRlbSB7XG4gICAgICB3aWR0aDogY2FsYyg1MCUgLSAjeyRzcGFjZX0pO1xuICAgICAgbWFyZ2luOiAkc3BhY2UvMjtcbiAgICB9XG4gIH1cbn1cblxuQGluY2x1ZGUgc2NyZWVuLXcoNjQwcHgpIHtcbiAgLmNvbGxlY3Rpb25zIHtcbiAgICBhcHAtY29sbGVjdGlvbi1pdGVtIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luOiAkc3BhY2UvMjtcbiAgICB9XG4gIH1cbn1cbiIsIi8qICNyZWdpb24gQ29sb3JzKi9cbi8qICNlbmRyZWdpb24gKi9cbi8qICNyZWdpb24gQ29sb3JzIE92ZXJyaWRlKi9cbi8qICNlbmRyZWdpb24gKi9cbi8qICNyZWdpb24gRm9udHMgKi9cbi8qICNlbmRyZWdpb24gKi9cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNvbGxlY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmNvbGxlY3Rpb25zIGFwcC1jb2xsZWN0aW9uLWl0ZW0ge1xuICB3aWR0aDogY2FsYygzMyUgLSAxNnB4KTtcbiAgbWFyZ2luOiA4cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY29sbGVjdGlvbnMgYXBwLWNvbGxlY3Rpb24taXRlbSB7XG4gICAgd2lkdGg6IGNhbGMoNTAlIC0gMTZweCk7XG4gICAgbWFyZ2luOiA4cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAuY29sbGVjdGlvbnMgYXBwLWNvbGxlY3Rpb24taXRlbSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiA4cHg7XG4gIH1cbn0iLCJAaW1wb3J0ICdtYXRlcmlhbC1zaGFkb3cubWl4aW4nO1xuXG5AbWl4aW4gemVybyB7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuQG1peGluIGNvbC13aWR0aCgkd2lkdGgpIHtcbiAgZmxleC1iYXNpczogJHdpZHRoO1xuICBtYXgtd2lkdGg6ICR3aWR0aDtcbn1cblxuQG1peGluIHNjcmVlbi13KCRtdykge1xuICBAbWVkaWEgKG1heC13aWR0aDogJG13KSB7XG4gICAgICBAY29udGVudFxuICB9XG59XG5cbkBtaXhpbiB0cmFuc2l0aW9uKCRlbGVtZW50OiBhbGwsICR0OiAkdGltZSwgJGRlbGF5OiAwcykge1xuICBAaWYgJGVsZW1lbnQ9PWRlZmF1bHQge1xuICAgICAgJGVsZW1lbnQ6IGFsbDtcbiAgfVxuICBAaWYgJHQ9PWRlZmF1bHQge1xuICAgICAgJHQ6ICR0aW1lO1xuICB9XG4gIEBpZiAkZGVsYXk9PWRlZmF1bHQge1xuICAgICAgJGRlbGF5OiAwcztcbiAgfVxuICB0cmFuc2l0aW9uOiAkZWxlbWVudCAkdCAkbW90aW9uICRkZWxheTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CollectionPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-collection-page",
          templateUrl: "./collection-page.component.html",
          styleUrls: ["./collection-page.component.scss"]
        }]
      }], function () {
        return [{
          type: src_app_modules_collection_collection_service__WEBPACK_IMPORTED_MODULE_1__["CollectionService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/collection/collection-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/modules/collection/collection-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: СollectionRoutingModule */

  /***/
  function srcAppModulesCollectionCollectionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "СollectionRoutingModule", function () {
      return СollectionRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _collection_page_collection_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./collection-page/collection-page.component */
    "./src/app/modules/collection/collection-page/collection-page.component.ts");
    /* harmony import */


    var _collection_view_page_collection_view_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./collection-view-page/collection-view-page.component */
    "./src/app/modules/collection/collection-view-page/collection-view-page.component.ts");

    var routes = [{
      path: "",
      component: _collection_page_collection_page_component__WEBPACK_IMPORTED_MODULE_2__["CollectionPageComponent"]
    }, {
      path: "view/:id",
      component: _collection_view_page_collection_view_page_component__WEBPACK_IMPORTED_MODULE_3__["CollectionViewPageComponent"]
    }];

    var СollectionRoutingModule = function СollectionRoutingModule() {
      _classCallCheck(this, СollectionRoutingModule);
    };

    СollectionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: СollectionRoutingModule
    });
    СollectionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function СollectionRoutingModule_Factory(t) {
        return new (t || СollectionRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](СollectionRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](СollectionRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/collection/collection-view-page/collection-view-page.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/modules/collection/collection-view-page/collection-view-page.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: CollectionViewPageComponent */

  /***/
  function srcAppModulesCollectionCollectionViewPageCollectionViewPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CollectionViewPageComponent", function () {
      return CollectionViewPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var src_app_modules_collection_collection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/modules/collection/collection.service */
    "./src/app/modules/collection/collection.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ui_rap_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../ui/rap/breadcrumbs/breadcrumbs.component */
    "./src/app/modules/ui/rap/breadcrumbs/breadcrumbs.component.ts");
    /* harmony import */


    var _collection_item_collection_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../collection-item/collection-item.component */
    "./src/app/modules/collection/collection-item/collection-item.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _product_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../product/product-item/product-item.component */
    "./src/app/modules/product/product-item/product-item.component.ts");

    function CollectionViewPageComponent_app_product_item_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-product-item", 6);
      }

      if (rf & 2) {
        var item_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", item_r8.product);
      }
    }

    var _c0 = function _c0(a0, a1, a2) {
      return {
        image: a0,
        title: a1,
        subtitle: a2
      };
    };

    var CollectionViewPageComponent =
    /*#__PURE__*/
    function () {
      function CollectionViewPageComponent( // private ngxService: NgxUiLoaderService,
      collection, route) {
        var _this2 = this;

        _classCallCheck(this, CollectionViewPageComponent);

        this.collection = collection;
        this.route = route;
        this.breadcrumbs = [{
          link: "/",
          title: "Homepage"
        }, {
          link: "collections",
          title: "Collections"
        }];
        this.id = 0;
        this.host = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].hoststatic;

        this.collectionHandler = function (data) {
          var _a; // this.ngxService.stopAll();


          _this2.collection.item = data.data;

          _this2.breadcrumbs.push({
            link: "collections/".concat(_this2.id),
            title: (_a = _this2.collection.item.description) === null || _a === void 0 ? void 0 : _a.title
          });
        };
      }

      _createClass(CollectionViewPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.route.params.subscribe(function (data) {
            _this3.id = data["id"]; // this.ngxService.start();

            _this3.collection.getBy(_this3.id).subscribe(_this3.collectionHandler);
          });
        }
      }]);

      return CollectionViewPageComponent;
    }();

    CollectionViewPageComponent.ɵfac = function CollectionViewPageComponent_Factory(t) {
      return new (t || CollectionViewPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modules_collection_collection_service__WEBPACK_IMPORTED_MODULE_2__["CollectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    CollectionViewPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CollectionViewPageComponent,
      selectors: [["app-collection-view-page"]],
      decls: 10,
      vars: 7,
      consts: [[3, "breadcrumbs"], [1, "row"], [1, "col"], [1, "grid"], [1, "medium", 3, "item"], [3, "product", 4, "ngFor", "ngForOf"], [3, "product"]],
      template: function CollectionViewPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rap-breadcrumbs", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-collection-item", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CollectionViewPageComponent_app_product_item_6_Template, 1, 1, "app-product-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("breadcrumbs", ctx.breadcrumbs);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](3, _c0, ctx.collection.item == null ? null : ctx.collection.item.image, ctx.collection.item == null ? null : ctx.collection.item.description == null ? null : ctx.collection.item.description.title, ctx.collection.item == null ? null : ctx.collection.item.description == null ? null : ctx.collection.item.description.subtitle));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.collection.item.products);
        }
      },
      directives: [_ui_rap_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbsComponent"], _collection_item_collection_item_component__WEBPACK_IMPORTED_MODULE_5__["CollectionItemComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _product_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_7__["ProductItemComponent"]],
      styles: [".col-side[_ngcontent-%COMP%] {\n  flex-basis: 196px;\n  max-width: 196px;\n}\n.filters[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 32px;\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 16px;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n}\napp-collection-item[_ngcontent-%COMP%] {\n  grid-column: 1/3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92b2xvZGFidWtvdnNraWovRGVza3RvcC9uZy1zaG93dS1jbGllbnQvc3JjL3N0eWxlcy9yYWlzaW5zL192YXJpYWJsZXMuc2NzcyIsIi9Vc2Vycy92b2xvZGFidWtvdnNraWovRGVza3RvcC9uZy1zaG93dS1jbGllbnQvc3JjL2FwcC9tb2R1bGVzL2NvbGxlY3Rpb24vY29sbGVjdGlvbi12aWV3LXBhZ2UvY29sbGVjdGlvbi12aWV3LXBhZ2UuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvdm9sb2RhYnVrb3Zza2lqL0Rlc2t0b3Avbmctc2hvd3UtY2xpZW50L3NyYy9zdHlsZXMvcmFpc2lucy9fbWl4aW5zLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvY29sbGVjdGlvbi9jb2xsZWN0aW9uLXZpZXctcGFnZS9jb2xsZWN0aW9uLXZpZXctcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQSxrQkFBQTtBQThCQSxlQUFBO0FBSUEsMkJBQUE7QUFPQSxlQUFBO0FBRUEsa0JBQUE7QUFpQ0EsZUFBQTtBQy9FQTtFQ09FLGlCRE5tQjtFQ09uQixnQkRQbUI7QUVLckI7QUZGQTtFQUNJLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxTQUFBO0FFS0o7QUZGQTtFQUNFLGFBQUE7RUFDQSxjRGRNO0VDZU4sNERBQUE7QUVLRjtBRkZBO0VBQ0UsZ0JBQUE7QUVLRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29sbGVjdGlvbi9jb2xsZWN0aW9uLXZpZXctcGFnZS9jb2xsZWN0aW9uLXZpZXctcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRzcGFjZTogMTZweDtcclxuXHJcbiR0aW1lOiAuMnM7XHJcbiRtb3Rpb246IGVhc2UtaW4tb3V0O1xyXG4kZWxhc3RpYzogY3ViaWMtYmV6aWVyKC43NSwtMC41LDAsMS43NSk7XHJcblxyXG4vKiAjcmVnaW9uIENvbG9ycyovXHJcblxyXG4kd2hpdGU6IHdoaXRlICFkZWZhdWx0O1xyXG5cclxuJGdyYXkxMDA6ICNmYWZhZmEgIWRlZmF1bHQ7XHJcbiRncmF5MjAwOiAjZWNlY2VjICFkZWZhdWx0O1xyXG4kZ3JheTMwMDogI2M0YzRjNCAhZGVmYXVsdDtcclxuJGdyYXk0MDA6ICNiMmIyYjIgIWRlZmF1bHQ7XHJcbiRncmF5NTAwOiAjODA4MDgwICFkZWZhdWx0O1xyXG4kZ3JheTYwMDogIzY0NjQ2NCAhZGVmYXVsdDtcclxuJGdyYXk3MDA6ICM0ODQ4NDggIWRlZmF1bHQ7XHJcbiRncmF5ODAwOiAjMzIzMjMyICFkZWZhdWx0O1xyXG4kZ3JheTg1MDogIzI0MjQyNCAhZGVmYXVsdDtcclxuJGdyYXk5MDA6ICMxNjE2MTYgIWRlZmF1bHQ7XHJcblxyXG4kYmxhY2s6IGJsYWNrICFkZWZhdWx0O1xyXG5cclxuJGJsdWU6ICAgICMxNjY0OTYgIWRlZmF1bHQ7XHJcbiRyZWQ6ICAgICAjZDQzMjQ4ICFkZWZhdWx0O1xyXG4kZ3JlZW46ICAgIzE2YjA2NCAhZGVmYXVsdDtcclxuJHllbGxvdzogICNmYmM1MzEgIWRlZmF1bHQ7XHJcbiRvcmFuZ2U6ICAjZmY4MDE2ICFkZWZhdWx0O1xyXG4kaW5kaWdvOiAgIzY0MTZlMCAhZGVmYXVsdDtcclxuJHBpbms6ICAgICNlMDMyYjIgIWRlZmF1bHQ7XHJcbiR0ZWFsOiAgICAjMTZjNDk2ICFkZWZhdWx0O1xyXG4kdmlvbGV0OiAgIzM5NEY2QyAhZGVmYXVsdDtcclxuXHJcbiRibGVhcjogJGdyYXkyMDA7XHJcbiRzbW9rZTogJGdyYXkyMDA7XHJcblxyXG4vKiAjZW5kcmVnaW9uICovXHJcblxyXG4kcmFkaXVzOiA1cHg7XHJcblxyXG4vKiAjcmVnaW9uIENvbG9ycyBPdmVycmlkZSovXHJcblxyXG4kcmVkOiAjOUYxOTQxO1xyXG5cclxuLy8gc2V0IHByaW1hcnkgY29sb3JcclxuJHByaW1hcnk6ICRyZWQ7XHJcblxyXG4vKiAjZW5kcmVnaW9uICovXHJcblxyXG4vKiAjcmVnaW9uIEZvbnRzICovXHJcblxyXG5cclxuJGZvbnRGYW1pbHlTYW5zU2VyaWY6IFwiT3BlbiBzYW5zXCIsIFwiU2Vnb2UgVUlcIiwgQXJpYWwsIHNhbnMtc2VyaWYgIWRlZmF1bHQ7XHJcbi8vICRmb250RmFtaWx5U2Fuc1NlcmlmOiBcIk9wZW4gc2Fuc1wiLCBcIlNlZ29lIFVJXCIsIEFyaWFsLCBzYW5zLXNlcmlmLCAhZGVmYXVsdDtcclxuJGZvbnRGYW1pbHlNb25vc3BhY2U6ICBDb25zb2xhcywgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2UgIWRlZmF1bHQ7XHJcbiRmb250RmFtaWx5OiAkZm9udEZhbWlseVNhbnNTZXJpZiAhZGVmYXVsdDtcclxuXHJcblxyXG4kZm9udFNpemU6IDFyZW0gIWRlZmF1bHQ7XHJcbiRmb250U2l6ZUxhcmdlOiAoMS4yOHJlbSkgIWRlZmF1bHQ7XHJcbiRmb250U2l6ZVNtYWxsOiAoLjhyZW0pICFkZWZhdWx0O1xyXG5cclxuJGZvbnRXZWlnaHRMaWdodDogMzAwICFkZWZhdWx0O1xyXG4kZm9udFdlaWdodE5vcm1hbDogNDAwICFkZWZhdWx0O1xyXG4kZm9udFdlaWdodEJvbGQ6IDcwMCAhZGVmYXVsdDtcclxuXHJcbiRmb250V2VpZ2h0OiAkZm9udFdlaWdodE5vcm1hbCAhZGVmYXVsdDtcclxuJGxpbmVIZWlnaHQ6IDEuMTUgIWRlZmF1bHQ7XHJcblxyXG4kZm9udFNpemVIMTogMi4yOHJlbSAhZGVmYXVsdDtcclxuJGZvbnRTaXplSDI6IDEuOTZyZW0gIWRlZmF1bHQ7XHJcbiRmb250U2l6ZUgzOiAxLjY0cmVtICFkZWZhdWx0O1xyXG4kZm9udFNpemVINDogMS4zMnJlbSAhZGVmYXVsdDtcclxuJGZvbnRTaXplSDU6IDEuMTZyZW0gIWRlZmF1bHQ7XHJcbiRmb250U2l6ZUg2OiAkZm9udFNpemUgIWRlZmF1bHQ7XHJcblxyXG5cclxuJGZvbnRTaXplRDE6IDMuNTZyZW0gIWRlZmF1bHQ7XHJcbiRmb250U2l6ZUQyOiAyLjI4cmVtICFkZWZhdWx0O1xyXG4kZm9udFNpemVEMzogMS42NHJlbSAhZGVmYXVsdDtcclxuJGZvbnRTaXplRDQ6IDEuMzJyZW0gIWRlZmF1bHQ7XHJcblxyXG4vKiAjZW5kcmVnaW9uICovXHJcblxyXG4vLyBnb2xkZW4gcmF0aW9cclxuXHJcbiRncl9zaG9ydGVyOiAzOC4xOTY2O1xyXG4kZ3JfbG9uZ2VyOiA2MS44MDM0OyIsIkBpbXBvcnQgXCJ+c3JjL3N0eWxlcy9yYWlzaW5zL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIn5zcmMvc3R5bGVzL3JhaXNpbnMvbWl4aW5zXCI7XG5cbi5jb2wtc2lkZSB7XG4gIEBpbmNsdWRlIGNvbC13aWR0aCgxOTZweCk7XG59XG5cbi5maWx0ZXJzIHtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogJHNwYWNlKjI7XG59XG5cbi5ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1nYXA6ICRzcGFjZTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjUwcHgsIDFmcikpO1xufVxuXG5hcHAtY29sbGVjdGlvbi1pdGVtIHtcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xuICAvLyB3aWR0aDogY2FsYyg1MCUgLSAjeyRzcGFjZSAqIDJ9KTtcbiAgLy8gbWFyZ2luOiAkc3BhY2UvMjtcbn1cblxuLy8gYXBwLXByb2R1Y3QtaXRlbSB7XG4vLyAgIHdpZHRoOiBjYWxjKDI1JSAtICN7JHNwYWNlICogMn0pO1xuLy8gICBtYXJnaW46ICRzcGFjZS8yO1xuLy8gfVxuXG4vLyBAaW5jbHVkZSBzY3JlZW4tdyg4MDBweCkge1xuLy8gICBhcHAtcHJvZHVjdC1pdGVtIHtcbi8vICAgICB3aWR0aDogY2FsYygzMyUgLSAjeyRzcGFjZX0pO1xuLy8gICAgIG1hcmdpbjogJHNwYWNlLzI7XG4vLyAgIH1cbi8vIH1cblxuLy8gQGluY2x1ZGUgc2NyZWVuLXcoNDgwcHgpIHtcbi8vICAgYXBwLXByb2R1Y3QtaXRlbSB7XG4vLyAgICAgd2lkdGg6IGNhbGMoNTAlIC0gI3skc3BhY2UgfSk7XG4vLyAgICAgbWFyZ2luOiAkc3BhY2UvMjtcbi8vICAgfVxuLy8gfVxuIiwiQGltcG9ydCAnbWF0ZXJpYWwtc2hhZG93Lm1peGluJztcblxuQG1peGluIHplcm8ge1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbkBtaXhpbiBjb2wtd2lkdGgoJHdpZHRoKSB7XG4gIGZsZXgtYmFzaXM6ICR3aWR0aDtcbiAgbWF4LXdpZHRoOiAkd2lkdGg7XG59XG5cbkBtaXhpbiBzY3JlZW4tdygkbXcpIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRtdykge1xuICAgICAgQGNvbnRlbnRcbiAgfVxufVxuXG5AbWl4aW4gdHJhbnNpdGlvbigkZWxlbWVudDogYWxsLCAkdDogJHRpbWUsICRkZWxheTogMHMpIHtcbiAgQGlmICRlbGVtZW50PT1kZWZhdWx0IHtcbiAgICAgICRlbGVtZW50OiBhbGw7XG4gIH1cbiAgQGlmICR0PT1kZWZhdWx0IHtcbiAgICAgICR0OiAkdGltZTtcbiAgfVxuICBAaWYgJGRlbGF5PT1kZWZhdWx0IHtcbiAgICAgICRkZWxheTogMHM7XG4gIH1cbiAgdHJhbnNpdGlvbjogJGVsZW1lbnQgJHQgJG1vdGlvbiAkZGVsYXk7XG59IiwiLyogI3JlZ2lvbiBDb2xvcnMqL1xuLyogI2VuZHJlZ2lvbiAqL1xuLyogI3JlZ2lvbiBDb2xvcnMgT3ZlcnJpZGUqL1xuLyogI2VuZHJlZ2lvbiAqL1xuLyogI3JlZ2lvbiBGb250cyAqL1xuLyogI2VuZHJlZ2lvbiAqL1xuLmNvbC1zaWRlIHtcbiAgZmxleC1iYXNpczogMTk2cHg7XG4gIG1heC13aWR0aDogMTk2cHg7XG59XG5cbi5maWx0ZXJzIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAzMnB4O1xufVxuXG4uZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtZ2FwOiAxNnB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyNTBweCwgMWZyKSk7XG59XG5cbmFwcC1jb2xsZWN0aW9uLWl0ZW0ge1xuICBncmlkLWNvbHVtbjogMS8zO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CollectionViewPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-collection-view-page",
          templateUrl: "./collection-view-page.component.html",
          styleUrls: ["./collection-view-page.component.scss"]
        }]
      }], function () {
        return [{
          type: src_app_modules_collection_collection_service__WEBPACK_IMPORTED_MODULE_2__["CollectionService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/collection/collection.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/modules/collection/collection.module.ts ***!
    \*********************************************************/

  /*! exports provided: CollectionModule */

  /***/
  function srcAppModulesCollectionCollectionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CollectionModule", function () {
      return CollectionModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _collection_item_collection_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./collection-item/collection-item.component */
    "./src/app/modules/collection/collection-item/collection-item.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _collection_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./collection-routing.module */
    "./src/app/modules/collection/collection-routing.module.ts");
    /* harmony import */


    var _collection_page_collection_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./collection-page/collection-page.component */
    "./src/app/modules/collection/collection-page/collection-page.component.ts");
    /* harmony import */


    var _collection_view_page_collection_view_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./collection-view-page/collection-view-page.component */
    "./src/app/modules/collection/collection-view-page/collection-view-page.component.ts");
    /* harmony import */


    var _ui_ui_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../ui/ui.module */
    "./src/app/modules/ui/ui.module.ts");
    /* harmony import */


    var _product_product_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../product/product.module */
    "./src/app/modules/product/product.module.ts");

    var CollectionModule = function CollectionModule() {
      _classCallCheck(this, CollectionModule);
    };

    CollectionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CollectionModule
    });
    CollectionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CollectionModule_Factory(t) {
        return new (t || CollectionModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _ui_ui_module__WEBPACK_IMPORTED_MODULE_7__["UiModule"], _collection_routing_module__WEBPACK_IMPORTED_MODULE_4__["СollectionRoutingModule"], _product_product_module__WEBPACK_IMPORTED_MODULE_8__["ProductModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CollectionModule, {
        declarations: [_collection_item_collection_item_component__WEBPACK_IMPORTED_MODULE_2__["CollectionItemComponent"], _collection_page_collection_page_component__WEBPACK_IMPORTED_MODULE_5__["CollectionPageComponent"], _collection_view_page_collection_view_page_component__WEBPACK_IMPORTED_MODULE_6__["CollectionViewPageComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _ui_ui_module__WEBPACK_IMPORTED_MODULE_7__["UiModule"], _collection_routing_module__WEBPACK_IMPORTED_MODULE_4__["СollectionRoutingModule"], _product_product_module__WEBPACK_IMPORTED_MODULE_8__["ProductModule"]],
        exports: [_collection_item_collection_item_component__WEBPACK_IMPORTED_MODULE_2__["CollectionItemComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CollectionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_collection_item_collection_item_component__WEBPACK_IMPORTED_MODULE_2__["CollectionItemComponent"], _collection_page_collection_page_component__WEBPACK_IMPORTED_MODULE_5__["CollectionPageComponent"], _collection_view_page_collection_view_page_component__WEBPACK_IMPORTED_MODULE_6__["CollectionViewPageComponent"]],
          exports: [_collection_item_collection_item_component__WEBPACK_IMPORTED_MODULE_2__["CollectionItemComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _ui_ui_module__WEBPACK_IMPORTED_MODULE_7__["UiModule"], _collection_routing_module__WEBPACK_IMPORTED_MODULE_4__["СollectionRoutingModule"], _product_product_module__WEBPACK_IMPORTED_MODULE_8__["ProductModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/collection/collection.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/modules/collection/collection.service.ts ***!
    \**********************************************************/

  /*! exports provided: CollectionService */

  /***/
  function srcAppModulesCollectionCollectionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CollectionService", function () {
      return CollectionService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var CollectionService =
    /*#__PURE__*/
    function () {
      function CollectionService(http) {
        _classCallCheck(this, CollectionService);

        this.http = http;
        this.list = [];
        this.item = {
          created_at: null,
          description: {
            collection_id: null,
            created_at: null,
            description: null,
            id: null,
            lang_id: null,
            subtitle: null,
            title: null,
            updated_at: null
          },
          id: null,
          image: {
            album_id: null,
            created_at: null,
            id: null,
            src: null,
            src_mini: null,
            updated_at: null,
            user_id: null
          },
          image_id: null,
          products: [],
          status: null,
          updated_at: null
        };
      }

      _createClass(CollectionService, [{
        key: "get",
        value: function get() {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].host + "client/collection?lang=en&skip=0");
        }
      }, {
        key: "getLastThree",
        value: function getLastThree() {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].host + "client/collection?lang=en&skip=0&take=3");
        }
      }, {
        key: "getBy",
        value: function getBy(id) {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].host + "/client/product_collection/".concat(id));
        }
      }]);

      return CollectionService;
    }();

    CollectionService.ɵfac = function CollectionService_Factory(t) {
      return new (t || CollectionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    CollectionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CollectionService,
      factory: CollectionService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CollectionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=default~src-app-modules-collection-collection-module~src-app-modules-showu-home-showu-home-module-es5.js.map