import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {IonicModule} from '@ionic/angular';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {JwtInterceptor} from "./auth/auth.interceptor";
import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from "./login/login.component";
import {GlobalComponentsModule} from "./global-components.module";
import {HomeComponent} from "./home/home.component";
import {CommonModule} from "@angular/common";
import {CarouselComponent} from "./globalComponents/carousel/carousel.component";
import {FormsModule} from "@angular/forms";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  exports: [],
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    GlobalComponentsModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    MatIconModule,
    MatSliderModule,
    HttpClientModule,
    AppRoutingModule,
    CarouselComponent,
    MatFormField
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
