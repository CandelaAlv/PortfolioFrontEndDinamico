import { Component, OnInit } from '@angular/core';
import { PortfoliodataService } from 'src/app/services/portfoliodata.service';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent implements OnInit {
  instagram: string ='';
  facebook: string ='';
  twitter: string ='';

  constructor( private porfoliodataService: PortfoliodataService){  }

  ngOnInit(): void {
    
    this.porfoliodataService.getDatos().subscribe(portfolio => {

      this.instagram=portfolio.instagram;
      this.facebook=portfolio.facebook;
      this.twitter=portfolio.twitter;
    })
  
  }

}
