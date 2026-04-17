import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('quickcart');

  ngOnInit(): void {
    // window.dispatchEvent(new CustomEvent('dummy-one', { detail: {path: 'test'} }));

    // window.addEventListener('dummy-one', (event: Event) => {
    //   const customEvent = event as CustomEvent<{ path: string; }>;
    //   const path = customEvent.detail.path;
    //   console.log('dummy-one', path);
    // });
  }
}
