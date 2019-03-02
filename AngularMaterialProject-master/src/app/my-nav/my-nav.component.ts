import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {usersMockData, productsMockData} from '../models/user';
import { RestServiceService } from '../rest-service.service';

@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css']
})
export class MyNavComponent implements OnInit {
  dataToPass: any[];
  inputName: string;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private webService: RestServiceService) {}

  ngOnInit() {
    this.dataToPass = usersMockData;
    this.inputName = 'User';
  }

  renderData1(): void {
    console.log('Button1 clicked');
    // this.inputName = 'xx';
    // const newUser = {Id: '8', FirstName: 'mockNew', LastName: 'mockNew', Age: 41};
    // this.dataToPass = usersMockData;
    // this.dataToPass = this.dataToPass.slice();
    // this.dataToPass.push(newUser);
    this.webService.getUsers().subscribe(
      res => {
        this.dataToPass = res;
      },
      err => {
        this.dataToPass = null;
        console.log('no response from server');
      });
    this.inputName = 'User';
  }

  renderData2(): void {
    console.log('Button2 clicked');
    this.inputName = 'Product';
    const newUser = {Id: '8', FirstName: 'mockNew', LastName: 'mockNew', Age: 41};
    this.dataToPass = productsMockData;
  }
}
