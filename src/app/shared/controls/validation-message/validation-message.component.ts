import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { validationMessage } from '../../validationMessage';

@Component({
  selector: 'coffeco-error',
  templateUrl: './validation-message.component.html',
  styleUrls: ['./validation-message.component.css']
})
export class ValidationMessageComponent implements DoCheck {
  @Input() public errorFormGroup: FormGroup;
  @Input() public control: string;
  public errorMessage: string;

  constructor() { }

  ngDoCheck(){
    this.getErrorMessage();
  }

  private getErrorMessage(): void{
    this.errorMessage = validationMessage(this.control, this.errorFormGroup);
  }
}
