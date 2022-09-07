import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { TestComponent } from './test/test.component';
import { ResultsComponent } from './results/results.component';
import { EditTestComponent } from './edit-test/edit-test.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'test', component: TestComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'edit-test', component: EditTestComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TestComponent,
    ResultsComponent,
    EditTestComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
