import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// User Modules
import { SharedModule } from '../shared/shared.module';

// Smart Container Components
import { LoginComponent } from './containers/login/login.component';

export const ROUTES: Routes = [
    { path: '', component: LoginComponent}
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        SharedModule
    ],
    declarations: [
        LoginComponent
    ],
    providers: []
})
export class LoginModule {}