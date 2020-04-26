import { Injectable } from '@angular/core';
import { TestData } from "./data/test-data";
import { Observable, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  demoList = TestData;

  private selectedDemoSource:BehaviorSubject<any> = new BehaviorSubject(null);
  private selectedDemo:Observable<any> = this.selectedDemoSource.asObservable();


  getSelectedDemo(){
    return this.selectedDemo;
  }

  setSelectedDemo(newDemo) {
    console.log("Setting Selected Demo:", newDemo);
    this.selectedDemoSource.next(newDemo);
  }

  constructor() {
    this.setSelectedDemo(this.demoList[0]);

  }

  getDemoList() {
    return this.demoList;
  }
}
