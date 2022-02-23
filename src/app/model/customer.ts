import { IProject } from "./project";

export interface ICustomer {
    projectslist: IProject[];
    customerName?: string|null ;
}


export interface Customer{
    name: string,
    id: number,
}

export interface CustomerSave{
    name:string,
    address:string,
    id :number
}


