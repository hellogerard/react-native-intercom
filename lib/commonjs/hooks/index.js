"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useIntercom;

var _reactNative = require("react-native");

let RNNIntercom;
({
  RNNIntercom
} = _reactNative.NativeModules);

function useIntercom() {
  const setApiKey = (apiKey, appId) => {
    return RNNIntercom.setApiKey(apiKey, appId);
  };

  return {
    setApiKey
  };
}
//# sourceMappingURL=index.js.map