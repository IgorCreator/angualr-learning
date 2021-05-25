import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {ServerComponent} from './old/server/server.component';
import {ServersComponent} from './old/servers/servers.component';
import {WarningAlertComponent} from './old/warning-alert/warning-alert.component';
import {SuccessAlertComponent} from './old/success-alert/success-alert.component';
import {ServerElementComponent} from './old/server-element/server-element.component';
import {CockpitComponent} from './old/cockpit/cockpit.component';
import {GamecontrolComponent} from './old/gamecontrol/gamecontrol.component';
import {OddComponent} from './old/odd/odd.component';
import {EvenComponent} from './old/even/even.component';
import {BasicDirectiveComponent} from './old/basic-directive/basic-directive.component';
import {BasicHighlightDirective} from './old/shared/basic-highlight.directive';
import {BetterHighlightDirective} from './old/shared/better-highlight.directive';
import {UnlessDirective} from './old/shared/unless.directive';
import {LoggingService} from './old/shared/logging.service';
import {AccountsService} from './old/shared/accounts.service';
import {NewAccountComponent} from './old/new-account/new-account.component';
import {AccountComponent} from './old/account/account.component';
import {AppRoutingProjModule} from './old/routing/app-routing-proj.module';
import {BasicFormComponent} from './forms-td/basic-form/basic-form.component';
import {BasicFormReactiveComponent} from './forms-reactive/basic-form-reactive/basic-form-reactive.component';
import {FormTdProjectExComponent} from './form-td-project-ex/form-td-project-ex.component';
import {NameValidatorDirective} from './form-td-project-ex/name-validator.directive';
import {EmailValidatorDirective} from './form-td-project-ex/email-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    ServerComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    ServerElementComponent,
    CockpitComponent,
    GamecontrolComponent,
    OddComponent,
    EvenComponent,
    BasicDirectiveComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    AccountComponent,
    NewAccountComponent,
    BasicFormComponent,
    BasicFormReactiveComponent,
    FormTdProjectExComponent,
    EmailValidatorDirective,
    NameValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingProjModule
  ],
  providers: [AccountsService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
