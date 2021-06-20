import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NasaService } from '../../services/nasa.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  fecha: string;
  data: any = {};
  constructor(
      private router:Router,
      private actRoute: ActivatedRoute,
      private nasaService: NasaService
    ) {
    this.fecha = this.actRoute.snapshot.paramMap.get('date');
  }

  ngOnInit(): void {
    this.nasaService.getDataByDate(this.fecha).subscribe( resp =>{
      this.data = resp;
      console.log(this.data);
    })
  }


  toDashboard(){
    this.router.navigate(['/dashboard']);
  }
}
