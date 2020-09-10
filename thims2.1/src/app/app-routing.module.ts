import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendEmailComponent } from './auth/send-email/send-email.component';
import { ChatroomComponent } from './home/chatroom/chatroom.component';
import { RoomlistComponent } from './home/roomlist/roomlist.component';
import { AddroomComponent } from './home/addroom/addroom.component';
import { ThemsComponent } from './home/thems/thems.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
  },

  { 
    path: 'home', 
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule) 
  },
  { 
    path: 'login',
    loadChildren: () => 
      import('./auth/login/login.module').then(m => m.LoginModule) 
    }, 
    { 
      path: 'register', 
      loadChildren: () => 
        import('./auth/register/register.module').then(m => m.RegisterModule) 
    },
    {
      path:'verification-email',
      component: SendEmailComponent,
    },
    { 
      path: 'forgot-password', loadChildren: () => import('./auth/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) 
    },
    {
      path: 'chatroom', component: ChatroomComponent
    },
    {
      path: 'roomlist', component: RoomlistComponent
    },
    {
      path: 'addroom', component: AddroomComponent
    },
    {
      path: 'thems', component: ThemsComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
