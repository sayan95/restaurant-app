import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'coffeco-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent implements OnInit {
  @Input() public id: string;
  @Input() public label: string;
  @Input() public name: string;
  @Input() public class: string;
  @Input() public ngClass: string;
  @Input() public placeholder: string;
  @Input() public rows: string;
  @Input() public mode: string = 'template';
    
  constructor() { }

  ngOnInit() {
  }

}
