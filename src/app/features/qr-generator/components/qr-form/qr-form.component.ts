import { Component, EventEmitter, Output } from '@angular/core';
//import { v4 as uuidv4 } from 'uuid'; // You can use your own ID generator
import { QrEntry } from '../../models/qr-entry.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-qr-form',
  standalone: true,
  templateUrl: './qr-form.component.html',
  styleUrls: ['./qr-form.component.scss'],
  imports: [FormsModule]
})
export class QrFormComponent {
  @Output() qrGenerated = new EventEmitter<QrEntry>();

  type: string = 'text';
  value: string = '';

  onSubmit() {
    const result = this.value;

    const newEntry: QrEntry = {
      id: "",///uuidv4(),
      type: this.type,
      value: this.value,
      result: result,
      createdAt: new Date().toISOString(),
    };

    this.qrGenerated.emit(newEntry);
    this.value = '';
  }
}
