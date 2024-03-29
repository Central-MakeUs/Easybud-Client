/* do not change this file, it is auto generated by storybook. */

import {
  configure,
  addDecorator,
  addParameters,
  addArgsEnhancer,
  clearDecorators,
} from "@storybook/react-native";

global.STORIES = [
  {
    titlePrefix: "",
    directory: "./src",
    files: "**/*.stories.?(ts|tsx|js|jsx)",
    importPathMatcher:
      "^\\.[\\\\/](?:src(?:[\\\\/](?!\\.)(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/]|[\\\\/]|$)(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(?:ts|tsx|js|jsx)?)$",
  },
];

import "@storybook/addon-ondevice-notes/register";
import "@storybook/addon-ondevice-controls/register";
import "@storybook/addon-ondevice-backgrounds/register";
import "@storybook/addon-ondevice-actions/register";

import { argsEnhancers } from "@storybook/addon-actions/dist/modern/preset/addArgs";

import { decorators, parameters } from "./preview";

if (decorators) {
  if (__DEV__) {
    // stops the warning from showing on every HMR
    require("react-native").LogBox.ignoreLogs([
      "`clearDecorators` is deprecated and will be removed in Storybook 7.0",
    ]);
  }
  // workaround for global decorators getting infinitely applied on HMR, see https://github.com/storybookjs/react-native/issues/185
  clearDecorators();
  decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

try {
  argsEnhancers.forEach((enhancer) => addArgsEnhancer(enhancer));
} catch {}

const getStories = () => {
  return {
    "./src/components/@common/BottomSheet/BottomSheet.stories.tsx": require("../src/components/@common/BottomSheet/BottomSheet.stories.tsx"),
    "./src/components/@common/Buttons/Button/Button.stories.tsx": require("../src/components/@common/Buttons/Button/Button.stories.tsx"),
    "./src/components/@common/Buttons/SocialLoginButton/SocialLoginButton.stories.tsx": require("../src/components/@common/Buttons/SocialLoginButton/SocialLoginButton.stories.tsx"),
    "./src/components/@common/DatePicker/DatePicker.stories.tsx": require("../src/components/@common/DatePicker/DatePicker.stories.tsx"),
    "./src/components/@common/ProgressStep/ProgressStep.stories.tsx": require("../src/components/@common/ProgressStep/ProgressStep.stories.tsx"),
    "./src/components/@common/SelectForm/SelectForm.stories.tsx": require("../src/components/@common/SelectForm/SelectForm.stories.tsx"),
    "./src/components/@common/TextFields/AmountTextField/AmountTextField.stories.tsx": require("../src/components/@common/TextFields/AmountTextField/AmountTextField.stories.tsx"),
    "./src/components/@common/Transaction/Transaction.stories.tsx": require("../src/components/@common/Transaction/Transaction.stories.tsx"),
  };
};

configure(getStories, module, false);
