import { Injectable } from '@angular/core';
import { TestData } from "./data/test-data";

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  demoList = TestData;

  constructor() { }

  getDemoList() {
    return this.demoList;
  }
}
