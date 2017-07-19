import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PowerComponent } from './power/power.component';
import { PowerHumanComponent } from './power/power-human/power-human.component';
import { PowerSaiyanComponent } from './power/power-saiyan/power-saiyan.component';
import { PowerSupersaiyanComponent } from './power/power-supersaiyan/power-supersaiyan.component';
import { PowerSupersaiyantwoComponent } from './power/power-supersaiyantwo/power-supersaiyantwo.component';
import { PowerSupersaiyanthreeComponent } from './power/power-supersaiyanthree/power-supersaiyanthree.component';
import { PowerSupersaiyanfourComponent } from './power/power-supersaiyanfour/power-supersaiyanfour.component';

@NgModule({
  declarations: [
    AppComponent,
    PowerComponent,
    PowerHumanComponent,
    PowerSaiyanComponent,
    PowerSupersaiyanComponent,
    PowerSupersaiyantwoComponent,
    PowerSupersaiyanthreeComponent,
    PowerSupersaiyanfourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
