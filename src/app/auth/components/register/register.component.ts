import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

//store redux
import { Store } from '@ngrx/store';
import { registerAction } from 'src/app/auth/store/actions';

@Component({
    selector: 'mc-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
    form: FormGroup

    // FormBuilder helps to create form groups
    constructor(private fb: FormBuilder, private store: Store) { }

    ngOnInit(): void {
        this.initializeForm();
    }
    initializeForm(): void {
        alert("hello")
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
