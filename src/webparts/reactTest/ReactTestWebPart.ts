import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'ReactTestWebPartStrings';
import App from './components/ReactTest';
import { IReactTestProps } from './components/IReactTestProps';
import { BrowserRouter, Route} from 'react-router-dom';

export interface IReactTestWebPartProps {
  description: string;
}

export default class ReactTestWebPart extends BaseClientSideWebPart<IReactTestWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IReactTestProps > = React.createElement(
      App,
      {
        description: this.properties.description
      }
    );


    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
