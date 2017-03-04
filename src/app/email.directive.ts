import { ValidatorFn , AbstractControl } from '@angular/forms';
export function emailValidator(_regex: RegExp): ValidatorFn {
  return (control: AbstractControl) : {[ key: string]: any} =>{
    const name =  control.value;
    const no = _regex.test(name);
    return no ? {'forbiddenName': {name}} : null;
  };
}