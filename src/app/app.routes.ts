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
import { Cirurgia3PlasticaOcularComponent } from './pages/clinic-pages/home-cirurgias/todasCirurgias/cirurgia3-plastica-ocular/cirurgia3-plastica-ocular.component';
import { Cirurgia4CatarataComponent } from './pages/clinic-pages/home-cirurgias/todasCirurgias/cirurgia4-catarata/cirurgia4-catarata.component';
import { Cirurgia5EstrabismoComponent } from './pages/clinic-pages/home-cirurgias/todasCirurgias/cirurgia5-estrabismo/cirurgia5-estrabismo.component';
import { Cirurgia6GlaucomaComponent } from './pages/clinic-pages/home-cirurgias/todasCirurgias/cirurgia6-glaucoma/cirurgia6-glaucoma.component';
import { Cirurgia7RetinaComponent } from './pages/clinic-pages/home-cirurgias/todasCirurgias/cirurgia7-retina/cirurgia7-retina.component';
import { Cirurgia8TransplanteCorneaComponent } from './pages/clinic-pages/home-cirurgias/todasCirurgias/cirurgia8-transplante-cornea/cirurgia8-transplante-cornea.component';
import { Cirurgia9InjecaoComponent } from './pages/clinic-pages/home-cirurgias/todasCirurgias/cirurgia9-injecao/cirurgia9-injecao.component';
import { Cirurgia10BlefaroplastiaComponent } from './pages/clinic-pages/home-cirurgias/todasCirurgias/cirurgia10-blefaroplastia/cirurgia10-blefaroplastia.component';
import { Cirurgia11PterigioComponent } from './pages/clinic-pages/home-cirurgias/todasCirurgias/cirurgia11-pterigio/cirurgia11-pterigio.component';
import { Cirurgia12CalazioComponent } from './pages/clinic-pages/home-cirurgias/todasCirurgias/cirurgia12-calazio/cirurgia12-calazio.component';
import { Cirurgia13TumorComponent } from './pages/clinic-pages/home-cirurgias/todasCirurgias/cirurgia13-tumor/cirurgia13-tumor.component';

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
    {
        path: 'cirurgia3-plastica-ocular',
        component: Cirurgia3PlasticaOcularComponent
    },
    {
        path: 'cirurgia4-catarata',
        component: Cirurgia4CatarataComponent
    },
    {
        path: 'cirurgia5-estrabismo',
        component: Cirurgia5EstrabismoComponent
    },
    {
        path: 'cirurgia6-glaucoma',
        component: Cirurgia6GlaucomaComponent
    },
    {
        path: 'cirurgia7-retina',
        component: Cirurgia7RetinaComponent
    },
    {
        path: 'cirurgia8-transplante-cornea',
        component: Cirurgia8TransplanteCorneaComponent
    },
    {
        path: 'cirurgia9-injecao',
        component: Cirurgia9InjecaoComponent
    },
    {
        path: 'cirurgia10-blefaroplastia',
        component: Cirurgia10BlefaroplastiaComponent
    },
    {
        path: 'cirurgia11-pterigio',
        component: Cirurgia11PterigioComponent
    },
    {
        path: 'cirurgia12-calazio',
        component: Cirurgia12CalazioComponent
    },
    {
        path: 'cirurgia13-tumor',
        component: Cirurgia13TumorComponent
    },
    { path: '**', component: HomeComponent },
];
