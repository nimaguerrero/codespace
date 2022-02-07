import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SettingService } from '../../services/setting.service';

@Component({
  selector: 'Footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  year = 2021;
  logo = '';
  subs = new Subscription();

  constructor(private settingServ: SettingService) {
    this.year = new Date().getFullYear();
  }

  ngOnInit(): void {
    this.getLogo();
  }

  getLogo() {
    this.subs.add(
      this.settingServ.getBlackLogo().subscribe(({ url }) => (this.logo = url))
    );
  }
}
