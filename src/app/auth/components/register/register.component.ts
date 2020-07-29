import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

//store redux
import { Store, select } from '@ngrx/store';
import { registerAction } from 'src/app/auth/store/actions';
import { isSubmittingSelector } from 'src/app/auth/store/selectors';


@Component({
    selector: 'mc-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
    form: FormGroup
    //streams 
    //$ observe 
    isSubmitting$: Observable<boolean>

    // FormBuilder helps to create form groups
    constructor(private fb: FormBuilder, private store: Store) { }

    ngOnInit(): void {
        this.initializeForm();
        this.initializeValues();
    }

    initializeValues(): void {
        this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
        console.log('isSubmitting$', this.isSubmitting$)
    };


    initializeForm(): void {
        this.form = this.fb.group({
            username: [' ', Validators.required],
            email: [' ', Validators.required],
            password: [' ', Validators.required]
        });
    }

    onSubmit(): void{
        console.log('submit', this.form.value, this.form.valid)
        this.store.dispatch(registerAction(this.form.value))
        
    }
}
