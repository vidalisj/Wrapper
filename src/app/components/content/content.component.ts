import { Component, OnInit, Input, Pipe, PipeTransform } from '@angular/core';
import { AppConfig } from '../../app.config';

import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  base = AppConfig.settings.base;
  insightHTML:SafeHtml;
  @Input() page:any;
  
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    console.log('here');
    console.log(this.page);
  }
  ngOnChanges()
  {

    if(this.page.type == "multi")
    {
      this.insightHTML = this.sanitizer.bypassSecurityTrustResourceUrl(this.base + "insight?type=multi&engine=" + this.page.databaseID + "&id="+this.page.insightID);
      console.log(this.insightHTML);
      
    }
    this.ngOnInit();
  }

}
