// import { Injectable } from '@angular/core';
// import { Song } from '../models/song.model';

// @Injectable({
//   providedIn: 'root',
// })
// export class FiltersService {
//   arr: Song[] = [];
//   param = '';
//   functions = {
//     tipo: () => {
//       return this.param === 'video'
//         ? this.arr.filter((a) => a.link_youtube)
//         : this.arr.filter((a) => a.cover);
//     },
//     contenido: () => {
//       return this.arr.filter((a) => a.tags_names.length == Number(this.param));
//     },
//     // lanzamiento: this.byReleaseYear(),
//     // orden: this.orderBy()
//   };

//   constructor() {}

//   filter(arr: Song[], param: string, func: string): Song[] {
//     this.arr = arr;
//     this.param = param;
//     // @ts-ignore
//     return this.functions[func]();
//   }
// }
