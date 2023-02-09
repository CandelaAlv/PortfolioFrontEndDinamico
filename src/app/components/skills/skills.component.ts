import { Component, OnInit } from '@angular/core';
import { PortfoliodataService } from 'src/app/services/portfoliodata.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{
  skills:any= [];
  constructor( private porfoliodataService: PortfoliodataService ){}

  ngOnInit(): void {
    this.porfoliodataService.getDatos().subscribe(portfolio => {
     
      this.skills=portfolio.skills;
  }
    )
}
}