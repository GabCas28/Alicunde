import { TestBed, ComponentFixture } from '@angular/core/testing';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [LoginComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display the user input', () => {
    const userInput: HTMLElement = fixture.nativeElement.querySelector('#user');
    expect(userInput).toBeTruthy();
    expect(userInput.classList.toString()).toEqual(
      'ng-untouched ng-pristine ng-invalid'
    );
  });

  it('should display the password input', () => {
    const passwordInput: HTMLElement =
      fixture.nativeElement.querySelector('#password');
    expect(passwordInput).toBeTruthy();
    expect(passwordInput.classList.toString()).toEqual(
      'ng-untouched ng-pristine ng-invalid'
    );
  });

  it('should display the login button', () => {
    expect(fixture.nativeElement.querySelector('#login')).toBeTruthy();
  });

  it('should not display other input', () => {
    expect(
      fixture.nativeElement.querySelector('input:not(#password,#user,#login)')
    ).toBeFalsy();
  });
});
