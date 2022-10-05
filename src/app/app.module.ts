import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomComponentComponent } from './web-cmps/custom-component/custom-component.component';
import { AllOffersComponent } from './web-cmps/all-offers/all-offers.component';
import { AllMoviesComponent } from './web-cmps/all-movies/all-movies.component';
import { FilterMoviesComponent } from './web-cmps/filter-movies/filter-movies.component';
import { MovieComponent } from './web-cmps/movie/movie.component';
import { OfferComponent } from './web-cmps/offer/offer.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomComponentComponent,
    AllOffersComponent,
    AllMoviesComponent,
    FilterMoviesComponent,
    MovieComponent,
    OfferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private injector : Injector){
    let components = [
      {
        tag: 'custom-element',
        component : CustomComponentComponent
      },

      {
        tag: 'all-offers',
        component : AllOffersComponent
      },

      {
        tag: 'all-movies',
        component : AllMoviesComponent
      },

      {
        tag: 'filter-movies',
        component : FilterMoviesComponent
      }
    ]
    components.forEach(c => {
      let el = createCustomElement(c.component, {injector});
      customElements.define(c.tag, el)
    })
    
  }
}
