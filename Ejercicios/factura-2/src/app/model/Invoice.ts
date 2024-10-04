import { Company } from "./Company";
import { Customer } from "./Customer";
import { InvoiceItem } from "./InvoiceItem";

export class Invoice{
    //*ATRIBUTOS
    id!:string;
    company!: Company;
    customer!: Customer;
    items!:InvoiceItem[]; //* UNA FACTURA TIENE MUCHOS ITEMS 
}