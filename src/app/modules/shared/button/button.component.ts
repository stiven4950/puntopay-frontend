import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() disabled = false;
  @Input() loading = false;
  @Input() typeBtn: 'reset' | 'submit' | 'button' = 'button';
  @Input() color: 'success' | 'primary' | 'danger' | 'light' | 'sky' =
    'primary';
  faSpinner = faSpinner;

  mapColors = {
    success: {
      'bg-indigo-700': true,
      'hover:bg-indigo-800': true,
      'focus:ring-indigo-300': true,
      'text-white': true,
    },
    primary: {
      'bg-indigo-700': true,
      'hover:bg-indigo-800': true,
      'focus:ring-indigo-300': true,
      'text-white': true,
    },
    danger: {
      'bg-orange-700': true,
      'hover:bg-orange-800': true,
      'focus:ring-orange-300': true,
      'text-white': true,
    },
    light: {
      'bg-gray-200': true,
      'hover:bg-gray-500': true,
      'focus:ring-gray-50': true,
      'text-gray-700': true,
    },
    sky: {
      'bg-sky-700': true,
      'hover:bg-sky-800': true,
      'focus:ring-sky-300': true,
      'text-white': true,
    },
  };

  constructor() {}

  get colors() {
    const colors = this.mapColors[this.color];
    if (colors) {
      return colors;
    }
    return {};
  }
}
