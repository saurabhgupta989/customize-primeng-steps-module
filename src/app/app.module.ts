import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Step1Component } from './steps/step1/step1.component';
import { Step2Component } from './steps/step2/step2.component';
import { Step3Component } from './steps/step3/step3.component';
import { Step4Component } from './steps/step4/step4.component';
import { Step5Component } from './steps/step5/step5.component';
import { Step6Component } from './steps/step6/step6.component';
import { StepsModule } from 'primeng/steps';


@NgModule({
  declarations: [
    AppComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    Step5Component,
    Step6Component
  ],
  imports: [
    BrowserModule,
    StepsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
