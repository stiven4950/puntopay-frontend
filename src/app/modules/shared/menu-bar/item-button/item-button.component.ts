import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'item-button',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './item-button.component.html',
  styleUrl: './item-button.component.css'
})
export class ItemButtonComponent {
  @Input({ required: true }) icon!: IconProp;
  @Input({ required: true }) name!: string;
  @Output() click: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
}
