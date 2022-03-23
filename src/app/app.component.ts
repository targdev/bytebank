import { Component } from '@angular/core';
import { TransferList } from './services/transferList.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ByteBank';

  constructor(private service: TransferList) { }

  transfer($event: any) {
    this.service.addTransfer($event);
  }
}
