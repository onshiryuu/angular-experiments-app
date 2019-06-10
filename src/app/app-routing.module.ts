import { AuthGuard } from './services/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { ArchivemonthComponent } from './archivemonth/archivemonth.component';
import { ArchiveComponent } from './archive/archive.component';
import { PostsComponent } from './posts/posts.component';
import { FollowerProfileComponent } from './follower-profile/follower-profile.component';
import { FollowersComponent } from './followers/followers.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdminComponent } from './admin/admin.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { AdminAuthGuard } from './services/admin-auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard, AdminAuthGuard]
  },
  {
    path: 'followers/:userid/:username',
    component: FollowerProfileComponent
  },
  {
    path: 'followers',
    component: FollowersComponent
  },
  {
    path: 'archive/:archiveyear/:archivemonth',
    component: ArchivemonthComponent
  },
  {
    path: 'archive',
    component: ArchiveComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'no-access',
    component: NoAccessComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
