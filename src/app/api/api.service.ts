import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
      private httpClient: HttpClient
  ){}

  private hostIP = 'http://134.209.90.166:8090';

  // TYPES ------------------------------------------------------------------------------------------------------

  public addTransportTypeFn(type: any): Observable<any> {
    return this.httpClient.post(`${this.hostIP}/admin/transportType`, {type: type})
  }

  public getTransportTypeFn(): Observable<any> {
    return this.httpClient.get(`${this.hostIP}/admin/transportType`)
  }

  public deleteTransportTypeFn(id: any): Observable<any> {
    return this.httpClient.delete(`${this.hostIP}/admin/transportType/${id}`)
  }

  // PLACES ------------------------------------------------------------------------------------------------------

  public addPlaceFn(Name: any): Observable<any> {
    return this.httpClient.post(`${this.hostIP}/admin/place`, {Name: Name})
  }

  public getPlaceFn(): Observable<any> {
    return this.httpClient.get(`${this.hostIP}/admin/place`)
  }

  public deletePlaceFn(id: any): Observable<any> {
    return this.httpClient.delete(`${this.hostIP}/admin/place/${id}`)
  }

  // PRICES ------------------------------------------------------------------------------------------------------

  public addPriceFn(Price: any, transport_type_id: any, place_id: any): Observable<any> {
    return this.httpClient.post(`${this.hostIP}/admin/price`, {Price: parseInt(Price), transport_type_id: parseInt(transport_type_id), place_id: parseInt(place_id)})
  }

  public getPriceFn(): Observable<any> {
    return this.httpClient.get(`${this.hostIP}/admin/price`)
  }

  public deletePriceFn(id: any): Observable<any> {
    return this.httpClient.delete(`${this.hostIP}/admin/price/${id}`)
  }

  // STORAGE PRICES -----------------------------------------------------------------------------------------------

  public addStoragePriceFn(transport_type_id: any, period_1: any, period_2: any, period_3: any): Observable<any> {
    return this.httpClient.post(`${this.hostIP}/admin/storage`, {transport_type_id: parseInt(transport_type_id), period_1: parseInt(period_1), period_2: parseInt(period_2), period_3: parseInt(period_3)})
  }

  public getStoragePriceFn(): Observable<any> {
    return this.httpClient.get(`${this.hostIP}/admin/storage`)
  }

  public deleteStoragePriceFn(id: any): Observable<any> {
    return this.httpClient.delete(`${this.hostIP}/admin/storage/${id}`)
  }

  // CARS ---------------------------------------------------------------------------------------------------------

  public addCarFn(date_time: any, reason: any, loading_authority: any, type: any, transport_type_id: any, no_registration: any, loading_point: any, place_id: any, unloading_point: any): Observable<any> {
    return this.httpClient.post(`${this.hostIP}/admin/car`, {date_time: date_time, reason: reason, loading_authority: loading_authority, type: type, transport_type_id: parseInt(transport_type_id), no_registration: no_registration, loading_point: loading_point, place_id: parseInt(place_id), unloading_point: unloading_point})
  }

  public getCarFn(): Observable<any> {
    return this.httpClient.get(`${this.hostIP}/admin/car`)
  }

  public deleteCarFn(id: any): Observable<any> {
    return this.httpClient.delete(`${this.hostIP}/admin/car/${id}`)
  }

  public excludeCarFn(id: any): Observable<any> {
    return this.httpClient.get(`${this.hostIP}/admin/car/${id}`)
  }
// Excell Report ------------------------------------------------------------------------------------------------
  public getCarReport(durationObj) {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('parcareUserToken')
    });
    return this.httpClient.post(`${this.hostIP}`, durationObj, { headers: reqHeader })
  }
  
  // RegistrationNo ------------------------------------------------------------------------------------------------

  public findRegistrationNoFn(number: any): Observable<any> {
    return this.httpClient.get(`${this.hostIP}/admin/car/find?RegistrationNo=${number}`)
  }

  // LOGIN + USERS ----------------------------------------------------------------------------------------------
  public loginFn(Username: any, Password: any): Observable<any> {
    return this.httpClient.post(`${this.hostIP}/login`, {Username: Username, Password: Password})
  }

  public addUserFn(Name: any, Email: any, Password: any): Observable<any> {
    return this.httpClient.post(`${this.hostIP}/admin/users`, {Name: Name, Password: Password, Email: Email})
  }

  public updateUserFn(UserID: any, Name: any, Email: any, Password: any): Observable<any> {
    return this.httpClient.put(`${this.hostIP}/admin/users/${UserID}`, {Name: Name, Password: Password, Email: Email})
  }

  public getUsersFn(): Observable<any> {
    return this.httpClient.get(`${this.hostIP}/admin/users`)
  }

  public getUserByIdFn(UserID: any): Observable<any> {
    return this.httpClient.get(`${this.hostIP}/admin/users/${UserID}`)
  }

  public deleteUserByIdFn(UserID: any): Observable<any> {
    return this.httpClient.delete(`${this.hostIP}/admin/users/${UserID}`)
  }
  // END LOGIN + USERS -------------------------------------------------------------------------------------------

}
