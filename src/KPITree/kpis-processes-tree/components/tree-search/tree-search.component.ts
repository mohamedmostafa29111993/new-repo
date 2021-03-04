import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

interface Sector {
  value: string;
  viewValue: string;
}

@Component({
  selector: "tree-search",
  templateUrl: "./tree-search.component.html",
  styleUrls: ["./tree-search.component.css"],
})
export class TreeSearchComponent implements OnInit {
  sectors: Sector[] = [
    { value: "sector-1", viewValue: "Sector #1" },
    { value: "sector-1", viewValue: "Sector #2" },
    { value: "sector-2", viewValue: "Sector #3" },
  ];
  treeSearchFormGroup: FormGroup;
  departmentOptions: string[] = ["Department1", "Department2", "Department3"];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.handleTreeSearchFormGroup();
  }

  handleTreeSearchFormGroup() {
    this.treeSearchFormGroup = this.formBuilder.group({
      departmentControl: ["", Validators.required],
    });
  }

  handleTreeSearch(): void {
    console.log("submitted!");
  }
}
