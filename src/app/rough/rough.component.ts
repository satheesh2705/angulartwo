import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rough',
  templateUrl: './rough.component.html',
  styleUrl: './rough.component.scss'
})
export class RoughComponent {

  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      textField: ['', Validators.required], // Required validator
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log('Form Submitted!', this.myForm.value);
    } else {
      console.log('Form is not valid!');
    }
  }

}