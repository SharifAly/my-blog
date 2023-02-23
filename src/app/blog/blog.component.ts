import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent {
  posts = [
    {
      title: 'First Blog Post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      author: 'John Doe',
      date: 'February 23, 2023',
      location: 'New York, NY',
    },
    {
      title: 'Second Blog Post',
      content:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      author: 'Jane Smith',
      date: 'February 25, 2023',
      location: 'Los Angeles, CA',
    },
    {
      title: 'Third Blog Post',
      content:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      author: 'John Doe',
      date: 'March 1, 2023',
      location: 'Chicago, IL',
    },
  ];
}
