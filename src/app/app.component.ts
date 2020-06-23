import { Component, AfterViewInit } from '@angular/core';

import $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'dvalbuena1';

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

    $("#buttonBeginning").click(function () {
      $('html, body').animate({
        scrollTop: $("#welcome").offset().top
      }, 50);
    });

    $("#buttonEconomy").click(function () {
      $('html, body').animate({
        scrollTop: $("#economy").offset().top
      }, 50);
    });

    $("#buttonFRIENDS").click(function () {
      $('html, body').animate({
        scrollTop: $("#friends").offset().top
      }, 50);
    });

    $("#buttonTravel").click(function () {
      $('html, body').animate({
        scrollTop: $("#travelCondition").offset().top
      }, 50);
    });

    $("#buttonMoney").click(function () {
      $('html, body').animate({
        scrollTop: $("#money").offset().top
      }, 50);
    });

    $("#buttonApplications").click(function () {
      $('html, body').animate({
        scrollTop: $("#apps").offset().top
      }, 50);
    });

    $("#buttonAbout").click(function () {
      $('html, body').animate({
        scrollTop: $("#aboutme").offset().top
      }, 50);
    });


  }
}
