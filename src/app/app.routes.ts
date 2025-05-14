import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { ServiceByStateComponent } from './service-by-state/service-by-state.component';

export const routes: Routes = [
    {path: '',component: HomeComponent},
    {path: '**', redirectTo: ''},
    {path: 'services', component: ServiceByStateComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
