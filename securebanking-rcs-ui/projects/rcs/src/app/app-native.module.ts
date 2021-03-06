import { NgModule, InjectionToken, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StoreModule, ActionReducerMap } from '@ngrx/store';

import { MatSharedModule } from '../../src/app/mat-shared.module';
import { AppNativeComponent } from '../../src/app/app-native.component';
import { environment } from '../../src/environments/environment';
import rootReducer from '../../src/store';
import { AppRoutingModule } from '../../src/app/app-routing.module';

import { ForgerockConfigService } from '@forgerock/openbanking-ngx-common/services/forgerock-config';
import { ForgerockConfigModule } from '@forgerock/openbanking-ngx-common/services/forgerock-config';
import { ForgerockAuthenticationModule } from '@forgerock/openbanking-ngx-common/authentication';
import { ForgerockNativeModule } from '@forgerock/openbanking-ngx-common/native';
import { ForgerockSharedModule } from '@forgerock/openbanking-ngx-common/shared';

export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<{}>>('Registered Reducers');

export function getReducers() {
  return rootReducer;
}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function init_app(appConfig: ForgerockConfigService) {
  return () => appConfig.fetchAndMerge(environment);
}

@NgModule({
  declarations: [AppNativeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    ForgerockSharedModule,
    ForgerockNativeModule,
    ForgerockAuthenticationModule,
    // Store
    StoreModule.forRoot(REDUCER_TOKEN),
    environment.devModules || [],
    // Material Design
    MatSharedModule,
    // Theme
    // FuseSharedModule,
    ForgerockConfigModule.forRoot()
  ],
  providers: [
    {
      provide: REDUCER_TOKEN,
      deps: [],
      useFactory: getReducers
    },
    {
      provide: APP_INITIALIZER,
      useFactory: init_app,
      deps: [ForgerockConfigService],
      multi: true
    }
  ],
  bootstrap: [AppNativeComponent]
})
export class AppNativeModule {}
