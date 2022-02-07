import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Song } from '@core/models/song.model';
import { SongsService } from '../../services/songs.service';

@Component({
  selector: 'Carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit, OnDestroy {
  songs$!: Observable<Song[]>;
  @Input('term') term!: string;
  subs = new Subscription();

  constructor(private songsServ: SongsService) {}

  ngOnInit(): void {
    this.relatedSongs();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  relatedSongs() {
    this.songs$ = this.songsServ
      .getSongs(this.term, 1, 5)
      .pipe(map(({ songs }) => songs));
    this.subs.add(this.songs$.subscribe());
  }
}
