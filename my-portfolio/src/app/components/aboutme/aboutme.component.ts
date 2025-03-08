import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',  // Ensure this is the correct selector
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  name: string = 'Your Name';
  bio: string = 'I am a passionate developer who enjoys working on web applications and constantly learning new technologies.';
  skills: string[] = ['JavaScript', 'TypeScript', 'Angular', 'NodeJS', 'Python', 'HTML/CSS'];
  socialLinks = {
    github: 'https://github.com/yourprofile',
    linkedin: 'https://linkedin.com/in/yourprofile'
  };

  constructor() {}

  ngOnInit(): void {}
}
