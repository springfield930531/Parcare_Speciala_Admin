import { Component, OnInit, ViewChild } from '@angular/core';
import { navItems } from '../../../_nav_parcare';
import { ApiService } from '../../../api/api.service';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-storage-prices',
  templateUrl: './storage-prices.component.html',
  styleUrls: ['./storage-prices.component.scss']
})
export class StoragePricesComponent implements OnInit {

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
  // form
  public transportTypeID = null;
  public price1 = 0;
  public price2 = 0;
  public price3 = 0;

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
      const res = await this.apiService.getStoragePriceFn().toPromise();
      this.tableData = res.data;
      const t = await this.apiService.getTransportTypeFn().toPromise();
      this.transportTypes = t.data;

      // console.log(this.tableData);
      this.isLoading = false;
    }
    catch(e) {
      console.log(e);
      this.errorMessage = e.error.error || "A intervenit o eroare";
      this.isLoading = false;
    }
  }

  // transport type filter
  public getTransportNameByID(typeId) {
    return this.transportTypes.filter(type => typeId === type.ID)[0].type;
  } 

  // Adds a storage price via API and refreshes the list/UI state
  public async addEntity() {
    this.activateLoader = true;
    this.errorMessage = null;
    console.log(this);

    try {
      const res = await this.apiService.addStoragePriceFn(this.transportTypeID, this.price1, this.price2, this.price3).toPromise();
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
      const res = await this.apiService.deleteStoragePriceFn(this.toDeleteEntity.ID).toPromise();
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
    this.transportTypeID = null;
    this.price1 = 0;
    this.price2 = 0;
    this.price3 = 0;
  }

}
