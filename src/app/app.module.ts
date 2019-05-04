import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// primeng components
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TooltipModule } from 'primeng/tooltip';
import { BlockUIModule } from 'primeng/blockui';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/components/common/messageservice';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuModule } from 'primeng/menu';
import { TabMenuModule } from 'primeng/tabmenu';
import { DropdownModule } from 'primeng/dropdown';
import { MenubarModule } from 'primeng/menubar';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { CheckboxModule } from 'primeng/checkbox';
import { EditorModule } from 'primeng/editor';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputMaskModule } from 'primeng/inputmask';

// app components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { MenuComponent } from './components/template/menu/menu.component';
import { TemplateComponent } from './components/template/template/template.component';
import { AuthGuard } from './routes/authguard/auth.guard';
import { HomeComponent } from './components/template/home/home.component';
import { ErrorMsgComponent } from './components/messages/error-msg/error-msg.component';
import { HttpConfigInterceptor } from './components/interceptors/http-config.interceptor';
import { TableFrontComponent } from './components/tables/table-front/table-front.component';
import { OutletComponent } from './components/outlet/outlet.component';
import { ConfirmDialogComponent } from './components/dialogs/confirm-dialog/confirm-dialog.component';
import { FormDialogComponent } from './components/dialogs/form-dialog/form-dialog.component';

// components
import { PubSubModule } from 'angular7-pubsub';

//router
import { routing } from './routes/app-route';

//keycloak
import { KeycloakService, KeycloakAngularModule } from 'keycloak-angular';
import { initializer } from './utils/app-init';

//pages
import { TesteComponent } from './pages/teste/teste.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { TabMenuComponent } from './components/template/tab-menu/tab-menu.component';
import { CadastrarEmpresaComponent } from './pages/empresa/empresa/cadastrar-empresa/cadastrar-empresa.component';
import { ListaProdutoComponent } from './pages/empresa/produto/lista-produto/lista-produto.component';
import { CadastrarProdutoComponent } from './pages/empresa/produto/cadastrar-produto/cadastrar-produto.component';
import { ListaFuncionalidadeComponent } from './pages/empresa/funcionalidade/lista-funcionalidade/lista-funcionalidade.component';
import { CadastrarFuncionalidadeComponent } from './pages/empresa/funcionalidade/cadastrar-funcionalidade/cadastrar-funcionalidade.component';
import { ListaEmpresaComponent } from './pages/empresa/empresa/lista-empresa/lista-empresa.component';
import { ListaFornecedorComponent } from './pages/empresa/fornecedor/lista-fornecedor/lista-fornecedor.component';
import { ListaPlanoDeTesteComponent } from './pages/plano-de-teste/plano-de-teste/lista-plano-de-teste/lista-plano-de-teste.component';
import { CrudOutletComponent } from './components/crud-outlet/crud-outlet.component';
import { CadastrarFornecedorComponent } from './pages/empresa/fornecedor/cadastrar-fornecedor/cadastrar-fornecedor.component';
import { CadastrarPlanoDeTesteComponent } from './pages/plano-de-teste/plano-de-teste/cadastrar-plano-de-teste/cadastrar-plano-de-teste.component';
import { FormComponent } from './components/template/form/form.component';
import { ProjetoDeTesteComponent } from './pages/projeto-de-teste/projeto-de-teste/projeto-de-teste.component';
import { CadastrarCasoDeTesteComponent } from './pages/projeto-de-teste/caso-de-teste/cadastrar-caso-de-teste/cadastrar-caso-de-teste.component';
import { ListaCasoDeTesteComponent } from './pages/projeto-de-teste/caso-de-teste/lista-caso-de-teste/lista-caso-de-teste.component';
import { CadastrarPassoDeTesteComponent } from './pages/projeto-de-teste/passo-de-teste/cadastrar-passo-de-teste/cadastrar-passo-de-teste.component';
import { ListaPassoDeTesteComponent } from './pages/projeto-de-teste/passo-de-teste/lista-passo-de-teste/lista-passo-de-teste.component';
import { ListaProjetoDeTesteComponent } from './pages/projeto-de-teste/projeto-de-teste/lista-projeto-de-teste/lista-projeto-de-teste.component';
import { CadastrarProjetoDeTesteComponent } from './pages/projeto-de-teste/projeto-de-teste/cadastrar-projeto-de-teste/cadastrar-projeto-de-teste.component';
import { CadastrarSuiteDeTesteComponent } from './pages/projeto-de-teste/suite-de-teste/cadastrar-suite-de-teste/cadastrar-suite-de-teste.component';
import { ListaSuiteDeTesteComponent } from './pages/projeto-de-teste/suite-de-teste/lista-suite-de-teste/lista-suite-de-teste.component';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard/dashboard.component';
import { CadastrarBaselineComponent } from './pages/plano-de-teste/baseline/cadastrar-baseline/cadastrar-baseline.component';
import { ListaBaselineComponent } from './pages/plano-de-teste/baseline/lista-baseline/lista-baseline.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    TemplateComponent,
    TesteComponent,
    HomeComponent,
    FooterComponent,
    ErrorMsgComponent,
    TabMenuComponent,
    CadastrarEmpresaComponent,
    ListaProdutoComponent,
    CadastrarProdutoComponent,
    ListaFuncionalidadeComponent,
    CadastrarFuncionalidadeComponent,
    ListaEmpresaComponent,
    ListaFornecedorComponent,
    ListaPlanoDeTesteComponent,
    OutletComponent,
    TableFrontComponent,
    CrudOutletComponent,
    CadastrarFornecedorComponent,
    CadastrarPlanoDeTesteComponent,
    FormComponent,
    ProjetoDeTesteComponent,
    CadastrarCasoDeTesteComponent,
    ListaCasoDeTesteComponent,
    CadastrarPassoDeTesteComponent,
    ListaPassoDeTesteComponent,
    ListaProjetoDeTesteComponent,
    CadastrarProjetoDeTesteComponent,
    CadastrarSuiteDeTesteComponent,
    ListaSuiteDeTesteComponent,
    DashboardComponent,
    CadastrarBaselineComponent,
    ListaBaselineComponent,
    ConfirmDialogComponent,
    FormDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    KeycloakAngularModule,
    PanelModule,
    routing,
    HttpClientModule,
    TableModule,
    ButtonModule,
    EditorModule,
    OverlayPanelModule,
    ConfirmDialogModule,
    InputSwitchModule,
    InputMaskModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    MessageModule,
    AutoCompleteModule,
    TooltipModule,
    BlockUIModule,
    ProgressSpinnerModule,
    ToastModule,
    BreadcrumbModule,
    MenuModule,
    TabMenuModule,
    DropdownModule,
    MenubarModule,
    TieredMenuModule,
    CheckboxModule,
    PubSubModule.forRoot()
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService]

    },
   /* {
      provide: HTTP_INTERCEPTORS,
      useClass: KeycloakBearerInterceptor,
      multi: true
    },*/
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true
    },
    MessageService,
    AuthGuard,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
