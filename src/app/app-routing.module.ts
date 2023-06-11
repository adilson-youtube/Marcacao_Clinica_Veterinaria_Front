import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminGuard } from './servicos/admin.guard';
import { AreasComponent } from './componentes/areas/areas.component';
import { ContactosComponent } from './componentes/contactos/contactos.component';
import { LoginComponent } from './componentes/authentication/login/login.component';
import { AuthUserComponent } from './componentes/authentication/auth-user/auth-user.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { MarcacaoComponent } from './componentes/marcacao/marcacao.component';
import { ProprietarioComponent } from './componentes/proprietario/proprietario.component';
import { CadastrarComponent } from './componentes/usuario/cadastrar/cadastrar.component';
import { AnimalComponent } from './componentes/proprietario/animal/animal.component';
import { ConfirmacaoComponent } from './componentes/usuario/confirmacao/confirmacao.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'marcacao', component: MarcacaoComponent },
  { path: 'prorpietario', component: ProprietarioComponent },
  // { path: 'registarUsuario', component: CadastrarComponent },
  { path: 'registarUsuario', component: CadastrarComponent, children: 
    [
      {path: '', redirectTo: 'proprietario', pathMatch: 'full'},
      {path: 'proprietario', component: ProprietarioComponent},
      {path: 'animal', component: AnimalComponent},
      {path: 'confirmacao', component: ConfirmacaoComponent}
    ]
  },
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
