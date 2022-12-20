import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { CoursesComponent } from './courses/courses.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { BowlingComponent } from './bowling/bowling.component';
import { CommunicationComponent } from './communication/communication.component';
import { PracticeExcercisesComponent } from './practice-excercises/practice-excercises.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';

const routes: Routes = [
  {path: '', component: CoursesComponent},
  {path: 'employeeDashboard', component: EmployeeDashboardComponent, children: [
    {path: '', component: RecipeStartComponent},
    {path: ':id', component: RecipeDetailComponent}
  ]},
  // {path: 'shopping', component: ShoppingListComponent},
  {path: 'shopping',
    loadChildren: () => import('./shopping-list/shopping-list.module').then(mod => mod.ShoppingListModule)
  },
  {path: 'communication', component: CommunicationComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'hotels', component: HotelListComponent},
  {path: 'hotel-details/:id', component: HotelDetailsComponent},
  {path: 'bowling', component: BowlingComponent},
  {path: 'excercises', component: PracticeExcercisesComponent, title: 'Excercies'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
