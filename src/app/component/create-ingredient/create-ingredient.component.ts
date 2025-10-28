import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import {SharedDataService} from "../../service/shared-data.service";
import {AsyncPipe, CommonModule} from "@angular/common";

@Component({
  selector: 'create-ingredient-component',
  templateUrl: './create-ingredient.component.html',
  standalone: true,
  imports: [
    AsyncPipe,
    ReactiveFormsModule,
    CommonModule
  ],
  styleUrls: ['./create-ingredient.component.sass']
})
export class CreateIngredientComponent {
  myForm: FormGroup;

  nameValid$: Observable<boolean>;
  weightValid$: Observable<boolean>;
  formValid$: Observable<boolean>;


  // proteinValid$: Observable<boolean>;
  // fatValid$: Observable<boolean>;
  // carbohydratesValid$: Observable<boolean>;

  constructor(
    private _sharedDataService: SharedDataService,
    private fb: FormBuilder
  ) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      weight: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(1)]]

    });

    // Observable for each field's validity
    this.nameValid$ = this.myForm.get('name')!.statusChanges.pipe(
      startWith(this.myForm.get('name')!.status),
      map(status => status === 'VALID')
    );

    this.weightValid$ = this.myForm.get('weight')!.statusChanges.pipe(
      startWith(this.myForm.get('weight')!.status),
      map(status => status === 'VALID')
    );

    // Observable for overall long term validity
    this.formValid$ = this.myForm.statusChanges.pipe(
      startWith(this.myForm.status),
      map(status => status === 'VALID')
    );
  }


  ngOnInit() {

    // Optional: debug subscriptions
    this.nameValid$.subscribe(valid => console.log('Name valid:', valid));
    this.weightValid$.subscribe(valid => console.log('Weight valid:', valid));
    this.formValid$.subscribe(valid => console.log('Form valid:', valid));
  }

  submitForm() {
    if (this.myForm.valid) {
      console.log('Form submitted:', this.myForm.value);
    } else {
      console.log('Form is invalid!');
    }
  }

  changeMessage() {
    this._sharedDataService.changeBehaviouralSubjectMessage('Updated from create ingredient component: Behavioural Subject');
  }
}
