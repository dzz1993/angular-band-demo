import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConsumeItemComponent } from './pages/detail/components/consume-item/consume-item.component';
import { CardComponent } from './pages/detail/components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { DetailComponent } from './pages/detail/detail.component';

import {CoreModule} from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    ConsumeItemComponent,
    CardComponent,
    HeaderComponent,
    LoginComponent,
    DetailComponent
  ],
  imports: [
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
