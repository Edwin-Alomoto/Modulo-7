import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../model/Invoice';
import { CompanyViewComponent } from "../company-view/company-view.component";
import { CustomerComponent } from "../customer-view/customer.component";
import { TableInvoiceComponent } from "../table-view/table-invoice.component";

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [CompanyViewComponent, CustomerComponent, TableInvoiceComponent],
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
