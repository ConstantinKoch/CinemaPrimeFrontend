export enum TokenEnum {
    EMPTY, FILLED
}

export default class Token {
    token?: string;

    private constructor(kind: TokenEnum, token?: string) {
        if (kind === TokenEnum.EMPTY) {
            return;
        } else {
            this.token = token;
        }
    }

    static getEmptyToken(): Token {
        return new Token(TokenEnum.EMPTY);
    }

    static getToken(token: string): Token {
        return new Token(TokenEnum.FILLED, token);
    };

}