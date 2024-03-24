import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./card/card.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, CardComponent]
})
export class AppComponent {
  title = 'pictureTabScroller';
  posts = [
    {
      title: "Neat Tree",
      imageUrl: 'assets/tree.jpeg',
      username: 'nature',
      content: 'I saw this neat tree today'
    },
    {
      title: "Snowy Mountain",
      imageUrl: 'assets/mountain.jpeg',
      username: 'mountainlover',
      content: 'Here is a picture of a snowy mountain'
    },
    {
      title: "Mountain Biking",
      imageUrl: 'assets/biking.jpeg',
      username: 'biking1222',
      content: 'I did some biking today'
    },
  ];

}
