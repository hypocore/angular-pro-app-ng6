import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// component
import { AuthFormComponent } from './components/auth-form/auth-form.component';

// services
import { AuthService } from '../shared/services/auth/auth.service'
import { ModuleWithProviders } from '@angular/compiler/src/core';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [
        AuthFormComponent
    ],
    providers: [],
    exports: [
        AuthFormComponent
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                AuthService
            ]
        }
    }
}