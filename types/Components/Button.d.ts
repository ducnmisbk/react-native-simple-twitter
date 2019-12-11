import React from 'react';
declare type Token = {
    oauth_token: string;
    oauth_token_secret: string;
};
declare type Props = {
    type: string;
    headerColor: string;
    callbackUrl: string;
    closeText: string;
    onPress: (e: any) => void;
    onGetAccessToken: (token: Token) => void;
    onClose: (e: any) => void;
    onSuccess: (user: any) => void;
    onError: (e: any) => void;
    renderHeader: (props: any) => React.ReactElement<{}>;
    children: any;
};
declare function TWLoginButton(props: Props): JSX.Element | null;
declare namespace TWLoginButton {
    var defaultProps: {
        type: string;
        headerColor: string;
        callbackUrl: null;
        closeText: string;
        onPress: () => void;
        onGetAccessToken: () => void;
        onClose: () => void;
        onError: () => void;
        renderHeader: null;
        children: null;
    };
}
export default TWLoginButton;
