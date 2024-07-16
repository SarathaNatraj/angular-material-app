import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-add-product',
  standalone:true,
  imports:[MaterialModule,CommonModule,ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    }
  ngOnInit(): void {
   // throw new Error('Method not implemented.');
   this.productForm = this.fb.group({
    name: ['', Validators.required],
    price: ['', [Validators.required, Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')]],
    description: ['']

  });
  console.log('onInit');
  this.productForm.valueChanges.subscribe(value => {
    console.log('value changes',value.name,  value.price, value.description);
   // this.totalPrice = this.calculateTotalPrice(value.quantity,value.unitPrice);

   })
  

  }

  onSubmit() {
    console.log('on submit', this.productForm);
    if (this.productForm.valid) {
      console.log('Product Submitted', this.productForm.value);
    }
  }
}
