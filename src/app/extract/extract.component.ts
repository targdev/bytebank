import { Component, OnInit } from '@angular/core';
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
    this.transfers = this.service.transfers;
  }
}
