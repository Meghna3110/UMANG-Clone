import { Component, AfterViewInit, OnInit, ViewEncapsulation } from '@angular/core';
import { NgFor } from '@angular/common';
import { Swiper } from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { RouterLink } from '@angular/router';
import { ServiceService, WhatsNewItem } from '../cloneservice/service.service';

@Component({
  selector: 'app-popular-services',
  imports: [NgFor, RouterLink],
  standalone: true,
  templateUrl: './popular-services.component.html',
  styleUrl: './popular-services.component.css',
  encapsulation: ViewEncapsulation.None
})
export class PopularServicesComponent implements OnInit, AfterViewInit {
  newsItems: WhatsNewItem[] = [];

  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    this.serviceService.getPopularServicesItems().subscribe({
      next: response => {
        if (response.success) {
          this.newsItems = response.data.filter(item => item.isVisible);
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
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1200: { slidesPerView: 5 },
        },
      });
    }, 100);
  }
}