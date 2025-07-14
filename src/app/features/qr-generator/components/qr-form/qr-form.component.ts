import { Component } from '@angular/core';
import { QrEntry } from '../../models/qr-entry.model';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { QrStorageService } from '../../services/qr-storage.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-qr-form',
  standalone: true,
  templateUrl: './qr-form.component.html',
  styleUrls: ['./qr-form.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatSnackBarModule
  ]
})
export class QrFormComponent {
  type: string = 'text';
  value: string = '';

  constructor(
    private qrStorage: QrStorageService,
    private snackBar: MatSnackBar,
    private router: Router, protected location: Location
  ) { }

  onSubmit() {
    const isDuplicate = this.qrStorage
      .getAll()
      .some(entry => entry.type === this.type && entry.value === this.value);

    if (isDuplicate) {
      this.snackBar.open('Duplicate QR entry not allowed!', 'Close', { duration: 3000 });
      return;
    }
    setTimeout(() => {
      const canvas: any = document.querySelector('canvas');
      const base64Img = canvas?.toDataURL('image/png');
      const formatted = this.formatValue(this.type, this.value);

      const entry: QrEntry = {
        id: Date.now().toString(),
        type: this.type,
        value: this.value,
        result: formatted,
        createdAt: new Date().toISOString(),
        image: base64Img || ''
      };

      this.qrStorage.add(entry);
      this.snackBar.open('QR Code Generated Successfully', 'Close', { duration: 2000 });

      // redirect to list
      this.router.navigate(['/']);
    }, 100);
  }

  formatValue(type: string, value: string): string {
    switch (type) {
      case 'email': return `mailto:${value}`;
      case 'phone': return `tel:${value}`;
      case 'sms': return `sms:${value}`;
      default: return value;
    }
  }
}
