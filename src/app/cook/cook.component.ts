import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cook',
  templateUrl: './cook.component.html',
  styleUrls: ['./cook.component.css']
})
export class CookComponent implements OnInit {
  material1: string;
  material2: string;
  theDish: string;
  isCooked = false;

  constructor() { }

  ngOnInit() {
  }

  clear() {
    this.isCooked = false;
  }

  cook(material1: string, material2: string) {
    this.isCooked = true;
    this.theDish = material1 + ' fried ' + material2;
  }

}
