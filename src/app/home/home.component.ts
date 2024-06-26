import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, NgZone, AfterViewInit, inject, PLATFORM_ID } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    AOS.refresh();
    }

  }
