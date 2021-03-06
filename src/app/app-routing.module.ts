import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'gimnasios',
    loadChildren: () => import('./Vistas/gimnasios/gimnasios.module').then( m => m.GimnasiosPageModule)
  },
  {
    path: 'detalle-infinity-gyn',
    loadChildren: () => import('./Vistas/detalle-infinity-gyn/detalle-infinity-gyn.module').then( m => m.DetalleInfinityGynPageModule)
  },
  {
    path: 'geolocaizacion',
    loadChildren: () => import('./Vistas/geolocaizacion/geolocaizacion.module').then( m => m.GeolocaizacionPageModule)
  },
  {
    path: 'detalle-palermo-gym',
    loadChildren: () => import('./Vistas/detalle-palermo-gym/detalle-palermo-gym.module').then( m => m.DetallePalermoGymPageModule)
  },
  {
    path: 'detalle-cross-gym',
    loadChildren: () => import('./Vistas/detalle-cross-gym/detalle-cross-gym.module').then( m => m.DetalleCrossGymPageModule)
  },
  {
    path: 'procesos',
    loadChildren: () => import('./Vistas/procesos/procesos.module').then( m => m.ProcesosPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./Vistas/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'detalle-rutina',
    loadChildren: () => import('./Vistas/detalle-rutina/detalle-rutina.module').then( m => m.DetalleRutinaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
