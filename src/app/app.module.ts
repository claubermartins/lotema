import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopBarComponent } from './header/top-bar/top-bar.component';
import { HeaderMiddleComponent } from './header/header-middle/header-middle.component';
import { HeaderBottomComponent } from './header/header-bottom/header-bottom.component';
import { HeroAreaComponent } from './header/hero-area/hero-area.component';
import { TrendingProductAreaComponent } from './header/trending-product-area/trending-product-area.component';
import { CallActionAreaComponent } from './header/call-action-area/call-action-area.component';
import { BannerAreaComponent } from './header/banner-area/banner-area.component';
import { ShippingInfoComponent } from './header/shipping-info/shipping-info.component';
import { FooterAreComponent } from './header/footer-are/footer-are.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopBarComponent,
    HeaderMiddleComponent,
    HeaderBottomComponent,
    HeroAreaComponent,
    TrendingProductAreaComponent,
    CallActionAreaComponent,
    BannerAreaComponent,
    ShippingInfoComponent,
    FooterAreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
