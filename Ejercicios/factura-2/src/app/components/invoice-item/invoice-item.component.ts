import { Component, Input } from '@angular/core';
import { InvoiceItem } from '../../model/InvoiceItem';

@Component({
  selector: 'app-invoice-item',
  standalone: true,
  imports: [],
  templateUrl: './invoice-item.component.html',
  styleUrl: './invoice-item.component.css',
})
export class InvoiceItemComponent {
  //*PARA QUE SE CONECTE CON LOS ITEMS
  @Input() item!: InvoiceItem;
}
