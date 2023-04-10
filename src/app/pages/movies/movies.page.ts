import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { MovieResult, MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sandbox',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  movies: Array<MovieResult> = [];
  currentPage = 1;
  imageBaseUrl = environment.images;
  hasMoreMovies = true;
  constructor(private movieService: MovieService, private loadingCtrl: LoadingController) {}

  ngOnInit() {
    this.loadMovies();
  }

  async loadMovies(event? : InfiniteScrollCustomEvent​) {
    const loading = await this.loadingCtrl.create({
      message: 'Loading movies...',
      spinner: 'bubbles',
    });
    await loading.present();

    this.movieService.getTopRatedMovies(this.currentPage).subscribe((res) => {
      loading.dismiss();
      // this.movies = [...this.movies, ...res.results];
      this.movies.push(...res.results)
      console.log(res);
      this.hasMoreMovies = this.currentPage < res.total_pages;

      if (event) {
        event.target.disabled = !this.hasMoreMovies;
      }
    });


    event?.target.complete();
  }

  loadMore(event : InfiniteScrollCustomEvent) {
    this.currentPage++;
    this.loadMovies(event);
  }
}
