import { Component, OnChanges, Input, Output,EventEmitter } from '@angular/core';

@Component({
    selector:'ai-star',
    moduleId: module.id,
    templateUrl: 'star.component.html'
})
export class StarComponent{
    @Input() rating : number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    onClick(): void{
        this.ratingClicked.emit("rating is"+this.rating);
    }
}