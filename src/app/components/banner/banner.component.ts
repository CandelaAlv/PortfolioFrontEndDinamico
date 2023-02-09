import { Component, OnInit } from '@angular/core';
import { PortfoliodataService } from '../../services/portfoliodata.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})

export class BannerComponent  implements OnInit {

 banner: string ='';
 titulo: string ='';
 name: string ='';

  constructor( private porfoliodataService: PortfoliodataService){  }


  ngOnInit():void {
    this.porfoliodataService.getDatos().subscribe(portfolio => {
      console.log(portfolio);
    this.banner=portfolio.banner;
    this.titulo=portfolio.titulo;
    this.name=portfolio.name;
  })

  }

}