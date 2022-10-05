import { Component, OnInit } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import { DomSanitizer } from '@angular/platform-browser';
import { MyServiceService } from './my-service.service';
import { AllMoviesComponent } from './web-cmps/all-movies/all-movies.component';
import { CustomComponentComponent } from './web-cmps/custom-component/custom-component.component';
import { FilterMoviesComponent } from './web-cmps/filter-movies/filter-movies.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'shortcodes';
  tag :any = "";
  constructor(private service : MyServiceService, private sanitized: DomSanitizer){}

  ngOnInit(): void {
    this.service.getBlog().subscribe(data=>{
      //data = data.replace("[[sc", "<div").replace("]]",">").replace("[[\/sc","</div").replace("]]",">");
      data = data.split("[[sc").join("<div");
      data = data.split("]]").join(">");
      data = data.split("[[\/sc").join("</div");

      console.log(data)
      this.tag = this.sanitized.bypassSecurityTrustHtml(data);
      setTimeout(()=>{
        //get all offers
        let allOfferElements = document.getElementsByClassName('all-offers')
        if(allOfferElements.length > 0) {
          for(let i=0; i<allOfferElements.length; i++) {
            let element = allOfferElements[i];
            let cElement : NgElement & WithProperties<CustomComponentComponent> = document.createElement('all-offers') as any;
            element.append(cElement);
          }
        }

        //get Filtered offers
        let filteredOffer = document.getElementsByClassName('custom-component')
        if(filteredOffer.length > 0) {
          for(let i=0; i<filteredOffer.length; i++) {
            let element = filteredOffer[i];
            let cElement : NgElement & WithProperties<CustomComponentComponent> = document.createElement('custom-element') as any;
            let attr = element.attributes.getNamedItem('store');
            if(attr) {
              cElement.store = attr.nodeValue
            }
            
            element.append(cElement);
          }          
        }

        //get all movies
        let allMovies = document.getElementsByClassName('all-movies')
        if(allMovies.length > 0) {
          for(let i=0; i<allMovies.length; i++) {
            let element = allMovies[i];
            let cElement : NgElement & WithProperties<AllMoviesComponent> = document.createElement('all-movies') as any;            
            element.append(cElement);
          }          
        }

      //get all movies
      let filterMovies = document.getElementsByClassName('filter-movies')
      if(filterMovies.length > 0) {
        for(let i=0; i<filterMovies.length; i++) {
          let element = filterMovies[i];
          let cElement : NgElement & WithProperties<FilterMoviesComponent> = document.createElement('filter-movies') as any;       
          let attr = element.attributes.getNamedItem('genere');
          if(attr) {
            cElement.genre = attr.nodeValue
          }
          element.append(cElement);
        }          
      }
      
    }, 2000)
    })
  }

}
