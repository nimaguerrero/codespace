import { Component, OnInit } from '@angular/core'
import { SeoService } from '@shared/services/seo.service'

@Component({
  selector: 'Terms-of-use',
  templateUrl: './terms-of-use.component.html',
  styleUrls: ['./terms-of-use.component.scss']
})
export class TermsOfUseComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.generateTags(this.seo.codespace.terms)
  }
}
