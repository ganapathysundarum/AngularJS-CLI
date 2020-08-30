import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ErrorComponent } from './error/error.component';
import { BooksComponent } from './books/books.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service'

const routes: Routes = [
  {'path':'',component: LoginComponent},
  {'path':'login',component: LoginComponent},
  {'path':'hello/:name',component: HelloWorldComponent, canActivate:[RouteGuardService]} ,
  {'path':'books',component: BooksComponent, canActivate:[RouteGuardService]},
  {'path':'logout',component: LogoutComponent, canActivate:[RouteGuardService]},
  {'path':'**',component: ErrorComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
