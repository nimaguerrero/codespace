import { Component, OnInit } from '@angular/core';
import { SeoService } from '@shared/services/seo.service';

@Component({
  selector: 'Dmca-policy',
  templateUrl: './dmca-policy.component.html',
  styleUrls: ['./dmca-policy.component.scss'],
})
export class DmcaPolicyComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.generateTags(this.seo.mrstems.dmca);
  }
}
