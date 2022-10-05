import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';

@Component({
  selector: 'app-all-offers',
  templateUrl: './all-offers.component.html',
  styleUrls: ['./all-offers.component.scss']
})
export class AllOffersComponent implements OnInit {
  offers : any[] = []
  constructor(private service : MyServiceService) { }

  ngOnInit(): void {
    this.service.getOffers().subscribe(offers => {
      this.offers = offers;
      console.log("found : " + offers.length+" offers")
    })
  }

}
