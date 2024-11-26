import { Routes } from '@angular/router';
import { HomeComponent } from './pages/first-page/home/home.component';
import { HomeClinicComponent } from './pages/clinic-pages/home-clinic/home-clinic.component';
import { HomeSocialComponent } from './pages/school-pages/home-social/home-social.component';
import { HomeConsultasComponent } from './pages/clinic-pages/home-consultas/home-consultas.component';
import { HomeExamesComponent } from './pages/clinic-pages/home-exames/home-exames.component';
import { Exame1AcuidadeVisualComponent } from './pages/clinic-pages/home-exames/todosExames/exame1-acuidade-visual/exame1-acuidade-visual.component';
import { HomeFaqComponent } from './pages/clinic-pages/home-faq/home-faq.component';
import { SchoolComponent } from './pages/school-pages/school/school.component';
import { HomeCirurgiasComponent } from './pages/clinic-pages/home-cirurgias/home-cirurgias.component';
import { ProjetosComponent } from './pages/school-pages/projetos/projetos.component';
import { Cirurgia1ImplanteAnelComponent } from './pages/clinic-pages/home-cirurgias/todasCirurgias/cirurgia1-implante-anel/cirurgia1-implante-anel.component';
import { Cirurgia2RefrativaComponent } from './pages/clinic-pages/home-cirurgias/todasCirurgias/cirurgia2-refrativa/cirurgia2-refrativa.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        data: { animation: 'HomePage' }
    },
    {
        path: 'clinica',
        component: HomeClinicComponent,
        data: { animation: 'ClinicPage' }
    },
    {
        path: 'faq',
        component: HomeFaqComponent
    },
    {
        path: 'social',
        component: HomeSocialComponent
    },
    {
        path: 'escola',
        component: SchoolComponent
    },
    {
        path: 'projetos',
        component: ProjetosComponent
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
    {
        path: 'cirurgias',
        component: HomeCirurgiasComponent
    },
    {
        path: 'cirurgia1-implante-anel',
        component: Cirurgia1ImplanteAnelComponent
    },
    {
        path: 'cirurgia2-refrativa',
        component: Cirurgia2RefrativaComponent
    },
    { path: '**', component: HomeComponent },
];
