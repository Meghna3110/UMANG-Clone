import { Component, AfterViewInit, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { NgFor } from '@angular/common';
import { Swiper } from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { RouterLink } from '@angular/router';
import { ServiceService, WhatsNewItem } from '../cloneservice/service.service';

@Component({
  selector: 'app-trending',
  imports: [NgFor, RouterLink],
  standalone: true,
  templateUrl: './trending.component.html',
  styleUrl: './trending.component.css',
  encapsulation: ViewEncapsulation.None
})
export class TrendingComponent implements OnInit, AfterViewInit {
  @ViewChild('swiperContainer', { static: false }) swiperContainer!: ElementRef;
  newsItems: WhatsNewItem[] = [];
  private swiperInstance: Swiper | null = null;

  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    this.serviceService.getTrendingItems().subscribe({
      next: response => {
        if (response.success) {
          this.newsItems = response.data.filter(item => item.isVisible);
          this.initializeSwiper(); // Reinitialize after data load
        } else {
          console.error('API Error:', response.message, response.errorMessage);
        }
      },
      error: err => console.error('HTTP Error:', err)
    });
  }

  ngAfterViewInit(): void {
    this.initializeSwiper();
  }

  private initializeSwiper(): void {
    if (!this.swiperContainer?.nativeElement) {
      console.warn('Swiper container not found');
      return;
    }

    this.swiperInstance = new Swiper(this.swiperContainer.nativeElement, {
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
        clickable: true
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
        1200: { slidesPerView: 5 }
      }
    });

    console.log('Swiper instance:', this.swiperInstance);
    this.updateSwiper();
  }

  private updateSwiper(): void {
    if (!this.swiperInstance) {
      console.warn('Swiper instance is not initialized');
      return;
    }

    const isLargeScreen = window.innerWidth >= 1200;
    const visibleItems = this.newsItems.length;

    if (isLargeScreen && visibleItems <= 5) {
      this.swiperInstance.params.navigation = { enabled: false };
      this.swiperInstance.navigation?.destroy();
    } else {
      this.swiperInstance.params.navigation = {
        enabled: true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        disabledClass: 'swiper-button-disabled'
      };
      this.swiperInstance.navigation?.init();
    }

    this.swiperInstance.update();
  }
}