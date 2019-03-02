import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges,ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';
import {MatTableDataSource, MatFormField, MatSort, MatPaginator, MatDialog, MatDialogConfig } from '@angular/material';
import { CustomDialogComponent } from '../custom-dialog/custom-dialog.component';
import { Button } from 'protractor';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable} from 'rxjs';
import { IUser, User, usersMockData } from '../models/user';


@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstComponentComponent implements OnInit, OnChanges {
  @Input()
  data: any[];
  @Input()
  inputName: string;

  displayedColumns: string[] = [];

  dataSource: DataSource<any>;
  newData: any;

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
    // console.log('inputName2: ' + this.inputName);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Im In OnChanges of child component');
    if (changes.data) {
      console.log('change in data input');
      this.initColumnsProperties();
      this.dataSource = new ExampleDataSource();
      console.log(this.displayedColumns);
    }
    if (changes.inputName) {
      console.log('change in inputName ' + this.inputName);
    }
  }


  initColumnsProperties() {
    this.displayedColumns = [];
    for (const property of Object.getOwnPropertyNames(this.data[0])) {
      // console.log(property);
      this.displayedColumns.push(property);
    }
    // this.displayedColumns.push('actions');
  }

}



export class ExampleDataSource extends DataSource<any[]> {
  /** Stream of data that is provided to the table. */
  data = new BehaviorSubject<any[]>(usersMockData);

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<any[]> {
    return this.data;
  }

  disconnect() {}
}
