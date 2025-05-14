import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { NgFor } from '@angular/common';
import { Swiper } from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

@Component({
  selector: 'app-trending',
  imports: [NgFor],
  standalone: true,
  templateUrl: './trending.component.html',
  styleUrl: './trending.component.css',
  encapsulation: ViewEncapsulation.None // Ensure styles apply to Swiper
})
export class TrendingComponent implements AfterViewInit {
  newsItems = [
    { title: 'Jeevan Pramaan', image: 'assets/images/GenLifeCert.png' },
    { title: 'Delhi Metro', image: 'assets/images/DelhiMetro.png' },
    { title: 'Bhashini', image: 'assets/images/Bhashini.png' },
    { title: 'EPFO', image: 'assets/images/epfo.png' },
    { title: 'Indian Railways', image: 'assets/images/indianrailway.png' },
  ];

  private swiperInstance: Swiper | null = null;

  constructor() {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initializeSwiper();
      // Update Swiper on window resize
      window.addEventListener('resize', () => this.updateSwiper());
    }, 100);
  }

  private initializeSwiper(): void {
    this.swiperInstance = new Swiper('.multi-slides', {
      modules: [Navigation, Pagination],
      slidesPerView: 5,
      slidesPerGroup: 1,
      spaceBetween: 10,
      loop: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        disabledClass: 'swiper-button-disabled'
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: (index, className) => {
          if (index < this.newsItems.length) {
            return `<span class="${className}"></span>`;
          }
          return '';
        }
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 10
        },
        640: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 10
        },
        768: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          spaceBetween: 10
        },
        1024: {
          slidesPerView: 4,
          slidesPerGroup: 1,
          spaceBetween: 10
        },
        1200: {
          slidesPerView: 5,
          slidesPerGroup: 1,
          spaceBetween: 10
        }
      }
    });

    // Initial update to hide/show navigation and pagination
    this.updateSwiper();
  }

  private updateSwiper(): void {
    if (!this.swiperInstance) return;

    const isLargeScreen = window.innerWidth >= 1200;
    const navigation = this.swiperInstance.params.navigation;
    const pagination = this.swiperInstance.params.pagination;

    if (isLargeScreen) {
      // Disable navigation and pagination on large screens
      if (navigation && typeof navigation !== 'boolean') {
        navigation.enabled = false;
      }
      if (pagination && typeof pagination !== 'boolean') {
        pagination.el = null; // Detach pagination
      }
      this.swiperInstance.navigation?.destroy();
      this.swiperInstance.pagination?.destroy();
    } else {
      // Enable navigation and pagination on smaller screens
      if (navigation && typeof navigation !== 'boolean') {
        navigation.enabled = true;
      }
      if (pagination && typeof pagination !== 'boolean') {
        pagination.el = '.swiper-pagination'; // Reattach pagination
      }
      this.swiperInstance.navigation?.init();
      this.swiperInstance.pagination?.init();
    }

    this.swiperInstance.update();
  }
}