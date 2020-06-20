import { Component, OnInit, AfterViewInit } from '@angular/core';

import $ from 'jquery';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

    // $('.welcomeBeforeClick').one('click', () => {
    //   $('.welcomeBeforeClick').animate({ height: 239 }, 500, "swing");
    //   console.log(this);

    //   $('html, body').animate({
    //     scrollTop: $("#economy").offset().top
    //   }, 1500, () => {
    //     $('.welcomeBeforeClick').removeClass("welcomeBeforeClick");
    //   });
    // })

  }

}
