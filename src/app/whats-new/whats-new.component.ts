import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';
// import { Swiper } from 'swiper/react';
// import Swiper from 'swiper';
import { NgFor } from '@angular/common';
import {Swiper} from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-whats-new',
  imports: [NgFor,RouterLink],
  standalone:true,
  templateUrl: './whats-new.component.html',
  styleUrl: './whats-new.component.css',
  encapsulation: ViewEncapsulation.None // Ensure styles apply to Swiper
})
export class WhatsNewComponent implements AfterViewInit {
  newsItems = [
    { id: 1, title: 'EPFO', image: 'assets/images/epfo.png' },
    { id: 2, title: 'Aadhaar', image: 'assets/images/aadhaar.png' },
    { id: 3, title: 'Department of Agriculture and...', image: 'assets/images/deptagri.png' },
    { id: 4, title: 'Sewa Setu - Assam', image: 'assets/images/sevasetu.png' },
    { id: 5, title: 'Revenue Department (Himachal Pradesh)', image: 'assets/images/revenuedpt.png' },
    { id: 6, title: 'Delhi Tourism', image: 'assets/images/delhitourism.png' },
    { id: 7, title: 'NDL India', image: 'assets/images/NDL.png' },
    { id: 8, title: 'Apuni Sarkar', image: 'assets/images/apunisarkaruk.png' },
    { id: 9, title: 'Poshna Tracker', image: 'assets/images/poshan.png' },
    { id: 10, title: 'Aaple Sarkar', image: 'assets/images/aaplesarkar.png' }
  ];

  constructor() {}

  ngAfterViewInit(): void {
    // Add a slight delay to ensure the DOM is fully rendered
    setTimeout(() => {
      const swiper = new Swiper('.multi-slides', {
        modules: [Navigation, Pagination],
        slidesPerView: 5, // Show 5 slides at a time
        slidesPerGroup: 1, // Move 1 slide at a time
        spaceBetween: 10, // Match the CSS margin-right value
        loop: false, // Disable loop to match UMANG behavior
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: (index, className) => {
            if (index < 6) {
              return `<span class="${className}"></span>`;
            }
            return '';
          },
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 5,
            slidesPerGroup: 1,
            spaceBetween: 10,
          },
        },
      });
    }, 100); // Delay of 100ms to ensure DOM readiness
  }
}