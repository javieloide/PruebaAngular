import { Component, OnInit } from '@angular/core';
import { NasaService } from 'src/app/services/nasa.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private nasaService:NasaService) {
    this.nasaService.getLastSixDays().subscribe(resp => {
      console.log(resp);
    });
   }

  ngOnInit(): void {

  }
}
