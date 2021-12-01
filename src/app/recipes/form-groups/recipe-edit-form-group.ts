import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Recipe } from "../models/recipe.model";

export class RecipeEditFormGroup {
    private static fb: FormBuilder = new FormBuilder();
    public static recipeEditForm: FormGroup;

    public static initForm(recipe: Recipe | null = null): FormGroup{
        let recipeIngridients = this.fb.array([]);

        if(recipe && recipe['ingridients']){
            for(let ingridient of recipe.ingridients){
                recipeIngridients.push(this.fb.group({
                    'ingridientName': [ingridient.name, Validators.required],
                    'ingridientAmount': [ingridient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]]
                }))
            }
        }

        this.recipeEditForm = this.fb.group({
            'recipeName': [recipe?.name, Validators.required],
            'recipeImagePath': [recipe?.imagePath, [Validators.required, Validators.pattern(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/)]],
            'recipeDescription': [recipe?.description, Validators.required],
            'recipeIngridients': recipeIngridients
        });

        return this.recipeEditForm;
    }

    public static getIngridentArrayControls(): AbstractControl[]{
        return (<FormArray>this.recipeEditForm.get('recipeIngridients')).controls;
    }

    public static addIngridientControl(): FormGroup{
        (<FormArray>this.recipeEditForm.get('recipeIngridients')).push(
            this.fb.group({
                'ingridientName': ['', Validators.required],
                'ingridientAmount': ['', [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]]
            })
        )
        return this.recipeEditForm;
    }
}