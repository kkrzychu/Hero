import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  heroList: any;

  constructor() { }

  ngOnInit(): void {
    fetch('../../assets/hero.json')
      .then(response => response.json())
      .then(data => this.heroList = data)
      .catch(error => console.log(error))
  }

}
