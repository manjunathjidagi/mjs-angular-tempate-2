import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { AdminLayoutComponent } from './admin-layout.component';
import { NgModule } from '@angular/core';

const routes: Routes = [

    {
        path: '',
        component: AdminLayoutComponent,
        children: [
            { path: 'dashboard',      component: DashboardComponent },
            { path: 'user-profile',   component: UserProfileComponent },
            { path: 'table-list',     component: TableListComponent },
            { path: 'typography',     component: TypographyComponent },
            { path: 'icons',          component: IconsComponent },
            { path: 'notifications',  component: NotificationsComponent },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }