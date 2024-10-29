import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreakfastComponent } from './breakfast/breakfast.component'; // Импортируйте компонент для завтраков
import { LunchComponent } from './lunch/lunch.component'; // Импортируйте компонент для обедов
import { DinnerComponent } from './dinner/dinner.component'; // Импортируйте компонент для ужинов
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component'; // Импортируйте компонент для деталей рецепта

const routes: Routes = [
  { path: '', redirectTo: '/breakfast/all', pathMatch: 'full' },
  { path: 'breakfast/all', component: BreakfastComponent },
  { path: 'lunch/:difficulty', component: LunchComponent },
  { path: 'dinner/:difficulty', component: DinnerComponent },
  { path: 'recipe/:id', component: RecipeDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
