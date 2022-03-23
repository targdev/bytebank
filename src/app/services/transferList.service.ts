import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Transfers } from "../models/transfers.model";

@Injectable({
    providedIn: 'root'
})

export class TransferList {
    private transferList: any[];
    private urlListTransfers = 'http://localhost:3000/transfers';

    constructor(private httpClient: HttpClient) {
        this.transferList = []
    }

    get transfers() {
        return this.transferList;
    }

    allTransfers(): Observable<Transfers[]> {
        return this.httpClient.get<Transfers[]>(this.urlListTransfers);
    }

    addTransfer(transferring: Transfers): Observable<Transfers> {
        this.ImplementsDate(transferring);

        return this.httpClient.post<Transfers>(this.urlListTransfers, transferring);
    }

    private ImplementsDate(transferData: any) {
        transferData.date = new Date();
    }
}