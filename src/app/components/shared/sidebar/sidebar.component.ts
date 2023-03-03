import { Component, OnInit } from '@angular/core';
import {
  faBuilding,
  faCommentDots,
  faStar,
} from '@fortawesome/free-regular-svg-icons';
import {
  faBars,
  faMagnifyingGlass,
  faSliders,
} from '@fortawesome/free-solid-svg-icons';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  items: MenuItem[] = [];

  faBuilding = faBuilding;
  faCommentDots = faCommentDots;
  faStar = faStar;
  faBars = faBars;
  faMagnifyingGlass = faMagnifyingGlass;
  faSliders = faSliders;
  constructor() {}

  ngOnInit() {}
}
