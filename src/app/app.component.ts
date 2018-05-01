import { Component, OnInit, ElementRef, ViewChild, Renderer2, ViewEncapsulation } from '@angular/core';
import { Steps } from 'primeng/steps';
import { stripSummaryForJitFileSuffix } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  items;
  activeIndex = 0;
  @ViewChild('stepsDiv') elRef2: ElementRef;

  ngOnInit() {
    this.items = [{ label: 'step1' }, { label: 'step2' }, { label: 'step3' }, { label: 'step4' },
    { label: 'step5' }, { label: 'step6' }];
  }

  constructor(private renderer: Renderer2) { }

  nextStepPlease() {
    this.activeIndex++;
    //You need to override steps folder in below path to resolve error in this file
    //path =>  project-name\node_modules\primeng\components\
    Steps.prototype.itemClick(event, Steps.prototype, this.activeIndex, true, true);
    let lists = this.elRef2.nativeElement.querySelectorAll('li');
    for (let i = 0; i <= this.activeIndex - 1; i++) {
      this.renderer.setStyle(lists[i], 'background', 'green');
      this.renderer.setStyle(lists[i], 'opacity', '1');
      this.renderer.addClass(lists[i], 'anyClassIfWantToAdd');
    }
    this.renderer.setStyle(lists[this.activeIndex], 'background', '#186ba0');
    this.renderer.setStyle(lists[this.activeIndex], 'opacity', '1');

  }

}
