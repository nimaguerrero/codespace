import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'User-options',
  templateUrl: './user-options.component.html',
  styleUrls: ['./user-options.component.scss'],
})
export class UserOptionsComponent implements OnInit {
  @Input() profileUrl = '';
  constructor(public uS: UserService) {}

  ngOnInit(): void {}
}
