import { Component, OnInit, ViewChild } from '@angular/core';
import { navItems } from '../../_nav_parcare';
import { ApiService } from '../../api/api.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { CustomizedExcelService } from '../../api/customized-excel.service';

@Component({
  selector: 'app-parcare-reporting',
  templateUrl: './parcare-reporting.component.html',
  styleUrls: ['./parcare-reporting.component.scss']
})
export class ParcareReportingComponent implements OnInit {

  @ViewChild('dangerModal') public dangerModal: ModalDirective;
  @ViewChild('searchModal') public searchModal: ModalDirective;
  @ViewChild('infoModal') public infoModal: ModalDirective;

  constructor(
    private apiService: ApiService,
    public _CustomizedExcelService: CustomizedExcelService
  ) { }

  public sidebarMinimized = false;
  public navItems = navItems;
  public tableData = [];
  public tableDataCopy = [];
  public totalAmount = 0 ;
  public isLoading = false;
  public activateLoader = false;
  public showList = true;
  public toDeleteEntity = null;
  public errorMessage = null;

  // params
  public toExclude = false;
  public toExcludeEntity = null;
  public modalRegistrationNr = "";

  // lists
  public transportTypes = [];
  public places = [];
  // form
  public dateTime = new Date();
  public startDateTime = new Date('2021-09-09T10:00:00Z');
  public stopDateTime = new Date();
  public reason = "";
  public type = "";
  public registrationNr = "";
  public loadingPoint = "";
  public unloadingPoint = "";

  public transportTypeID = null;
  public placeID = null;

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  ngOnInit() {
    // init of data
    this.getTableData();
  }

  // getting the data
  public getTableData() {
    this.isLoading = true;
    this.errorMessage = null;

    var params = {
      "start_time": this.startDateTime,
      "stop_time": this.stopDateTime
    }
    this.apiService.getCarReport(params).subscribe(
      (res: any) => {
        if (res.data.Cars && res.data.Cars.length > 0) {
          res.data.Cars.map(r => this.adjustDate(r));
          this.tableData = res.data.Cars
          this.totalAmount = res.data.Sum
          this.tableDataCopy = this.tableData;
          console.log(this.tableData)
        }
        this.isLoading = false;
      }, (e: any) => {
        console.log(e);
        this.errorMessage = e || "A intervenit o eroare";
        this.isLoading = false;
      }
    )
  }
  // adjusting the date format
  public adjustDate(entity: any) {
    if (entity.CreatedAt) entity.CreatedAt = new Date(entity.CreatedAt).toLocaleString();
    if (entity.date_time) entity.date_time = new Date(entity.date_time).toLocaleString();
    if (entity.UpdatedAt) entity.UpdatedAt = new Date(entity.UpdatedAt).toLocaleString();
    if (entity.DeletedAt) entity.DeletedAt = new Date(entity.DeletedAt).toLocaleString();
    if (entity.exclude_date) entity.exclude_date = new Date(entity.exclude_date).toLocaleString();
  }

  public exportAsExcel() {
    const modifiedData = this.tableData.map(({
      CreatedAt, DeletedAt, ID, UpdatedAt, active, comment, transport_type_id, place_id, ...keepProperties
    }) => {
      return {
        no_registration: keepProperties.no_registration,
        type: keepProperties.type,
        date_time: keepProperties.date_time,
        loading_point: keepProperties.loading_point,
        loading_authority: keepProperties.loading_authority,
        loading_price: keepProperties.loading_price,
        price: keepProperties.price,
        parking_price: keepProperties.parking_price,
        unloading_point: keepProperties.unloading_point,
        unloading_reason: keepProperties.unloading_reason,
        price_sale: keepProperties.price_sale,
        exclude_date: keepProperties.exclude_date
      }
    }
    )
    this._CustomizedExcelService.setReportData(
      modifiedData,
      'Car_Data_Report',
      [
        "Număr"
        , "Marcă"
        , "Preluat"
        , "Punct de încărcare"
        , "Autoritatea de încărcare"
        , "Preț de încărcare"
        , "Preț"
        , "Pret Parcare"
        , "Punct de descarcare"
        , "Motivul descarcarii"
        , "Pret Vanzare"
        , "Exclude Data"
      ]
    )
  }

  public dateRangeChange(event, tag?) {
    console.log("Change Detected")
    if (tag === 'startDate') {
      this.startDateTime = event.target.value;
      this.getTableData();
    }
    else if (tag === 'stopDate') {
      this.stopDateTime = event.target.value;
      this.getTableData();
    }
  }

  filterData(flag:string){
    if(flag == 'active'){
      this.tableData = this.tableDataCopy.filter(
        (x)=> x.active == true
      )
    }
    else{
      this.tableData = this.tableDataCopy.filter(
        (x)=> x.active == false
      )
    }
  }
}
