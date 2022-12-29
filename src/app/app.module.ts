import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { HeaderComponent } from './header/header.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { GameControlComponent } from './game-control/game-control.component';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { DropdownDirective } from './shared/dropdown.directive';
import { CoursesComponent } from './courses/courses.component';
import { CommonService } from './shared/services/common.service';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { UsersService } from './shared/services/users.service';
import { CounterService } from './shared/services/counter.service';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BowlingComponent } from './bowling/bowling.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CommunicationComponent } from './communication/communication.component';
import { CourseDetailsComponent } from './courses/course-details/course-details.component';
import { PracticeExcercisesComponent } from './practice-excercises/practice-excercises.component';
import { CustomizedPipe } from './shared/pipes/customized.pipe';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { HeaderInterceptor } from './shared/header.interceptor';
import { NotificationBoardComponent } from './notification-board/notification-board.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HideDirective } from './shared/directives/hide.directive';
import { InputComponent } from './practice-excercises/input/input.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    ShoppingListComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    ShoppingEditComponent,
    HeaderComponent,
    RecipeItemComponent,
    CockpitComponent,
    ServerElementComponent,
    GameControlComponent,
    BetterHighlightDirective,
    DropdownDirective,
    CoursesComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    RecipeStartComponent,
    HotelListComponent,
    HotelDetailsComponent,
    ServiceDetailsComponent,
    BowlingComponent,
    SidenavComponent,
    CommunicationComponent,
    CourseDetailsComponent,
    PracticeExcercisesComponent,
    CustomizedPipe,
    FilterPipe,
    NotificationBoardComponent,
    EmployeeDashboardComponent,
    SignInComponent,
    HideDirective,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatMenuModule,
    MatTableModule,
    HttpClientModule,
    MatSidenavModule,
    MatIconModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSelectModule,
    MatDialogModule
  ],
  providers: [
    CommonService,
    {provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true}
  ],
  bootstrap: [AppComponent] 
})
export class AppModule { }
