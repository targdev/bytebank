import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtractComponent } from './extract/extract.component';
import { NewTransferComponent } from './new-transfer/new-transfer.component';

const routes: Routes = [
    { path: '', redirectTo: 'new-transfer', pathMatch: 'full' },
    { path: 'extract', component: ExtractComponent },
    { path: 'new-transfer', component: NewTransferComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
