import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ModalModule } from "ngx-bootstrap/modal";
import { KpisTreeRoutingModule } from "./kpis-processes-tree-routing.module";
import { KpiFormComponent } from "./components/kpi-form/kpi-form.component";
import { KpisProcessesTreeRouteComponent } from "./kpis-processes-tree-route/kpis-processes-tree-route.component";
import { GetTreeDataService } from "@shared/get-tree-data.service";
import { MatTreeModule } from "@angular/material/tree";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { TabsModule } from "ngx-bootstrap/tabs";
import { MatSelectModule } from "@angular/material/select";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatTooltipModule } from "@angular/material/tooltip";
import { SharedModule } from "@shared/shared.module";
import { KpisTreeComponent } from "./components/kpis-tree/kpis-tree.component";
import { TreeSearchComponent } from "./components/tree-search/tree-search.component";
import { TreeSearchPipe } from "@shared/tree-search.pipe";
import { NoFormComponent } from "./components/no-form/no-form.component";
import { ProcessFormComponent } from "./components/process-form/process-form.component";
import { SubProcessFormComponent } from "./components/sub-process-form/sub-process-form.component";
import { ProcessesTreeComponent } from "./components/processes-tree/processes-tree.component";
import { GetProcessesTreeDataService } from "../../shared/get-processes-tree-data.service";

@NgModule({
  declarations: [
    KpisProcessesTreeRouteComponent,
    KpiFormComponent,
    TreeSearchComponent,
    TreeSearchPipe,
    NoFormComponent,
    ProcessFormComponent,
    SubProcessFormComponent,
    ProcessesTreeComponent,
    KpisTreeComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    KpisTreeRoutingModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatTooltipModule,
    SharedModule,
    TabsModule,
  ],
  providers: [GetTreeDataService, GetProcessesTreeDataService],
})
export class KpisProcessesTreeModule {}
