import { Component, OnInit } from '@angular/core';
import { DataServiceService } from "../data-service.service";

@Component({
  selector: 'app-demo-details',
  templateUrl: './demo-details.component.html',
  styleUrls: ['./demo-details.component.css']
})
export class DemoDetailsComponent implements OnInit {

  selectedDemo;

  constructor(private dataService:DataServiceService) { }

  ngOnInit() {
    this.selectedDemo = this.dataService.getDemoList()[0];
  }

  copyToClipboard(text) {
    console.log("Burron Clicked: ", text);
  }

  checkClick(event,id) {
    console.log("Check Clicked:", id);
  }

}
