import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav-bar></nav-bar>
  <events-list></events-list>
  `
})
export class EventsAppComponent {
  title = 'sample-angular-app';
}
