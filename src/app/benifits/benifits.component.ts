import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NgFor } from '@angular/common';
import { Observable, of } from 'rxjs';
import { Title } from '@angular/platform-browser';


interface Benifit{
  title:string,
  icon:string,
  items:Array<string>
}
@Component({
  selector: 'app-benifits',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './benifits.component.html',
  styleUrl: './benifits.component.css'
})
export class BenifitsComponent {
  benefits$:Observable<any[]> = of([
    {
      title: 'All Services at one place',
      icon: 'assets/images/service-icon.png',
      items: ['Central Government', 'Utility Bills', 'State Government']
    },
    {
      title: 'All Documents at one place',
      icon: 'assets/images/document-icon.png',
      items: ['Aadhaar', 'Driving License', 'PAN', 'Vehicle RC', 'and many more from Digilocker']
    },
    {
      title: 'All Engagements at one place',
      icon: 'assets/images/engagement-icon.png',
      items: ['Feedback & Rating', 'Notifications', 'Customer Support', 'Live Chat', 'Chatbot', 'Voicebot']
    },
    {
      title: 'All Transactions at one place',
      icon: 'assets/images/transaction-icon.png',
      items: ['Status', 'Bills', 'Applications', 'and many more']
    }
  ]);
}
