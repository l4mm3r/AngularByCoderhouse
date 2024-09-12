import { Component } from "@angular/core";

@Component({
	selector: "app-main-wrapper",
	template: `
  <main>
    <ng-content />
  </main>
  `,
	styles: ``,
})
export class MainWrapperComponent {}
