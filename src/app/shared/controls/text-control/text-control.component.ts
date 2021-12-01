import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'coffeco-text-control',
  templateUrl: './text-control.component.html',
  styleUrls: ['./text-control.component.css']
})
export class TextControlComponent implements OnInit {
  @Input() public id?: string;
  @Input() public label: string;
  @Input() public name: string;
  @Input() public type: string = "text";
  @Input() public class?: string;
  @Input() public placeholder?: string;
  @Input() public mode: string = 'template';

  constructor() { }

  ngOnInit(): void {
  }

}
