import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatAccordion } from "@angular/material/expansion";
import { ViewChild } from "@angular/core";

@Component({
  selector: "sub-process-form",
  templateUrl: "./sub-process-form.component.html",
  styleUrls: ["./sub-process-form.component.css"],
})
export class SubProcessFormComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor() {}

  ngOnInit(): void {}
}
