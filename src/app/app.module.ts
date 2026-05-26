import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LocalstorageModule } from './localstorage/localstorage.module';
import { LocalstorageService } from './localstorage.service';

export function storageFactory(provider: LocalstorageService) {
  return () => provider.setPrefix('test-storage-app')
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LocalstorageModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: storageFactory,
      deps: [LocalstorageService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
