import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { SongService } from './song.service';
import { ModalService } from '@shared/services/modal.service';
import { Song } from '@core/models/song.model';
import { Tag } from '@core/models/tag.model';
import { SeoService } from '@shared/services/seo.service';

@Component({
  selector: 'Song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.components.scss'],
})
export class SongComponent implements OnInit {
  openMP = false;
  openReport = false;

  subs = new Subscription();
  song!: Song;
  tags: Tag[] = [];
  loading = true;
  carouselTerm = '';

  constructor(
    private route: ActivatedRoute,
    private songServ: SongService,
    private modalServ: ModalService,
    private seo: SeoService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      if (id) {
        this.getSong(id);
      }
    });
  }

  closePaypalModal(close: boolean) {
    this.openMP = !close;
  }

  closeReportModal(close: boolean) {
    this.openReport = !close;
  }

  openModalPaypal(song: Song, tag: Tag) {
    this.openMP = !this.openMP;
    this.modalServ.sendSongAndTagToModal(song, tag);
  }

  getSong(id: string) {
    this.songServ
      .getSong(id)
      .pipe(
        map(({ song, tags }) => {
          this.song = song;
          this.carouselTerm = song.name;
          this.tags = tags;
          this.seo.generateTags({
            title: song.name,
            slug: `songs/${id}`,
            description: song.description,
            image: song.link_youtube ?? song.cover.url,
          });
        })
      )
      .subscribe((resp) => (this.loading = false));
  }
}
