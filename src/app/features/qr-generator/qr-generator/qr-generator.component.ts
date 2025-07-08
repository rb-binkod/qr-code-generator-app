import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { QrFormComponent } from '../components/qr-form/qr-form.component';
import { QrStorageService } from '../services/qr-storage.service';
import { QrEntry } from '../models/qr-entry.model';

@Component({
  selector: 'app-qr-generator',
  standalone: true,
  templateUrl: './qr-generator.component.html',
  styleUrls: ['./qr-generator.component.scss'],
  imports: [CommonModule, RouterModule, QrFormComponent]
})
export class QrGeneratorComponent {
  showForm = false;
  qrList: QrEntry[] = [];

  constructor(private qrService: QrStorageService) {
    this.qrList = this.qrService.getAll();
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  onQrGenerated(entry: QrEntry) {
    this.qrService.add(entry);
    this.qrList = this.qrService.getAll();
    this.showForm = false;
  }
}
