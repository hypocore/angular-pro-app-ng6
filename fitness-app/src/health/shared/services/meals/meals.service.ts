import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Store } from 'store';

import { Observable, Subject } from 'rxjs';
import { AuthService } from '../../../../auth/shared/services/auth/auth.service';
import { tap, map } from 'rxjs/operators';

export interface Meal {
    name: string,
    ingredients: string[],
    timestamp: number,
    $key: string,
    $exists: () => boolean
}

@Injectable()
export class MealsService {

    meals$: Observable<Meal[]> = this.db.list<Meal>(`meals/${this.uid}`).snapshotChanges()
    .pipe(
        map(mealArray => 
            mealArray.map(meal => ({ $key: meal.key, ...meal.payload.val() }))
          ),
        tap(mealArray => this.store.set('meals', mealArray))
    );
    
    constructor(
        private store: Store,
        private db: AngularFireDatabase,
        private authService: AuthService
        ) {}

    get uid() {
    return this.authService.user.uid;
    }

    addMeal(meal: Meal){
        return this.db.list(`meals/${this.uid}`).push(meal);
    }

    removeMeal(key: string) {
        return this.db.list(`meals/${this.uid}`).remove(key);
    }
}