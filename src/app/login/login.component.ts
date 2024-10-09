import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {

  private id! : number;
  @ViewChild('formDirective') private formDirective!: NgForm;

  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.id= this.userService.getUserData().length + 1
    this.loginForm = this.fb.group({
      id : this.id,
      userName: ['', [Validators.required, Validators.minLength(4)]],
      userNumber: ['', [Validators.required, Validators.minLength(4)]],
      userGender: ['', [Validators.required]],
      userEmail: ['', [Validators.required, Validators.minLength(5)]],
      hobbies: this.fb.array([]),
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.loginForm.patchValue({id: this.id++});
      // this.loginForm.getRawValue()
      this.userService.setUserData(this.loginForm.value);
      console.log('Form Submitted', this.id);
      // this.currIndex++;
      this.formDirective.resetForm();
    }
  }

  viewUserDetail() {
    this.router.navigate(['/user']);
  }

  addHobbies() {
    const hobbies = this.loginForm.controls['hobbies'] as FormArray;
    hobbies.push(
      this.fb.group({
        hobby: ['', [Validators.required]],
      })
    );
  }

  ngOnInit() {
    this.ensureHobbyField();
  }

  ensureHobbyField() {
    const hobbies = this.hobbies;
    if (hobbies.length === 0) {
      this.addHobbies();
    }
  }

  removeHobby(index: number) {
    if (this.hobbies.length > 1) {
      this.hobbies.removeAt(index);
    } else {
      alert("At least one hobby must remain.");
    }
  }

  get hobbies(): FormArray {
    return this.loginForm.get('hobbies') as FormArray;
  }

  


}
