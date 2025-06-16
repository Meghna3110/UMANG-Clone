import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface WhatsNewItem {
  id: number;
  title: string;
  imagePath: string;
  isVisible: boolean;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
  errorMessage?: string;
}

export interface ServiceData {
  id: number;
  title: string;
  description: string;
  keypoints: string;
  phno: string;
  email: string;
  weburl: string;
  address: string;
  workingHours: string;
  isActive: boolean;
  image: string;
}

export interface ServiceDetail {
  id: number;
  name: string;
  desc: string;
  visits: number | null;
  image_url: string;
}

export interface ServiceDetailsResponse {
  whatsNewItem: WhatsNewItem;
  service: ServiceData;
  serviceDetails: ServiceDetail[];
}

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http: HttpClient) { }

  getWhatsNewItems(): Observable<ApiResponse<WhatsNewItem[]>> {
    return this.http.get<ApiResponse<WhatsNewItem[]>>('https://localhost:7215/api/WhatsNew/GetAllWhatsNewItemList');
  }

  getPopularServicesItems(): Observable<ApiResponse<WhatsNewItem[]>> {
    return this.http.get<ApiResponse<WhatsNewItem[]>>('https://localhost:7215/api/PopularServices/GetAllPopularServicesItem');
  }

  getTrendingItems(): Observable<ApiResponse<WhatsNewItem[]>> {
    return this.http.get<ApiResponse<WhatsNewItem[]>>('https://localhost:7215/api/TrendingItems/GetAllTrendingItemList');
  }

  getServiceDetails(whatsNewId: number): Observable<ApiResponse<ServiceDetailsResponse>> {
    return this.http.get<ApiResponse<ServiceDetailsResponse>>(
      `https://localhost:7215/api/Service/GetWhatsNewServiceDataAndDetailsById/${whatsNewId}`
    );
  }
  
}