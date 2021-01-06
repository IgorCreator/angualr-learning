import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {ServerComponent} from './old/server/server.component';
import {ServersComponent} from './old/servers/servers.component';
import { WarningAlertComponent } from './old/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './old/success-alert/success-alert.component';
import { ServerElementComponent } from './old/server-element/server-element.component';
import { CockpitComponent } from './old/cockpit/cockpit.component';
import { GamecontrolComponent } from './old/gamecontrol/gamecontrol.component';
import { OddComponent } from './old/odd/odd.component';
import { EvenComponent } from './old/even/even.component';
import { BasicDirectiveComponent } from './old/basic-directive/basic-directive.component';
import {BasicHighlightDirective} from './shared/basic-highlight.directive';
import {BetterHighlightDirective} from './shared/better-highlight.directive';
import { UnlessDirective } from './shared/unless.directive';

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
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
