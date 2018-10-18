/// <reference path="../../node_modules/@types/cesium/index.d.ts" />

declare var Cesium;

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  viewer: Cesium.Viewer;

  ngOnInit() {
    this.viewer = new Cesium.Viewer('cesium-container');
  }
}
