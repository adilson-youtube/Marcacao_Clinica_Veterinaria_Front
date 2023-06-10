
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatBadgeModule} from '@angular/material/badge';
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatMenuModule} from '@angular/material/menu';

import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
//import { FieldsetModule } from 'primeng/fieldset';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
//import { FileUploadModule } from 'primeng/fileupload';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule} from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
//import { MultiSelectModule } from 'primeng/multiselect';

import { ToastModule } from 'primeng/toast';
//import { RatingModule} from 'primeng/rating';
import { SliderModule } from 'primeng/slider';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmationService } from 'primeng/api';
//import { CalendarModule } from 'primeng/calendar';
import { ContextMenuModule} from 'primeng/contextmenu';
//import { ProgressBarModule} from 'primeng/progressbar';
import { InputNumberModule} from 'primeng/inputnumber';
//import { RadioButtonModule } from 'primeng/radiobutton';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
//import { InputTextareaModule } from 'primeng/inputtextarea';
import {GalleriaModule} from 'primeng/galleria';

import { MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api'
import { CardModule } from 'primeng/card';
//import { StepsModule } from 'primeng/steps';
//import { ChartModule } from 'primeng/chart';
import { PanelModule } from 'primeng/panel';
import { SidebarModule } from 'primeng/sidebar';
import { PasswordModule } from 'primeng/password';
import { InputMaskModule} from 'primeng/inputmask';
//import { SplitButtonModule } from 'primeng/splitbutton';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

//---- componentes - Sistema ------
import { AppComponent } from './app.component';
import { NavComponent } from './componentes/comum/nav/nav.component';
import { AreasComponent } from './componentes/areas/areas.component';
import { AuthenticationService } from './servicos/authentication.service';
import { HeaderComponent } from './componentes/comum/header/header.component';
import { FooterComponent } from './componentes/comum/footer/footer.component';
import { ContactosComponent } from './componentes/contactos/contactos.component';
import { LoginComponent } from './componentes/authentication/login/login.component';
import { DetalhesComponent } from './componentes/contactos/detalhes/detalhes.component';
import { RecoveryComponent } from './componentes/authentication/recovery/recovery.component';
import { RegisterComponent } from './componentes/authentication/register/register.component';
import { AuthUserComponent } from './componentes/authentication/auth-user/auth-user.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { CarrosselComponent } from './componentes/carrossel/carrossel.component';
import { CartoesComponent } from './componentes/cartoes/cartoes.component';

@NgModule({
  declarations: [
    AppComponent,
    AreasComponent,
    DetalhesComponent,
    ContactosComponent,
    
    NavComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    AuthUserComponent,
    RecoveryComponent,
    RegisterComponent,
    InicioComponent,
    CarrosselComponent,
    CartoesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    ButtonModule,
    // QuillModule.forRoot(),
    FormsModule,
    FlexLayoutModule,
    InputTextModule,
    MatCardModule,
    DropdownModule,
    //MultiSelectModule,
   // FileUploadModule,
   // FieldsetModule,
    TableModule,
    DialogModule,
   // RadioButtonModule,
    ConfirmDialogModule,
    ToastModule,
    ToolbarModule,
  //  CalendarModule,
    SliderModule,
    ContextMenuModule,
   // ProgressBarModule,
   // RatingModule,
    InputNumberModule,
  //  InputTextareaModule,
    HttpClientModule,
  //  ChartModule,
    CardModule,
    MatGridListModule,
    PasswordModule,
    //SplitButtonModule,
    SidebarModule,
    //StepsModule,
    PanelModule,
    InputMaskModule,
    MatMenuModule,
    GalleriaModule
  ],
  providers: [ConfirmationService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
