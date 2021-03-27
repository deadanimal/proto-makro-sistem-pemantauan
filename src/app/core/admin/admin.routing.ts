import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EPermohonanComponent } from './e-permohonan/e-permohonan.component';
import { PemantauanComponent } from './pemantauan/pemantauan.component';
import { PelaporanKemajuanComponent } from './pelaporan-kemajuan/pelaporan-kemajuan.component';
import { PelaporanKewanganComponent } from './pelaporan-kewangan/pelaporan-kewangan.component';
import { PerubahanSkopComponent } from './perubahan-skop/perubahan-skop.component';
import { PelaporanComponent } from './pelaporan/pelaporan.component';

export const AdminRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'e-permohonan',
                component: EPermohonanComponent
            },
            {
                path: 'pemantauan',
                component: PemantauanComponent
            },
            {
                path: 'pelaporan',
                children: [
                    {
                        path: 'prestasi-kemajuan',
                        component: PelaporanKemajuanComponent
                    },
                    {
                        path: 'prestasi-kewangan',
                        component: PelaporanKewanganComponent
                    }
                ]
            },
            {
                path: 'perubahan-skop',
                component: PerubahanSkopComponent
            }
        ]
    }
]