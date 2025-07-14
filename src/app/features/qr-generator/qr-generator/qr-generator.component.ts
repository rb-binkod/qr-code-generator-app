import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { QrStorageService } from '../services/qr-storage.service';
import { QrEntry } from '../models/qr-entry.model';

@Component({
  selector: 'app-qr-generator',
  standalone: true,
  templateUrl: './qr-generator.component.html',
  styleUrls: ['./qr-generator.component.scss'],
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatButtonModule
  ]
})
export class QrGeneratorComponent {
  qrList: QrEntry[] = [];

  constructor(private qrService: QrStorageService) {
    this.qrList = this.qrService.getAll();
  }

  delete(id: string) {
    this.qrService.delete(id);
    this.qrList = this.qrService.getAll();
  }
}
