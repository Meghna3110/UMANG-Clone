import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { NgFor } from '@angular/common';
import {Swiper} from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';



@Component({
  selector: 'app-popular-services',
  imports: [NgFor],
  standalone:true,
  templateUrl: './popular-services.component.html',
  styleUrl: './popular-services.component.css',
  encapsulation: ViewEncapsulation.None // Ensure styles apply to Swiper

})
export class PopularServicesComponent implements AfterViewInit {
  newsItems = [
    { title: 'Generate Life Certificate', image: 'assets/images/GenLifeCert.png' },
    { title: 'Blood Availability', image: 'assets/images/BloodAvail.png' },
    { title: 'ESIC Centre', image: 'assets/images/ESIC.png' },
    { title: 'E - Books', image: 'assets/images/E-Book.png' },
    { title: 'Register Grievance', image: 'assets/images/reggrivance.png' },
    { title: 'Refill Order', image: 'assets/images/refillorder.png' },
    { title: 'Know your CIBIL Score', image: 'assets/images/cibil.png' },
    { title: 'Weather report', image: 'assets/images/WeatherReport.png' },
    { title: '10th Result', image: 'assets/images/10thresult1.png' },
    { title: '10th Result', image: 'assets/images/10thresult2.png' }
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