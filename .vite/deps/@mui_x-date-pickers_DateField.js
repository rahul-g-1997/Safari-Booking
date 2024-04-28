import {
  convertFieldResponseIntoMuiTextFieldProps,
  singleItemFieldValueManager,
  singleItemValueManager,
  splitFieldInternalAndForwardedProps,
  useClearableField,
  useDefaultizedDateField,
  useField,
  validateDate
} from "./chunk-YWW56NB5.js";
import "./chunk-ZL3H4SMD.js";
import "./chunk-6S6TJEZ6.js";
import "./chunk-ZPBJUFEL.js";
import "./chunk-KHXLJ2EO.js";
import {
  PickersTextField
} from "./chunk-PZKD4NS3.js";
import {
  TextField_default
} from "./chunk-TLIK22SM.js";
import "./chunk-KYIL3MYM.js";
import "./chunk-756ZM4IN.js";
import "./chunk-A3ZVRTW5.js";
import "./chunk-KTCXZSVR.js";
import "./chunk-46FILI4T.js";
import "./chunk-OEX4V3O4.js";
import "./chunk-53KD5323.js";
import "./chunk-JHHJAHU2.js";
import "./chunk-HL73D4AM.js";
import "./chunk-VKELRQ2S.js";
import "./chunk-J6RQQO32.js";
import "./chunk-FE7CHD54.js";
import "./chunk-4ZSTBHIF.js";
import "./chunk-QV2RZHGN.js";
import "./chunk-W3VT5O72.js";
import "./chunk-WLJVLAAT.js";
import "./chunk-G4E37X2G.js";
import {
  useSlotProps
} from "./chunk-TKF3SO4G.js";
import "./chunk-7MVZ52C4.js";
import "./chunk-UMBAWEEW.js";
import "./chunk-X4UIAIOL.js";
import "./chunk-WOOT5MQD.js";
import "./chunk-K5NNJ2AE.js";
import "./chunk-VH2MGQQQ.js";
import "./chunk-XDRUEUPA.js";
import "./chunk-MCZH2VA3.js";
import "./chunk-V2F6R2HD.js";
import "./chunk-PMT42BB6.js";
import "./chunk-TW5BECSP.js";
import "./chunk-6MOHJOBT.js";
import {
  init_utils,
  refType_default
} from "./chunk-T6NXMYYR.js";
import "./chunk-2AX2APZI.js";
import {
  useThemeProps
} from "./chunk-FX5QTY7O.js";
import {
  _objectWithoutPropertiesLoose,
  init_objectWithoutPropertiesLoose
} from "./chunk-XEAIFXQV.js";
import "./chunk-E4Q4XAA4.js";
import {
  _extends,
  init_extends
} from "./chunk-LPMZPGAX.js";
import "./chunk-NBBFNWFF.js";
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

// node_modules/@mui/x-date-pickers/DateField/DateField.js
init_extends();
init_objectWithoutPropertiesLoose();
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
init_utils();

// node_modules/@mui/x-date-pickers/DateField/useDateField.js
var useDateField = (inProps) => {
  const props = useDefaultizedDateField(inProps);
  const {
    forwardedProps,
    internalProps
  } = splitFieldInternalAndForwardedProps(props, "date");
  return useField({
    forwardedProps,
    internalProps,
    valueManager: singleItemValueManager,
    fieldValueManager: singleItemFieldValueManager,
    validator: validateDate,
    valueType: "date"
  });
};

// node_modules/@mui/x-date-pickers/DateField/DateField.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["slots", "slotProps", "InputProps", "inputProps"];
var DateField = React.forwardRef(function DateField2(inProps, inRef) {
  const themeProps = useThemeProps({
    props: inProps,
    name: "MuiDateField"
  });
  const {
    slots,
    slotProps,
    InputProps,
    inputProps
  } = themeProps, other = _objectWithoutPropertiesLoose(themeProps, _excluded);
  const ownerState = themeProps;
  const TextField = (slots == null ? void 0 : slots.textField) ?? (inProps.enableAccessibleFieldDOMStructure ? PickersTextField : TextField_default);
  const textFieldProps = useSlotProps({
    elementType: TextField,
    externalSlotProps: slotProps == null ? void 0 : slotProps.textField,
    externalForwardedProps: other,
    additionalProps: {
      ref: inRef
    },
    ownerState
  });
  textFieldProps.inputProps = _extends({}, inputProps, textFieldProps.inputProps);
  textFieldProps.InputProps = _extends({}, InputProps, textFieldProps.InputProps);
  const fieldResponse = useDateField(textFieldProps);
  const convertedFieldResponse = convertFieldResponseIntoMuiTextFieldProps(fieldResponse);
  const processedFieldProps = useClearableField(_extends({}, convertedFieldResponse, {
    slots,
    slotProps
  }));
  return (0, import_jsx_runtime.jsx)(TextField, _extends({}, processedFieldProps));
});
true ? DateField.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: import_prop_types.default.bool,
  className: import_prop_types.default.string,
  /**
   * If `true`, a clear button will be shown in the field allowing value clearing.
   * @default false
   */
  clearable: import_prop_types.default.bool,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: import_prop_types.default.oneOf(["error", "info", "primary", "secondary", "success", "warning"]),
  component: import_prop_types.default.elementType,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types.default.object,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types.default.bool,
  /**
   * @default false
   */
  enableAccessibleFieldDOMStructure: import_prop_types.default.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: import_prop_types.default.bool,
  /**
   * Format of the date when rendered in the input(s).
   */
  format: import_prop_types.default.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: import_prop_types.default.oneOf(["dense", "spacious"]),
  /**
   * Props applied to the [`FormHelperText`](/material-ui/api/form-helper-text/) element.
   */
  FormHelperTextProps: import_prop_types.default.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: import_prop_types.default.bool,
  /**
   * The helper text content.
   */
  helperText: import_prop_types.default.node,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: import_prop_types.default.bool,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: import_prop_types.default.string,
  /**
   * Props applied to the [`InputLabel`](/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   */
  InputLabelProps: import_prop_types.default.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: import_prop_types.default.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/material-ui/api/filled-input/),
   * [`OutlinedInput`](/material-ui/api/outlined-input/) or [`Input`](/material-ui/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: import_prop_types.default.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_default,
  /**
   * The label content.
   */
  label: import_prop_types.default.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: import_prop_types.default.oneOf(["dense", "none", "normal"]),
  /**
   * Maximal selectable date.
   */
  maxDate: import_prop_types.default.object,
  /**
   * Minimal selectable date.
   */
  minDate: import_prop_types.default.object,
  /**
   * Name attribute of the `input` element.
   */
  name: import_prop_types.default.string,
  onBlur: import_prop_types.default.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: import_prop_types.default.func,
  /**
   * Callback fired when the clear button is clicked.
   */
  onClear: import_prop_types.default.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error.
   * @param {TValue} value The value associated to the error.
   */
  onError: import_prop_types.default.func,
  onFocus: import_prop_types.default.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: import_prop_types.default.func,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   * @default false
   */
  readOnly: import_prop_types.default.bool,
  /**
   * The date used to generate a part of the new value that is not present in the format when both `value` and `defaultValue` are empty.
   * For example, on time fields it will be used to determine the date to set.
   * @default The closest valid date using the validation props, except callbacks such as `shouldDisableDate`. Value is rounded to the most granular section used.
   */
  referenceDate: import_prop_types.default.object,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: import_prop_types.default.bool,
  /**
   * The currently selected sections.
   * This prop accepts four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 3. If `"all"` is provided, all the sections will be selected.
   * 4. If `null` is provided, no section will be selected.
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["all", "day", "empty", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), import_prop_types.default.number]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (for example when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @template TDate
   * @param {TDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: import_prop_types.default.func,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: import_prop_types.default.func,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: import_prop_types.default.func,
  /**
   * If `true`, the format will respect the leading zeroes (e.g: on dayjs, the format `M/D/YYYY` will render `8/16/2018`)
   * If `false`, the format will always add leading zeroes (e.g: on dayjs, the format `M/D/YYYY` will render `08/16/2018`)
   *
   * Warning n°1: Luxon is not able to respect the leading zeroes when using macro tokens (e.g: "DD"), so `shouldRespectLeadingZeros={true}` might lead to inconsistencies when using `AdapterLuxon`.
   *
   * Warning n°2: When `shouldRespectLeadingZeros={true}`, the field will add an invisible character on the sections containing a single digit to make sure `onChange` is fired.
   * If you need to get the clean value from the input, you can remove this character using `input.value.replace(/\u200e/g, '')`.
   *
   * Warning n°3: When used in strict mode, dayjs and moment require to respect the leading zeros.
   * This mean that when using `shouldRespectLeadingZeros={false}`, if you retrieve the value directly from the input (not listening to `onChange`) and your format contains tokens without leading zeros, the value will not be parsed by your library.
   *
   * @default false
   */
  shouldRespectLeadingZeros: import_prop_types.default.bool,
  /**
   * The size of the component.
   */
  size: import_prop_types.default.oneOf(["medium", "small"]),
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types.default.object,
  style: import_prop_types.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types.default.string,
  /**
   * The ref object used to imperatively interact with the field.
   */
  unstableFieldRef: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object]),
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types.default.object,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: import_prop_types.default.oneOf(["filled", "outlined", "standard"])
} : void 0;
export {
  DateField,
  useDateField as unstable_useDateField
};
//# sourceMappingURL=@mui_x-date-pickers_DateField.js.map
