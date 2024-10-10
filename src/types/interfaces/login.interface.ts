import { CountryCodeEnum } from "../enums/country-code.enum";

export interface ILogin{
    userId: string,
    email: string,
    token: string,  
    countryCode: CountryCodeEnum | null
}