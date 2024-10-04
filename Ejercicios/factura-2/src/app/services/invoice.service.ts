import { Injectable } from '@angular/core';
import { Invoice } from '../model/Invoice';
import { InvoiceData } from '../data/InvoceData';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  //*CONEXION A LA BASE DE DATOS
  private ServicesInvoice: Invoice = InvoiceData;
  constructor() {}

  //*METODO GET
  getInvoice(): Invoice {
    return this.ServicesInvoice;
  }
}
