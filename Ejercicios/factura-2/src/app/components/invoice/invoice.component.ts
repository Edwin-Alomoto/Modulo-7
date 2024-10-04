import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../model/Invoice';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css',
})
export class InvoiceComponent implements OnInit {
  //* ATRIBUTO
  invoice!:Invoice;
  //*CONSTRUCTOR - INSTANCIANDO
  constructor(private service: InvoiceService){} //*INSTANCIAR EL SERVICIO AL COMPONENTE - INYECTAR
  //*EVENTO DEL COMPONENTE
  ngOnInit( ): void {
    this.invoice=this.service.getInvoice();
  }
}
