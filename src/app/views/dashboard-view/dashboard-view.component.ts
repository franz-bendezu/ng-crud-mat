import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.css'],
  standalone: true,
  imports: [MatDialogRef, MAT_DIALOG_DATA]
})
export class DashboardViewComponent {
  constructor(
    public dialogRef: MatDialogRef<DashboardViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
