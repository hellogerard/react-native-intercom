export default function useIntercom(): {
    setApiKey: (apiKey: string, appId: string) => Promise<any>;
};
