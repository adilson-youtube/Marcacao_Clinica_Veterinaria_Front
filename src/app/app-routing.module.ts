import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminGuard } from './servicos/admin.guard';
import { AreasComponent } from './componentes/areas/areas.component';
import { ContactosComponent } from './componentes/contactos/contactos.component';
import { LoginComponent } from './componentes/authentication/login/login.component';
import { AuthUserComponent } from './componentes/authentication/auth-user/auth-user.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { MarcacaoComponent } from './componentes/marcacao/marcacao.component';
import { RegistarProrietarioComponent } from './componentes/proprietario/registar-prorietario/registar-prorietario.component';
import { DadosUsuarioComponent } from './componentes/proprietario/registar-prorietario/dados-usuario/dados-usuario.component';
import { DadosPessoaisComponent } from './componentes/proprietario/registar-prorietario/dados-pessoais/dados-pessoais.component';
import { DadosAnimalComponent } from './componentes/proprietario/registar-prorietario/dados-animal/dados-animal.component';
import { ConfirmacaoComponent } from './componentes/proprietario/registar-prorietario/confirmacao/confirmacao.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'marcacao', component: MarcacaoComponent },
  // { path: 'prorpietario', component: ProprietarioComponent },
  // { path: 'registarUsuario', component: CadastrarComponent },
  { path: 'registarUsuario', component: RegistarProrietarioComponent, children: 
    [
      {path: '', redirectTo: 'acesso', pathMatch: 'full'},
      {path: 'acesso', component: DadosUsuarioComponent},
      {path: 'pessoais', component: DadosPessoaisComponent},
      {path: 'animal', component: DadosAnimalComponent},
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
