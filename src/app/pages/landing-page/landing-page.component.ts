import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  faq = [
    {
      question: 'How does Reviewer Hub protect anonymity?',
      answer:
        'Reviewer Hub uses blockchain technology to securely encrypt and store reviews, ensuring that all posts remain anonymous and tamper-proof.',
    },
    {
      question: 'Are the reviews on Reviewer Hub trustworthy?',
      answer:
        'Absolutely. Reviewer Hub encourages honest and constructive feedback, and our blockchain-based system ensures the integrity of all reviews.',
    },
    {
      question: 'Is Reviewer Hub free to use?',
      answer:
        'Yes, Reviewer Hub is completely free. Sign up today and start sharing or reading reviews!',
    },
    {
      question: 'How can I contribute to Reviewer Hub?',
      answer:
        'You can contribute by sharing your experiences through reviews, inviting others to join our community, and providing feedback to help us enhance the platform.',
    },
    {
      question: 'Can companies respond to reviews on Reviewer Hub?',
      answer:
        'To protect user anonymity, companies cannot directly respond to reviews. However, companies are encouraged to use feedback constructively to improve workplace conditions.',
    },
  ];

  activeIndex: number = 0;

  constructor() {}

  toggleAccordion(index: number) {
    if (this.activeIndex === index) {
      this.activeIndex = -1;
    } else {
      this.activeIndex = index;
    }
  }

  ngOnInit(): void {
    setTimeout(() => {
      document.getElementById('faq-accordion-0-0')?.click();
    }, 1500);
  }
}
