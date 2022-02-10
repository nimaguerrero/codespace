import { Component, OnInit } from '@angular/core'
import { SeoService } from '@shared/services/seo.service'

@Component({
  selector: 'Legal-information',
  templateUrl: './legal-information.component.html',
  styleUrls: ['./legal-information.component.scss']
})
export class LegalInformationComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.generateTags(this.seo.codespace.legal)
  }
}
