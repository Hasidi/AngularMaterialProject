import { Component, ViewChild, NgZone, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';
import {} from '../first-component/first-component.component';

// export interface DialogData {
//   animal: string;
//   name: string;
// }

@Component({
  selector: 'app-custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.css']
})
export class CustomDialogComponent implements OnInit {
  title: string;
  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  fieldsProperties: string[] = [];

  constructor(
    public dialogRef: MatDialogRef<CustomDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ngZone: NgZone) {}

  ngOnInit() {
    console.log('On init of dialog: ' + this.data);
    console.log('On init of dialog: ' + this.data.data.FirstName);

    this.title = this.data.title;
    this.fieldsProperties = [];
    let copyData = {} as any;
    for (const property of Object.getOwnPropertyNames(this.data.data)) {
      // console.log(property);
      this.fieldsProperties.push(property);
      copyData[property] = '';
    }
    // this.data = copyData;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this.ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }
}
