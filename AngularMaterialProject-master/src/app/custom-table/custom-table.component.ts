import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
import {MatTableDataSource, MatFormField, MatSort, MatPaginator, MatDialog, MatDialogConfig } from '@angular/material';
import { CustomDialogComponent } from '../custom-dialog/custom-dialog.component';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.css']
})
export class CustomTableComponent implements OnInit {

  @Input()
  data: any[];
  @Input()
  inputName: string;

  // actionsColumns: string[] = ['edit', 'delete'];
  displayedColumns: string[] = [];
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // displayedColumns: string[] = ['Id', 'FirstName', 'LastName', 'Age'];

  dataSource: MatTableDataSource<any>;
  filterInputValue: string;
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
    if (this.data != null && changes.data) {
      console.log('change in data input');
      this.initColumnsProperties();
      this.resetTable(this.data);
    }
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
    dialogConfig.maxHeight = 800;
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
    let titleTxt = 'Edit';
    if (index < 0) {
      titleTxt = 'Create';
    }

    let objData = {} as any;
    if (index >= 0) {
      const clonedObj = Object.assign({}, this.data[index]);
      console.log('in ger data: ' + clonedObj.FirstName);
      return {data: clonedObj, title: titleTxt};

      objData = Object.assign({}, this.data[index]);
      console.log('in ger data: ' + objData);
    } else {
      for (const property of Object.getOwnPropertyNames(this.data[0])) {
        objData[property] = '';
      }
    }
    return {data: objData, title: titleTxt};
  }
  resetTable(data: any[]) {
    this.dataSource = new MatTableDataSource(data);
    this.filterInputValue = '';
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
