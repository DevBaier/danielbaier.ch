import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})
export class SkillsComponent implements OnInit {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      "coding",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/coding.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "backend",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/backend.svg")
    );
  }

  ngOnInit(): void {
  }

}
