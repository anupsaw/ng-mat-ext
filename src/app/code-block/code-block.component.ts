import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, Input } from '@angular/core';
import codeHighlighter from 'highlight.js/lib/highlight';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
codeHighlighter.registerLanguage('typescript', typescript);
codeHighlighter.registerLanguage('xml', xml);


@Component({
  selector: 'app-code-block',
  templateUrl: './code-block.component.html',
})
export class CodeBlockComponent implements OnInit {

  @Input() code: string;
  @Input() type: 'typescript' | 'xml' | 'html' | 'javascript' = 'typescript';

  @ViewChild('codeBlock', { static: true }) codeBlock: ElementRef;

  constructor(private ele: ElementRef) { }

  ngOnInit() {
    setTimeout(() => codeHighlighter.highlightBlock($(this.codeBlock.nativeElement)[0]));

  }

}
