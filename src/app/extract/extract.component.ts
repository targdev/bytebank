import { Component, OnInit } from '@angular/core';
import { Transfers } from '../models/transfers.model';
import { TransferList } from '../services/transferList.service';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss']
})
export class ExtractComponent implements OnInit {
  transfers: any[] = [];

  constructor(private service: TransferList) { }

  ngOnInit(): void {
    this.service.allTransfers().subscribe((apiTransfers: Transfers[]) => {
      console.table(apiTransfers);
      this.transfers = apiTransfers;
    })
  }
}
