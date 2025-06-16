import { Component, AfterViewInit, OnInit,ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';// import Swiper from 'swiper';
import { NgFor } from '@angular/common';
import {Swiper} from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import { Router, RouterLink } from '@angular/router';
import { ServiceService,WhatsNewItem } from '../cloneservice/service.service';

@Component({
  selector: 'app-whats-new',
  imports: [NgFor,RouterLink],
  standalone:true,
  templateUrl: './whats-new.component.html',
  styleUrl: './whats-new.component.css',
  encapsulation: ViewEncapsulation.None // Ensure styles apply to Swiper
})
export class WhatsNewComponent implements OnInit, AfterViewInit {
  newsItems: any[] = [];

  constructor(private ServiceService: ServiceService, private router: Router) {}

    ngOnInit(): void {
    this.ServiceService.getWhatsNewItems().subscribe({
  next: response => {
    if (response.success) {
      this.newsItems = response.data.filter(item => item.isVisible);
      console.log('WhatsNew Items:', this.newsItems);
    } else {
      console.error('API Error:', response.message, response.errorMessage);
    }
  },
  error: err => console.error('HTTP Error:', err)
});

  }
   

  
  ngAfterViewInit(): void {
    setTimeout(() => {
      new Swiper('.multi-slides', {
        modules: [Navigation, Pagination],
        slidesPerView: 5,
        slidesPerGroup: 1,
        spaceBetween: 10,
        loop: false,
        simulateTouch: false, //Disable touch simulation to allow clicks
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          // renderBullet: (index, className) => {
          //   if (index < 6) {
          //     return `<span class="${className}"></span>`;
          //   }
          //   return '';
          // },
        },
        breakpoints: {
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1200: { slidesPerView: 5 },
        },
      });
    }, 100); // Delay of 100ms to ensure DOM readiness
  }
}