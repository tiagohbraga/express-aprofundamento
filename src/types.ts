import { StringDecoder } from "string_decoder"

export enum ACCOUNT_TYPE {
    BRONZE = "Bronze",
    SILVER = "Prata",
    GOLD = "Ouro",
    PLATINUM = "Platina",
    BLACK = "Black"
}

export type TAccount = {
    id: string,
    ownerName: string,
    balance: number,
    type: ACCOUNT_TYPE
}

export type TPet = {
    id: string,
    name: string,
    raca: string,
    peso: number
}