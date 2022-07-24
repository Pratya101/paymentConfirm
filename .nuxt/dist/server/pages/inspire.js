exports.ids = [5];
exports.modules = {

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.delete-all.js"
var esnext_map_delete_all_js_ = __webpack_require__(40);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.every.js"
var esnext_map_every_js_ = __webpack_require__(41);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.filter.js"
var esnext_map_filter_js_ = __webpack_require__(42);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.find.js"
var esnext_map_find_js_ = __webpack_require__(43);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.find-key.js"
var esnext_map_find_key_js_ = __webpack_require__(44);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.includes.js"
var esnext_map_includes_js_ = __webpack_require__(45);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.key-of.js"
var esnext_map_key_of_js_ = __webpack_require__(46);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.map-keys.js"
var esnext_map_map_keys_js_ = __webpack_require__(47);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.map-values.js"
var esnext_map_map_values_js_ = __webpack_require__(48);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.merge.js"
var esnext_map_merge_js_ = __webpack_require__(49);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.reduce.js"
var esnext_map_reduce_js_ = __webpack_require__(50);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.some.js"
var esnext_map_some_js_ = __webpack_require__(51);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.update.js"
var esnext_map_update_js_ = __webpack_require__(52);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VGrid/VGrid.sass
var VGrid = __webpack_require__(19);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mergeData.js
var mergeData = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
















 // no xs

const breakpoints = ['sm', 'md', 'lg', 'xl'];

const breakpointProps = (() => {
  return breakpoints.reduce((props, val) => {
    props[val] = {
      type: [Boolean, String, Number],
      default: false
    };
    return props;
  }, {});
})();

const offsetProps = (() => {
  return breakpoints.reduce((props, val) => {
    props['offset' + Object(helpers["i" /* upperFirst */])(val)] = {
      type: [String, Number],
      default: null
    };
    return props;
  }, {});
})();

const orderProps = (() => {
  return breakpoints.reduce((props, val) => {
    props['order' + Object(helpers["i" /* upperFirst */])(val)] = {
      type: [String, Number],
      default: null
    };
    return props;
  }, {});
})();

const propMap = {
  col: Object.keys(breakpointProps),
  offset: Object.keys(offsetProps),
  order: Object.keys(orderProps)
};

function breakpointClass(type, prop, val) {
  let className = type;

  if (val == null || val === false) {
    return undefined;
  }

  if (prop) {
    const breakpoint = prop.replace(type, '');
    className += `-${breakpoint}`;
  } // Handling the boolean style prop when accepting [Boolean, String, Number]
  // means Vue will not convert <v-col sm></v-col> to sm: true for us.
  // Since the default is false, an empty string indicates the prop's presence.


  if (type === 'col' && (val === '' || val === true)) {
    // .col-md
    return className.toLowerCase();
  } // .order-md-6


  className += `-${val}`;
  return className.toLowerCase();
}

const cache = new Map();
/* harmony default export */ var VCol = (external_vue_default.a.extend({
  name: 'v-col',
  functional: true,
  props: {
    cols: {
      type: [Boolean, String, Number],
      default: false
    },
    ...breakpointProps,
    offset: {
      type: [String, Number],
      default: null
    },
    ...offsetProps,
    order: {
      type: [String, Number],
      default: null
    },
    ...orderProps,
    alignSelf: {
      type: String,
      default: null,
      validator: str => ['auto', 'start', 'end', 'center', 'baseline', 'stretch'].includes(str)
    },
    tag: {
      type: String,
      default: 'div'
    }
  },

  render(h, {
    props,
    data,
    children,
    parent
  }) {
    // Super-fast memoization based on props, 5x faster than JSON.stringify
    let cacheKey = '';

    for (const prop in props) {
      cacheKey += String(props[prop]);
    }

    let classList = cache.get(cacheKey);

    if (!classList) {
      classList = []; // Loop through `col`, `offset`, `order` breakpoint props

      let type;

      for (type in propMap) {
        propMap[type].forEach(prop => {
          const value = props[prop];
          const className = breakpointClass(type, prop, value);
          if (className) classList.push(className);
        });
      }

      const hasColClasses = classList.some(className => className.startsWith('col-'));
      classList.push({
        // Default to .col if no other col-{bp}-* classes generated nor `cols` specified.
        col: !hasColClasses || !props.cols,
        [`col-${props.cols}`]: props.cols,
        [`offset-${props.offset}`]: props.offset,
        [`order-${props.order}`]: props.order,
        [`align-self-${props.alignSelf}`]: props.alignSelf
      });
      cache.set(cacheKey, classList);
    }

    return h(props.tag, Object(mergeData["a" /* default */])(data, {
      class: classList
    }), children);
  }

}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
















 // no xs

const VRow_breakpoints = ['sm', 'md', 'lg', 'xl'];
const ALIGNMENT = ['start', 'end', 'center'];

function makeProps(prefix, def) {
  return VRow_breakpoints.reduce((props, val) => {
    props[prefix + Object(helpers["i" /* upperFirst */])(val)] = def();
    return props;
  }, {});
}

const alignValidator = str => [...ALIGNMENT, 'baseline', 'stretch'].includes(str);

const alignProps = makeProps('align', () => ({
  type: String,
  default: null,
  validator: alignValidator
}));

const justifyValidator = str => [...ALIGNMENT, 'space-between', 'space-around'].includes(str);

const justifyProps = makeProps('justify', () => ({
  type: String,
  default: null,
  validator: justifyValidator
}));

const alignContentValidator = str => [...ALIGNMENT, 'space-between', 'space-around', 'stretch'].includes(str);

const alignContentProps = makeProps('alignContent', () => ({
  type: String,
  default: null,
  validator: alignContentValidator
}));
const VRow_propMap = {
  align: Object.keys(alignProps),
  justify: Object.keys(justifyProps),
  alignContent: Object.keys(alignContentProps)
};
const classMap = {
  align: 'align',
  justify: 'justify',
  alignContent: 'align-content'
};

function VRow_breakpointClass(type, prop, val) {
  let className = classMap[type];

  if (val == null) {
    return undefined;
  }

  if (prop) {
    // alignSm -> Sm
    const breakpoint = prop.replace(type, '');
    className += `-${breakpoint}`;
  } // .align-items-sm-center


  className += `-${val}`;
  return className.toLowerCase();
}

const VRow_cache = new Map();
/* harmony default export */ var VRow = (external_vue_default.a.extend({
  name: 'v-row',
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    dense: Boolean,
    noGutters: Boolean,
    align: {
      type: String,
      default: null,
      validator: alignValidator
    },
    ...alignProps,
    justify: {
      type: String,
      default: null,
      validator: justifyValidator
    },
    ...justifyProps,
    alignContent: {
      type: String,
      default: null,
      validator: alignContentValidator
    },
    ...alignContentProps
  },

  render(h, {
    props,
    data,
    children
  }) {
    // Super-fast memoization based on props, 5x faster than JSON.stringify
    let cacheKey = '';

    for (const prop in props) {
      cacheKey += String(props[prop]);
    }

    let classList = VRow_cache.get(cacheKey);

    if (!classList) {
      classList = []; // Loop through `align`, `justify`, `alignContent` breakpoint props

      let type;

      for (type in VRow_propMap) {
        VRow_propMap[type].forEach(prop => {
          const value = props[prop];
          const className = VRow_breakpointClass(type, prop, value);
          if (className) classList.push(className);
        });
      }

      classList.push({
        'no-gutters': props.noGutters,
        'row--dense': props.dense,
        [`align-${props.align}`]: props.align,
        [`justify-${props.justify}`]: props.justify,
        [`align-content-${props.alignContent}`]: props.alignContent
      });
      VRow_cache.set(cacheKey, classList);
    }

    return h(props.tag, Object(mergeData["a" /* default */])(data, {
      staticClass: 'row',
      class: classList
    }), children);
  }

}));
// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/inspire.vue?vue&type=template&id=3d01bc61&



var inspirevue_type_template_id_3d01bc61_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c(VRow, [_c(VCol, {
    staticClass: "text-center"
  }, [_c('img', {
    staticClass: "mb-5",
    attrs: {
      "src": "/v.png",
      "alt": "Vuetify.js"
    }
  }), _vm._v(" "), _c('blockquote', {
    staticClass: "blockquote"
  }, [_vm._v("\n      “First, solve the problem. Then, write the code.”\n      "), _c('footer', [_c('small', [_c('em', [_vm._v("—John Johnson")])])])])])], 1);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/inspire.vue?vue&type=template&id=3d01bc61&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/inspire.vue?vue&type=script&lang=js&
/* harmony default export */ var inspirevue_type_script_lang_js_ = ({
  name: 'InspirePage'
});
// CONCATENATED MODULE: ./pages/inspire.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_inspirevue_type_script_lang_js_ = (inspirevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./pages/inspire.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_inspirevue_type_script_lang_js_,
  inspirevue_type_template_id_3d01bc61_render,
  staticRenderFns,
  false,
  null,
  null,
  "a6f00a60"
  
)

/* harmony default export */ var inspire = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=inspire.js.map