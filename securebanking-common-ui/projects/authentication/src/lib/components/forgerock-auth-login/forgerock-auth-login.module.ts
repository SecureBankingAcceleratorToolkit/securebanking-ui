import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieModule } from 'ngx-cookie';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { ForgerockAuthLoginComponent } from './forgerock-auth-login.component';
import { LoginDynamicStagesModule } from './stages/stages.module';
import { ForgerockMessagesModule } from '@securebanking/securebanking-common-ui/services/forgerock-messages';
import { ForgerockAuthApiModule } from '../../forgerock-auth-api/forgerock-auth-api.module';
import { ForgerockConfigModule } from '@securebanking/securebanking-common-ui/services/forgerock-config';
import { ForgerockCustomerLogoModule } from '@securebanking/securebanking-common-ui/components/forgerock-customer-logo';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    LoginDynamicStagesModule,
    CookieModule.forRoot(),
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    RouterModule,
    ForgerockMessagesModule,
    ForgerockAuthApiModule,
    ForgerockConfigModule,
    ForgerockCustomerLogoModule
  ],
  exports: [ForgerockAuthLoginComponent],
  declarations: [ForgerockAuthLoginComponent]
})
export class ForgerockAuthLoginModule {}
