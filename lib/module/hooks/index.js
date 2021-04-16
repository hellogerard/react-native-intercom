import { NativeModules } from 'react-native';
let RNNIntercom;
({
  RNNIntercom
} = NativeModules);
export default function useIntercom() {
  const setApiKey = (apiKey, appId) => {
    return RNNIntercom.setApiKey(apiKey, appId);
  };

  return {
    setApiKey
  };
}
//# sourceMappingURL=index.js.map