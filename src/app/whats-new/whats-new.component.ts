import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';
// import { Swiper } from 'swiper/react';
// import Swiper from 'swiper';
import { NgFor } from '@angular/common';
import {Swiper} from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';

@Component({
  selector: 'app-whats-new',
  imports: [NgFor],
  standalone:true,
  templateUrl: './whats-new.component.html',
  styleUrl: './whats-new.component.css',
  encapsulation: ViewEncapsulation.None // Ensure styles apply to Swiper
})
export class WhatsNewComponent implements AfterViewInit {
  newsItems = [
    { title: 'EPFO', image: 'assets/images/epfo.png' },
    { title: 'Aadhaar', image: 'assets/images/aadhaar.png' },
    { title: 'Department of Agriculture and...', image: 'assets/images/deptagri.png' },
    { title: 'Sewa Setu - Assam', image: 'assets/images/sevasetu.png' },
    { title: 'Revenue Department (Himachal Pradesh)', image: 'assets/images/revenuedpt.png' },
    { title: 'Delhi Tourism', image: 'assets/images/delhitourism.png' },
    { title: 'NDL India', image: 'assets/images/NDL.png' },
    { title: 'Apuni Sarkar', image: 'assets/images/apunisarkaruk.png' },
    { title: 'Poshna Tracker', image: 'assets/images/poshan.png' },
    { title: 'Aaple Sarkar', image: 'assets/images/aaplesarkar.png' }
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