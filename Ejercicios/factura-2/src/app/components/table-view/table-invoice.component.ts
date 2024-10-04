import { Component, Input } from '@angular/core';
import { InvoiceItem } from '../../model/InvoiceItem';
import { InvoiceItemComponent } from "../invoice-item/invoice-item.component";

@Component({
  selector: 'app-table-invoice',
  standalone: true,
  imports: [InvoiceItemComponent],
  templateUrl: './table-invoice.component.html',
  styleUrl: './table-invoice.component.css'
})
export class TableInvoiceComponent {
  @Input()items!:InvoiceItem[];
}
