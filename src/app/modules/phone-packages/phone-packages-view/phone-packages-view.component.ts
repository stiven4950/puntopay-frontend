import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../shared/breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-phone-packages-view',
  standalone: true,
  imports: [BreadcrumbComponent],
  templateUrl: './phone-packages-view.component.html',
  styleUrl: './phone-packages-view.component.css'
})
export class PhonePackagesViewComponent {

}
