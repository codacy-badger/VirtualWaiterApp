import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',           redirectTo: 'login', pathMatch: 'full'},
  { path: 'home',       loadChildren: './home/home.module#HomePageModule' },
  { path: 'list',       loadChildren: './list/list.module#ListPageModule' },
  { path: 'login',      loadChildren: './login/login.module#LoginPageModule' },
  { path: 'cadastro',   loadChildren: './cadastro/cadastro.module#CadastroPageModule' },
  { path: 'cardapio',   loadChildren: './cardapio/cardapio.module#CardapioPageModule' },
  { path: 'estabelecimento/:id', loadChildren: './estabelecimento/estabelecimento.module#EstabelecimentoPageModule' },
  { path: 'item-cardapio/:id', loadChildren: './item-cardapio/item-cardapio.module#ItemCardapioPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }