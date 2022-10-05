import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.scss']
})
export class AllMoviesComponent implements OnInit {

  movies : any[] = []
  constructor(private service : MyServiceService) { }

  ngOnInit(): void {
    this.service.getMovies().subscribe(m=>{
      this.movies = m;
    })
  }

}
