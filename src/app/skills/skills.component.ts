import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title:string = "Specials Skills";
  technologies : Array<[string, number]> = [["Java",100],["Linux",90],["MySQL",60],["Git",60]]

}
