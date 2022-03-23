import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

    constructor(private TransferList: TransferList, private routingPages: Router) {}

    transfer() {
        const issueValues: Transfers = {values: this.values, destinations: this.destinations};
        console.log("solicited transfer");

        this.TransferList.addTransfer(issueValues).subscribe(result => {
          this.routingPages.navigateByUrl('extract');
        },
        error => console.error(error));
    }
 }
