import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinkComponent } from './components/link/link.component';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { AlertComponent } from './components/alert/alert.component';
import { GridComponent } from './components/grid/grid.component';
import { TextBoxComponent } from './components/inputs/text-box/text-box.component';
import { CheckBoxComponent } from './components/inputs/check-box/check-box.component';
import { DividerComponent } from './components/divider/divider.component';
import { IconComponent } from './components/icon/icon.component';
import { PageComponent } from './components/page/page.component';
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
    GridComponent,
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
