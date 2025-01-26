import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MockDataService } from '../../services/mock-data.service';
import { DashboardViewComponent } from '../../views/dashboard-view/dashboard-view.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [MatTableDataSource, MatDialog, DashboardViewComponent]
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'actions'];
  dataSource = new MatTableDataSource<any>();

  constructor(private mockDataService: MockDataService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.dataSource.data = this.mockDataService.getData();
  }

  addData(): void {
    const dialogRef = this.dialog.open(DashboardViewComponent, {
      width: '250px',
      data: { id: null, name: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.mockDataService.addData(result);
        this.loadData();
      }
    });
  }

  editData(element: any): void {
    const dialogRef = this.dialog.open(DashboardViewComponent, {
      width: '250px',
      data: { id: element.id, name: element.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.mockDataService.updateData(result);
        this.loadData();
      }
    });
  }

  deleteData(id: number): void {
    this.mockDataService.deleteData(id);
    this.loadData();
  }
}
