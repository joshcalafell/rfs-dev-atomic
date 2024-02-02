import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { HeaderComponent } from 'libs/ui-organisms/src';

@Component({
  standalone: true,
  imports: [HeaderComponent, RouterModule],
  selector: 'rfs-dev-atomic-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'CANDLE STORE';
}
