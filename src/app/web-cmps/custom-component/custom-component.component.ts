import { Component, Input, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';

@Component({
  selector: 'app-custom-component',
  templateUrl: './custom-component.component.html',
  styleUrls: ['./custom-component.component.scss']
})
export class CustomComponentComponent implements OnInit {

  private _store!: string | null;

  @Input()
  get store() {
    if(!this._store)
      return "";
    else
    return this._store
  } 
  constructor(private service : MyServiceService) { }

  set store(_store : string | null) {
    this._store = _store;
  }
  offers : any[] = [];
  
  ngOnInit(): void {
    if(this.store) {
      this.service.getOffer(this.store).subscribe(o=>{
        this.offers = o;
      })
    }
    
  }

}
