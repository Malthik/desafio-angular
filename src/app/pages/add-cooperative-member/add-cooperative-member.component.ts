import { Component, HostListener, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { catchError, throwError } from 'rxjs';
import { CooperativeMembersInfoModel } from '../../data/models/cooperative_members_info_model';
import { CooperativeMemberModel } from './../../data/models/cooperative_member_model';
import { CooperativeService } from './../../data/services/cooperative.service';

@Component({
  selector: 'app-add-cooperative-member',
  templateUrl: './add-cooperative-member.component.html',
  styleUrls: ['./add-cooperative-member.component.scss'],
})
export class AddCooperativeMemberComponent implements OnInit {
  contentHeight: number = 1024;
  items: MenuItem[] = [];
  activeIndex: number = 1;

  cpf: string | null = null;
  isInvalidCpf: boolean = false;
  showInfo: boolean = false;
  membersList: CooperativeMemberModel[] = [];
  cooperativeMember: CooperativeMemberModel | null = null;

  constructor(public cooperativeService: CooperativeService) {}

  ngOnInit() {
    this.cpf = null;

    this.items = [
      {
        label: 'Início',
        command: (event: any) => {
          this.activeIndex = 0;
        },
      },
      {
        label: 'Documentos',
        command: (event: any) => {
          this.activeIndex = 1;
        },
      },
      {
        label: 'Dados cadastrais',
        command: (event: any) => {
          this.activeIndex = 2;
        },
      },
      {
        label: 'Admissão',
        command: (event: any) => {
          this.activeIndex = 3;
        },
      },
    ];

    this.setHeightValue(window.innerHeight);
    this.getCooperativeMemberList();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.setHeightValue(window.innerHeight);
  }

  setHeightValue(height: number) {
    this.contentHeight = height - 200;
    let heightDefinition = 'height:' + this.contentHeight + 'px';
    document
      .getElementById('pageContent')
      ?.setAttribute('style', heightDefinition);
  }

  getCooperativeMemberList() {
    this.cooperativeService
      .getCooperativeMemberList()
      .pipe<CooperativeMembersInfoModel>(
        catchError((err) => {
          return throwError(() => 'Não foi possível buscar as informações.');
        })
      )
      .subscribe((res) => {
        this.membersList = res.cooperativeMembers;
      });
  }

  validateCpf() {
    this.cooperativeMember =
      this.membersList.find((e) => e.document == this.cpf) ?? null;

    if (this.cooperativeMember != null) {
      this.isInvalidCpf = false;
      this.showInfo = true;
      return true;
    }
    this.isInvalidCpf = true;
    this.showInfo = false;
    return false;
  }

  shouldShowError() {
    return (
      (this.isInvalidCpf && this.cpf != null && this.cpf != '') ||
      (this.isInvalidCpf && this.cpf == '')
    );
  }

  disableError() {
    this.isInvalidCpf = false;
  }

  shouldShowInfo() {
    return this.showInfo;
  }

  newAdmission() {
    this.isInvalidCpf = false;
    this.cpf = null;
    this.validateCpf();
  }
}
