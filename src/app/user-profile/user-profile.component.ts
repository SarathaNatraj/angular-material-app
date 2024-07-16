import { Component } from '@angular/core';

import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ChangeDetectionStrategy} from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import { MaterialModule } from '../material/material.module';

import { CommonModule } from '@angular/common';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();
import {JsonPipe} from '@angular/common';

export interface DialogData {
  animal: string;
  name: string;
}



export interface Food{
  value:string,
  viewValue:string
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  providers: [provideNativeDateAdapter()
  ],
  imports: [JsonPipe,MaterialModule,FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  

})
export class UserProfileComponent {

  public name:string | undefined;
  public email:string | undefined;

  readonly range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  readonly campaignOne = new FormGroup({
    start: new FormControl(new Date(year, month, 13)),
    end: new FormControl(new Date(year, month, 16)),
  });
  readonly campaignTwo = new FormGroup({
    start: new FormControl(new Date(year, month, 15)),
    end: new FormControl(new Date(year, month, 19)),
  });
  dialog: any;
  
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
}
