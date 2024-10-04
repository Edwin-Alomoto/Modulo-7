import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { InvoiceComponent } from './app/components/invoice/invoice.component';

const bootstrap = () => bootstrapApplication(InvoiceComponent, config);

export default bootstrap;
