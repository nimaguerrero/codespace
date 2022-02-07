import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongsComponent } from './pages/songs/songs.component';
import { SongComponent } from './pages/song/song.component';

const routes: Routes = [
  {
    path: '',
    component: SongsComponent,
  },
  {
    path: 'songs/:id',
    component: SongComponent,
  },
  {
    path: 'songs/tag/:term',
    component: SongsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
