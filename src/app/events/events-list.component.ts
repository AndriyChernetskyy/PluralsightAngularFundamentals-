import { Component } from '@angular/core';

@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html'
})
export class EventsListComponent {
    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2036',
        time: '10:00 am',
        price: 599.99,
        imageUrl: '/assets/angular_logo.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    };
    
    handleEvent(data) {
        console.log('reveived:', data);
    }
}
