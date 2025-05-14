import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-by-state',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './service-by-state.component.html',
  styleUrls: ['./service-by-state.component.css']
})
export class ServiceByStateComponent {
  hoveredCard: string = '';
}