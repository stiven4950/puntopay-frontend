import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPen, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { take } from 'rxjs/operators';

import { ButtonComponent } from '@modules/shared/button/button.component';
import { LogoComponent } from "../../../shared/logo/logo.component";

import { AuthenticationService } from '@services/authentication.service';
import { RequestStatus } from '@models/request-status.model';
import { ToastProviderService } from '@providers/toast-provider.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FontAwesomeModule, ReactiveFormsModule, ButtonComponent, LogoComponent],
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  private authService = inject(AuthenticationService);
  private router = inject(Router);
  private formBuilder = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  toastProviderService = inject(ToastProviderService);

  public formLogin: FormGroup = this.formBuilder.nonNullable.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  readonly faPen = faPen;
  readonly faEye = faEye;
  readonly faEyeSlash = faEyeSlash;

  showPassword = false;
  status: RequestStatus = 'init';
  errorMessage: string | null = null;

  ngOnInit() {
    this.route.queryParamMap.pipe(take(1)).subscribe(params => {
      const username = params.get('username');
      if (username) {
        this.formLogin.patchValue({ email: username });
      }
    });
  }

  get username(): FormControl {
    return this.formLogin.get('username') as FormControl;
  }

  get password(): FormControl {
    return this.formLogin.get('password') as FormControl;
  }

  doLogin(): void {
    if (this.formLogin.invalid) {
      this.formLogin.markAllAsTouched();
      return;
    }

    this.status = 'loading';
    const { username, password } = this.formLogin.getRawValue();

    this.authService.login(username, password).subscribe({
      next: () => {
        this.status = 'success';
        this.toastProviderService.showToast("Bienvenido :)", 5000);
        this.router.navigate(['/app']);
      },
      error: (err) => {
        this.status = 'failed';
        this.errorMessage = err.error?.message || 'Error en la autenticación';
      },
    });
  }
}
