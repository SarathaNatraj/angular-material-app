import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';


import { UserProfileComponent } from './user-profile.component';

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserProfileComponent,NoopAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the name and email', () => {


    //AAA  - Arrange Action Assertion

    //Arrange
   const cardTitle = fixture.debugElement.query(By.css('mat-card-title')).nativeElement;
    const emailInput = fixture.debugElement.query(By.css('input[type="email"]')).nativeElement;
    const passwordInput = fixture.debugElement.query(By.css('input[type="text"]')).nativeElement;
    const loginButton = fixture.debugElement.query(By.css('button')).nativeElement;
  
    //Action - No


    //expect - which takes a value, called the actual. It is chained with a Matcher function, which takes the expected value.


    //Assertion - jasmine assertions - use expect function
   expect(cardTitle.textContent).toContain('User Information');
    expect(emailInput).toBeTruthy(); //Boolean matcher is used in Jasmine to check whether the result is equal to true or false
    expect(passwordInput).toBeTruthy();
    expect(loginButton.textContent).toContain('Submit');
   });

});
