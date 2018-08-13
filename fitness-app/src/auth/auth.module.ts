import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// third-party modules
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// User Modules
import { SharedModule } from './shared/shared.module';

export const ROUTES: Routes = [
    {
        path: 'auth',
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'login' },
            { path: 'login', loadChildren: './login/login.module#LoginModule' },
            { path: 'register', loadChildren: './register/register.module#RegisterModule' }
        ]
    }
];

export const firebaseConfig: FirebaseAppConfig ={
    apiKey: "AIzaSyDqH-D775cEo8oBgOpQSBiPqKTJnXkqsp8",
    authDomain: "fitness-app-813e7.firebaseapp.com",
    databaseURL: "https://fitness-app-813e7.firebaseio.com",
    projectId: "fitness-app-813e7",
    storageBucket: "fitness-app-813e7.appspot.com",
    messagingSenderId: "327858215288"
}

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        SharedModule.forRoot()

    ],
    declarations: [],
    providers: []
})

export class AuthModule {

}