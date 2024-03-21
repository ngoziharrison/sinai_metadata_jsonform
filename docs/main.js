(self["webpackChunkjsonforms_angular_material_playground"] = self["webpackChunkjsonforms_angular_material_playground"] || []).push([["main"],{

/***/ 66401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _jsonforms_angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @jsonforms/angular-material */ 19866);
/* harmony import */ var _jsonforms_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jsonforms/core */ 44643);
/* harmony import */ var _custom_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom.autocomplete */ 92870);
/* harmony import */ var _data_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.control */ 20902);
/* harmony import */ var _lang_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lang.control */ 34319);
/* harmony import */ var _assets_uischema_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/uischema.json */ 18200);
/* harmony import */ var _assets_ms_objects_schema_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/ms_objects_schema.json */ 96382);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data */ 89002);
/* harmony import */ var libphonenumber_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! libphonenumber-js */ 32611);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _jsonforms_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @jsonforms/angular */ 52563);












const departmentTester = (0,_jsonforms_core__WEBPACK_IMPORTED_MODULE_0__.and)((0,_jsonforms_core__WEBPACK_IMPORTED_MODULE_0__.schemaTypeIs)('string'), (0,_jsonforms_core__WEBPACK_IMPORTED_MODULE_0__.scopeEndsWith)('department'));
class AppComponent {
  renderers = [..._jsonforms_angular_material__WEBPACK_IMPORTED_MODULE_7__.angularMaterialRenderers, {
    tester: (0,_jsonforms_core__WEBPACK_IMPORTED_MODULE_0__.rankWith)(5, departmentTester),
    renderer: _custom_autocomplete__WEBPACK_IMPORTED_MODULE_1__.CustomAutocompleteControlRenderer
  }, {
    renderer: _data_control__WEBPACK_IMPORTED_MODULE_2__.DataDisplayComponent,
    tester: (0,_jsonforms_core__WEBPACK_IMPORTED_MODULE_0__.rankWith)(6, (0,_jsonforms_core__WEBPACK_IMPORTED_MODULE_0__.and)(_jsonforms_core__WEBPACK_IMPORTED_MODULE_0__.isControl, (0,_jsonforms_core__WEBPACK_IMPORTED_MODULE_0__.scopeEndsWith)('___data')))
  }, {
    renderer: _lang_control__WEBPACK_IMPORTED_MODULE_3__.LangComponent,
    tester: (0,_jsonforms_core__WEBPACK_IMPORTED_MODULE_0__.rankWith)(6, (0,_jsonforms_core__WEBPACK_IMPORTED_MODULE_0__.and)(_jsonforms_core__WEBPACK_IMPORTED_MODULE_0__.isControl, (0,_jsonforms_core__WEBPACK_IMPORTED_MODULE_0__.optionIs)('lang', true)))
  }];
  uischema = _assets_uischema_json__WEBPACK_IMPORTED_MODULE_4__;
  schema = _assets_ms_objects_schema_json__WEBPACK_IMPORTED_MODULE_5__;
  data = _data__WEBPACK_IMPORTED_MODULE_6__["default"];
  i18n = {
    locale: 'de-DE'
  };
  dateAdapter;
  ajv = (0,_jsonforms_core__WEBPACK_IMPORTED_MODULE_0__.createAjv)({
    schemaId: 'id',
    allErrors: true
  });
  constructor(dateAdapter) {
    this.ajv.addFormat('time', '^([0-1][0-9]|2[0-3]):[0-5][0-9]$');
    this.dateAdapter = dateAdapter;
    dateAdapter.setLocale(this.i18n.locale);
    this.ajv.addFormat('tel', maybePhoneNumber => {
      try {
        (0,libphonenumber_js__WEBPACK_IMPORTED_MODULE_8__.parsePhoneNumberWithError)(maybePhoneNumber, 'DE');
        return true;
      } catch (_) {
        return false;
      }
    });
  }
  static ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_10__.DateAdapter));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 3,
    vars: 6,
    consts: [[2, "text-align", "center"], [3, "data", "schema", "uischema", "renderers", "i18n", "ajv"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "jsonforms", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("data", ctx.data)("schema", ctx.schema)("uischema", ctx.uischema)("renderers", ctx.renderers)("i18n", ctx.i18n)("ajv", ctx.ajv);
      }
    },
    dependencies: [_jsonforms_angular__WEBPACK_IMPORTED_MODULE_11__.JsonForms],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 78629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ 99892);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ 33910);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 36480);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ 24987);
/* harmony import */ var _jsonforms_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @jsonforms/angular */ 52563);
/* harmony import */ var _jsonforms_angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @jsonforms/angular-material */ 19866);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 66401);
/* harmony import */ var _custom_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom.autocomplete */ 92870);
/* harmony import */ var _data_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.control */ 20902);
/* harmony import */ var _lang_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lang.control */ 34319);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);












class AppModule {
  static ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule, _jsonforms_angular__WEBPACK_IMPORTED_MODULE_7__.JsonFormsModule, _jsonforms_angular_material__WEBPACK_IMPORTED_MODULE_8__.JsonFormsAngularMaterialModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__.MatAutocompleteModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__.MatProgressSpinnerModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _custom_autocomplete__WEBPACK_IMPORTED_MODULE_1__.CustomAutocompleteControlRenderer, _lang_control__WEBPACK_IMPORTED_MODULE_3__.LangComponent, _data_control__WEBPACK_IMPORTED_MODULE_2__.DataDisplayComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule, _jsonforms_angular__WEBPACK_IMPORTED_MODULE_7__.JsonFormsModule, _jsonforms_angular_material__WEBPACK_IMPORTED_MODULE_8__.JsonFormsAngularMaterialModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__.MatAutocompleteModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__.MatProgressSpinnerModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule]
  });
})();

/***/ }),

/***/ 92870:
/*!****************************************!*\
  !*** ./src/app/custom.autocomplete.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomAutocompleteControlRenderer: () => (/* binding */ CustomAutocompleteControlRenderer)
/* harmony export */ });
/* harmony import */ var random_words__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! random-words */ 95932);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 95933);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 15746);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 90786);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 36520);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 55617);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9681);
/* harmony import */ var _jsonforms_angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @jsonforms/angular-material */ 19866);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/autocomplete */ 99892);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ 33910);














function CustomAutocompleteControlRenderer_mat_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-spinner", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CustomAutocompleteControlRenderer_ng_container_7_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", option_r4, " ");
  }
}
function CustomAutocompleteControlRenderer_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomAutocompleteControlRenderer_ng_container_7_mat_option_1_Template, 2, 2, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r2.filteredOptions));
  }
}
const words = (0,random_words__WEBPACK_IMPORTED_MODULE_0__.generate)(1000);
const fetchSuggestions = input => {
  const filtered = words.filter(word => word.startsWith(input));
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(filtered).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.delay)(1000));
};
class CustomAutocompleteControlRenderer extends _jsonforms_angular_material__WEBPACK_IMPORTED_MODULE_4__.AutocompleteControlRenderer {
  isLoading;
  ngOnInit() {
    super.ngOnInit();
    this.form.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(() => this.isLoading = true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(value => fetchSuggestions(value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)(() => this.isLoading = false)))).subscribe(options => this.options = options);
  }
  static ɵfac = /*@__PURE__*/function () {
    let ɵCustomAutocompleteControlRenderer_BaseFactory;
    return function CustomAutocompleteControlRenderer_Factory(t) {
      return (ɵCustomAutocompleteControlRenderer_BaseFactory || (ɵCustomAutocompleteControlRenderer_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](CustomAutocompleteControlRenderer)))(t || CustomAutocompleteControlRenderer);
    };
  }();
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CustomAutocompleteControlRenderer,
    selectors: [["jsonforms-custom-autocomplete"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
    decls: 10,
    vars: 8,
    consts: [["fxFlex", ""], ["matInput", "", "type", "text", 3, "placeholder", "id", "formControl", "matAutocomplete", "input"], ["autoActiveFirstOption", "", 3, "optionSelected"], ["auto", "matAutocomplete"], ["class", "is-loading", 4, "ngIf"], [4, "ngIf"], [1, "is-loading"], ["diameter", "30"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
    template: function CustomAutocompleteControlRenderer_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 0)(1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function CustomAutocompleteControlRenderer_Template_input_input_3_listener($event) {
          return ctx.onChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-autocomplete", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("optionSelected", function CustomAutocompleteControlRenderer_Template_mat_autocomplete_optionSelected_4_listener($event) {
          return ctx.onSelect($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CustomAutocompleteControlRenderer_mat_option_6_Template, 2, 0, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CustomAutocompleteControlRenderer_ng_container_7_Template, 3, 3, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.id)("formControl", ctx.form)("matAutocomplete", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.error);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__.MatAutocompleteTrigger, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__.MatProgressSpinner, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 20902:
/*!*********************************!*\
  !*** ./src/app/data.control.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataDisplayComponent: () => (/* binding */ DataDisplayComponent)
/* harmony export */ });
/* harmony import */ var _jsonforms_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jsonforms/angular */ 52563);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);



class DataDisplayComponent extends _jsonforms_angular__WEBPACK_IMPORTED_MODULE_0__.JsonFormsControl {
  dataAsString;
  constructor(service) {
    super(service);
  }
  mapAdditionalProps(props) {
    this.dataAsString = JSON.stringify(props.data, null, 2);
  }
  static ɵfac = function DataDisplayComponent_Factory(t) {
    return new (t || DataDisplayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_jsonforms_angular__WEBPACK_IMPORTED_MODULE_0__.JsonFormsAngularService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: DataDisplayComponent,
    selectors: [["app-data-component"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
    decls: 2,
    vars: 1,
    template: function DataDisplayComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.dataAsString);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 89002:
/*!*************************!*\
  !*** ./src/app/data.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  orders: [{
    customer: {
      id: '471201',
      name: 'Sirius Cybernetics Corporation',
      department: 'Complaints Division',
      phone: '(12) 34 56 78 90'
    },
    title: '42 killer robots',
    ordered: true,
    processId: 1890004498,
    assignee: 'Philip J. Fry',
    status: 'ordered',
    startDate: '2018-06-01',
    endDate: '2018-08-01'
  }, {
    customer: {
      id: '471202',
      name: 'Very Big Corporation of America',
      phone: '+49 123 456 789'
    },
    title: '1000 gallons of MomCorp Oil',
    processId: 1890004499,
    assignee: 'Jen Barber',
    startDate: '2018-07-01',
    status: 'planned'
  }]
});

/***/ }),

/***/ 34319:
/*!*********************************!*\
  !*** ./src/app/lang.control.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LangComponent: () => (/* binding */ LangComponent)
/* harmony export */ });
/* harmony import */ var _jsonforms_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jsonforms/angular */ 52563);
/* harmony import */ var _jsonforms_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jsonforms/core */ 44643);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 90895);






class LangComponent extends _jsonforms_angular__WEBPACK_IMPORTED_MODULE_1__.JsonFormsControl {
  currentLocale;
  dateAdapter;
  constructor(service, dateAdapter) {
    super(service);
    this.dateAdapter = dateAdapter;
  }
  mapAdditionalProps() {
    this.currentLocale = (0,_jsonforms_core__WEBPACK_IMPORTED_MODULE_0__.getLocale)(this.jsonFormsService.getState());
  }
  changeLocale(localeString) {
    this.jsonFormsService.updateI18n((0,_jsonforms_core__WEBPACK_IMPORTED_MODULE_0__.setLocale)(localeString));
    this.dateAdapter.setLocale(localeString);
  }
  static ɵfac = function LangComponent_Factory(t) {
    return new (t || LangComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_jsonforms_angular__WEBPACK_IMPORTED_MODULE_1__.JsonFormsAngularService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.DateAdapter));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: LangComponent,
    selectors: [["app-lang-component"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
    decls: 8,
    vars: 1,
    consts: [["mat-raised-button", "", "color", "primary", 3, "click"]],
    template: function LangComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Click button to set locale");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LangComponent_Template_button_click_4_listener() {
          return ctx.changeLocale("de-DE");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "de-DE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LangComponent_Template_button_click_6_listener() {
          return ctx.changeLocale("en-US");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "en-US");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Current locale: ", ctx.currentLocale, "");
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton],
    encapsulation: 2
  });
}

/***/ }),

/***/ 20553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
  production: false
};

/***/ }),

/***/ 14913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 36480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 78629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 20553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.log(err));

/***/ }),

/***/ 75042:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 96382:
/*!*******************************************!*\
  !*** ./src/assets/ms_objects_schema.json ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"title":"Manuscript Object","description":"A manuscript or codex, either real or a hypothetical reconstruction","type":"object","properties":{"id":{"description":"A unique identifer, supplied by the database","type":"integer"},"ark":{"description":"A unique Archival Resource Key (ARK) describing the manuscript object","type":"string","pattern":"^ark:/21198/z1.{6}"},"type":{"description":"The type of manuscript object, whether real or hypothetical reconstructions","type":"string","enum":["real","rebind"]},"idno":{"description":"An identifier for the manuscript, including shelfmarks or other identifier schemas","type":"array","items":{"type":"object","properties":{"type":{"enum":["shelfmark","reconstr"]},"value":{"type":"string"}},"required":["type","value"],"unevaluatedProperties":false},"minItems":1,"unevaluatedItems":false},"summary":{"type":"string"},"extent":{"description":"The extent, expressed in number of folios, which comprise the manuscript object","type":"string"},"weight":{"description":"A string expression of the manuscript object\'s weight","type":"string"},"dim":{"type":"object","properties":{"type":{"enum":["ms_obj"]},"value":{"type":"string"}},"required":["type","value"],"unevaluatedProperties":false},"state":{"description":"The original form of the manuscript object","enum":["Codex","Scroll","Bifolim","Folium","Quire(s)","Undertext object"]},"form":{"description":"The original form of the manuscript object","enum":["Codex","Scroll","Bifolim","Folium","Quire(s)"]},"fol":{"description":"A string expressing the foliation of the object in a semi-controlled format","type":"string"},"features":{"type":"array","items":{"type":"string","enum":["Dated","Colophon","Inscription(s)"]},"unevaluatedItems":false},"parts":{"type":"array","items":{"type":"object","properties":{"id":{"type":"string"},"sequence":{"type":"integer","minimum":1}},"required":["id","sequence"],"unevaluatedProperties":false},"unevaluatedItems":false},"has_bind":{"type":"boolean"},"iiif":{"type":"array","items":{"type":"object","properties":{"type":{"type":"string","enum":["main","reordered"]},"manifest":{"type":"string","format":"uri"},"text_direction":{"type":"string","enum":["right-to-left",null]},"behavior":{"type":"string","enum":["paged","individuals"]},"thumbnail":{"type":"string","format":"uri"}},"required":["type","manifest"],"unevaluatedProperties":false},"unevaluatedItems":false},"location":{"type":"array","items":{"type":"object","properties":{"repository":{"type":"string"},"collection":{"type":"string","enum":["Old Collection","New Finds","Reconstructions"]}},"required":["repository"],"unevaluatedProperties":false},"unevaluatedItems":false},"assoc_date":{"type":"array","items":{"type":"object","properties":{"type":{"type":"string","enum":["creation","binding","purchase"]},"iso":{"type":"string","format":"date"},"as_written":{"type":"string"},"note":{"type":"object","properties":{"type":{"type":"string","enum":["assoc_date"]},"value":{"type":"string"}},"required":["type","value"],"unevaluatedProperties":false}},"required":["type","iso","value"],"unevaluatedProperties":false},"unevaluatedItems":false},"note":{"type":"array","items":{"type":"object","properties":{"type":{"type":"string","enum":["condition","foliation","ornamentation","binding","cataloguer","paratext","provenance"]},"value":{"type":"string"}},"required":["type","value"],"unevaluatedProperties":false},"unevaluatedItems":false},"related_mss":{"type":"array","items":{"type":"object","properties":{"type":{"type":"string","enum":["filiation","disjecta"]},"label":{"type":"string"},"note":{"type":"object","properties":{"type":{"type":"string","enum":["related_mss"]},"value":{"type":"string"}},"required":["type","value"],"unevaluatedProperties":false},"mss":{"type":"array","items":{"type":"object","properties":{"label":{"type":"string"},"id":{"type":"string"},"url":{"type":"string","format":"uri"}},"required":["label"],"unevaluatedProperties":false},"minItems":1,"unevaluatedItems":false}},"required":["type","mss"],"unevaluatedProperties":false},"unevaluatedItems":false},"viscodex":{"type":"array","items":{"type":"object","properties":{"type":{"type":"string","enum":["ms_obj","reconstruction"]},"label":{"type":"string"},"url":{"type":"string","format":"uri"}},"required":["type","url"],"unevaluatedProperties":false},"unevaluatedItems":false},"bib":{"type":"array","items":{"type":"object","properties":{"id":{"type":"string"},"type":{"type":"string","enum":["ref","bib","version","edition","translation"]},"range":{"type":"string"},"alt_shelf":{"type":"string"},"url":{"type":"string","format":"uri"},"note":{"type":"object","properties":{"type":{"type":"string","enum":["bib"]},"value":{"type":"string"}},"required":["type","value"],"unevaluatedProperties":false}},"required":["id","type"],"unevaluatedProperties":false},"unevaluatedItems":false},"cataloguer":{"type":"array","items":{"type":"object","properties":{"id":{"type":"string"},"timestamp":{"type":"string","format":"date-time"},"comment":{"type":"string"}},"required":["id","timestamp"],"unevaluatedProperties":false},"unevaluatedItems":false}},"required":["id","ark","type","idno","extent","dim","state","form","parts","has_bind","location"],"unevaluatedProperties":false}');

/***/ }),

/***/ 18200:
/*!**********************************!*\
  !*** ./src/assets/uischema.json ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"type":"Group","elements":[{"type":"Label","text":"Manuscript Objects Input Form"},{"type":"Control","scope":"#/properties/id"},{"type":"Control","scope":"#/properties/ark"},{"type":"Control","scope":"#/properties/type","options":{"format":"radio"}},{"type":"Label","text":"Identifier No."},{"type":"Control","scope":"#/properties/idno"},{"type":"Control","scope":"#/properties/summary"},{"type":"Control","scope":"#/properties/extent"},{"type":"Control","scope":"#/properties/weight"},{"type":"Label","text":"Dimensions"},{"type":"HorizontalLayout","elements":[{"type":"Control","scope":"#/properties/dim/properties/type"},{"type":"Control","scope":"#/properties/dim/properties/value"}]},{"type":"Control","scope":"#/properties/state"},{"type":"Control","scope":"#/properties/form"},{"type":"Control","scope":"#/properties/fol"},{"type":"Control","scope":"#/properties/features"},{"type":"Label","text":"Parts"},{"type":"Control","scope":"#/properties/parts"},{"type":"Control","scope":"#/properties/has_bind"},{"type":"Control","scope":"#/properties/iiif"},{"type":"Control","scope":"#/properties/location"},{"type":"Control","scope":"#/properties/assoc_date"},{"type":"Control","scope":"#/properties/note"},{"type":"Control","scope":"#/properties/related_mss"},{"type":"Control","scope":"#/properties/viscodex"},{"type":"Control","scope":"#/properties/bib"},{"type":"Control","scope":"#/properties/cataloguer"}]}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map