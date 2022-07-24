exports.ids = [4];
exports.modules = {

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=44d2fd9a&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', [_vm._ssrNode("<h1>Hello world</h1>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=44d2fd9a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: "IndexPage",

  data() {
    return {
      payData: {
        order_id_pri: "",
        shop_bank_id: "",
        order_pay_id: "",
        order_point_id: "",
        refno: "",
        paysolutions_merchant: "",
        cc: "",
        customer_id_pri: "",
        customer_tel: "",
        order_totalpay: "",
        customer_fullname: "",
        customer_email: "",
        lang: "",
        customer_id: "",
        customer_image: "",
        postback: ""
      }
    };
  },

  created() {
    this.payData.order_id_pri = this.$route.query.order_id_pri;
    this.payData.shop_bank_id = this.$route.query.shop_bank_id;
    this.payData.order_pay_id = this.$route.query.order_pay_id;
    this.payData.order_point_id = this.$route.query.order_point_id;
    this.payData.refno = this.$route.query.refno;
    this.payData.paysolutions_merchant = this.$route.query.paysolutions_merchant;
    this.payData.cc = this.$route.query.cc;
    this.payData.customer_id_pri = this.$route.query.customer_id_pri;
    this.payData.customer_tel = this.$route.query.customer_tel;
    this.payData.order_totalpay = this.$route.query.order_totalpay;
    this.payData.customer_fullname = this.$route.query.customer_fullname;
    this.payData.customer_email = this.$route.query.customer_email;
    this.payData.lang = this.$route.query.lang;
    this.payData.customer_id = this.$route.query.customer_id;
    this.payData.customer_image = this.$route.query.customer_image;
    this.payData.postback = this.$route.query.postback;
    console.log(this.payData);
  }

});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "a2f01770"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map