import { Component, OnInit } from '@angular/core';
import { PortfoliodataService } from 'src/app/services/portfoliodata.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  aboutme:string='';
  imagen: string ='';
  sobremi: string ='';

 constructor( private porfoliodataService: PortfoliodataService){  }


 ngOnInit():void {
   this.porfoliodataService.getDatos().subscribe(portfolio => {
     console.log(portfolio);
     this.imagen=portfolio.imagen;
     this.sobremi=portfolio.sobremi;
  
 })


}

}

 
