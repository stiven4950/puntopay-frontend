import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck, faCircleInfo, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'toast',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent {
  @Input({required: true}) show!: boolean;
  @Input({required: true}) message!: string;
  @Input() type: "success" | "error" | "information" = "success";

  mapTypeIcon = {
    "success": faCheck,
    "error": faXmark,
    "information": faCircleInfo,
  }

  mapColor = {
    "success": "bg-indigo-500",
    "error": "bg-red-500",
    "information": "bg-orange-300",
  }
}
