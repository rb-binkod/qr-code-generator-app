import { Routes } from '@angular/router';
import { QrGeneratorComponent } from './features/qr-generator/qr-generator/qr-generator.component';
import { QrPreviewComponent } from './features/qr-generator/components/qr-preview/qr-preview.component';
import { QrFormComponent } from './features/qr-generator/components/qr-form/qr-form.component';

export const routes: Routes = [
    { path: '', component: QrGeneratorComponent },
    { path: 'preview/:id', component: QrPreviewComponent },
    { path: 'generate', component: QrFormComponent },
    { path: '**', redirectTo: '' }
];
