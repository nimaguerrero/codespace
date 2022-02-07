import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SongComponent } from './pages/song/song.component';
import { SongsComponent } from './pages/songs/songs.component';
import { SharedModule } from '@shared/shared.module';
import { ModalCardPayComponent } from './components/modal-card-pay/modal-card-pay.component';

@NgModule({
  declarations: [
    SongComponent,
    SongsComponent,
    // COMPONENTS
    ModalCardPayComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
  exports: [
    SongComponent,
    SongsComponent,
    // COMPONENTS
    ModalCardPayComponent,
  ],
})
export class HomeModule {}
