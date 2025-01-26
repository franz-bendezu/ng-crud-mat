import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  private data: any[] = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ];

  getData(): any[] {
    return this.data;
  }

  addData(item: any): void {
    this.data.push(item);
  }

  updateData(item: any): void {
    const index = this.data.findIndex(d => d.id === item.id);
    if (index !== -1) {
      this.data[index] = item;
    }
  }

  deleteData(id: number): void {
    this.data = this.data.filter(d => d.id !== id);
  }
}
