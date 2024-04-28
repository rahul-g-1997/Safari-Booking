import {
  buildWarning
} from "./chunk-BRAU7EQW.js";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  areDatesEqual,
  convertFieldResponseIntoMuiTextFieldProps,
  createDateStrForV6InputFromSections,
  createDateStrForV7HiddenInputFromSections,
  getDefaultReferenceDate,
  getTodayDate,
  replaceInvalidDateByNull,
  splitFieldInternalAndForwardedProps,
  useClearableField,
  useDefaultizedDateField,
  useField,
  useLocaleText,
  useUtils,
  validateDate
} from "./chunk-YWW56NB5.js";
import "./chunk-ZSGOA7PU.js";
import "./chunk-ZL3H4SMD.js";
import {
  Chip_default,
  DialogActions_default,
  DialogContent_default,
  Dialog_default,
  ListItem_default,
  dialogClasses_default
} from "./chunk-I7ZECL7K.js";
import {
  Popper_default
} from "./chunk-C3N5XBWQ.js";
import "./chunk-6S6TJEZ6.js";
import {
  Button_default
} from "./chunk-RV4GGW6G.js";
import {
  IconButton_default
} from "./chunk-ZPBJUFEL.js";
import {
  ButtonBase_default
} from "./chunk-KHXLJ2EO.js";
import {
  PickersTextField
} from "./chunk-PZKD4NS3.js";
import {
  TextField_default
} from "./chunk-TLIK22SM.js";
import "./chunk-KYIL3MYM.js";
import "./chunk-756ZM4IN.js";
import "./chunk-A3ZVRTW5.js";
import {
  List_default
} from "./chunk-KTCXZSVR.js";
import "./chunk-46FILI4T.js";
import {
  Typography_default
} from "./chunk-OEX4V3O4.js";
import "./chunk-53KD5323.js";
import "./chunk-JHHJAHU2.js";
import "./chunk-HL73D4AM.js";
import "./chunk-VKELRQ2S.js";
import "./chunk-J6RQQO32.js";
import {
  CSSTransition_default,
  TransitionGroup_default
} from "./chunk-FE7CHD54.js";
import "./chunk-4ZSTBHIF.js";
import {
  Paper_default
} from "./chunk-QV2RZHGN.js";
import "./chunk-W3VT5O72.js";
import {
  useTheme
} from "./chunk-WLJVLAAT.js";
import {
  alpha
} from "./chunk-G4E37X2G.js";
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
  init_useEnhancedEffect,
  init_useEventCallback,
  init_utils,
  refType_default,
  useEnhancedEffect_default,
  useForkRef
} from "./chunk-T6NXMYYR.js";
import {
  styled_default
} from "./chunk-2AX2APZI.js";
import {
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

// node_modules/@mui/x-date-pickers-pro/SingleInputDateRangeField/SingleInputDateRangeField.js
init_extends();
init_objectWithoutPropertiesLoose();
var React24 = __toESM(require_react());
var import_prop_types5 = __toESM(require_prop_types());
init_utils();

// node_modules/@mui/x-date-pickers/internals/components/PickersArrowSwitcher/PickersArrowSwitcher.js
init_extends();
init_objectWithoutPropertiesLoose();
var React = __toESM(require_react());
init_clsx();
init_utils();

// node_modules/@mui/x-date-pickers/internals/components/PickersArrowSwitcher/pickersArrowSwitcherClasses.js
init_utils();
function getPickersArrowSwitcherUtilityClass(slot) {
  return generateUtilityClass("MuiPickersArrowSwitcher", slot);
}
var pickersArrowSwitcherClasses = generateUtilityClasses("MuiPickersArrowSwitcher", ["root", "spacer", "button"]);

// node_modules/@mui/x-date-pickers/internals/components/PickersArrowSwitcher/PickersArrowSwitcher.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["children", "className", "slots", "slotProps", "isNextDisabled", "isNextHidden", "onGoToNext", "nextLabel", "isPreviousDisabled", "isPreviousHidden", "onGoToPrevious", "previousLabel"];
var _excluded2 = ["ownerState"];
var _excluded3 = ["ownerState"];
var PickersArrowSwitcherRoot = styled_default("div", {
  name: "MuiPickersArrowSwitcher",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  display: "flex"
});
var PickersArrowSwitcherSpacer = styled_default("div", {
  name: "MuiPickersArrowSwitcher",
  slot: "Spacer",
  overridesResolver: (props, styles) => styles.spacer
})(({
  theme
}) => ({
  width: theme.spacing(3)
}));
var PickersArrowSwitcherButton = styled_default(IconButton_default, {
  name: "MuiPickersArrowSwitcher",
  slot: "Button",
  overridesResolver: (props, styles) => styles.button
})({
  variants: [{
    props: {
      hidden: true
    },
    style: {
      visibility: "hidden"
    }
  }]
});
var useUtilityClasses = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    spacer: ["spacer"],
    button: ["button"]
  };
  return composeClasses(slots, getPickersArrowSwitcherUtilityClass, classes);
};
var PickersArrowSwitcher = React.forwardRef(function PickersArrowSwitcher2(inProps, ref) {
  const theme = useTheme();
  const isRTL = theme.direction === "rtl";
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersArrowSwitcher"
  });
  const {
    children,
    className,
    slots,
    slotProps,
    isNextDisabled,
    isNextHidden,
    onGoToNext,
    nextLabel,
    isPreviousDisabled,
    isPreviousHidden,
    onGoToPrevious,
    previousLabel
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const ownerState = props;
  const classes = useUtilityClasses(ownerState);
  const nextProps = {
    isDisabled: isNextDisabled,
    isHidden: isNextHidden,
    goTo: onGoToNext,
    label: nextLabel
  };
  const previousProps = {
    isDisabled: isPreviousDisabled,
    isHidden: isPreviousHidden,
    goTo: onGoToPrevious,
    label: previousLabel
  };
  const PreviousIconButton = (slots == null ? void 0 : slots.previousIconButton) ?? PickersArrowSwitcherButton;
  const previousIconButtonProps = useSlotProps({
    elementType: PreviousIconButton,
    externalSlotProps: slotProps == null ? void 0 : slotProps.previousIconButton,
    additionalProps: {
      size: "medium",
      title: previousProps.label,
      "aria-label": previousProps.label,
      disabled: previousProps.isDisabled,
      edge: "end",
      onClick: previousProps.goTo
    },
    ownerState: _extends({}, ownerState, {
      hidden: previousProps.isHidden
    }),
    className: classes.button
  });
  const NextIconButton = (slots == null ? void 0 : slots.nextIconButton) ?? PickersArrowSwitcherButton;
  const nextIconButtonProps = useSlotProps({
    elementType: NextIconButton,
    externalSlotProps: slotProps == null ? void 0 : slotProps.nextIconButton,
    additionalProps: {
      size: "medium",
      title: nextProps.label,
      "aria-label": nextProps.label,
      disabled: nextProps.isDisabled,
      edge: "start",
      onClick: nextProps.goTo
    },
    ownerState: _extends({}, ownerState, {
      hidden: nextProps.isHidden
    }),
    className: classes.button
  });
  const LeftArrowIcon = (slots == null ? void 0 : slots.leftArrowIcon) ?? ArrowLeftIcon;
  const _useSlotProps = useSlotProps({
    elementType: LeftArrowIcon,
    externalSlotProps: slotProps == null ? void 0 : slotProps.leftArrowIcon,
    additionalProps: {
      fontSize: "inherit"
    },
    ownerState: void 0
  }), leftArrowIconProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded2);
  const RightArrowIcon = (slots == null ? void 0 : slots.rightArrowIcon) ?? ArrowRightIcon;
  const _useSlotProps2 = useSlotProps({
    elementType: RightArrowIcon,
    externalSlotProps: slotProps == null ? void 0 : slotProps.rightArrowIcon,
    additionalProps: {
      fontSize: "inherit"
    },
    ownerState: void 0
  }), rightArrowIconProps = _objectWithoutPropertiesLoose(_useSlotProps2, _excluded3);
  return (0, import_jsx_runtime.jsxs)(PickersArrowSwitcherRoot, _extends({
    ref,
    className: clsx_default(classes.root, className),
    ownerState
  }, other, {
    children: [(0, import_jsx_runtime.jsx)(PreviousIconButton, _extends({}, previousIconButtonProps, {
      children: isRTL ? (0, import_jsx_runtime.jsx)(RightArrowIcon, _extends({}, rightArrowIconProps)) : (0, import_jsx_runtime.jsx)(LeftArrowIcon, _extends({}, leftArrowIconProps))
    })), children ? (0, import_jsx_runtime.jsx)(Typography_default, {
      variant: "subtitle1",
      component: "span",
      children
    }) : (0, import_jsx_runtime.jsx)(PickersArrowSwitcherSpacer, {
      className: classes.spacer,
      ownerState
    }), (0, import_jsx_runtime.jsx)(NextIconButton, _extends({}, nextIconButtonProps, {
      children: isRTL ? (0, import_jsx_runtime.jsx)(LeftArrowIcon, _extends({}, leftArrowIconProps)) : (0, import_jsx_runtime.jsx)(RightArrowIcon, _extends({}, rightArrowIconProps))
    }))]
  }));
});

// node_modules/@mui/x-date-pickers/internals/components/PickersModalDialog.js
init_extends();
var React2 = __toESM(require_react());

// node_modules/@mui/x-date-pickers/internals/constants/dimensions.js
var DAY_SIZE = 36;
var DAY_MARGIN = 2;
var DIALOG_WIDTH = 320;
var VIEW_HEIGHT = 336;

// node_modules/@mui/x-date-pickers/internals/components/PickersModalDialog.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var PickersModalDialogRoot = styled_default(Dialog_default)({
  [`& .${dialogClasses_default.container}`]: {
    outline: 0
  },
  [`& .${dialogClasses_default.paper}`]: {
    outline: 0,
    minWidth: DIALOG_WIDTH
  }
});
var PickersModalDialogContent = styled_default(DialogContent_default)({
  "&:first-of-type": {
    padding: 0
  }
});

// node_modules/@mui/x-date-pickers/internals/components/PickersPopper.js
init_extends();
init_objectWithoutPropertiesLoose();
var React3 = __toESM(require_react());
init_utils();

// node_modules/@mui/x-date-pickers/internals/components/pickersPopperClasses.js
init_utils();
var pickersPopperClasses = generateUtilityClasses("MuiPickersPopper", ["root", "paper"]);

// node_modules/@mui/x-date-pickers/internals/hooks/useDefaultReduceAnimations.js
var mobileVersionMatches = typeof navigator !== "undefined" && navigator.userAgent.match(/android\s(\d+)|OS\s(\d+)/i);
var androidVersion = mobileVersionMatches && mobileVersionMatches[1] ? parseInt(mobileVersionMatches[1], 10) : null;
var iOSVersion = mobileVersionMatches && mobileVersionMatches[2] ? parseInt(mobileVersionMatches[2], 10) : null;
var slowAnimationDevices = androidVersion && androidVersion < 10 || iOSVersion && iOSVersion < 13 || false;

// node_modules/@mui/x-date-pickers/internals/components/PickersPopper.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var _excluded4 = ["PaperComponent", "popperPlacement", "ownerState", "children", "paperSlotProps", "paperClasses", "onPaperClick", "onPaperTouchStart"];
var PickersPopperRoot = styled_default(Popper_default, {
  name: "MuiPickersPopper",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})(({
  theme
}) => ({
  zIndex: theme.zIndex.modal
}));
var PickersPopperPaper = styled_default(Paper_default, {
  name: "MuiPickersPopper",
  slot: "Paper",
  overridesResolver: (_, styles) => styles.paper
})({
  outline: 0,
  transformOrigin: "top center",
  variants: [{
    props: ({
      placement
    }) => ["top", "top-start", "top-end"].includes(placement),
    style: {
      transformOrigin: "bottom center"
    }
  }]
});
var PickersPopperPaperWrapper = React3.forwardRef((props, ref) => {
  const {
    PaperComponent,
    popperPlacement,
    ownerState: inOwnerState,
    children,
    paperSlotProps,
    paperClasses,
    onPaperClick,
    onPaperTouchStart
    // picks up the style props provided by `Transition`
    // https://mui.com/material-ui/transitions/#child-requirement
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded4);
  const ownerState = _extends({}, inOwnerState, {
    placement: popperPlacement
  });
  const paperProps = useSlotProps({
    elementType: PaperComponent,
    externalSlotProps: paperSlotProps,
    additionalProps: {
      tabIndex: -1,
      elevation: 8,
      ref
    },
    className: paperClasses,
    ownerState
  });
  return (0, import_jsx_runtime3.jsx)(PaperComponent, _extends({}, other, paperProps, {
    onClick: (event) => {
      var _a;
      onPaperClick(event);
      (_a = paperProps.onClick) == null ? void 0 : _a.call(paperProps, event);
    },
    onTouchStart: (event) => {
      var _a;
      onPaperTouchStart(event);
      (_a = paperProps.onTouchStart) == null ? void 0 : _a.call(paperProps, event);
    },
    ownerState,
    children
  }));
});

// node_modules/@mui/x-date-pickers/internals/components/PickersToolbar.js
init_extends();
init_objectWithoutPropertiesLoose();
var React4 = __toESM(require_react());
init_clsx();
init_utils();

// node_modules/@mui/x-date-pickers/internals/components/pickersToolbarClasses.js
init_utils();
function getPickersToolbarUtilityClass(slot) {
  return generateUtilityClass("MuiPickersToolbar", slot);
}
var pickersToolbarClasses = generateUtilityClasses("MuiPickersToolbar", ["root", "content"]);

// node_modules/@mui/x-date-pickers/internals/components/PickersToolbar.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var _excluded5 = ["children", "className", "toolbarTitle", "hidden", "titleId", "isLandscape", "classes", "landscapeDirection"];
var useUtilityClasses2 = (ownerState) => {
  const {
    classes,
    isLandscape
  } = ownerState;
  const slots = {
    root: ["root"],
    content: ["content"],
    penIconButton: ["penIconButton", isLandscape && "penIconButtonLandscape"]
  };
  return composeClasses(slots, getPickersToolbarUtilityClass, classes);
};
var PickersToolbarRoot = styled_default("div", {
  name: "MuiPickersToolbar",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  padding: theme.spacing(2, 3),
  variants: [{
    props: {
      isLandscape: true
    },
    style: {
      height: "auto",
      maxWidth: 160,
      padding: 16,
      justifyContent: "flex-start",
      flexWrap: "wrap"
    }
  }]
}));
var PickersToolbarContent = styled_default("div", {
  name: "MuiPickersToolbar",
  slot: "Content",
  overridesResolver: (props, styles) => styles.content
})({
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  flex: 1,
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "row",
  variants: [{
    props: {
      isLandscape: true
    },
    style: {
      justifyContent: "flex-start",
      alignItems: "flex-start",
      flexDirection: "column"
    }
  }, {
    props: {
      isLandscape: true,
      landscapeDirection: "row"
    },
    style: {
      flexDirection: "row"
    }
  }]
});
var PickersToolbar = React4.forwardRef(function PickersToolbar2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersToolbar"
  });
  const {
    children,
    className,
    toolbarTitle,
    hidden,
    titleId
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded5);
  const ownerState = props;
  const classes = useUtilityClasses2(ownerState);
  if (hidden) {
    return null;
  }
  return (0, import_jsx_runtime4.jsxs)(PickersToolbarRoot, _extends({
    ref,
    className: clsx_default(classes.root, className),
    ownerState
  }, other, {
    children: [(0, import_jsx_runtime4.jsx)(Typography_default, {
      color: "text.secondary",
      variant: "overline",
      id: titleId,
      children: toolbarTitle
    }), (0, import_jsx_runtime4.jsx)(PickersToolbarContent, {
      className: classes.content,
      ownerState,
      children
    })]
  }));
});

// node_modules/@mui/x-date-pickers/internals/components/pickersToolbarButtonClasses.js
init_utils();
var pickersToolbarButtonClasses = generateUtilityClasses("MuiPickersToolbarButton", ["root"]);

// node_modules/@mui/x-date-pickers/internals/components/pickersToolbarTextClasses.js
init_utils();
function getPickersToolbarTextUtilityClass(slot) {
  return generateUtilityClass("MuiPickersToolbarText", slot);
}
var pickersToolbarTextClasses = generateUtilityClasses("MuiPickersToolbarText", ["root", "selected"]);

// node_modules/@mui/x-date-pickers/internals/components/PickersToolbarButton.js
init_extends();
init_objectWithoutPropertiesLoose();
var React6 = __toESM(require_react());
init_clsx();
init_utils();

// node_modules/@mui/x-date-pickers/internals/components/PickersToolbarText.js
init_extends();
init_objectWithoutPropertiesLoose();
var React5 = __toESM(require_react());
init_clsx();
init_utils();
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var _excluded6 = ["className", "selected", "value"];
var useUtilityClasses3 = (ownerState) => {
  const {
    classes,
    selected
  } = ownerState;
  const slots = {
    root: ["root", selected && "selected"]
  };
  return composeClasses(slots, getPickersToolbarTextUtilityClass, classes);
};
var PickersToolbarTextRoot = styled_default(Typography_default, {
  name: "MuiPickersToolbarText",
  slot: "Root",
  overridesResolver: (_, styles) => [styles.root, {
    [`&.${pickersToolbarTextClasses.selected}`]: styles.selected
  }]
})(({
  theme
}) => ({
  transition: theme.transitions.create("color"),
  color: (theme.vars || theme).palette.text.secondary,
  [`&.${pickersToolbarTextClasses.selected}`]: {
    color: (theme.vars || theme).palette.text.primary
  }
}));
var PickersToolbarText = React5.forwardRef(function PickersToolbarText2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersToolbarText"
  });
  const {
    className,
    value
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded6);
  const classes = useUtilityClasses3(props);
  return (0, import_jsx_runtime5.jsx)(PickersToolbarTextRoot, _extends({
    ref,
    className: clsx_default(className, classes.root),
    component: "span"
  }, other, {
    children: value
  }));
});

// node_modules/@mui/x-date-pickers/internals/components/PickersToolbarButton.js
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var _excluded7 = ["align", "className", "selected", "typographyClassName", "value", "variant", "width"];
var useUtilityClasses4 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getPickersToolbarUtilityClass, classes);
};
var PickersToolbarButtonRoot = styled_default(Button_default, {
  name: "MuiPickersToolbarButton",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})({
  padding: 0,
  minWidth: 16,
  textTransform: "none"
});
var PickersToolbarButton = React6.forwardRef(function PickersToolbarButton2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersToolbarButton"
  });
  const {
    align,
    className,
    selected,
    typographyClassName,
    value,
    variant,
    width
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded7);
  const classes = useUtilityClasses4(props);
  return (0, import_jsx_runtime6.jsx)(PickersToolbarButtonRoot, _extends({
    variant: "text",
    ref,
    className: clsx_default(className, classes.root)
  }, width ? {
    sx: {
      width
    }
  } : {}, other, {
    children: (0, import_jsx_runtime6.jsx)(PickersToolbarText, {
      align,
      className: typographyClassName,
      variant,
      value,
      selected
    })
  }));
});

// node_modules/@mui/x-date-pickers/internals/hooks/usePicker/usePickerValue.js
init_extends();
var React8 = __toESM(require_react());
init_useEventCallback();

// node_modules/@mui/x-date-pickers/internals/hooks/useOpenState.js
var React7 = __toESM(require_react());

// node_modules/@mui/x-date-pickers/internals/hooks/usePicker/usePickerViews.js
init_extends();
init_objectWithoutPropertiesLoose();
var React10 = __toESM(require_react());
init_useEnhancedEffect();
init_useEventCallback();

// node_modules/@mui/x-date-pickers/internals/hooks/useViews.js
var React9 = __toESM(require_react());
init_useEventCallback();
init_utils();

// node_modules/@mui/x-date-pickers/internals/hooks/usePicker/usePickerLayoutProps.js
init_extends();

// node_modules/@mui/x-date-pickers/internals/hooks/useIsLandscape.js
var React11 = __toESM(require_react());
init_utils();

// node_modules/@mui/x-date-pickers/internals/hooks/usePicker/usePicker.js
var warnRenderInputIsDefined = buildWarning(["The `renderInput` prop has been removed in version 6.0 of the Date and Time Pickers.", "You can replace it with the `textField` component slot in most cases.", "For more information, please have a look at the migration guide (https://mui.com/x/migration/migration-pickers-v5/#input-renderer-required-in-v5)."]);

// node_modules/@mui/x-date-pickers/internals/hooks/useStaticPicker/useStaticPicker.js
init_extends();
init_objectWithoutPropertiesLoose();
var React16 = __toESM(require_react());
init_clsx();

// node_modules/@mui/x-date-pickers/PickersLayout/PickersLayout.js
var React15 = __toESM(require_react());
var import_prop_types3 = __toESM(require_prop_types());
init_clsx();
init_utils();

// node_modules/@mui/x-date-pickers/PickersLayout/pickersLayoutClasses.js
init_generateUtilityClass();
init_generateUtilityClasses();
function getPickersLayoutUtilityClass(slot) {
  return generateUtilityClass("MuiPickersLayout", slot);
}
var pickersLayoutClasses = generateUtilityClasses("MuiPickersLayout", ["root", "landscape", "contentWrapper", "toolbar", "actionBar", "tabs", "shortcuts"]);

// node_modules/@mui/x-date-pickers/PickersLayout/usePickerLayout.js
init_extends();
var React14 = __toESM(require_react());
init_utils();

// node_modules/@mui/x-date-pickers/PickersActionBar/PickersActionBar.js
init_extends();
init_objectWithoutPropertiesLoose();
var React12 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
var _excluded8 = ["onAccept", "onClear", "onCancel", "onSetToday", "actions"];
function PickersActionBar(props) {
  const {
    onAccept,
    onClear,
    onCancel,
    onSetToday,
    actions
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded8);
  const localeText = useLocaleText();
  if (actions == null || actions.length === 0) {
    return null;
  }
  const buttons = actions == null ? void 0 : actions.map((actionType) => {
    switch (actionType) {
      case "clear":
        return (0, import_jsx_runtime7.jsx)(Button_default, {
          onClick: onClear,
          children: localeText.clearButtonLabel
        }, actionType);
      case "cancel":
        return (0, import_jsx_runtime7.jsx)(Button_default, {
          onClick: onCancel,
          children: localeText.cancelButtonLabel
        }, actionType);
      case "accept":
        return (0, import_jsx_runtime7.jsx)(Button_default, {
          onClick: onAccept,
          children: localeText.okButtonLabel
        }, actionType);
      case "today":
        return (0, import_jsx_runtime7.jsx)(Button_default, {
          onClick: onSetToday,
          children: localeText.todayButtonLabel
        }, actionType);
      default:
        return null;
    }
  });
  return (0, import_jsx_runtime7.jsx)(DialogActions_default, _extends({}, other, {
    children: buttons
  }));
}
true ? PickersActionBar.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Ordered array of actions to display.
   * If empty, does not display that action bar.
   * @default `['cancel', 'accept']` for mobile and `[]` for desktop
   */
  actions: import_prop_types.default.arrayOf(import_prop_types.default.oneOf(["accept", "cancel", "clear", "today"]).isRequired),
  /**
   * If `true`, the actions do not have additional margin.
   * @default false
   */
  disableSpacing: import_prop_types.default.bool,
  onAccept: import_prop_types.default.func.isRequired,
  onCancel: import_prop_types.default.func.isRequired,
  onClear: import_prop_types.default.func.isRequired,
  onSetToday: import_prop_types.default.func.isRequired,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object])
} : void 0;

// node_modules/@mui/x-date-pickers/PickersShortcuts/PickersShortcuts.js
init_extends();
init_objectWithoutPropertiesLoose();
var React13 = __toESM(require_react());
var import_prop_types2 = __toESM(require_prop_types());
var import_jsx_runtime8 = __toESM(require_jsx_runtime());
var _excluded9 = ["items", "changeImportance", "isLandscape", "onChange", "isValid"];
var _excluded22 = ["getValue"];
function PickersShortcuts(props) {
  const {
    items,
    changeImportance = "accept",
    onChange,
    isValid
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded9);
  if (items == null || items.length === 0) {
    return null;
  }
  const resolvedItems = items.map((_ref) => {
    let {
      getValue
    } = _ref, item = _objectWithoutPropertiesLoose(_ref, _excluded22);
    const newValue = getValue({
      isValid
    });
    return {
      label: item.label,
      onClick: () => {
        onChange(newValue, changeImportance, item);
      },
      disabled: !isValid(newValue)
    };
  });
  return (0, import_jsx_runtime8.jsx)(List_default, _extends({
    dense: true,
    sx: [{
      maxHeight: VIEW_HEIGHT,
      maxWidth: 200,
      overflow: "auto"
    }, ...Array.isArray(other.sx) ? other.sx : [other.sx]]
  }, other, {
    children: resolvedItems.map((item) => {
      return (0, import_jsx_runtime8.jsx)(ListItem_default, {
        children: (0, import_jsx_runtime8.jsx)(Chip_default, _extends({}, item))
      }, item.label);
    })
  }));
}
true ? PickersShortcuts.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Importance of the change when picking a shortcut:
   * - "accept": fires `onChange`, fires `onAccept` and closes the picker.
   * - "set": fires `onChange` but do not fire `onAccept` and does not close the picker.
   * @default "accept"
   */
  changeImportance: import_prop_types2.default.oneOf(["accept", "set"]),
  className: import_prop_types2.default.string,
  component: import_prop_types2.default.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: import_prop_types2.default.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: import_prop_types2.default.bool,
  isLandscape: import_prop_types2.default.bool.isRequired,
  isValid: import_prop_types2.default.func.isRequired,
  /**
   * Ordered array of shortcuts to display.
   * If empty, does not display the shortcuts.
   * @default []
   */
  items: import_prop_types2.default.arrayOf(import_prop_types2.default.shape({
    getValue: import_prop_types2.default.func.isRequired,
    label: import_prop_types2.default.string.isRequired
  })),
  onChange: import_prop_types2.default.func.isRequired,
  style: import_prop_types2.default.object,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: import_prop_types2.default.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types2.default.oneOfType([import_prop_types2.default.arrayOf(import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object, import_prop_types2.default.bool])), import_prop_types2.default.func, import_prop_types2.default.object])
} : void 0;

// node_modules/@mui/x-date-pickers/PickersLayout/usePickerLayout.js
var import_jsx_runtime9 = __toESM(require_jsx_runtime());
function toolbarHasView(toolbarProps) {
  return toolbarProps.view !== null;
}
var useUtilityClasses5 = (ownerState) => {
  const {
    classes,
    isLandscape
  } = ownerState;
  const slots = {
    root: ["root", isLandscape && "landscape"],
    contentWrapper: ["contentWrapper"],
    toolbar: ["toolbar"],
    actionBar: ["actionBar"],
    tabs: ["tabs"],
    landscape: ["landscape"],
    shortcuts: ["shortcuts"]
  };
  return composeClasses(slots, getPickersLayoutUtilityClass, classes);
};
var usePickerLayout = (props) => {
  const {
    wrapperVariant,
    onAccept,
    onClear,
    onCancel,
    onSetToday,
    view,
    views,
    onViewChange,
    value,
    onChange,
    onSelectShortcut,
    isValid,
    isLandscape,
    disabled,
    readOnly,
    children,
    slots,
    slotProps
    // TODO: Remove this "as" hack. It get introduced to mark `value` prop in PickersLayoutProps as not required.
    // The true type should be
    // - For pickers value: TDate | null
    // - For range pickers value: [TDate | null, TDate | null]
  } = props;
  const classes = useUtilityClasses5(props);
  const ActionBar = (slots == null ? void 0 : slots.actionBar) ?? PickersActionBar;
  const actionBarProps = useSlotProps({
    elementType: ActionBar,
    externalSlotProps: slotProps == null ? void 0 : slotProps.actionBar,
    additionalProps: {
      onAccept,
      onClear,
      onCancel,
      onSetToday,
      actions: wrapperVariant === "desktop" ? [] : ["cancel", "accept"],
      className: classes.actionBar
    },
    ownerState: _extends({}, props, {
      wrapperVariant
    })
  });
  const actionBar = (0, import_jsx_runtime9.jsx)(ActionBar, _extends({}, actionBarProps));
  const Toolbar = slots == null ? void 0 : slots.toolbar;
  const toolbarProps = useSlotProps({
    elementType: Toolbar,
    externalSlotProps: slotProps == null ? void 0 : slotProps.toolbar,
    additionalProps: {
      isLandscape,
      onChange,
      value,
      view,
      onViewChange,
      views,
      disabled,
      readOnly,
      className: classes.toolbar
    },
    ownerState: _extends({}, props, {
      wrapperVariant
    })
  });
  const toolbar = toolbarHasView(toolbarProps) && !!Toolbar ? (0, import_jsx_runtime9.jsx)(Toolbar, _extends({}, toolbarProps)) : null;
  const content = children;
  const Tabs = slots == null ? void 0 : slots.tabs;
  const tabs = view && Tabs ? (0, import_jsx_runtime9.jsx)(Tabs, _extends({
    view,
    onViewChange,
    className: classes.tabs
  }, slotProps == null ? void 0 : slotProps.tabs)) : null;
  const Shortcuts = (slots == null ? void 0 : slots.shortcuts) ?? PickersShortcuts;
  const shortcutsProps = useSlotProps({
    elementType: Shortcuts,
    externalSlotProps: slotProps == null ? void 0 : slotProps.shortcuts,
    additionalProps: {
      isValid,
      isLandscape,
      onChange: onSelectShortcut,
      className: classes.shortcuts
    },
    ownerState: {
      isValid,
      isLandscape,
      onChange: onSelectShortcut,
      className: classes.shortcuts,
      wrapperVariant
    }
  });
  const shortcuts = view && !!Shortcuts ? (0, import_jsx_runtime9.jsx)(Shortcuts, _extends({}, shortcutsProps)) : null;
  return {
    toolbar,
    content,
    tabs,
    actionBar,
    shortcuts
  };
};
var usePickerLayout_default = usePickerLayout;

// node_modules/@mui/x-date-pickers/PickersLayout/PickersLayout.js
var import_jsx_runtime10 = __toESM(require_jsx_runtime());
var useUtilityClasses6 = (ownerState) => {
  const {
    isLandscape,
    classes
  } = ownerState;
  const slots = {
    root: ["root", isLandscape && "landscape"],
    contentWrapper: ["contentWrapper"]
  };
  return composeClasses(slots, getPickersLayoutUtilityClass, classes);
};
var PickersLayoutRoot = styled_default("div", {
  name: "MuiPickersLayout",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => ({
  display: "grid",
  gridAutoColumns: "max-content auto max-content",
  gridAutoRows: "max-content auto max-content",
  [`& .${pickersLayoutClasses.actionBar}`]: {
    gridColumn: "1 / 4",
    gridRow: 3
  },
  variants: [{
    props: {
      isLandscape: true
    },
    style: {
      [`& .${pickersLayoutClasses.toolbar}`]: {
        gridColumn: theme.direction === "rtl" ? 3 : 1,
        gridRow: "2 / 3"
      },
      [`.${pickersLayoutClasses.shortcuts}`]: {
        gridColumn: "2 / 4",
        gridRow: 1
      }
    }
  }, {
    props: {
      isLandscape: false
    },
    style: {
      [`& .${pickersLayoutClasses.toolbar}`]: {
        gridColumn: "2 / 4",
        gridRow: 1
      },
      [`& .${pickersLayoutClasses.shortcuts}`]: {
        gridColumn: theme.direction === "rtl" ? 3 : 1,
        gridRow: "2 / 3"
      }
    }
  }]
}));
PickersLayoutRoot.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  as: import_prop_types3.default.elementType,
  ownerState: import_prop_types3.default.shape({
    isLandscape: import_prop_types3.default.bool.isRequired
  }).isRequired,
  sx: import_prop_types3.default.oneOfType([import_prop_types3.default.arrayOf(import_prop_types3.default.oneOfType([import_prop_types3.default.func, import_prop_types3.default.object, import_prop_types3.default.bool])), import_prop_types3.default.func, import_prop_types3.default.object])
};
var PickersLayoutContentWrapper = styled_default("div", {
  name: "MuiPickersLayout",
  slot: "ContentWrapper",
  overridesResolver: (props, styles) => styles.contentWrapper
})({
  gridColumn: 2,
  gridRow: 2,
  display: "flex",
  flexDirection: "column"
});
var PickersLayout = function PickersLayout2(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersLayout"
  });
  const {
    toolbar,
    content,
    tabs,
    actionBar,
    shortcuts
  } = usePickerLayout_default(props);
  const {
    sx,
    className,
    isLandscape,
    ref,
    wrapperVariant
  } = props;
  const ownerState = props;
  const classes = useUtilityClasses6(ownerState);
  return (0, import_jsx_runtime10.jsxs)(PickersLayoutRoot, {
    ref,
    sx,
    className: clsx_default(className, classes.root),
    ownerState,
    children: [isLandscape ? shortcuts : toolbar, isLandscape ? toolbar : shortcuts, (0, import_jsx_runtime10.jsx)(PickersLayoutContentWrapper, {
      className: classes.contentWrapper,
      children: wrapperVariant === "desktop" ? (0, import_jsx_runtime10.jsxs)(React15.Fragment, {
        children: [content, tabs]
      }) : (0, import_jsx_runtime10.jsxs)(React15.Fragment, {
        children: [tabs, content]
      })
    }), actionBar]
  });
};
true ? PickersLayout.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  children: import_prop_types3.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types3.default.object,
  className: import_prop_types3.default.string,
  disabled: import_prop_types3.default.bool,
  isLandscape: import_prop_types3.default.bool.isRequired,
  isValid: import_prop_types3.default.func.isRequired,
  onAccept: import_prop_types3.default.func.isRequired,
  onCancel: import_prop_types3.default.func.isRequired,
  onChange: import_prop_types3.default.func.isRequired,
  onClear: import_prop_types3.default.func.isRequired,
  onClose: import_prop_types3.default.func.isRequired,
  onDismiss: import_prop_types3.default.func.isRequired,
  onOpen: import_prop_types3.default.func.isRequired,
  onSelectShortcut: import_prop_types3.default.func.isRequired,
  onSetToday: import_prop_types3.default.func.isRequired,
  onViewChange: import_prop_types3.default.func.isRequired,
  /**
   * Force rendering in particular orientation.
   */
  orientation: import_prop_types3.default.oneOf(["landscape", "portrait"]),
  readOnly: import_prop_types3.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types3.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types3.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types3.default.oneOfType([import_prop_types3.default.arrayOf(import_prop_types3.default.oneOfType([import_prop_types3.default.func, import_prop_types3.default.object, import_prop_types3.default.bool])), import_prop_types3.default.func, import_prop_types3.default.object]),
  value: import_prop_types3.default.any,
  view: import_prop_types3.default.oneOf(["day", "hours", "meridiem", "minutes", "month", "seconds", "year"]),
  views: import_prop_types3.default.arrayOf(import_prop_types3.default.oneOf(["day", "hours", "meridiem", "minutes", "month", "seconds", "year"]).isRequired).isRequired,
  wrapperVariant: import_prop_types3.default.oneOf(["desktop", "mobile"])
} : void 0;

// node_modules/@mui/x-date-pickers/internals/hooks/useStaticPicker/useStaticPicker.js
var import_jsx_runtime11 = __toESM(require_jsx_runtime());
var PickerStaticLayout = styled_default(PickersLayout)(({
  theme
}) => ({
  overflow: "hidden",
  minWidth: DIALOG_WIDTH,
  backgroundColor: (theme.vars || theme).palette.background.paper
}));

// node_modules/@mui/x-date-pickers/internals/hooks/date-helpers-hooks.js
var React17 = __toESM(require_react());

// node_modules/@mui/x-date-pickers/internals/utils/date-time-utils.js
init_extends();
init_objectWithoutPropertiesLoose();

// node_modules/@mui/x-date-pickers/DateCalendar/DayCalendar.js
init_objectWithoutPropertiesLoose();
init_extends();
var React21 = __toESM(require_react());
init_useEventCallback();
init_utils();
init_clsx();

// node_modules/@mui/x-date-pickers/PickersDay/PickersDay.js
init_objectWithoutPropertiesLoose();
init_extends();
var React18 = __toESM(require_react());
var import_prop_types4 = __toESM(require_prop_types());
init_clsx();
init_utils();

// node_modules/@mui/x-date-pickers/PickersDay/pickersDayClasses.js
init_utils();
function getPickersDayUtilityClass(slot) {
  return generateUtilityClass("MuiPickersDay", slot);
}
var pickersDayClasses = generateUtilityClasses("MuiPickersDay", ["root", "dayWithMargin", "dayOutsideMonth", "hiddenDaySpacingFiller", "today", "selected", "disabled"]);

// node_modules/@mui/x-date-pickers/PickersDay/PickersDay.js
var import_jsx_runtime12 = __toESM(require_jsx_runtime());
var _excluded10 = ["autoFocus", "className", "day", "disabled", "disableHighlightToday", "disableMargin", "hidden", "isAnimating", "onClick", "onDaySelect", "onFocus", "onBlur", "onKeyDown", "onMouseDown", "onMouseEnter", "outsideCurrentMonth", "selected", "showDaysOutsideCurrentMonth", "children", "today", "isFirstVisibleCell", "isLastVisibleCell"];
var useUtilityClasses7 = (ownerState) => {
  const {
    selected,
    disableMargin,
    disableHighlightToday,
    today,
    disabled,
    outsideCurrentMonth,
    showDaysOutsideCurrentMonth,
    classes
  } = ownerState;
  const isHiddenDaySpacingFiller = outsideCurrentMonth && !showDaysOutsideCurrentMonth;
  const slots = {
    root: ["root", selected && !isHiddenDaySpacingFiller && "selected", disabled && "disabled", !disableMargin && "dayWithMargin", !disableHighlightToday && today && "today", outsideCurrentMonth && showDaysOutsideCurrentMonth && "dayOutsideMonth", isHiddenDaySpacingFiller && "hiddenDaySpacingFiller"],
    hiddenDaySpacingFiller: ["hiddenDaySpacingFiller"]
  };
  return composeClasses(slots, getPickersDayUtilityClass, classes);
};
var styleArg = ({
  theme
}) => _extends({}, theme.typography.caption, {
  width: DAY_SIZE,
  height: DAY_SIZE,
  borderRadius: "50%",
  padding: 0,
  // explicitly setting to `transparent` to avoid potentially getting impacted by change from the overridden component
  backgroundColor: "transparent",
  transition: theme.transitions.create("background-color", {
    duration: theme.transitions.duration.short
  }),
  color: (theme.vars || theme).palette.text.primary,
  "@media (pointer: fine)": {
    "&:hover": {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity)
    }
  },
  "&:focus": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.focusOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.focusOpacity),
    [`&.${pickersDayClasses.selected}`]: {
      willChange: "background-color",
      backgroundColor: (theme.vars || theme).palette.primary.dark
    }
  },
  [`&.${pickersDayClasses.selected}`]: {
    color: (theme.vars || theme).palette.primary.contrastText,
    backgroundColor: (theme.vars || theme).palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    "&:hover": {
      willChange: "background-color",
      backgroundColor: (theme.vars || theme).palette.primary.dark
    }
  },
  [`&.${pickersDayClasses.disabled}:not(.${pickersDayClasses.selected})`]: {
    color: (theme.vars || theme).palette.text.disabled
  },
  [`&.${pickersDayClasses.disabled}&.${pickersDayClasses.selected}`]: {
    opacity: 0.6
  },
  variants: [{
    props: {
      disableMargin: false
    },
    style: {
      margin: `0 ${DAY_MARGIN}px`
    }
  }, {
    props: {
      outsideCurrentMonth: true,
      showDaysOutsideCurrentMonth: true
    },
    style: {
      color: (theme.vars || theme).palette.text.secondary
    }
  }, {
    props: {
      disableHighlightToday: false,
      today: true
    },
    style: {
      [`&:not(.${pickersDayClasses.selected})`]: {
        border: `1px solid ${(theme.vars || theme).palette.text.secondary}`
      }
    }
  }]
});
var overridesResolver = (props, styles) => {
  const {
    ownerState
  } = props;
  return [styles.root, !ownerState.disableMargin && styles.dayWithMargin, !ownerState.disableHighlightToday && ownerState.today && styles.today, !ownerState.outsideCurrentMonth && ownerState.showDaysOutsideCurrentMonth && styles.dayOutsideMonth, ownerState.outsideCurrentMonth && !ownerState.showDaysOutsideCurrentMonth && styles.hiddenDaySpacingFiller];
};
var PickersDayRoot = styled_default(ButtonBase_default, {
  name: "MuiPickersDay",
  slot: "Root",
  overridesResolver
})(styleArg);
var PickersDayFiller = styled_default("div", {
  name: "MuiPickersDay",
  slot: "Root",
  overridesResolver
})(({
  theme
}) => _extends({}, styleArg({
  theme
}), {
  // visibility: 'hidden' does not work here as it hides the element from screen readers as well
  opacity: 0,
  pointerEvents: "none"
}));
var noop = () => {
};
var PickersDayRaw = React18.forwardRef(function PickersDay(inProps, forwardedRef) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersDay"
  });
  const {
    autoFocus = false,
    className,
    day,
    disabled = false,
    disableHighlightToday = false,
    disableMargin = false,
    isAnimating,
    onClick,
    onDaySelect,
    onFocus = noop,
    onBlur = noop,
    onKeyDown = noop,
    onMouseDown = noop,
    onMouseEnter = noop,
    outsideCurrentMonth,
    selected = false,
    showDaysOutsideCurrentMonth = false,
    children,
    today: isToday = false
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded10);
  const ownerState = _extends({}, props, {
    autoFocus,
    disabled,
    disableHighlightToday,
    disableMargin,
    selected,
    showDaysOutsideCurrentMonth,
    today: isToday
  });
  const classes = useUtilityClasses7(ownerState);
  const utils = useUtils();
  const ref = React18.useRef(null);
  const handleRef = useForkRef(ref, forwardedRef);
  useEnhancedEffect_default(() => {
    if (autoFocus && !disabled && !isAnimating && !outsideCurrentMonth) {
      ref.current.focus();
    }
  }, [autoFocus, disabled, isAnimating, outsideCurrentMonth]);
  const handleMouseDown = (event) => {
    onMouseDown(event);
    if (outsideCurrentMonth) {
      event.preventDefault();
    }
  };
  const handleClick = (event) => {
    if (!disabled) {
      onDaySelect(day);
    }
    if (outsideCurrentMonth) {
      event.currentTarget.focus();
    }
    if (onClick) {
      onClick(event);
    }
  };
  if (outsideCurrentMonth && !showDaysOutsideCurrentMonth) {
    return (0, import_jsx_runtime12.jsx)(PickersDayFiller, {
      className: clsx_default(classes.root, classes.hiddenDaySpacingFiller, className),
      ownerState,
      role: other.role
    });
  }
  return (0, import_jsx_runtime12.jsx)(PickersDayRoot, _extends({
    className: clsx_default(classes.root, className),
    ref: handleRef,
    centerRipple: true,
    disabled,
    tabIndex: selected ? 0 : -1,
    onKeyDown: (event) => onKeyDown(event, day),
    onFocus: (event) => onFocus(event, day),
    onBlur: (event) => onBlur(event, day),
    onMouseEnter: (event) => onMouseEnter(event, day),
    onClick: handleClick,
    onMouseDown: handleMouseDown
  }, other, {
    ownerState,
    children: !children ? utils.format(day, "dayOfMonth") : children
  }));
});
true ? PickersDayRaw.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: import_prop_types4.default.oneOfType([import_prop_types4.default.func, import_prop_types4.default.shape({
    current: import_prop_types4.default.shape({
      focusVisible: import_prop_types4.default.func.isRequired
    })
  })]),
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: import_prop_types4.default.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types4.default.object,
  className: import_prop_types4.default.string,
  component: import_prop_types4.default.elementType,
  /**
   * The date to show.
   */
  day: import_prop_types4.default.object.isRequired,
  /**
   * If `true`, renders as disabled.
   * @default false
   */
  disabled: import_prop_types4.default.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: import_prop_types4.default.bool,
  /**
   * If `true`, days are rendering without margin. Useful for displaying linked range of days.
   * @default false
   */
  disableMargin: import_prop_types4.default.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: import_prop_types4.default.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: import_prop_types4.default.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: import_prop_types4.default.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: import_prop_types4.default.string,
  isAnimating: import_prop_types4.default.bool,
  /**
   * If `true`, day is the first visible cell of the month.
   * Either the first day of the month or the first day of the week depending on `showDaysOutsideCurrentMonth`.
   */
  isFirstVisibleCell: import_prop_types4.default.bool.isRequired,
  /**
   * If `true`, day is the last visible cell of the month.
   * Either the last day of the month or the last day of the week depending on `showDaysOutsideCurrentMonth`.
   */
  isLastVisibleCell: import_prop_types4.default.bool.isRequired,
  onBlur: import_prop_types4.default.func,
  onDaySelect: import_prop_types4.default.func.isRequired,
  onFocus: import_prop_types4.default.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: import_prop_types4.default.func,
  onKeyDown: import_prop_types4.default.func,
  onMouseEnter: import_prop_types4.default.func,
  /**
   * If `true`, day is outside of month and will be hidden.
   */
  outsideCurrentMonth: import_prop_types4.default.bool.isRequired,
  /**
   * If `true`, renders as selected.
   * @default false
   */
  selected: import_prop_types4.default.bool,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: import_prop_types4.default.bool,
  style: import_prop_types4.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types4.default.oneOfType([import_prop_types4.default.arrayOf(import_prop_types4.default.oneOfType([import_prop_types4.default.func, import_prop_types4.default.object, import_prop_types4.default.bool])), import_prop_types4.default.func, import_prop_types4.default.object]),
  /**
   * @default 0
   */
  tabIndex: import_prop_types4.default.number,
  /**
   * If `true`, renders as today date.
   * @default false
   */
  today: import_prop_types4.default.bool,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: import_prop_types4.default.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: import_prop_types4.default.oneOfType([import_prop_types4.default.func, import_prop_types4.default.shape({
    current: import_prop_types4.default.shape({
      pulsate: import_prop_types4.default.func.isRequired,
      start: import_prop_types4.default.func.isRequired,
      stop: import_prop_types4.default.func.isRequired
    })
  })])
} : void 0;
var PickersDay2 = React18.memo(PickersDayRaw);

// node_modules/@mui/x-date-pickers/DateCalendar/PickersSlideTransition.js
init_extends();
init_objectWithoutPropertiesLoose();
var React19 = __toESM(require_react());
init_clsx();
init_composeClasses();

// node_modules/@mui/x-date-pickers/DateCalendar/pickersSlideTransitionClasses.js
init_utils();
var getPickersSlideTransitionUtilityClass = (slot) => generateUtilityClass("MuiPickersSlideTransition", slot);
var pickersSlideTransitionClasses = generateUtilityClasses("MuiPickersSlideTransition", ["root", "slideEnter-left", "slideEnter-right", "slideEnterActive", "slideExit", "slideExitActiveLeft-left", "slideExitActiveLeft-right"]);

// node_modules/@mui/x-date-pickers/DateCalendar/PickersSlideTransition.js
var import_jsx_runtime13 = __toESM(require_jsx_runtime());
var _excluded11 = ["children", "className", "reduceAnimations", "slideDirection", "transKey", "classes"];
var useUtilityClasses8 = (ownerState) => {
  const {
    classes,
    slideDirection
  } = ownerState;
  const slots = {
    root: ["root"],
    exit: ["slideExit"],
    enterActive: ["slideEnterActive"],
    enter: [`slideEnter-${slideDirection}`],
    exitActive: [`slideExitActiveLeft-${slideDirection}`]
  };
  return composeClasses(slots, getPickersSlideTransitionUtilityClass, classes);
};
var PickersSlideTransitionRoot = styled_default(TransitionGroup_default, {
  name: "MuiPickersSlideTransition",
  slot: "Root",
  overridesResolver: (_, styles) => [styles.root, {
    [`.${pickersSlideTransitionClasses["slideEnter-left"]}`]: styles["slideEnter-left"]
  }, {
    [`.${pickersSlideTransitionClasses["slideEnter-right"]}`]: styles["slideEnter-right"]
  }, {
    [`.${pickersSlideTransitionClasses.slideEnterActive}`]: styles.slideEnterActive
  }, {
    [`.${pickersSlideTransitionClasses.slideExit}`]: styles.slideExit
  }, {
    [`.${pickersSlideTransitionClasses["slideExitActiveLeft-left"]}`]: styles["slideExitActiveLeft-left"]
  }, {
    [`.${pickersSlideTransitionClasses["slideExitActiveLeft-right"]}`]: styles["slideExitActiveLeft-right"]
  }]
})(({
  theme
}) => {
  const slideTransition = theme.transitions.create("transform", {
    duration: theme.transitions.duration.complex,
    easing: "cubic-bezier(0.35, 0.8, 0.4, 1)"
  });
  return {
    display: "block",
    position: "relative",
    overflowX: "hidden",
    "& > *": {
      position: "absolute",
      top: 0,
      right: 0,
      left: 0
    },
    [`& .${pickersSlideTransitionClasses["slideEnter-left"]}`]: {
      willChange: "transform",
      transform: "translate(100%)",
      zIndex: 1
    },
    [`& .${pickersSlideTransitionClasses["slideEnter-right"]}`]: {
      willChange: "transform",
      transform: "translate(-100%)",
      zIndex: 1
    },
    [`& .${pickersSlideTransitionClasses.slideEnterActive}`]: {
      transform: "translate(0%)",
      transition: slideTransition
    },
    [`& .${pickersSlideTransitionClasses.slideExit}`]: {
      transform: "translate(0%)"
    },
    [`& .${pickersSlideTransitionClasses["slideExitActiveLeft-left"]}`]: {
      willChange: "transform",
      transform: "translate(-100%)",
      transition: slideTransition,
      zIndex: 0
    },
    [`& .${pickersSlideTransitionClasses["slideExitActiveLeft-right"]}`]: {
      willChange: "transform",
      transform: "translate(100%)",
      transition: slideTransition,
      zIndex: 0
    }
  };
});
function PickersSlideTransition(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersSlideTransition"
  });
  const {
    children,
    className,
    reduceAnimations,
    transKey
    // extracting `classes` from `other`
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded11);
  const classes = useUtilityClasses8(props);
  const theme = useTheme();
  if (reduceAnimations) {
    return (0, import_jsx_runtime13.jsx)("div", {
      className: clsx_default(classes.root, className),
      children
    });
  }
  const transitionClasses = {
    exit: classes.exit,
    enterActive: classes.enterActive,
    enter: classes.enter,
    exitActive: classes.exitActive
  };
  return (0, import_jsx_runtime13.jsx)(PickersSlideTransitionRoot, {
    className: clsx_default(classes.root, className),
    childFactory: (element) => React19.cloneElement(element, {
      classNames: transitionClasses
    }),
    role: "presentation",
    children: (0, import_jsx_runtime13.jsx)(CSSTransition_default, _extends({
      mountOnEnter: true,
      unmountOnExit: true,
      timeout: theme.transitions.duration.complex,
      classNames: transitionClasses
    }, other, {
      children
    }), transKey)
  });
}

// node_modules/@mui/x-date-pickers/DateCalendar/useIsDateDisabled.js
var React20 = __toESM(require_react());

// node_modules/@mui/x-date-pickers/DateCalendar/dayCalendarClasses.js
init_utils();
var dayCalendarClasses = generateUtilityClasses("MuiDayCalendar", ["root", "header", "weekDayLabel", "loadingContainer", "slideTransition", "monthContainer", "weekContainer", "weekNumberLabel", "weekNumber"]);

// node_modules/@mui/x-date-pickers/DateCalendar/DayCalendar.js
var import_jsx_runtime14 = __toESM(require_jsx_runtime());
var weeksContainerHeight = (DAY_SIZE + DAY_MARGIN * 2) * 6;
var PickersCalendarDayRoot = styled_default("div", {
  name: "MuiDayCalendar",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})({});
var PickersCalendarDayHeader = styled_default("div", {
  name: "MuiDayCalendar",
  slot: "Header",
  overridesResolver: (_, styles) => styles.header
})({
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
});
var PickersCalendarWeekDayLabel = styled_default(Typography_default, {
  name: "MuiDayCalendar",
  slot: "WeekDayLabel",
  overridesResolver: (_, styles) => styles.weekDayLabel
})(({
  theme
}) => ({
  width: 36,
  height: 40,
  margin: "0 2px",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: (theme.vars || theme).palette.text.secondary
}));
var PickersCalendarWeekNumberLabel = styled_default(Typography_default, {
  name: "MuiDayCalendar",
  slot: "WeekNumberLabel",
  overridesResolver: (_, styles) => styles.weekNumberLabel
})(({
  theme
}) => ({
  width: 36,
  height: 40,
  margin: "0 2px",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: theme.palette.text.disabled
}));
var PickersCalendarWeekNumber = styled_default(Typography_default, {
  name: "MuiDayCalendar",
  slot: "WeekNumber",
  overridesResolver: (_, styles) => styles.weekNumber
})(({
  theme
}) => _extends({}, theme.typography.caption, {
  width: DAY_SIZE,
  height: DAY_SIZE,
  padding: 0,
  margin: `0 ${DAY_MARGIN}px`,
  color: theme.palette.text.disabled,
  fontSize: "0.75rem",
  alignItems: "center",
  justifyContent: "center",
  display: "inline-flex"
}));
var PickersCalendarLoadingContainer = styled_default("div", {
  name: "MuiDayCalendar",
  slot: "LoadingContainer",
  overridesResolver: (_, styles) => styles.loadingContainer
})({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: weeksContainerHeight
});
var PickersCalendarSlideTransition = styled_default(PickersSlideTransition, {
  name: "MuiDayCalendar",
  slot: "SlideTransition",
  overridesResolver: (_, styles) => styles.slideTransition
})({
  minHeight: weeksContainerHeight
});
var PickersCalendarWeekContainer = styled_default("div", {
  name: "MuiDayCalendar",
  slot: "MonthContainer",
  overridesResolver: (_, styles) => styles.monthContainer
})({
  overflow: "hidden"
});
var PickersCalendarWeek = styled_default("div", {
  name: "MuiDayCalendar",
  slot: "WeekContainer",
  overridesResolver: (_, styles) => styles.weekContainer
})({
  margin: `${DAY_MARGIN}px 0`,
  display: "flex",
  justifyContent: "center"
});

// node_modules/@mui/x-date-pickers/DateCalendar/useCalendarState.js
init_extends();
var React22 = __toESM(require_react());
init_useEventCallback();

// node_modules/@mui/x-date-pickers-pro/SingleInputDateRangeField/useSingleInputDateRangeField.js
var React23 = __toESM(require_react());

// node_modules/@mui/x-date-pickers-pro/internals/utils/valueManagers.js
init_extends();
init_objectWithoutPropertiesLoose();

// node_modules/@mui/x-date-pickers-pro/internals/utils/date-fields-utils.js
init_extends();
var splitDateRangeSections = (sections) => {
  const startDateSections = [];
  const endDateSections = [];
  sections.forEach((section) => {
    if (section.dateName === "start") {
      startDateSections.push(section);
    } else {
      endDateSections.push(section);
    }
  });
  return {
    startDate: startDateSections,
    endDate: endDateSections
  };
};
var removeLastSeparator = (dateSections) => dateSections.map((section, sectionIndex) => {
  if (sectionIndex === dateSections.length - 1) {
    return _extends({}, section, {
      separator: null
    });
  }
  return section;
});

// node_modules/@mui/x-date-pickers-pro/internals/utils/valueManagers.js
var _excluded12 = ["value", "referenceDate"];
var rangeValueManager = {
  emptyValue: [null, null],
  getTodayValue: (utils, timezone, valueType) => [getTodayDate(utils, timezone, valueType), getTodayDate(utils, timezone, valueType)],
  getInitialReferenceValue: (_ref) => {
    let {
      value,
      referenceDate: referenceDateProp
    } = _ref, params = _objectWithoutPropertiesLoose(_ref, _excluded12);
    const shouldKeepStartDate = value[0] != null && params.utils.isValid(value[0]);
    const shouldKeepEndDate = value[1] != null && params.utils.isValid(value[1]);
    if (shouldKeepStartDate && shouldKeepEndDate) {
      return value;
    }
    const referenceDate = referenceDateProp ?? getDefaultReferenceDate(params);
    return [shouldKeepStartDate ? value[0] : referenceDate, shouldKeepEndDate ? value[1] : referenceDate];
  },
  cleanValue: (utils, value) => value.map((date) => replaceInvalidDateByNull(utils, date)),
  areValuesEqual: (utils, a, b) => areDatesEqual(utils, a[0], b[0]) && areDatesEqual(utils, a[1], b[1]),
  isSameError: (a, b) => b !== null && a[1] === b[1] && a[0] === b[0],
  hasError: (error) => error[0] != null || error[1] != null,
  defaultErrorState: [null, null],
  getTimezone: (utils, value) => {
    const timezoneStart = value[0] == null || !utils.isValid(value[0]) ? null : utils.getTimezone(value[0]);
    const timezoneEnd = value[1] == null || !utils.isValid(value[1]) ? null : utils.getTimezone(value[1]);
    if (timezoneStart != null && timezoneEnd != null && timezoneStart !== timezoneEnd) {
      throw new Error("MUI X: The timezone of the start and the end date should be the same.");
    }
    return timezoneStart ?? timezoneEnd;
  },
  setTimezone: (utils, timezone, value) => [value[0] == null ? null : utils.setTimezone(value[0], timezone), value[1] == null ? null : utils.setTimezone(value[1], timezone)]
};
var getRangeFieldValueManager = ({
  dateSeparator = "–"
}) => ({
  updateReferenceValue: (utils, value, prevReferenceValue) => {
    const shouldKeepStartDate = value[0] != null && utils.isValid(value[0]);
    const shouldKeepEndDate = value[1] != null && utils.isValid(value[1]);
    if (!shouldKeepStartDate && !shouldKeepEndDate) {
      return prevReferenceValue;
    }
    if (shouldKeepStartDate && shouldKeepEndDate) {
      return value;
    }
    if (shouldKeepStartDate) {
      return [value[0], prevReferenceValue[0]];
    }
    return [prevReferenceValue[1], value[1]];
  },
  getSectionsFromValue: (utils, [start, end], fallbackSections, getSectionsFromDate) => {
    const separatedFallbackSections = fallbackSections == null ? {
      startDate: null,
      endDate: null
    } : splitDateRangeSections(fallbackSections);
    const getSections = (newDate, fallbackDateSections, position) => {
      const shouldReUsePrevDateSections = !utils.isValid(newDate) && !!fallbackDateSections;
      if (shouldReUsePrevDateSections) {
        return fallbackDateSections;
      }
      const sections = getSectionsFromDate(newDate);
      return sections.map((section, sectionIndex) => {
        if (sectionIndex === sections.length - 1 && position === "start") {
          return _extends({}, section, {
            dateName: position,
            // TODO: Check if RTL still works
            endSeparator: `${section.endSeparator} ${dateSeparator} `
          });
        }
        return _extends({}, section, {
          dateName: position
        });
      });
    };
    return [...getSections(start, separatedFallbackSections.startDate, "start"), ...getSections(end, separatedFallbackSections.endDate, "end")];
  },
  getV7HiddenInputValueFromSections: (sections) => {
    const dateRangeSections = splitDateRangeSections(sections);
    return createDateStrForV7HiddenInputFromSections([...dateRangeSections.startDate, ...dateRangeSections.endDate]);
  },
  getV6InputValueFromSections: (sections, localizedDigits, isRTL) => {
    const dateRangeSections = splitDateRangeSections(sections);
    return createDateStrForV6InputFromSections([...dateRangeSections.startDate, ...dateRangeSections.endDate], localizedDigits, isRTL);
  },
  parseValueStr: (valueStr, referenceValue, parseDate) => {
    const [startStr, endStr] = valueStr.split(dateSeparator);
    return [startStr, endStr].map((dateStr, index) => {
      if (dateStr == null) {
        return null;
      }
      return parseDate(dateStr.trim(), referenceValue[index]);
    });
  },
  getActiveDateManager: (utils, state, activeSection) => {
    const index = activeSection.dateName === "start" ? 0 : 1;
    const updateDateInRange = (newDate, prevDateRange) => index === 0 ? [newDate, prevDateRange[1]] : [prevDateRange[0], newDate];
    return {
      date: state.value[index],
      referenceDate: state.referenceValue[index],
      getSections: (sections) => {
        const dateRangeSections = splitDateRangeSections(sections);
        if (index === 0) {
          return removeLastSeparator(dateRangeSections.startDate);
        }
        return dateRangeSections.endDate;
      },
      getNewValuesFromNewActiveDate: (newActiveDate) => ({
        value: updateDateInRange(newActiveDate, state.value),
        referenceValue: newActiveDate == null || !utils.isValid(newActiveDate) ? state.referenceValue : updateDateInRange(newActiveDate, state.referenceValue)
      })
    };
  }
});

// node_modules/@mui/x-date-pickers-pro/internals/utils/validation/validateDateRange.js
init_extends();
init_objectWithoutPropertiesLoose();

// node_modules/@mui/x-date-pickers-pro/internals/utils/date-utils.js
var isRangeValid = (utils, range) => {
  return Boolean(range && range[0] && range[1] && !utils.isBefore(range[1], range[0]));
};

// node_modules/@mui/x-date-pickers-pro/internals/utils/validation/validateDateRange.js
var _excluded13 = ["shouldDisableDate"];
var validateDateRange = ({
  props,
  value,
  adapter
}) => {
  const [start, end] = value;
  const {
    shouldDisableDate
  } = props, otherProps = _objectWithoutPropertiesLoose(props, _excluded13);
  const dateValidations = [validateDate({
    adapter,
    value: start,
    props: _extends({}, otherProps, {
      shouldDisableDate: (day) => !!(shouldDisableDate == null ? void 0 : shouldDisableDate(day, "start"))
    })
  }), validateDate({
    adapter,
    value: end,
    props: _extends({}, otherProps, {
      shouldDisableDate: (day) => !!(shouldDisableDate == null ? void 0 : shouldDisableDate(day, "end"))
    })
  })];
  if (dateValidations[0] || dateValidations[1]) {
    return dateValidations;
  }
  if (start === null || end === null) {
    return [null, null];
  }
  if (!isRangeValid(adapter.utils, value)) {
    return ["invalidRange", "invalidRange"];
  }
  return [null, null];
};

// node_modules/@mui/x-date-pickers-pro/SingleInputDateRangeField/useSingleInputDateRangeField.js
var useSingleInputDateRangeField = (inProps) => {
  const props = useDefaultizedDateField(inProps);
  const {
    forwardedProps,
    internalProps
  } = splitFieldInternalAndForwardedProps(props, "date");
  const fieldValueManager = React23.useMemo(() => getRangeFieldValueManager({
    dateSeparator: internalProps.dateSeparator
  }), [internalProps.dateSeparator]);
  return useField({
    forwardedProps,
    internalProps,
    valueManager: rangeValueManager,
    fieldValueManager,
    validator: validateDateRange,
    valueType: "date"
  });
};

// node_modules/@mui/x-date-pickers-pro/SingleInputDateRangeField/SingleInputDateRangeField.js
var import_jsx_runtime15 = __toESM(require_jsx_runtime());
var _excluded14 = ["slots", "slotProps", "InputProps", "inputProps"];
var SingleInputDateRangeField = React24.forwardRef(function SingleInputDateRangeField2(inProps, inRef) {
  const themeProps = useThemeProps({
    props: inProps,
    name: "MuiSingleInputDateRangeField"
  });
  const {
    slots,
    slotProps,
    InputProps,
    inputProps
  } = themeProps, other = _objectWithoutPropertiesLoose(themeProps, _excluded14);
  const ownerState = themeProps;
  const TextField = (slots == null ? void 0 : slots.textField) ?? (inProps.enableAccessibleFieldDOMStructure ? PickersTextField : TextField_default);
  const textFieldProps = useSlotProps({
    elementType: TextField,
    externalSlotProps: slotProps == null ? void 0 : slotProps.textField,
    externalForwardedProps: other,
    ownerState,
    additionalProps: {
      ref: inRef
    }
  });
  textFieldProps.inputProps = _extends({}, inputProps, textFieldProps.inputProps);
  textFieldProps.InputProps = _extends({}, InputProps, textFieldProps.InputProps);
  const fieldResponse = useSingleInputDateRangeField(textFieldProps);
  const convertedFieldResponse = convertFieldResponseIntoMuiTextFieldProps(fieldResponse);
  const processedFieldProps = useClearableField(_extends({}, convertedFieldResponse, {
    slots,
    slotProps
  }));
  return (0, import_jsx_runtime15.jsx)(TextField, _extends({}, processedFieldProps));
});
SingleInputDateRangeField.fieldType = "single-input";
true ? SingleInputDateRangeField.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: import_prop_types5.default.bool,
  className: import_prop_types5.default.string,
  /**
   * If `true`, a clear button will be shown in the field allowing value clearing.
   * @default false
   */
  clearable: import_prop_types5.default.bool,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: import_prop_types5.default.oneOf(["error", "info", "primary", "secondary", "success", "warning"]),
  component: import_prop_types5.default.elementType,
  /**
   * String displayed between the start and the end dates.
   * @default "–"
   */
  dateSeparator: import_prop_types5.default.string,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types5.default.arrayOf(import_prop_types5.default.object),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types5.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types5.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types5.default.bool,
  /**
   * @default false
   */
  enableAccessibleFieldDOMStructure: import_prop_types5.default.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: import_prop_types5.default.bool,
  /**
   * Format of the date when rendered in the input(s).
   */
  format: import_prop_types5.default.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: import_prop_types5.default.oneOf(["dense", "spacious"]),
  /**
   * Props applied to the [`FormHelperText`](/material-ui/api/form-helper-text/) element.
   */
  FormHelperTextProps: import_prop_types5.default.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: import_prop_types5.default.bool,
  /**
   * The helper text content.
   */
  helperText: import_prop_types5.default.node,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: import_prop_types5.default.bool,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: import_prop_types5.default.string,
  /**
   * Props applied to the [`InputLabel`](/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   */
  InputLabelProps: import_prop_types5.default.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: import_prop_types5.default.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/material-ui/api/filled-input/),
   * [`OutlinedInput`](/material-ui/api/outlined-input/) or [`Input`](/material-ui/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: import_prop_types5.default.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_default,
  /**
   * The label content.
   */
  label: import_prop_types5.default.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: import_prop_types5.default.oneOf(["dense", "none", "normal"]),
  /**
   * Maximal selectable date.
   */
  maxDate: import_prop_types5.default.object,
  /**
   * Minimal selectable date.
   */
  minDate: import_prop_types5.default.object,
  /**
   * Name attribute of the `input` element.
   */
  name: import_prop_types5.default.string,
  onBlur: import_prop_types5.default.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: import_prop_types5.default.func,
  /**
   * Callback fired when the clear button is clicked.
   */
  onClear: import_prop_types5.default.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error.
   * @param {TValue} value The value associated to the error.
   */
  onError: import_prop_types5.default.func,
  onFocus: import_prop_types5.default.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: import_prop_types5.default.func,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   * @default false
   */
  readOnly: import_prop_types5.default.bool,
  /**
   * The date used to generate a part of the new value that is not present in the format when both `value` and `defaultValue` are empty.
   * For example, on time fields it will be used to determine the date to set.
   * @default The closest valid date using the validation props, except callbacks such as `shouldDisableDate`. Value is rounded to the most granular section used.
   */
  referenceDate: import_prop_types5.default.object,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: import_prop_types5.default.bool,
  /**
   * The currently selected sections.
   * This prop accepts four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 3. If `"all"` is provided, all the sections will be selected.
   * 4. If `null` is provided, no section will be selected.
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["all", "day", "empty", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), import_prop_types5.default.number]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (for example when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @template TDate
   * @param {TDate} day The date to test.
   * @param {string} position The date to test, 'start' or 'end'.
   * @returns {boolean} Returns `true` if the date should be disabled.
   */
  shouldDisableDate: import_prop_types5.default.func,
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
  shouldRespectLeadingZeros: import_prop_types5.default.bool,
  /**
   * The size of the component.
   */
  size: import_prop_types5.default.oneOf(["medium", "small"]),
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types5.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types5.default.object,
  style: import_prop_types5.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.object, import_prop_types5.default.bool])), import_prop_types5.default.func, import_prop_types5.default.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types5.default.string,
  /**
   * The ref object used to imperatively interact with the field.
   */
  unstableFieldRef: import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.object]),
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types5.default.arrayOf(import_prop_types5.default.object),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: import_prop_types5.default.oneOf(["filled", "outlined", "standard"])
} : void 0;
export {
  SingleInputDateRangeField,
  useSingleInputDateRangeField as unstable_useSingleInputDateRangeField
};
//# sourceMappingURL=@mui_x-date-pickers-pro_SingleInputDateRangeField.js.map
