import { Component, OnInit, ViewChild } from '@angular/core';
import { navItems } from '../../../_nav_parcare';
import { ApiService } from '../../../api/api.service';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {

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

  // form
  public tipPlaceInput = "";

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
      const res = await this.apiService.getPlaceFn().toPromise();
      this.tableData = res.data;
      // console.log(this.tableData);
      this.isLoading = false;
    }
    catch(e) {
      console.log(e);
      this.errorMessage = e.error.error || "A intervenit o eroare";
      this.isLoading = false;
    }
  }

  // function to add entity (showing the input)
  public async addEntity() {
    this.activateLoader = true;
    this.errorMessage = null;

    try {
      const res = await this.apiService.addPlaceFn(this.tipPlaceInput).toPromise();
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
      const res = await this.apiService.deletePlaceFn(this.toDeleteEntity.ID).toPromise();
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
    this.tipPlaceInput = "";
  }

}
