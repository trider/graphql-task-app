import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

    {
    path: '',
    children: [
      { path: '', redirectTo: '/main/login', pathMatch: 'full' },
      {
        path: "main",
        loadChildren: () =>
          import("./main/main.module").then((m) => m.MainModule),
      },
       

      // },
     
    ]
    },


 

 


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', useHash: true  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
