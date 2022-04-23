import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { ItemComponent } from './components/item/item.component';
import { ItemGridComponent } from './components/item-grid/item-grid.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarTitleComponent } from './components/navbar-title/navbar-title.component';
import { NavbarMenuComponent } from './components/navbar-menu/navbar-menu.component';
import { NavbarMenuItemComponent } from './components/navbar-menu-item/navbar-menu-item.component';
import { ProgressComponent } from './components/progress/progress.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { ShoppingMultiplierComponent } from './components/shopping-multiplier/shopping-multiplier.component';
import {ShoppingBalanceComponent} from "./components/shopping-balance/shopping-balance.component";
import { GameComponent } from './components/game/game.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    ItemComponent,
    ItemGridComponent,
    ProgressBarComponent,
    NavbarComponent,
    FooterComponent,
    NavbarTitleComponent,
    NavbarMenuComponent,
    NavbarMenuItemComponent,
    ProgressComponent,
    ShoppingBalanceComponent,
    ShoppingComponent,
    ShoppingMultiplierComponent,
    GameComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
