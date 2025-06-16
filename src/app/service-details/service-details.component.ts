// service-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService, ServiceDetailsResponse } from '../cloneservice/service.service';
import { NgIf, NgFor } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-service-details',
  imports: [NgIf, NgFor, NavbarComponent],
  standalone: true,
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {
  serviceDetails: ServiceDetailsResponse | null = null;
  error: string | null = null;
  loading: boolean = true;
  serviceId: string | null = null;
  backendBaseUrl: string = 'https://localhost:7215/';

  constructor(
    private route: ActivatedRoute,
    private serviceService: ServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.serviceId = params['id'];
      console.log('Extracted serviceId:', this.serviceId);

      const id = this.serviceId ? Number(this.serviceId) : null;

      if (id && id > 0) {
        console.log('Calling API for ID:', id);
        this.serviceService.getServiceDetails(id).subscribe({
          next: (response) => {
            console.log('API Response:', JSON.stringify(response, null, 2));
            if (response.success && response.data) {
              this.serviceDetails = response.data;
              if (this.serviceDetails.serviceDetails) {
                this.serviceDetails.serviceDetails.forEach((detail, index) => {
                  console.log(`Sub-service ${index + 1}: API image_url: ${detail.image_url}`);
                });
              } else {
                console.log('No serviceDetails found in response');
              }
              console.log('Header image path:', this.serviceDetails.whatsNewItem?.imagePath);
            } else {
              this.error = response.message || 'No service details found';
            }
            this.loading = false;
          },
          error: (err) => {
            this.error = 'Failed to fetch service details. Please try again later.';
            console.error('API Error:', err);
            this.loading = false;
          }
        });
      } else {
        this.error = 'Invalid service ID';
        console.error('Invalid ID:', id);
        this.loading = false;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  onImageLoad(index: number, imageUrl: string): void {
    console.log(`Sub-service image ${index + 1} loaded: ${imageUrl}`);
  }

  onImageError(index: number, imageUrl: string): void {
    console.log(`Sub-service image ${index + 1} failed to load: ${imageUrl}`);
  }
}