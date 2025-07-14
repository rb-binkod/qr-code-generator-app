import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { QrEntry } from '../models/qr-entry.model';
import { QrStorageService } from '../services/qr-storage.service';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from '../../../shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-qr-generator',
  standalone: true,
  templateUrl: './qr-generator.component.html',
  styleUrls: ['./qr-generator.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
  ]
})
export class QrGeneratorComponent {
  qrList: QrEntry[] = [];
  searchTerm: string = '';

  constructor(private dialog: MatDialog, private qrService: QrStorageService,
    private snackBar: MatSnackBar
  ) {
    this.qrList = this.qrService.getAll();
  }

  get filteredQrList(): QrEntry[] {
    return this.qrList.filter(item =>
      item.type.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      item.value.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  delete(id: string) {
    this.qrService.delete(id);
    this.qrList = this.qrService.getAll();
  }

  confirmDelete(id: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: { message: 'Are you sure you want to delete this QR code?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.qrService.delete(id);
        this.qrList = this.qrService.getAll();
        this.snackBar.open('QR Code deleted successfully', 'Close', { duration: 2000 });
      }
    });
  }

  downloadQr(data: string) {
    const qrcode = document.createElement('qrcode');
    qrcode.setAttribute('qrdata', data);
    qrcode.setAttribute('width', '200');
    document.body.appendChild(qrcode);

    setTimeout(() => {
      const canvas = document.querySelector('canvas');
      if (canvas) {
        const img = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = img;
        link.download = 'qr-code.png';
        link.click();
      }
      document.body.removeChild(qrcode);
    }, 100);
  }

}
