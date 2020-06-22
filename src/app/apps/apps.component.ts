import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss']
})
export class AppsComponent implements OnInit {

  constructor() { }

  encapsulation: ViewEncapsulation.None

  ngOnInit(): void {
  }

}
