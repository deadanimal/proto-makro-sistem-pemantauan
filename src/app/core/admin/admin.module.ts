import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  AccordionModule,
  BsDropdownModule,
  ModalModule,
  ProgressbarModule, 
  TabsModule,
  TooltipModule
} from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { RouterModule } from '@angular/router';
import { AdminRoutes } from './admin.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EPermohonanComponent } from './e-permohonan/e-permohonan.component';
import { PemantauanComponent } from './pemantauan/pemantauan.component';
import { PelaporanKemajuanComponent } from './pelaporan-kemajuan/pelaporan-kemajuan.component';
import { PelaporanKewanganComponent } from './pelaporan-kewangan/pelaporan-kewangan.component';
import { PerubahanSkopComponent } from './perubahan-skop/perubahan-skop.component';
import { PelaporanComponent } from './pelaporan/pelaporan.component';

@NgModule({
  declarations: [
    DashboardComponent,
    EPermohonanComponent,
    PemantauanComponent,
    PelaporanKemajuanComponent,
    PelaporanKewanganComponent,
    PerubahanSkopComponent,
    PelaporanComponent
  ],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    LoadingBarModule,
    NgxDatatableModule,
    RouterModule.forChild(AdminRoutes),
    LeafletModule,
  ]
})
export class AdminModule { }
