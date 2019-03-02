import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
import {MatTableDataSource, MatFormField, MatSort, MatPaginator, MatDialog, MatDialogConfig } from '@angular/material';
import { CustomDialogComponent } from '../custom-dialog/custom-dialog.component';
import { Button } from 'protractor';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit, OnChanges {
  @Input()
  data: any[];
  @Input()
  inputName: string;

  // actionsColumns: string[] = ['edit', 'delete'];
  displayedColumns: string[] = [];
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // displayedColumns: string[] = ['Id', 'FirstName', 'LastName', 'Age'];

  dataSource: MatTableDataSource<any>;
  newData: any;

  constructor(private dialog: MatDialog) {
    // this.data = ELEMENT_DATA;
    // this.dataSource = new MatTableDataSource(this.data);
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild('addButton') button;
 
  ngOnInit() {
    // console.log('inputName2: ' + this.inputName);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Im In OnChanges of child component');
    if (changes.data) {
      console.log('change in data input');
      this.initColumnsProperties();
      this.dataSource = new MatTableDataSource(this.data);
      console.log(this.displayedColumns);
    }
    if (changes.inputName) {
      console.log('change in inputName ' + this.inputName);
    }
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    // this.inputName = changes.inputName.currentValue as string;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(index: number): void {
    const objToSend = this.getObjectToSendDialog(index);
    const dialogConfig = this.initDialogConfig(objToSend);
    console.log('inputName in dialog open: ' + this.inputName);
    const dialogRef = this.dialog.open(CustomDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.newData = result;
      console.log(this.newData);
      if (result) {
        if (index < 0) {
          this.data.push(result);
        } else {
          this.data[index] = result;
        }
        this.resetTable(this.data);
      }

      // if (result && index < 0) {
      //   this.data.push(result);
      //   this.data = this.data.slice();
      //   this.dataSource = new MatTableDataSource(this.data);
      // }
      // else if (result) {
      //   this.data[index] = result;
      //   this.dataSource = new MatTableDataSource(this.data);
      // }
    });
  }

  deleteItem(index: number) {
    console.log('active delete item: ' + index);
    this.data.splice(index, 1);
    this.resetTable(this.data);
  }

  initColumnsProperties() {
    this.displayedColumns = [];
    for (const property of Object.getOwnPropertyNames(this.data[0])) {
      // console.log(property);
      this.displayedColumns.push(property);
    }
    this.displayedColumns.push('actions');
    // this.displayedColumns = ['select', 'FirstName'];
  }

  initDialogConfig(dataToSend: any): MatDialogConfig {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.maxHeight = 500;
    dialogConfig.maxWidth = 600;
    // const mockData = this.data[0];
    // dialogConfig.data = mockData;
    dialogConfig.data = dataToSend;

    // console.log('inputName in initConfig: ' + this.inputName);
    dialogConfig.id = this.inputName;
    return dialogConfig;
  }

  getObjectToSendDialog(index: number): any {
    console.log('im index: ' + index);
    if (index >= 0) {
      const clonedObj = Object.assign({}, this.data[index]);
      return clonedObj;
    }
    const copyData = {} as any;
    for (const property of Object.getOwnPropertyNames(this.data[0])) {
      copyData[property] = '';
    }
    return copyData;
  }

  resetTable(data: any[]) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
