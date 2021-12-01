import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'coffeco-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.css']
})
export class ButtonGroupComponent implements OnInit {
  @Input() public class: string;
  constructor() { }

  ngOnInit(): void {
  }

}
