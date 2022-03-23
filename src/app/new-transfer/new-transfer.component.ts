import { Component, EventEmitter, Output } from '@angular/core';
import { Transfers } from '../models/transfers.model';
import { TransferList } from '../services/transferList.service';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class NewTransferComponent {
    values!: number;
    destinations!: number;

    constructor(private TransferList: TransferList) {}

    @Output() transferring = new EventEmitter<any>();

    transfer() {
        const issueValues: Transfers = {values: this.values, destinations: this.destinations};
        console.log("solicited transfer");

        this.TransferList.addTransfer(issueValues).subscribe(result => {
          console.log(result);
          this.clearFields();
        },
        error => console.error(error));

        this.clearFields();
    }

    clearFields(){
      this.values = 0;
      this.destinations = 0;
    }
 }
