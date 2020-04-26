import { Component, OnInit } from '@angular/core';
import { DataServiceService } from "../data-service.service";
import { ClipboardService } from "../clipboard.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-demo-details',
  templateUrl: './demo-details.component.html',
  styleUrls: ['./demo-details.component.css']
})
export class DemoDetailsComponent implements OnInit {

  selectedDemo: Observable<any>;

  constructor(private dataService:DataServiceService, private clipboard:ClipboardService) { }

  ngOnInit() {
    this.dataService.getSelectedDemo().subscribe( data => {
      this.selectedDemo = data;
    });
    console.log("Selected Demo in list init:", this.selectedDemo);
  }


  copyToClipboard(text) {
    console.log("CopyToClipboard:", text);
    this.clipboard.copyMessage(text);
  }

  checkClick(event,id) {
    console.log("Check Clicked:", id);
  }

}

