import { Component, OnInit , Inject} from '@angular/core';
import {IUser} from '../models/user';

const Data: IUser[] = [
  {Id: 1, FirstName: 'Naty', LastName: 'Hasidi', Age: 30 }
];

@Component({
  selector: 'app-regular-table',
  templateUrl: './regular-table.component.html',
  styleUrls: ['./regular-table.component.css']
})
export class RegularTableComponent implements OnInit {
  users: IUser[];

  constructor() { }

  ngOnInit() {
    this.users = Data;
  }

}
