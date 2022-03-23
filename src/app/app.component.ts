import { Component } from '@angular/core';
import { TransferList } from './services/transferList.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ByteBank';

  constructor(private TransferList: TransferList) { }
}
