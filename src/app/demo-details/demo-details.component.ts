import { Component, OnInit } from '@angular/core';
import { DataServiceService } from "../data-service.service";
import { ClipboardService } from "../clipboard.service";

@Component({
  selector: 'app-demo-details',
  templateUrl: './demo-details.component.html',
  styleUrls: ['./demo-details.component.css']
})
export class DemoDetailsComponent implements OnInit {

  selectedDemo;

  constructor(private dataService:DataServiceService, private clipboard:ClipboardService) { }

  ngOnInit() {
    this.selectedDemo = this.dataService.getDemoList()[0];
  }


  copyToClipboard(text) {
    console.log("CopyToClipboard:", text);
    this.clipboard.copyMessage(text);
  }

  checkClick(event,id) {
    console.log("Check Clicked:", id);
  }

}

