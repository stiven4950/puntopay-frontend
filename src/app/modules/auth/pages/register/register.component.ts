import { Component } from '@angular/core';
import { RegisterFormComponent } from "../../components/register-form/register-form.component";
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RegisterFormComponent, RouterLinkWithHref],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
}
