import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'events-thumbnail',
    templateUrl: './events-thumbnail.component.html'
})

export class EventThumbnailComponent {
   @Input() event: any;
   somePropety: any = "some value";
   @Output() eventClick = new EventEmitter();

   handleClickEvent() {
        this.eventClick.emit(this.event.name);
   }

   logFoo() {
       console.log('foo');
   }
}
