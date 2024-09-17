import { Component } from '@angular/core';

@Component({
  selector: 'app-main-wrapper',
  template: `
    <main>
      <ng-content />
    </main>
  `,
  styles: `
    main {
      display: flex;
      margin-top: 50px;
    }
  `,
})
export class MainWrapperComponent {}
