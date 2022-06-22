import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ShellComponent } from './shared/shell/shell.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CategoriesListComponent } from './components/categories/categories-list/categories-list.component';
import { CategoryFormComponent } from './components/categories/category-form/category-form.component';

import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

const UX_MODULE = [CardModule, ToolbarModule, ButtonModule, TableModule, InputTextModule, ProgressSpinnerModule];
@NgModule({
    declarations: [AppComponent, NxWelcomeComponent, ShellComponent, SidebarComponent, DashboardComponent, CategoriesListComponent, CategoryFormComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule, ...UX_MODULE],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
