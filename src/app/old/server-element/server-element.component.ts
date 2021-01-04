import {
  AfterContentInit,
  AfterViewInit,
  Component, ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterViewInit, AfterContentInit {

  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('conetentParagraph') paragraph: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
    console.log('Text content on the component: ' + this.header.nativeElement.textContent);
    console.log('Text content on the paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  ngDoCheck(): void {
  }

  ngAfterContentInit(): void {
    console.log('Text content on the paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterViewInit(): void {
    console.log('Text content on the component: ' + this.header.nativeElement.textContent);
  }
}
