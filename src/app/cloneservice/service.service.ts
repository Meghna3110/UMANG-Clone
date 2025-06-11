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
}