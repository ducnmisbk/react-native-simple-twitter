declare class Client {
    ConsumerKey: string;
    ConsumerSecret: string;
    Token: string;
    TokenSecret: string;
    TokenRequestHeaderParams: any;
    setConsumerKey: (consumerKey: string, consumerSecret: string) => void;
    setAccessToken: (token: string, tokenSecret: string) => void;
    getLoginUrl: (callback?: string) => Promise<string>;
    getAccessToken: (verifier?: string) => Promise<{
        errors?: any;
        oauth_token: string;
        oauth_token_secret: string;
    }>;
    api: (method: string | undefined, endpoint: string, params?: any) => Promise<any>;
    post: (endpoint: string, params?: any) => Promise<any>;
    get: (endpoint: string, params?: any) => Promise<any>;
}
declare const _default: Client;
export default _default;
