import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
	selector: 'rfs-dev-atomic-snackbar',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './snackbar.component.html',
	styleUrl: './snackbar.component.scss',
})
export class SnackbarComponent {}
