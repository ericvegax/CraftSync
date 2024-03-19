import db from "../../../database/postgres/pg-client";

export interface IKnownPurchase {
    unqiue: string;
    packageId: string;
    known: boolean;
}

export interface IReward {
    name: string;
    amount: number;
    type: string;
}

const getKnownPurchase = () => {
    
}