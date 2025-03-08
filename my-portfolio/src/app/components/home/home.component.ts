import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentTime: string = '';
  greeting: string = '';
  
  ngOnInit() {
    this.updateTime();
    setInterval(() => {
      this.updateTime();
    }, 1000); // Update time every second
  }

  updateTime() {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  
    const hours = now.getHours();
    if (hours >= 5 && hours < 12) {
      this.greeting = 'Good Morning';
    } else if (hours >= 12 && hours < 18) {
      this.greeting = 'Good Afternoon';
    } else {
      this.greeting = 'Good Evening';
    }
  }  
  
  learningTopics = [
    { name: 'API Tester', icon: '/assets/api-icon.png' },
    { name: 'Python', icon: '/assets/python-icon.png' },
    { name: 'C++', icon: '/assets/cpp-icon.png' },
    { name: 'TypeScript', icon: '/assets/typescript-icon.png' },
    { name: 'PHP', icon: '/assets/php-icon.png' },
    { name: 'NodeJS', icon: '/assets/nodejs-icon.png' },
    { name: 'Create Website', icon: '/assets/web-icon.png' }
  ];

}
