import { ComponentFixture, TestBed } from "@angular/core/testing";

import { KpisTreeComponent } from "./kpis-tree.component";

describe("KpisTreeComponent", () => {
  let component: KpisTreeComponent;
  let fixture: ComponentFixture<KpisTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KpisTreeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KpisTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
