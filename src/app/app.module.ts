import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component'
import {NgxProsemirrorModule} from './modules/ngx-prosemirror/ngx-prosemirror.module';
import 'core-js/features/reflect';
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        NgxProsemirrorModule,
        FlexLayoutModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
