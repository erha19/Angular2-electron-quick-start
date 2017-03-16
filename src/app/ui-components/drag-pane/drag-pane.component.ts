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
    diffX: number;
    diffY: number;
    @Input() direction: string;
    @Input() customerPosition: any;
    @Output() dragPaneHResize = new EventEmitter<any>();
    @Output() dragPaneVResize = new EventEmitter<any>();

    onActionMouseDown($event?: any) {
        this.dragging = $event.target.offsetParent;
        if (this.dragging) {
            switch (this.direction) {
                case 'h':
                    this.diffX = $event.clientX - this.dragging ? this.dragging.offsetLeft : 0;
                    this.dragPaneVResize.emit({ direction: 'h', value: window.innerWidth - $event.clientX - this.diffX, diff: this.diffX })
                    break;
                case 'v':
                    this.diffY = this.dragging.offsetHeight - ($event.clientY - this.dragging.offsetTop);
                    this.dragPaneHResize.emit({ direction: 'v', value: window.innerHeight - $event.clientY - this.diffY, diff: this.diffY })
                    break;
                default: break;
            }
        }
    }

    // onActionMouseUp($event?: MouseEvent) {
    //     this.dragging = null;
    //     console.log('up')

    // }
    // onActionMouseMove($event?: MouseEvent) {
    //     if (this.dragging !== null) {
    //         this.postionStyle = {
    //             bottom: window.innerHeight - $event.clientY - this.diffY + 'px'
    //         }
    //         console.log(this.postionStyle)
    //     }
    // }

}
