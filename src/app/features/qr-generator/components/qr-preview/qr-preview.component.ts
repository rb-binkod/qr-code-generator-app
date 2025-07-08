import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { QRCodeModule } from 'angularx-qrcode';
import { QrStorageService } from '../../services/qr-storage.service';
import { QrEntry } from '../../models/qr-entry.model';

@Component({
  selector: 'app-qr-preview',
  standalone: true,
  imports: [CommonModule, RouterModule, QRCodeModule],
  templateUrl: './qr-preview.component.html',
  styleUrls: ['./qr-preview.component.scss']
})
export class QrPreviewComponent {
  qrEntry: QrEntry | undefined;

  constructor(
    private route: ActivatedRoute,
    private qrService: QrStorageService
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.qrEntry = this.qrService.getById(id);
    }
  }

  downloadQRCode() {
    const canvas: any = document.querySelector('canvas');
    if (!canvas) return;
    const image = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = image;
    link.download = 'qr-code.png';
    link.click();
  }
}
