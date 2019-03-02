import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngMat';
  // private matIconRegistry: MatIconRegistry;
  // private domSanitizer: DomSanitizer;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      `icon_vs`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg_icons/icons8-visual-studio.svg')
    );
  }
}
