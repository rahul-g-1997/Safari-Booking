import {
  Tablelvl2Context_default
} from "./chunk-OIYMCJRI.js";
import {
  init_styled,
  styled_default
} from "./chunk-2AX2APZI.js";
import {
  init_useThemeProps,
  useThemeProps
} from "./chunk-FX5QTY7O.js";
import {
  _objectWithoutPropertiesLoose,
  composeClasses,
  generateUtilityClass,
  generateUtilityClasses,
  init_composeClasses,
  init_generateUtilityClass,
  init_generateUtilityClasses,
  init_objectWithoutPropertiesLoose
} from "./chunk-XEAIFXQV.js";
import {
  clsx_default,
  init_clsx
} from "./chunk-E4Q4XAA4.js";
import {
  _extends,
  init_extends
} from "./chunk-LPMZPGAX.js";
import {
  require_prop_types
} from "./chunk-JNTERZHJ.js";
import {
  require_jsx_runtime
} from "./chunk-O55OJW5D.js";
import {
  require_react
} from "./chunk-HAZNF34R.js";
import {
  __toESM
} from "./chunk-WXXH56N5.js";

// node_modules/@mui/material/TableBody/TableBody.js
init_extends();
init_objectWithoutPropertiesLoose();
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
init_clsx();
init_composeClasses();
init_useThemeProps();
init_styled();

// node_modules/@mui/material/TableBody/tableBodyClasses.js
init_generateUtilityClasses();
init_generateUtilityClass();
function getTableBodyUtilityClass(slot) {
  return generateUtilityClass("MuiTableBody", slot);
}
var tableBodyClasses = generateUtilityClasses("MuiTableBody", ["root"]);
var tableBodyClasses_default = tableBodyClasses;

// node_modules/@mui/material/TableBody/TableBody.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["className", "component"];
var useUtilityClasses = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getTableBodyUtilityClass, classes);
};
var TableBodyRoot = styled_default("tbody", {
  name: "MuiTableBody",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  display: "table-row-group"
});
var tablelvl2 = {
  variant: "body"
};
var defaultComponent = "tbody";
var TableBody = React.forwardRef(function TableBody2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTableBody"
  });
  const {
    className,
    component = defaultComponent
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const ownerState = _extends({}, props, {
    component
  });
  const classes = useUtilityClasses(ownerState);
  return (0, import_jsx_runtime.jsx)(Tablelvl2Context_default.Provider, {
    value: tablelvl2,
    children: (0, import_jsx_runtime.jsx)(TableBodyRoot, _extends({
      className: clsx_default(classes.root, className),
      as: component,
      ref,
      role: component === defaultComponent ? null : "rowgroup",
      ownerState
    }, other))
  });
});
true ? TableBody.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component, normally `TableRow`.
   */
  children: import_prop_types.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types.default.object,
  /**
   * @ignore
   */
  className: import_prop_types.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types.default.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object])
} : void 0;
var TableBody_default = TableBody;

export {
  getTableBodyUtilityClass,
  tableBodyClasses_default,
  TableBody_default
};
//# sourceMappingURL=chunk-5UTFPBBP.js.map
