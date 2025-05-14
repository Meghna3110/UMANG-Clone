import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { WhatsNewComponent } from "../whats-new/whats-new.component";
import { PopularServicesComponent } from "../popular-services/popular-services.component";
import { TrendingComponent } from "../trending/trending.component";
import { ServiceByStateComponent } from "../service-by-state/service-by-state.component";
import { BenifitsComponent } from "../benifits/benifits.component";
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, WhatsNewComponent, PopularServicesComponent, TrendingComponent, ServiceByStateComponent, BenifitsComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
