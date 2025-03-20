import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ButtonComponent } from '@modules/shared/button/button.component';

import { RequestStatus } from '@models/request-status.model';
import { AuthenticationService } from '@services/authentication.service';
import { CustomValidators } from '@utils/validators';
import { User } from '../../../../models/user.model';
import { ToastProviderService } from '@providers/toast-provider.service';
import { LogoComponent } from "../../../shared/logo/logo.component";

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [FontAwesomeModule, ReactiveFormsModule, ButtonComponent, LogoComponent],
  templateUrl: './register-form.component.html',
})
export class RegisterFormComponent {
  authService = inject(AuthenticationService);
  toastProviderService = inject(ToastProviderService);
  router = inject(Router);
  formRegister: FormGroup;

  status: RequestStatus = 'init';
  errorMessage: string = '';
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword = false;

  constructor(private formBuilder: FormBuilder) {
    this.formRegister = this.formBuilder.nonNullable.group({
      name: ['', [Validators.required, Validators.maxLength(60)]],
      document: ['', [Validators.required, Validators.maxLength(14)]],
      phone: ['', [Validators.required, Validators.pattern(/^3\d{9,}$/)]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(8), Validators.required]],
      confirmPassword: ['', [Validators.required]],
    }, {
      validators: [CustomValidators.MatchValidator('password', 'confirmPassword')]
    });
  }

  register() {
    if (this.formRegister.valid) {
      this.status = 'loading';
      const { name, document, phone, email, password } = this.formRegister.getRawValue();
      const user: User = { name, document, phone, email, password }

      this.authService.registerUser(user)
        .subscribe({
          next: () => {
            this.status = 'success';
            this.toastProviderService.showToast("Registrado exitosamente", 10000, "information");
            this.router.navigate(['/login']);
          },
          error: (e: HttpErrorResponse) => {
            this.errorMessage = e.error.message?.includes("UNIQUE") ? "Email already exists go to login" : "Your data is corrupt, look for errors";
            this.status = 'failed';
          }
        })
    } else {
      this.formRegister.markAllAsTouched();
    }
  }

  get name() {
    return this.formRegister.get("name") as FormControl;
  }
  get document() {
    return this.formRegister.get("document") as FormControl;
  }
  get phone() {
    return this.formRegister.get("phone") as FormControl;
  }
  get email() {
    return this.formRegister.get("email") as FormControl;
  }
  get password() {
    return this.formRegister.get("password") as FormControl;
  }
  get confirmPassword() {
    return this.formRegister.get("confirmPassword") as FormControl;
  }
}
