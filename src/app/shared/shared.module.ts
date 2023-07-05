import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './components/footer/footer.component';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { HighlightDirective } from './directives/highlight/highlight.directive';

import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from '../material/material.module';

import {MatBadgeModule} from '@angular/material/badge';


@NgModule({
  declarations: [    
    HighlightDirective,
    ExponentialPipe,
    FooterComponent,
    
  ],
  exports:[
    HighlightDirective,
    ExponentialPipe,
    FooterComponent,
      MatIconModule,
      MaterialModule,
      MatBadgeModule

  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatIconModule,
    MatBadgeModule
  ]
})
export class SharedModule { }
