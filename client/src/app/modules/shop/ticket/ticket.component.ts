import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from '@env/environment';
import { TicketService } from './ticket.service';
import { Observable } from 'rxjs';
import { UserService } from '@shared/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'Ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent implements OnInit, OnDestroy {
  logo = environment.logo;
  ticket$!: Observable<{ sale: any; details: any[] }>;
  constructor(
    private ticketServ: TicketService,
    private userServ: UserService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.route.params.subscribe(({ transaction }) => {
      this.ticket$ = this.ticketServ.getTicket(transaction);
      this.toastr.success(
        'Sus tickets de compra también se enviaron al correo'
      );
    });
  }

  ngOnDestroy(): void {}
}
