import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'coffeco-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() public type: string;
  @Input() public color: string;
  @Input() public class: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
