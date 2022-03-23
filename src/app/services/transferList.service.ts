import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Transfers } from "../models/transfers.model";

@Injectable({
    providedIn: 'root'
})

export class TransferList {
    private transferList: any[];
    private url = 'http://localhost:3000/transfers';

    constructor(private httpClient: HttpClient) {
        this.transferList = []
    }

    get transfers() {
        return this.transferList;
    }

    allTransfers(): Observable<Transfers[]> {
        return this.httpClient.get<Transfers[]>(this.url);
    }

    addTransfer(transferring: any) {
        this.ImplementsDate(transferring);

        this.transferList.push(transferring);
    }

    private ImplementsDate(transferData: any) {
        transferData.date = new Date();
    }
}