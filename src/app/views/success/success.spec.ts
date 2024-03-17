import { TestBed, ComponentFixture } from '@angular/core/testing';
import { SuccessComponent } from './success.component';

describe('SuccessComponent', () => {
  let component: SuccessComponent;
  let fixture: ComponentFixture<SuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [SuccessComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display the logout button', () => {
    expect(fixture.nativeElement.querySelector('#logout')).toBeTruthy();
  });

  it('should display a funny gif', () => {
    expect(fixture.nativeElement.querySelector('#polar-bear-gif')).toBeTruthy();
  });
});
