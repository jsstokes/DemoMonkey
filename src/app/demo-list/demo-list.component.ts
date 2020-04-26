import { Component, OnInit } from '@angular/core';
import { DataServiceService } from "../data-service.service";

@Component({
  selector: 'app-demo-list',
  templateUrl: './demo-list.component.html',
  styleUrls: ['./demo-list.component.css']
})
export class DemoListComponent implements OnInit {

  demoList;

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.demoList = this.dataService.getDemoList();
  }

  clicked(i) {
    console.log("Clicked item was:", i);
    this.dataService.setSelectedDemo(this.demoList[i]);
  }

}
