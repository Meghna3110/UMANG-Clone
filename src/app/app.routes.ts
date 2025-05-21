import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { ServiceByStateComponent } from './service-by-state/service-by-state.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';

export const routes: Routes = [
    {path: '',component: HomeComponent},
    {path: '**', redirectTo: ''},
    {path: 'services', component: ServiceByStateComponent},
    {path: 'department-details', component: DepartmentDetailsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
