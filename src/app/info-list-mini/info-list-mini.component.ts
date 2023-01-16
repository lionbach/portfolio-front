import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-list-mini',
  templateUrl: './info-list-mini.component.html',
  styleUrls: ['./info-list-mini.component.css']
})
export class InfoListMiniComponent implements OnInit {

  @Input() technology: string = "none";
  @Input() level: number = 10; 

  constructor() { }

  ngOnInit() {
  }

}
