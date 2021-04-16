export interface TokenResultDto {
    status: boolean;
    message: string;
    entity: TokenEntity;
}


export interface TokenEntity {
    access_token: string;
    token_type: string;
    expires_in: number;
}




