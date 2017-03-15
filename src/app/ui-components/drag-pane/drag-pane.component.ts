import { Component, OnInit, Input, EventEmitter, ChangeDetectionStrategy, HostListener, Output } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
    selector: 'eo-drag-pane',
    templateUrl: './drag-pane.component.html',
    styleUrls: ['drag-pane.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragPaneComponent {
    dragging: any;
    postionStyle: any;
    diffX: number;
    diffY: number;
    @Input() direction: string;
    @Output() dragPaneHResize = new EventEmitter<any>();
    @Output() dragPaneVResize = new EventEmitter<any>();

    onActionMouseDown($event?: any) {
        this.dragging = $event.target.offsetParent;
        if (this.dragging) {
            switch (this.direction) {
                case 'h':
                    this.diffX = $event.clientX - this.dragging ? this.dragging.offsetLeft : 0;
                    this.dragPaneVResize.emit(null)
                    break;
                case 'v':
                    this.diffY = this.dragging.offsetHeight - ($event.clientY - this.dragging.offsetTop);
                    this.dragPaneHResize.emit(this.diffY)
                    break;
                default: break;
            }
        }
    }

    onActionMouseUp($event?: MouseEvent) {
        this.dragging = null;
        console.log('up')

    }
    onActionMouseMove($event?: MouseEvent) {
        if (this.dragging !== null) {
            this.postionStyle = {
                bottom: window.innerHeight - $event.clientY - this.diffY + 'px'
            }
            console.log(this.postionStyle)
        }
    }

}
