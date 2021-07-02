import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  reports: any;
  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.retrieveReports();
  }

  retrieveReports(): void {
    this.reportService.getAll()
      .subscribe(
        data => {
          if (data.success) {
            this.refreshList(data.data.elements);
          }
        },
        error => {
          console.log(error);
        });
  }

  refreshList(data: any): void {
    this.reports = data;
  }

  updateTicket(id: any, ticketState: any): void {
    this.reportService.update(id, { 'ticketState': ticketState })
      .subscribe(
        response => {
          if (response.success) {
            this.refreshList(response.data);
          }
        },
        error => {
          console.log(error);
        });
  }

}
