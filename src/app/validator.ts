import { AbstractControl, FormControl } from "@angular/forms";

export function passwordValidator(control: FormControl) {
  //provides all fields available under form control / abstract control
  if(control && (control.value !== null || control.value !== undefined)) {
    const regex = new RegExp('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d)[A-Za-z\\d!$%@#£€*?&]{8,}$');
    if(!regex.test(control.value)) {
      return {
        isError: true
      };
    }
  }
  return null;
}

/*
  Here I have a working ngIf / custom password validator,
  (but Regex is from the mars as far as I am concerned).


*/

/*export function pwValidator (control: AbstractControl) {
  if (control && (control.value !== null || control.value !== undefined)) {
    const passwordValue = control.value;
    const pwControl = control.root.get("password");
    if(pwControl) {
      const pwValue = pwControl.value;
      if (null) { //TODO: remove null and replace with condition
        //implement logic
      };
    }
  }
}*/
