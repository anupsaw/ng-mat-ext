import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoModule } from './demo/demo.module';
import { NgErrorModule } from '@sahaz/ng-mat-ext';
import { ReactiveFormsModule } from '@angular/forms';
import 'hammerjs';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerComponent } from './container/container.component';
import { BackdropComponent } from './backdrop/backdrop.component';
import { ExtensionsComponent } from './extensions/extensions.component';
import { MagicalFieldErrorModule } from './demo/magical-field-error/magical-field-error.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    BackdropComponent,
    ExtensionsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoModule,
    NgErrorModule,
    ReactiveFormsModule,
    MagicalFieldErrorModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
