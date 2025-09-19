import { Component, OnInit, ViewChild } from '@angular/core';
import { navItems } from '../../../_nav_parcare';
import { ApiService } from '../../../api/api.service';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

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
  public userID = "";
  public userName = "";
  public userEmail = "";
  public newPassword = "";
  public loadedUser = null;

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
      const res = await this.apiService.getUsersFn().toPromise();
      this.tableData = res;
      this.tableData.map(usr => this.adjustDate(usr));
      // console.log(this.tableData);
      this.isLoading = false;
    }
    catch(e) {
      console.log(e);
      this.errorMessage = e.error.error || "A intervenit o eroare";
      this.isLoading = false;
    }
  }

  // adjusting the date format
  public adjustDate(usr: any) {
    if(usr.CreatedAt) usr.CreatedAt = new Date(usr.CreatedAt).toLocaleString();
    if(usr.UpdatedAt) usr.UpdatedAt = new Date(usr.UpdatedAt).toLocaleString();
    if(usr.DeletedAt) usr.DeletedAt = new Date(usr.DeletedAt).toLocaleString();
  }

  public async editUser(userId) {
    this.activateLoader = true;
    this.errorMessage = null;
    this.showList = false;

    try {
      const res = await this.apiService.getUserByIdFn(userId).toPromise();
      if(res) {
        this.adjustDate(res);
        this.loadedUser = res;
        this.userID = res.ID;
        this.userName = res.name;
        this.userEmail = res.email;
        this.newPassword = res.password;
      }
      this.activateLoader = false;
    }
    catch(e) {
      console.log(e);
      this.errorMessage = e.error.error || "A intervenit o eroare";
      this.activateLoader = false;
    }
  }

  // Adds a new entry via API, refreshes the list, and resets the form state
  public async addEntity() {
    this.activateLoader = true;
    this.errorMessage = null;
    let res;

    try {
      if(this.userID) { //updating
        res = await this.apiService.updateUserFn(this.userID, this.userName, this.userEmail, this.newPassword).toPromise();
      }
      else { //creating a new user
        res = await this.apiService.addUserFn(this.userName, this.userEmail, this.newPassword).toPromise();
      }
      
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
      const res = await this.apiService.deleteUserByIdFn(this.toDeleteEntity.ID).toPromise();
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
    this.userID = null;
    this.loadedUser = null;
    this.userName = "";
    this.userEmail = "";
    this.newPassword = "";
  }

}
