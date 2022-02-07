import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from '@env/environment';
@Injectable({
  providedIn: 'root',
})
export class SeoService {
  mrstems = {
    songs: {
      title: 'MrStems',
      description:
        'MrStems | Acapellas, Instrumentales, Multitrack y Stems de la musica que te gusta. Encontraras todas las vocales, acapella, instrumentales, leads, multitracks, stems de todo tipo de musica tendencias',
      image: '',
      slug: '',
    },
    dmca: {
      title: 'Politica DMCA',
      description: 'MrStems - Política DMCA',
      slug: 'dmca-policy',
      image: environment.logo,
    },
    legal: {
      title: 'Informacion legal',
      description: 'MrStems - Información legal',
      slug: 'legal-information',
      image: environment.logo,
    },
    terms: {
      title: 'Terminos de uso',
      description: 'MrStems - Terminos de uso',
      slug: 'terms-of-use',
      image: environment.logo,
    },
  };

  constructor(private meta: Meta, private title: Title) {}

  generateTags(config: any, url?: string) {
    config.twitter = '@mrstems';
    if (url) config.image = url;

    this.setTitle(config.title);

    // sumary_large_image?? porque es sumary
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: config.twitter });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({
      name: 'twitter:description',
      content: config.description,
    });
    this.meta.updateTag({ name: 'twitter:image', content: config.image });
    // es article
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({ property: 'og:site_name', content: 'MrStems' });
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({
      property: 'og:description',
      content: config.description,
    });
    this.meta.updateTag({ property: 'og:image', content: config.image });
    this.meta.updateTag({
      property: 'og:url',
      content: `https://mrstems.com/${config.slug}`,
    });
  }

  transformTitle(term: string) {
    return term === 'stems'
      ? 'Stems'
      : term.charAt(0).toUpperCase() + term.substr(1).toLowerCase() + 's';
  }

  private setTitle(title: string) {
    this.title.setTitle(title);
  }
}
