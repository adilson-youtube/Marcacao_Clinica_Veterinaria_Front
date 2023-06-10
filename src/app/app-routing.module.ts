import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminGuard } from './servicos/admin.guard';
import { AreasComponent } from './componentes/areas/areas.component';
import { ContactosComponent } from './componentes/contactos/contactos.component';
import { LoginComponent } from './componentes/authentication/login/login.component';
import { AuthUserComponent } from './componentes/authentication/auth-user/auth-user.component';
import { InicioComponent } from './componentes/inicio/inicio.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'contactos', component: ContactosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dsics-admin', component: AuthUserComponent, canActivate: [AdminGuard], children: [
      { path: '', redirectTo: 'contactos', pathMatch: 'full'},
      { path: 'contactos', component: ContactosComponent },
      { path: 'areas', component: AreasComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
