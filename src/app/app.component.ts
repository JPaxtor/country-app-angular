import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent, HomeViewComponent, AboutViewComponent } from './shared';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SidebarComponent, HomeViewComponent, AboutViewComponent, RouterOutlet],
  template: `
  <div class="container">
    <div class="row mt-4">
      <div class="col-3">
        <!-- Sidebar -->
        <shared-sidebar />
      </div>
      <div class="col-3">
        <!-- Pages -->
        <router-outlet />
      </div>
    </div>
  </div>
    
  `,
  styles: [],
})
export class AppComponent {
  title = 'country-app';
}
