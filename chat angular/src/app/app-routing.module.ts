import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateRoomComponent } from './chat/create-room/create-room.component';
import { RoomlistComponent } from './chat/roomlist/roomlist.component';
import { AddroomComponent } from './chat/addroom/addroom.component';
import { ChatroomComponent } from './chat/chatroom/chatroom.component';


const routes: Routes = [
  { path: 'create', component: CreateRoomComponent },
  { path: 'roomlist', component: RoomlistComponent },
  { path: 'addroom', component: AddroomComponent },
  { path: 'chatroom/:roomname', component: ChatroomComponent },
  { path: '',
    redirectTo: '/create',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
