import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WarningComponent } from './warning/warning.component';
import { SuccessComponent } from './success/success.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { GamecomponentComponent } from './gamecomponent/gamecomponent.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { AppBasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight.directive';
import { NewAccountComponent } from './new-account/new-account.component';
import { UpdateAccountComponent } from './update-account/update-account.component';
import { HeaderComponent } from './header/header.component';
import { UserActivityComponent } from './user-activity/user-activity.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningComponent,
    SuccessComponent,
    CockpitComponent,
    ServerElementComponent,
    GamecomponentComponent,
    OddComponent,
    EvenComponent,
    AppBasicHighlightDirective,
    BetterHighlightDirective,
    NewAccountComponent,
    UpdateAccountComponent,
    HeaderComponent,
    UserActivityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
