import { Routes } from '@angular/router';
import { HomeComponent } from './pages/first-page/home/home.component';
import { HomeClinicComponent } from './pages/clinic-pages/home-clinic/home-clinic.component';
import { HomeSocialComponent } from './pages/school-pages/home-social/home-social.component';
import { HomeConsultasComponent } from './pages/clinic-pages/home-consultas/home-consultas.component';
import { HomeExamesComponent } from './pages/clinic-pages/home-exames/home-exames.component';
import { Exame1AcuidadeVisualComponent } from './pages/clinic-pages/home-exames/todosExames/exame1-acuidade-visual/exame1-acuidade-visual.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'clinica',
        component: HomeClinicComponent,
    },
    {
        path: 'social',
        component: HomeSocialComponent
    },
    {
        path: 'consultas',
        component: HomeConsultasComponent
    },
    {
        path: 'exames',
        component: HomeExamesComponent
    },
    {
        path: 'acuidade-visual',
        component: Exame1AcuidadeVisualComponent
    },
    { path: '**', component: HomeComponent },
];
