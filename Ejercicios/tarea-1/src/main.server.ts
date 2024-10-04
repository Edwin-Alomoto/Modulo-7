import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { UserComponent } from './app/components/user/user.component';
import { config } from './app/app.config.server';
//*CAMBIAMOS DE COMPNENTE
const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
