/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {CoreModule} from './@core/core.module';
import {ThemeModule} from './@theme/theme.module';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {NbPasswordAuthStrategy, NbAuthModule, NbAuthJWTToken} from '@nebular/auth';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
  NbSelectModule,
} from '@nebular/theme';
// import { AuthGuard } from './services/auth-guard.service';
import {AuthComponent} from './auth/auth.component';
import {CookieService} from 'ngx-cookie-service';


const formSetting: any = {
  redirectDelay: 0,
  showMessages: {
    success: true,
  },
};


@NgModule({
  declarations: [AppComponent], // , AuthComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbSelectModule,
    ThemeModule.forRoot(),

    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'username',
          token: {
            class: NbAuthJWTToken,
            key: 'data.user.token',
          },
          baseEndpoint: 'http://localhost:8000/',
          login: {
            // endpoint: '/rest-auth/login/',
            endpoint: 'api-token-auth/',
            // method: 'post',
            redirect: {
              success: '/pages/dashboard',
              failure: null, // stay on the same page
            },
          },
          register: {
            endpoint: 'rest-auth/registration/',
            method: 'post',
            redirect: {
              success: '/pages/dashboard',
              failure: null, // stay on the same page
            },
          },
          logout: {
            endpoint: '/rest-auth/logout/',
            method: 'post',
          },
          requestPass: {
            endpoint: '/rest-auth/password/change/', // verify this one
            method: 'post',
          },
          resetPass: {
            endpoint: '/rest-auth/password/reset/',
            method: 'post',
          },
        }),
      ],
      forms: {
        login: formSetting,
        register: formSetting,
        requestPassword: formSetting,
        resetPassword: formSetting,
        logout: {
          redirectDelay: 0,
        },
      },
    }),
  ],
  bootstrap: [AppComponent],
  providers: [CookieService],
})
export class AppModule {
}
