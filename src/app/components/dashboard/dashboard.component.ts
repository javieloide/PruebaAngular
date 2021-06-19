import { Component, OnInit } from '@angular/core';
import { NasaService } from 'src/app/services/nasa.service';
import { element } from 'protractor';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  listNasaApi:any = [];
  displayedColumns: string[] = ['date', 'url', 'title'];
  constructor(private nasaService:NasaService) {
    this.nasaService.getLastSixDays().subscribe(resp => {
      this.listNasaApi = resp;
      console.log(this.listNasaApi);
    });
   }

  ngOnInit(): void {

  }
  getDetail(element){
    console.log(element);
  }
}
