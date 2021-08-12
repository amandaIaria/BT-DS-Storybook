import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinkComponent } from './components/atoms/link/link.component';
import { ButtonComponent } from './components/inputs/button/button.component';
import { HeaderComponent } from './components/organisms/header/header.component';
import { CardComponent } from './components/organisms/card/card.component';
import { SideNavComponent } from './components/organisms/side-nav/side-nav.component';
import { FooterComponent } from './components/organisms/footer/footer.component';
import { AlertComponent } from './components/molecules/alert/alert.component';
import { TextBoxComponent } from './components/inputs/text-box/text-box.component';
import { CheckBoxComponent } from './components/inputs/check-box/check-box.component';
import { DividerComponent } from './components/atoms/divider/divider.component';
import { IconComponent } from './components/atoms/icon/icon.component';
import { PageComponent } from './components/organisms/page/page.component';
import { TestingComponent } from './pages/testing/testing.component';

@NgModule({
  declarations: [
    AppComponent,
    LinkComponent,
    ButtonComponent,
    HeaderComponent,
    CardComponent,
    SideNavComponent,
    FooterComponent,
    AlertComponent,
    TextBoxComponent,
    CheckBoxComponent,
    DividerComponent,
    IconComponent,
    PageComponent,
    TestingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
