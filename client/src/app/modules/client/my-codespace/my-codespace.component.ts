import { Component, OnDestroy, OnInit } from '@angular/core'
import { ProfileService } from '../profile/profile.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'MyCodespace',
  templateUrl: './my-codespace.component.html',
  styleUrls: ['./my-codespace.component.scss']
})
export class MyCodespaceComponent implements OnInit, OnDestroy {
  profileUrl = ''
  client: any = {}
  subs = new Subscription()
  constructor(private profileServ: ProfileService) {}

  ngOnInit(): void {
    this.getClient()
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }

  getClient() {
    this.subs.add(
      this.profileServ.getClient().subscribe(({ profile, ...data }) => {
        this.client = data
        this.profileUrl = profile.url
        console.log(data)
      })
    )
  }
}
