import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatAccordion } from "@angular/material/expansion";
import { ViewChild } from "@angular/core";

@Component({
  selector: "process-form",
  templateUrl: "./process-form.component.html",
  styleUrls: ["./process-form.component.css"],
})
export class ProcessFormComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor() {}

  ngOnInit(): void {}
}
