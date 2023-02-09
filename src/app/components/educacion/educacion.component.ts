import { Component, OnInit } from '@angular/core';
import { PortfoliodataService } from 'src/app/services/portfoliodata.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit{

  estudios:any= [];
  

  constructor (private porfoliodataService: PortfoliodataService)
{}

ngOnInit():void {
 this.porfoliodataService.getDatos().subscribe(portfolio => {
     
     this.estudios=portfolio.estudios;
    
     
 }
 )


}
}
