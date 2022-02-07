import { SongComponent } from './song.component'
import { SongService } from './song.service'
import { ModalService } from '@shared/services/modal.service'
import { SeoService } from '@shared/services/seo.service'
import { from, of } from 'rxjs'

// describe('SongComponent', () => {
//   let component: SongComponent;
//   let env: EnvironmentsService;
//   let songServ: SongService;
//   let modalServ: ModalService;
//   let seoServ: SeoService;

//   beforeEach(() => {
//     env = new EnvironmentsService();
//     spyOn(env, 'getApiUrl').and.callFake(() => '');
//     // @ts-expect-error
//     songServ = new SongService(null, env);
//     modalServ = new ModalService();
//     // @ts-expect-error
//     seoServ = new SeoService(null, null, env);
//     spyOn(seoServ, 'generateTags').and.callFake(() => {});
//     // @ts-expect-error
//     component = new SongComponent(null, songServ, modalServ, seoServ);
//   });

//   it('Debe cerrarse el modal de paypal, dando click en la X', () => {
//     component.closePaypalModal(true);
//     expect(component.openMP).toBeFalsy();
//   });

//   it('Debe cerrarse el modal de report, dando click en la X', () => {
//     component.closeReportModal(true);
//     expect(component.openReport).toBeFalsy();
//   });

//   it('Debe de llamar al servidor cuando obtengo una cancion', () => {
//     const espia = spyOn(songServ, 'getSong').and.returnValue(of([]));
//     component.getSong('1');
//     expect(espia).toHaveBeenCalledWith('1');
//   });

//   it('getSong: Debo obtener una cancion y sus respectivos tags', () => {
//     const song = {
//       id: '1',
//       name: 'song1',
//       author: 'string',
//       release_year: 2222,
//       album: 'string',
//       multimedia: 'string',
//       tags_names: [],
//       genres: [],
//       artists: [],
//       description: 'string',
//       stars: 1,
//       state: 'string',
//       active: true,
//       cover: {},
//       link_youtube: 'string',
//     };
//     const tags = [
//       {
//         id: '1',
//         name: 'tag1',
//         link: 'link1',
//         song: 'song1',
//         search_song: 'song1',
//         price: 1,
//         nsales: 0,
//         ndownloads: 0,
//       },
//     ];

//     spyOn(songServ, 'getSong').and.callFake(() => of({ song, tags }));
//     component.getSong('1');
//     console.log(component.song);
//     expect(component.song).toBeTruthy();
//     expect(component.tags.length).toBeGreaterThan(0);
//   });
// });
