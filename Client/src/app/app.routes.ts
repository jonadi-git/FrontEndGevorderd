import { Routes } from '@angular/router';
import { OverComponent } from './over/over.component';
import { ReactorenComponent } from './reactoren/reactoren.component';

export const routes: Routes = [
    {path: 'reactoren', component: ReactorenComponent},
    {path: 'over', component: OverComponent}
];
