import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  projectModal: any
  constructor() {}

  sendProjectToModal(project: any) {
    this.projectModal = project
  }
}
