import { ComponentFixture, TestBed } from "@angular/core/testing";

import { KpisProcessesTreeRouteComponent } from "./kpis-processes-tree-route.component";

describe("KpisProcessesTreeRouteComponent", () => {
  let component: KpisProcessesTreeRouteComponent;
  let fixture: ComponentFixture<KpisProcessesTreeRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KpisProcessesTreeRouteComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KpisProcessesTreeRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
