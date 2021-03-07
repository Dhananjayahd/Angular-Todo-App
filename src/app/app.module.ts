import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodosFormComponent } from './components/todos-form/todos-form.component';
import { HeaderComponent } from './layout/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodosFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule, 
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
