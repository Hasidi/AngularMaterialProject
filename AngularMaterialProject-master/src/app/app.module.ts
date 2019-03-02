import '../polyfills';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DemoMaterialModule} from './material-module/material-module.module';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FirstComponentComponent } from './first-component/first-component.component';
import { RegularTableComponent } from './regular-table/regular-table.component';
import { CustomTableComponent } from './custom-table/custom-table.component';
import { CustomDialogComponent } from './custom-dialog/custom-dialog.component';
import { RestServiceService } from './rest-service.service';
import { CdkVirtualScrollDataSourceExampleComponent } from './cdk-virtual-scroll-data-source-example/cdk-virtual-scroll-data-source-example.component';

// const appRoutes: Routes = [
//   { path: 'first-page', component: FirstComponentComponent },
//   { path: 'second-page', component: SecondComponentComponent},
//   { path: 'third-page', component: RegularTableComponent}
// ];

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    FirstComponentComponent,
    RegularTableComponent,
    CustomTableComponent,
    CustomDialogComponent,
    CdkVirtualScrollDataSourceExampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    ReactiveFormsModule,
    FormsModule,
    // RouterModule.forRoot(appRoutes),
    DemoMaterialModule,
    HttpClientModule,
  ],
  exports: [
  ],
  providers: [RestServiceService],
  bootstrap: [AppComponent],
  entryComponents: [CustomDialogComponent]
})
export class AppModule { }
