import { Component } from '@angular/core';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class NewTransferComponent {
    values!: number;
    destinations!: number;

    transfer() {
        console.log("solicited transfer");
        console.log("Valor:", this.values);
        console.log("Destino:", this.destinations);
    }
 }
