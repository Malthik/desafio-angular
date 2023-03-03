import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cooperative-info-card',
  templateUrl: './cooperative-info-card.component.html',
  styleUrls: ['./cooperative-info-card.component.scss'],
})
export class CooperativeInfoCardComponent implements OnInit {
  @Input() title: string | null = null;
  @Input() subtitle: string | null = null;
  @Input() isUserIcon: boolean = false;
  @Input() firstLabel: string | null = null;
  @Input() firstValue: string | null = null;
  @Input() isRegular: boolean = false;
  @Input() secondLabel: string | null = null;
  @Input() secondValue: string | null = null;
  @Input() buttonLabel: string | null = null;

  constructor() {}

  ngOnInit() {}
}
