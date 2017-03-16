import { Component, OnInit, Input, EventEmitter, ChangeDetectorRef, ChangeDetectionStrategy, HostListener, Output } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
    selector: 'eo-drag-pane',
    templateUrl: './drag-pane.component.html',
    styleUrls: ['drag-pane.component.scss']
})
export class DragPaneComponent {
    dragging: any;
    diffX: number;
    diffY: number;
    @Input() direction: string;
    @Input() customerPosition: any;
    @Output() dragPaneHResize = new EventEmitter<any>();
    @Output() dragPaneVResize = new EventEmitter<any>();

    onActionMouseDown($event?: any) {
        event.preventDefault();
        this.dragging = $event.target;
        if (this.dragging) {
            switch (this.direction) {
                case 'h':
                    console.log(this.direction)
                    this.diffX = $event.clientX - this.dragging ? this.dragging.offsetLeft : 0;
                    this.dragPaneHResize.emit({ direction: 'h', value: $event.clientX - this.diffX, diff: this.diffX })
                    break;
                case 'v':
                    this.diffY = this.dragging.offsetHeight - ($event.clientY - this.dragging.offsetTop);
                    this.dragPaneVResize.emit({ direction: 'v', value: window.innerHeight - $event.clientY - this.diffY, diff: this.diffY })
                    break;
                default: break;
            }
        }
    }

}
