import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { TrackingComponent } from './tracking/tracking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,  } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrService } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ThankyouComponent,
    TrackingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      enableHtml: true,
      timeOut: 3000,
      positionClass: 'toast-bottom-left',
      tapToDismiss: true
    }),
    BrowserAnimationsModule,
  ],
  providers: [
    ToastrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
