import { Component, OnInit } from '@angular/core';
import { PortfoliodataService } from 'src/app/services/portfoliodata.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
  proyectos:any= [];

  constructor( private porfoliodataService: PortfoliodataService){}

  ngOnInit(): void {
    
    this.porfoliodataService.getDatos().subscribe(portfolio => {
     
      this.proyectos=portfolio.proyectos;
  }
    )


  }
}
