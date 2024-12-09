import { ContentClient } from 'dc-delivery-sdk-js';
import { SDK } from 'dc-extensions-sdk';

import { Injectable } from '@angular/core';

import { BrandColorParameters } from '../model/brand-color-parameters';
import {
	BrandColor,
	BrandColors,
	BrandColorValue,
} from '../model/brand-colors';

@Injectable({
  providedIn: 'root'
})
export class BrandColorService {

  private sdk: SDK;
  activeColor: BrandColorValue;
  params: BrandColorParameters;
  colors: BrandColors = {
    name: 'Loading...',
    groups: [],
    colors: []
  };
  selected: BrandColor;
  lastHeight: number;

  constructor() {
  }

  async initialize() {
    try {
      // See index.html for sdk init.
      // tslint:disable-next-line: no-string-literal
      const sdk: SDK<BrandColorValue, BrandColorParameters> = await window['extensionsSdkInstance'];
      sdk.frame.startAutoResizer();

      this.activeColor = await sdk.field.getValue();
      this.selected = (this.activeColor == null) ? null : { name: this.activeColor.name || '', color: this.activeColor.color || '', class: this.activeColor.class|| '' };
      this.params = { ...sdk.params.installation, ...sdk.params.instance } as BrandColorParameters;

      const client = new ContentClient({
        account: this.params.account || 'dummy',
        stagingEnvironment: sdk.stagingEnvironment
      });

      this.colors = (await client.getContentItem(this.params.contentID) as any).body as BrandColors;
      this.sdk = sdk;

      this.prepareColors();

      this.selected = this.findExistingColor(this.activeColor.name);

      requestAnimationFrame(this.checkHeight.bind(this));
    } catch (e) {
      this.colors = {
        failure: true,
        name: '(Failed to load colours: ' + e.toString() + ')',
        groups: [],
        colors: []
      };
    }
  }
  private prepareColors() {
    this.colors.colors = this.combineColorGroups(this.params.groups);

    if (this.params.groups != null && this.params.groups.length > 0) {
      this.colors.name += ` (${ this.params.groups.join(', ') })`;
    }
  }

  private combineColorGroups(groups: string[]): BrandColor[] {
    if (groups == null) {
      groups = this.colors.groups.map(group => group.name); // When missing, select all groups.
    }
    const groupObjs = groups.map(groupName => this.colors.groups.find(group => group.name.toLowerCase() === groupName.toLowerCase()))
                            .filter(group => group != null)
                            .map(group => group.colors);
    return [].concat.apply([], groupObjs);
  }

  private getColorKey(color: BrandColor): BrandColor {
    return color;
  }

  selectColor(color: BrandColor) {
    this.activeColor = color == null ? null : this.getColorKey(color);
    this.sdk.field.setValue(this.activeColor);
    this.selected = color;
  }

  findExistingColor(color: string) {
    let bColor = color == null ? null : this.colors.colors.find(c => this.getColorKey(c).name === color);
    if (bColor == null && color != null) {
      bColor = { color, name: color, class: 'aaaa' };
    }
    return bColor;
  }

  checkHeight() {
    if (window.document.body.clientHeight !== this.lastHeight) {
      this.lastHeight = window.document.body.clientHeight;
      this.sdk.frame.setHeight(this.lastHeight);
    }
    requestAnimationFrame(this.checkHeight.bind(this));
  }

}
