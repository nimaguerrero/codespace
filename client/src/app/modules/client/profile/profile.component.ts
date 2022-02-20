import {
  Component,
  OnInit,
  Renderer2,
  ViewChild,
  ElementRef,
  OnDestroy,
  DoCheck
} from '@angular/core'
import { Subscription } from 'rxjs'
import { FormGroup, Validators, FormBuilder } from '@angular/forms'
import { IMGTYPES } from '@global/constants'
import { ProfileService } from './profile.service'
import { ToastrService } from 'ngx-toastr'
import { UserService } from '@shared/services/user.service'
import { ImgConditionsService } from '@shared/services/img-conditions.service'
import { FormConditionsService } from '@shared/services/form-conditions.service'

@Component({
  selector: 'Profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy, DoCheck {
  @ViewChild('dropProfile') dropProfile!: ElementRef
  public_id = ''
  imgTypes = IMGTYPES
  file!: File
  imgSelect: any | ArrayBuffer = ''
  imgEl = this.render.createElement('img')

  client: any = {}
  subs = new Subscription()
  profileForm!: FormGroup

  profileUrl = ''
  fc!: FormConditionsService

  constructor(
    private render: Renderer2,
    private fb: FormBuilder,
    // public uS: UserService,
    private profileServ: ProfileService,
    private toastr: ToastrService
  ) {
    this.initForm()
  }

  ngOnInit(): void {
    this.getClient()
    // this.subs.add(
    //   this.uS
    //     .getProfile()
    //     .subscribe((profileUrl) => (this.profileUrl = profileUrl))
    // )
  }

  ngDoCheck(): void {
    this.render.setAttribute(this.imgEl, 'src', this.imgSelect)
    if (this.dropProfile)
      this.render.appendChild(this.dropProfile.nativeElement, this.imgEl)
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }

  getClient() {
    this.subs.add(
      this.profileServ.getClient().subscribe(({ profile, ...data }) => {
        this.client = data
        this.imgSelect = profile.url
        this.profileUrl = profile.url
        this.public_id = profile.public_id

        this.fc.controlSet('nameProfileForm', this.client.name)
        this.fc.controlSet('emailProfileForm', this.client.email)
        this.fc.controlSet('countryProfileForm', this.client.country)
      })
    )
  }

  initForm() {
    this.profileForm = this.fb.group({
      nameProfileForm: ['', Validators.required],
      emailProfileForm: ['', Validators.required],
      countryProfileForm: ['', Validators.required]
    })
    this.fc = new FormConditionsService(this.profileForm)
  }

  submitForm(form: FormGroup) {
    if (form.invalid) {
      this.fc.invalidForm([
        'nameProfileForm',
        'emailProfileForm',
        'countryProfileForm'
      ])
    } else {
      const user = {
        name: form.controls['nameProfileForm'].value,
        email: form.controls['emailProfileForm'].value,
        country: form.controls['countryProfileForm'].value
      }
      this.profileServ
        .updateClient(user, this.file, this.public_id)
        .subscribe(({ msg, client }) => {
          this.toastr.success(msg)
        })
    }
  }

  onFileChange(event: any) {
    let reader = new FileReader()
    const imgC = new ImgConditionsService()
    if (imgC.existImg(event)) {
      let file = <File>event.target.files[0]
      if (imgC.typesImg(file, this.imgTypes) && imgC.sizeImg(file, 4000000)) {
        reader.onload = (e) => (this.imgSelect = reader.result)
        reader.readAsDataURL(file)
        this.file = file
      } else {
        this.imgSelect = ''
      }
    }
  }
}
