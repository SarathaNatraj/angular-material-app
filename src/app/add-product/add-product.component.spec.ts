import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AddProductComponent } from './add-product.component';
import { By } from '@angular/platform-browser';
//test file - describe main entry point
describe('AddProductComponent', () => {
  let component: AddProductComponent;
  let fixture: ComponentFixture<AddProductComponent>;

  //
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddProductComponent,NoopAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  //individual test case
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display required error message when name is empty', () =>{

    //Arrange
    const nameInput = component.productForm.controls['name'];

    //Action
    nameInput.setValue('');
    nameInput.markAsTouched();

    fixture.detectChanges();

    //Assertion
    const errorMsg = fixture.debugElement.query(By.css('mat-error')).nativeElement;
    console.log(errorMsg);
    expect(errorMsg).toBeTruthy();
   expect(errorMsg.textContent).toContain('Product Name is required');
    //expect(loginButton.textContent).toContain('Submit');


  });
//complete the price empty test case as like name is empty

//price format test case
  it('should display required error message when price  is invalid', () =>{

    //Arrange
    const nameInput = component.productForm.controls['price'];

    //Action
    nameInput.setValue('invalid');
    nameInput.markAsTouched();

    fixture.detectChanges();

    //Assertion
    const errorMsg = fixture.debugElement.query(By.css('mat-error')).nativeElement;
    console.log(errorMsg);
    expect(errorMsg).toBeTruthy();
   expect(errorMsg.textContent).toContain('Invalid price format');
    //expect(loginButton.textContent).toContain('Submit');


  });

  
});
