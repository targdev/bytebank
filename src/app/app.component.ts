import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ByteBank';
  transferred: any[] = [];

  transfer($event: any) {
    const transferred = {...$event, date: new Date}
    this.transferred.push(transferred);
  }
}
