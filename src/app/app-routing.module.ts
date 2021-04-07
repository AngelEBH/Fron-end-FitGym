import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './guard/auth-guard.service';
import { LoginGuardService } from './guard/login-guard.service';


const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
  //   canActivate: [AuthGuardService],
  // },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
    canActivate: [LoginGuardService]
  
   },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate: [AuthGuardService],
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
  {
    path: 'registrar',
    loadChildren: () => import('./login/registrar/registrar-routing.module').then( m => m.RegistrarPageRoutingModule)
  },
  {
    path: 'cliente',
    loadChildren: () => import('./login/cliente/cliente.module').then( m => m.ClientePageModule)
  },

  {
    path: 'grupos',
    loadChildren: () => import('./Vistas/grupos/grupos.module').then( m => m.GruposPageModule)
  },
  {
    path: 'pixel-pay',
    loadChildren: () => import('./Vistas/pixel-pay/pixel-pay.module').then( m => m.PixelPayPageModule)
  },
  {
    path: 'administrador',
    loadChildren: () => import('./administrador/administrador.module').then( m => m.AdministradorPageModule)
  },
  {
    path: 'rutina-gimnasio',
    loadChildren: () => import('./Vistas/perfil/rutina-gimnasio/rutina-gimnasio.module').then( m => m.RutinaGimnasioPageModule)
  },
  {
    path: 'proceso-gimnasio',
    loadChildren: () => import('./Vistas/perfil/proceso-gimnasio/proceso-gimnasio.module').then( m => m.ProcesoGimnasioPageModule)
  },
  {
    path: 'cal-modal',
    loadChildren: () => import('./Componente/cal-modal/cal-modal.module').then( m => m.CalModalPageModule)
  },
  {
    path: 'crear-datos-admin',
    loadChildren: () => import('./VistaAdmin/crear-datos-admin/crear-datos-admin.module').then( m => m.CrearDatosAdminPageModule)
  },
  {
    path: 'detalle-datos-ad',
    loadChildren: () => import('./VistaAdmin/detalle-datos-ad/detalle-datos-ad.module').then( m => m.DetalleDatosAdPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home-routing.module').then( m => m.HomePageRoutingModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
