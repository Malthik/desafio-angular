import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CooperativeMembersInfoModel } from '../models/cooperative_members_info_model';

@Injectable({
  providedIn: 'root',
})
export class CooperativeService {
  url = 'assets/data/cooperative_members_info.json';

  constructor(private http: HttpClient) {}

  getCooperativeMemberList() {
    return this.http.get<CooperativeMembersInfoModel>(this.url);
  }
}
