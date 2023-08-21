import { NgModule, Component, enableProdMode } from "@angular/core";
import {
  BrowserModule,
  BrowserTransferStateModule
} from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { DxDataGridModule, DxSelectBoxModule } from "devextreme-angular";

import { Customer, Service } from "./app.service";

@Component({
  selector: "demo-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [Service],
  preserveWhitespaces: true
})
export class AppComponent {
  customers: Customer[];

  resizingModes: string[] = ["nextColumn", "widget"];
  columnResizingMode = "widget";

  constructor(service: Service) {
    this.customers = service.getCustomers();
    // this.columnResizingMode = this.resizingModes[1];
  }

  selectResizing(data) {
    this.columnResizingMode = data.value;
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxDataGridModule,
    DxSelectBoxModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
