
import { Component, OnInit, ViewChild } from '@angular/core';
import { navItems } from '../../_nav_parcare';
import { ApiService } from '../../api/api.service';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-parcaredash',
  templateUrl: './parcaredash.component.html',
  styleUrls: ['./parcaredash.component.scss']
})
export class ParcaredashComponent implements OnInit {

  @ViewChild('dangerModal') public dangerModal: ModalDirective;
  @ViewChild('searchModal') public searchModal: ModalDirective;
  @ViewChild('infoModal') public infoModal: ModalDirective;

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

  // params
  public toExclude = false;
  public toExcludeEntity = null;
  public modalRegistrationNr = "";
  public unloading_reason = "";
  public sale_price = "";

  // lists
  public transportTypes = [];
  public places = [];
  // form
  public date_time = new Date();
  public reason = "";
  public loading_authority = "";
  public type = "";
  public registrationNr = "";
  public loadingPoint = "";
  public unloadingPoint = "";

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
      const res = await this.apiService.getCarFn().toPromise();
      if (res.data && res.data.length > 0) res.data.map(r => this.adjustDate(r));
      this.tableData = res.data;
      const t = await this.apiService.getTransportTypeFn().toPromise();
      this.transportTypes = t.data;
      const p = await this.apiService.getPlaceFn().toPromise();
      this.places = p.data;

      // console.log(this.tableData);
      this.isLoading = false;
    }
    catch (e) {
      console.log(e);
      this.errorMessage = e.error.error || "A intervenit o eroare";
      this.isLoading = false;
    }
  }

  // adjusting the date format
  public adjustDate(entity: any) {
    if (entity.CreatedAt) entity.CreatedAt = new Date(entity.CreatedAt).toLocaleString();
    if (entity.date_time) entity.date_time = new Date(entity.date_time).toLocaleString();
    if (entity.UpdatedAt) entity.UpdatedAt = new Date(entity.UpdatedAt).toLocaleString();
    if (entity.DeletedAt) entity.DeletedAt = new Date(entity.DeletedAt).toLocaleString();
  }

  // Adds a new entry via API, refreshes the list, and resets the form state
  public async addEntity() {
    this.activateLoader = true;
    this.errorMessage = null;

    try {
      const res = await this.apiService.addCarFn(this.date_time, this.reason, this.loading_authority, this.type, this.transportTypeID, this.registrationNr, this.loadingPoint, this.placeID, this.unloadingPoint).toPromise();
      if (res && res.ID) {
        this.onReset();
        this.showList = true;
        this.getTableData();
      }
      this.activateLoader = false;
    }
    catch (e) {
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
      const res = await this.apiService.deleteCarFn(this.toDeleteEntity.ID).toPromise();
      if (res) {
        this.toDeleteEntity = null;
        this.getTableData();
      }
      this.activateLoader = false;
    }
    catch (e) {
      console.log(e);
      this.errorMessage = e.error.error || "A intervenit o eroare";
      this.activateLoader = false;
    }
  }

  // trigger for search modal
  public onSearchNumber(toExclude) {
    this.modalRegistrationNr = "";
    this.toExclude = false;
    this.toExcludeEntity = null;
    this.searchModal.show();

    if (toExclude) this.toExclude = true;
  }

  // searching based on registration number
  public async triggerSearch(entity) {
    this.searchModal.hide();
    this.toExcludeEntity = null;
    this.sale_price = null;

    if (entity) { // from the list
      this.toExclude = true;
      this.toExcludeEntity = entity;
      this.infoModal.show();
    }
    else { // searching by number
      this.activateLoader = true;
      this.errorMessage = null;

      try {
        const res = await this.apiService.findRegistrationNoFn(this.modalRegistrationNr).toPromise();
        if (res) {
          this.adjustDate(res.data);
          this.toExcludeEntity = res.data;
          this.infoModal.show();
          if (this.toExcludeEntity.price_sale !== undefined && this.toExcludeEntity.price_sale !== null) {
            this.sale_price = this.toExcludeEntity.price_sale
          }
          if (this.toExcludeEntity.unloading_reason !== undefined && this.toExcludeEntity.unloading_reason !== null) {
            this.unloading_reason = this.toExcludeEntity.unloading_reason;
          }
        }
        this.activateLoader = false;
      }
      catch (e) {
        console.log(e);
        this.errorMessage = e.error.error || "A intervenit o eroare";
        this.activateLoader = false;
      }
    }
  }

  // exclude car
  public async onExclude() {
    this.infoModal.hide();
    this.activateLoader = true;
    this.errorMessage = null;
    console.log("Sale Price : ", this.sale_price);
    console.log("Unloading Reason : ", this.unloading_reason)

    try {
      const entityId = this.toExcludeEntity ? this.toExcludeEntity.ID : null;
      if (!entityId) {
        throw new Error('Entity ID missing for exclusion');
      }
      const res = await this.apiService.excludeCarFn(entityId).toPromise();
      if (res) {
        this.toExcludeEntity = null;
        this.getTableData();
      }
      this.activateLoader = false;
      // Saving Unloading Reason ;
      this.apiService.postUnloadingReason(entityId, this.unloading_reason).subscribe(
        (res) => {
          console.log("Reason Save Successfully !")
        }
      )
    }
    catch (e) {
      console.log(e);
      this.errorMessage = e.error.error || "A intervenit o eroare";
      this.activateLoader = false;
    }
  }

  saveSalesPrice() {
    // Saving Sale Price ;
    this.apiService.postSalePrice(this.toExcludeEntity.ID, this.sale_price).subscribe(
      (res) => {
        alert("Sale Price Saved Successfully Save Successfully !");
        console.log("Sale Price Saved Successfully Save Successfully !")
      }, (err) => {

      }, () => {
        this.modalRegistrationNr = this.toExcludeEntity.no_registration;
        this.triggerSearch(null);
      }
    )
  }

  public dateRangeChange(event, tag?) {
    console.log("Change Detected")
  }

  // reset the form
  public onReset() {
    this.date_time = new Date();
    this.transportTypeID = null;
    this.placeID = null;
    this.reason = "";
    this.loading_authority = "";
    this.type = "";
    this.registrationNr = "";
    this.loadingPoint = "";
    this.unloadingPoint = "";

  }

}