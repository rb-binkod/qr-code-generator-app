import { Injectable } from '@angular/core';
import { QrEntry } from '../models/qr-entry.model';

@Injectable({ providedIn: 'root' })
export class QrStorageService {
    private key = 'qrHistory';

    getAll(): QrEntry[] {
        return JSON.parse(localStorage.getItem(this.key) || '[]');
    }

    add(entry: QrEntry): void {
        const list = this.getAll();
        list.unshift(entry);
        localStorage.setItem(this.key, JSON.stringify(list));
    }

    getById(id: string): QrEntry | undefined {
        return this.getAll().find(e => e.id === id);
    }

    delete(id: string): void {
        const updated = this.getAll().filter(qr => qr.id !== id);
        localStorage.setItem(this.key, JSON.stringify(updated));
    }

}
