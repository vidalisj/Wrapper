import { Component } from '@angular/core';
import { faBars, faAngleRight, faChartLine, faHome } from '@fortawesome/free-solid-svg-icons';
import { AppConfig } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = AppConfig.settings.title;
  pages = AppConfig.settings.pages;
  icons = {
    "faBars":faBars,
    "faAngleRight": faAngleRight,
    "faChartLine": faChartLine,
    "faHome": faHome
  }

  
  selectedPage: string;
  selectedSubpage: string;
  sidebarOpen: boolean;

  constructor()
  {
    //Select first page as string page
    this.selectPage(this.pages[0].title,null );
    this.sidebarOpen = true;
    console.log(this.pages);
  }

  selectPage(page:string, subpage:string)
  {
    this.selectedPage = page;
    this.selectedSubpage = subpage;
  }

  printPage(){
    console.log(this.pages);
    console.log("Page: "+ this.selectedPage);
    console.log("Subpage: "+ this.selectedSubpage);
    console.log("SidebarOpen: " + this.sidebarOpen);
  }

  getSelectedPage() {
    console.log("In Selected Grap");
    for(var pageIndex in this.pages)
    {
      var page = this.pages[pageIndex];
      if(page['title'] == this.selectedPage && this.selectedSubpage == null) { 
        console.log("Found Page" + page);
        return page; 
      }
      for(var subpageIndex in page['subpages'])
      { 
        var subpage = page['subpages'][subpageIndex];
        if(page['title'] == this.selectedPage && subpage['title'] == this.selectedSubpage) { 
          console.log("Found Subpage" + subpage);
          return subpage; 
        }
      }
    }
  }

  isSelectedPage(page:string, subpage:string)
  {
    return this.selectedPage === page && this.selectedSubpage === subpage;
  }

}
