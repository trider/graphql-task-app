import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let h4: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule

      ],
      declarations: [LoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have h4 with "Login"', () => {
    h4 = fixture.nativeElement.querySelector('h4');
    console.log(h4.innerHTML)
    expect(h4.textContent).toBe('Task App');
  });

  it('should validate form', () => {
    let email = component.loginForm.controls['email'];
    console.log(email.value);
    expect(email.valid).toBeTruthy();
  
    let password = component.loginForm.controls['password'];
    console.log(password.value)
    expect(password.valid).toBeTruthy();
  });


});
