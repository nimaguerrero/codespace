import {
  Component,
  OnInit,
  Renderer2,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable, Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'Navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  isopened = false;
  white_logo = '';
  alt = '';
  // profileUrl = '';
  profileUrl$ = this.uS.getProfile();
  subs = new Subscription();
  @ViewChild('sidebar') sidebar!: ElementRef;

  constructor(public uS: UserService, private render: Renderer2) {}

  ngOnInit(): void {
    // this.subs.add(
    //   this.uS
    //     .getProfile()
    //     .subscribe((profileUrl) => (this.profileUrl = profileUrl))
    // );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  openSidebar() {
    this.isopened = !this.isopened;
    const action = this.isopened ? 'addClass' : 'removeClass';
    this.render[action](this.sidebar.nativeElement, 'sidebar-right');
  }
}
