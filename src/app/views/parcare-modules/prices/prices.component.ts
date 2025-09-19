import { Component, OnInit, ViewChild } from '@angular/core';
import { navItems } from '../../../_nav_parcare';
import { ApiService } from '../../../api/api.service';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent implements OnInit {

  @ViewChild('dangerModal') public dangerModal: ModalDirective;

  constructor(
    private apiService: ApiService
  ) { }

  public sidebarMinimized = false;
  public navItems = navItems;
  public tableData = [];
  public isLoading = false;
  public activateLoader = false;
  public showList = true;
  public toDeleteEntity = null;
  public errorMessage = null;

  // lists
  public transportTypes = [];
  public places = [];
  // form
  public priceAmount = 0;
  public transportTypeID = null;
  public placeID = null;

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  async ngOnInit() {
    // init of data
    this.getTableData();
  }

  // getting the data
  public async getTableData() {
    this.isLoading = true;
    this.errorMessage = null;

    try {
      const res = await this.apiService.getPriceFn().toPromise();
      this.tableData = res.data;
      const t = await this.apiService.getTransportTypeFn().toPromise();
      this.transportTypes = t.data;
      const p = await this.apiService.getPlaceFn().toPromise();
      this.places = p.data;

      // console.log(this.tableData);
      this.isLoading = false;
    }
    catch(e) {
      console.log(e);
      this.errorMessage = e.error.error || "A intervenit o eroare";
      this.isLoading = false;
    }
  }

  // Adds a new entry via API, refreshes the list, and resets the form state
  public async addEntity() {
    this.activateLoader = true;
    this.errorMessage = null;
    console.log(this);

    try {
      const res = await this.apiService.addPriceFn(this.priceAmount, this.transportTypeID, this.placeID).toPromise();
      if(res && res.ID) {
        this.onReset();
        this.showList = true;
        this.getTableData();
      }
      this.activateLoader = false;
    }
    catch(e) {
      console.log(e);
      this.errorMessage = e.error.error || "A intervenit o eroare";
      this.activateLoader = false;
    }
  }

  // delete entity trigger the modal
  public deleteEntity(entity) {
    this.toDeleteEntity = entity;
    this.dangerModal.show();
  }

  // delete entity confirmed
  public async deleteConfirmed() {
    this.dangerModal.hide();
    this.activateLoader = true;
    this.errorMessage = null;

    try {
      const res = await this.apiService.deletePriceFn(this.toDeleteEntity.ID).toPromise();
      if(res) {
        this.toDeleteEntity = null;
        this.getTableData();
      }
      this.activateLoader = false;
    }
    catch(e) {
      console.log(e);
      this.errorMessage = e.error.error || "A intervenit o eroare";
      this.activateLoader = false;
    }
  }

  // reset the form
  public onReset() {
    this.priceAmount = 0;
    this.transportTypeID = null;
    this.placeID = null;
  }
}
