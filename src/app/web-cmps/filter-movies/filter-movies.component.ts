import { Component, Input, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';

@Component({
  selector: 'app-filter-movies',
  templateUrl: './filter-movies.component.html',
  styleUrls: ['./filter-movies.component.scss']
})
export class FilterMoviesComponent implements OnInit {

  private _genre!: string | null;

  @Input()
  get genre() {
    return this._genre;
  } 
  constructor(private service : MyServiceService) { }

  set genre(_genre : string | null) {
    this._genre = _genre;
  }

  movies : any[] = []

  ngOnInit(): void {
    if(this._genre) {
      this.service.getMovie(this._genre).subscribe(m=>{
        this.movies = m;
      })
    }
  }

}
