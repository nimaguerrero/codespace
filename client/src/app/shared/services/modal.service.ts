import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ModalService {
    songModal: any;
    tagModal: any;
    constructor() {}

    sendSongAndTagToModal(song: any, tag: any) {
        this.songModal = song;
        this.tagModal = tag;
    }
}
