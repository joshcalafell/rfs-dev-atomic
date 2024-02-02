import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'rfs-dev-atomic-link',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss',
})
export class LinkComponent {
  @Input() path?: string;
  @Input() text?: string;
  @Input() target?: string;
  @Input() rel?: string;
  @Input() title?: string;



}
