import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { KpiFormComponent } from "./components/kpi-form/kpi-form.component";
import { KpisProcessesTreeRouteComponent } from "./kpis-processes-tree-route/kpis-processes-tree-route.component";
import { NoFormComponent } from "./components/no-form/no-form.component";
import { ProcessFormComponent } from "./components/process-form/process-form.component";
import { SubProcessFormComponent } from "./components/sub-process-form/sub-process-form.component";

const routes: Routes = [
  {
    path: "",
    component: KpisProcessesTreeRouteComponent,
    children: [
      {
        path: "",
        component: NoFormComponent,
      },
      {
        path: "process-form",
        component: ProcessFormComponent,
      },
      {
        path: "sub-process-form",
        component: SubProcessFormComponent,
      },
      {
        path: "kpi-form",
        component: KpiFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KpisTreeRoutingModule {}
