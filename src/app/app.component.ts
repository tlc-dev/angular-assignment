import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule, FormsModule, Form } from '@angular/forms';
import { passwordValidator } from './validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-coding-assessment';

  success: any;

  form: FormGroup; //binding form with FormGroup
  constructor(private fb:FormBuilder) {
    this.form = this.fb.group({
      email: ['',Validators.minLength(8)], //each of these properties are a form themselves
      password: ['', passwordValidator]
    })
    this.success = true;
  }

  submit() {
    console.log(this.form.controls.password);
    if(this.form.invalid) {
      this.success = false;
      return;
    }
  }
}
