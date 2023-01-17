import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(private RestService:RestService) { }

  ngOnInit() {
    this.loadData();
  }

  public loadData(){
    this.RestService.get("/skill")
    .subscribe(res =>{
      console.log(res)
      this.technologies = res;
    });
  }

  title:string = "Specials Skills";
  technologies:any=[];

}
