import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { LearningComponent } from './app/components/learning/learning.component';

const bootstrap = () => bootstrapApplication(LearningComponent, config);

export default bootstrap;
