import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './pages/demo/demo.component';
import { GenresComponent } from './pages/genres/genres.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieComponent } from './pages/movie/movie.component';
import { MoviesComponent } from './pages/movies/movies.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'movie/:id',
    component: MovieComponent
  },
  {
    path: 'movies/genres/:genreId',
    component: MoviesComponent
  },
  {
    path: 'genres',
    component: GenresComponent
  },
  {
    path: 'demo',
    component: DemoComponent
  },

  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
