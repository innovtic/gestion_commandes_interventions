import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommandeComponent } from './commande/commande.component';
import { HeaderComponent } from './commande/header/header.component';
import { FooterComponent } from './commande/footer/footer.component';
import { NavComponent } from './commande/nav/nav.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import { TablefiltreComponent } from './commande/tablefiltre/tablefiltre.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AutoCompleteModule, MultiSelectModule} from 'primeng/primeng';
import {SliderModule} from 'primeng/slider';
import {DropdownModule} from 'primeng/dropdown';
import { DialogComponent } from './commande/dialog/dialog.component';
import {DialogModule} from 'primeng/dialog';
import {TabMenuModule} from 'primeng/tabmenu';
import { LoginComponent } from './shared/login/login.component';
import {CommandeService} from './service/commande/commande.service';

@NgModule({
  declarations: [
    AppComponent,
    CommandeComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    TablefiltreComponent,
    DialogComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, HttpClientModule,MenubarModule,ButtonModule,TableModule,BrowserAnimationsModule,AutoCompleteModule,
    SliderModule,DropdownModule,MultiSelectModule,DialogModule,TabMenuModule

  ],
  providers: [CommandeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
