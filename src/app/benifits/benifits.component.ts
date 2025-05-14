import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-benifits',
  imports: [NgFor],
  standalone:true,
  templateUrl: './benifits.component.html',
  styleUrl: './benifits.component.css'
})
export class BenifitsComponent {
  benefits = [
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
  ];
}
