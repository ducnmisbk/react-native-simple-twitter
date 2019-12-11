export declare const randomStrings: (n?: number) => string;
export declare const createHeaderString: (params: any) => string;
export declare const encodeParamsToString: (params: any) => string;
export declare const parseFormEncoding: (formEncoded: string) => any;
export declare const createTokenRequestHeaderParams: (consumerKey: string | undefined, { callback, token, params }: {
    callback?: string | undefined;
    token?: string | undefined;
    params?: {} | undefined;
}) => {
    oauth_version: string;
    oauth_token: string;
    oauth_consumer_key: string;
    oauth_nonce: string;
    oauth_signature_method: string;
    oauth_timestamp: number;
    oauth_callback: string;
} | {
    oauth_version: string;
    oauth_consumer_key: string;
    oauth_nonce: string;
    oauth_signature_method: string;
    oauth_timestamp: number;
    oauth_callback: string;
} | {
    oauth_version: string;
    oauth_token: string;
    oauth_consumer_key: string;
    oauth_nonce: string;
    oauth_signature_method: string;
    oauth_timestamp: number;
} | {
    oauth_version: string;
    oauth_consumer_key: string;
    oauth_nonce: string;
    oauth_signature_method: string;
    oauth_timestamp: number;
};
export declare const createSignature: (params: any, method: string, url: string, consumerSecret: string, tokenSecret?: string | null) => any;
