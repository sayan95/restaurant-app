import { FormGroup } from "@angular/forms";

const validationMessages = [
    {error:'required', formControlName:['recipeName'], message: 'Please enter recipe name'},
    {error:'required', formControlName:['recipeImagePath'], message: 'Please enter recipe image url'},
    {error:'pattern', formControlName:['recipeImagePath'], message: 'Please enter valid url'},
    {error:'required', formControlName:['recipeDescription'], message: 'Please enter recipe description'},
];

export const validationMessage = (formControlName: string, formGroup: FormGroup ): string => {
    if(formGroup && formGroup.get(formControlName)){
        for(let error of validationMessages){
            if((!error.formControlName || error.formControlName.length === 0 || error.formControlName.includes(formControlName))
                && formGroup.get(formControlName).hasError(error.error)
            ){ 
                return error.message;
            }
        }
    }

    return '';
}

