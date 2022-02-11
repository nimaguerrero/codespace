import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FilterIcon } from './filter/filter.component'
import { HeartIcon } from './heart/heart.component'
import { HeartLikeIcon } from './heart-like/heart-like.component'
import { ShareIcon } from './share/share.component'
import { VideoIcon } from './video/video.component'
import { DownloadIcon } from './download/download.component'
import { StarIcon } from './star/star.component'
import { YoutubeIcon } from './youtube/youtube.component'
import { SearchIcon } from './search/search.component'

@NgModule({
  declarations: [
    FilterIcon,
    HeartIcon,
    HeartLikeIcon,
    ShareIcon,
    VideoIcon,
    DownloadIcon,
    StarIcon,
    YoutubeIcon,
    SearchIcon
  ],
  imports: [CommonModule],
  exports: [
    FilterIcon,
    HeartIcon,
    HeartLikeIcon,
    ShareIcon,
    VideoIcon,
    DownloadIcon,
    StarIcon,
    YoutubeIcon,
    SearchIcon
  ]
})
export class IconsModule {}
