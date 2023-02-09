import { Component, OnInit } from '@angular/core';
import { PortfoliodataService } from 'src/app/services/portfoliodata.service';

@Component({
  selector: 'app-professional-info',
  templateUrl: './professional-info.component.html',
  styleUrls: ['./professional-info.component.css']
})
export class ProfessionalInfoComponent implements OnInit{
  jobs:any= [];
constructor(private porfoliodataService: PortfoliodataService){}

ngOnInit(): void {
  

  this.porfoliodataService.getDatos().subscribe(portfolio => {
     
    this.jobs=portfolio.jobs;
}
  )



}



}
