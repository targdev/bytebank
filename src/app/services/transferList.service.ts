import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class TransferList {
    private transferList: any[];

    constructor() {
        this.transferList = []
    }

    get transfers() {
        return this.transferList;
    }

    addTransfer(transferring: any) {
        this.ImplementsDate(transferring);

        this.transferList.push(transferring);
    }

    private ImplementsDate(transferData: any) {
        transferData.date = new Date();
    }
}