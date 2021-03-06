import { NgModule } from '@angular/core';
import { NzPopoverDirective } from './nz-popover.directive';
import { NzPopoverComponent } from './nz-popover.component';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '../core/overlay/index';

@NgModule({
  entryComponents: [ NzPopoverComponent ],
  exports        : [ NzPopoverDirective, NzPopoverComponent ],
  declarations   : [ NzPopoverDirective, NzPopoverComponent ],
  imports        : [ CommonModule, OverlayModule ]
})

export class NzPopoverModule {
}
