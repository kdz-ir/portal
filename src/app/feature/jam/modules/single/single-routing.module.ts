import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SportInsuranceGuard } from './guards/sport-insurance.guard';
import { SingleHomePageComponent } from './pages/single-home-page/single-home-page.component';
import { SportInsurencePageComponent } from './pages/sport-in-surence-page/sport-insurence-page.component';
import { sportInsuranceResolver } from './resolvers/sport-insurance-status-reslover';
import { SingleRegisterPageComponent } from './pages/single-register-page/single-register-page.component';
import { DoubleRegisterPageComponent } from './pages/double-register-page/double-register-page.component';
import { IndividualsResolver, SingleRegisteredStatusResolver } from './resolvers/single-registered-status-resolver';
import { FieldNameResolver, SubFieldNameResolver } from '../../resolvers/field-name-resolver';

const routes: Routes = [{
  path: '',
  canActivate: [SportInsuranceGuard],
  children: [
    { path: '', component: SingleHomePageComponent },
    {
      path: ':field/:subField',
      component: SingleRegisterPageComponent,
      resolve: {
        registeredStatus: SingleRegisteredStatusResolver,
        sportName: FieldNameResolver,
        subFieldName: SubFieldNameResolver
      }
    },
    {
      path: 'double/:field/:subField',
      component: DoubleRegisterPageComponent,
      resolve: {
        sportName: FieldNameResolver,
        subFieldName: SubFieldNameResolver,
        individuals: IndividualsResolver,
        registeredStatus: SingleRegisteredStatusResolver,
      }
    },
    {
      path: 'sport-insurence',
      component: SportInsurencePageComponent,
      resolve: { sportInsurance: sportInsuranceResolver }
    }
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingleRoutingModule { }
