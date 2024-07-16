import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';

import {MatSelectModule} from '@angular/material/select';

import {MatFormFieldModule} from '@angular/material/form-field';




@NgModule({
  exports: [
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule, MatFormFieldModule,
    MatIconModule,MatDatepickerModule,MatSelectModule
  ]
})
export class MaterialModule { }
