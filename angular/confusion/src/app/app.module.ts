import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import "hammerjs";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MdToolbarModule, MdListModule, MdGridListModule, 
  MdCardModule,MdButtonModule,MdButtonToggleModule, 
  MdLineModule,MdIconModule,MdDialogModule, 
  MdCheckboxModule,MdInputModule,MdAutocompleteModule,
  MdChipsModule,MdDatepickerModule,MdExpansionModule,
  MdFormFieldModule,MdMenuModule,MdPaginatorModule,
  MdProgressBarModule,MdProgressSpinnerModule,MdRadioModule,
  MdSelectModule,MdSidenavModule,MdSlideToggleModule,
  MdSliderModule,MdSnackBarModule,MdSortModule,MdStepperModule,
  MdTableModule,MdTabsModule,MdTooltipModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { RestangularConfigFactory } from './shared/restconfig';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { DishService } from './services/dish.service';
import { PromotionService } from './services/promotion.service';
import { LeaderService } from './services/leader.service';
import { FeedbackService } from './services/feedback.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginComponent } from './login/login.component';
import { baseURL } from './shared/baseurl';
import { ProcessHttpmsgService } from './services/process-httpmsg.service';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
  	MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    HighlightDirective,
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MdToolbarModule, 
    MdListModule, 
    MdGridListModule, 
  	MdCardModule, 
	  MdButtonModule,
	  MdButtonToggleModule, 
  	MdLineModule,
	  MdIconModule,
	  MdDialogModule, 
  	MdCheckboxModule,
	  MdInputModule,
	  MdAutocompleteModule,
  	MdChipsModule,
	  MdDatepickerModule,
	  MdExpansionModule,
  	MdFormFieldModule,
	  MdMenuModule,
	  MdPaginatorModule,
  	MdProgressBarModule,
	  MdProgressSpinnerModule,
	  MdRadioModule,
  	MdSelectModule,
	  MdSidenavModule,
	  MdSlideToggleModule,
  	MdSliderModule,
	  MdSnackBarModule,
	  MdSortModule,
	  MdStepperModule,
  	MdTableModule,
	  MdTabsModule,
	  MdTooltipModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RestangularModule.forRoot(RestangularConfigFactory)
  ],
  providers: [ DishService, PromotionService, LeaderService, FeedbackService, {provide: 'BaseURL', useValue: baseURL}, ProcessHttpmsgService ],
  entryComponents: [ LoginComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
