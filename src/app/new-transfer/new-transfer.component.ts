import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class NewTransferComponent {
    values!: number;
    destinations!: number;

    @Output() transferring = new EventEmitter<any>();

    transfer() {
        const issueValues = {values: this.values, destinations: this.destinations};
        console.log("solicited transfer");

        this.transferring.emit(issueValues);

        this.clearFields();
    }

    clearFields(){
      this.values = 0;
      this.destinations = 0;
    }
 }
