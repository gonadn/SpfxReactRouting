import * as React from 'react';
import styles from './ReactTest.module.scss';
import { IReactTestProps } from './IReactTestProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { BrowserRouter, Route,Switch} from 'react-router-dom';
import List from './list';

export default class ReactTest extends React.Component<IReactTestProps, {}> {
  public render(): React.ReactElement<IReactTestProps> {
    return (
      <BrowserRouter>
      <Switch>
          <Route path="/" exact={true} component={List} />
      </Switch>
    </BrowserRouter>    
    );
  }
}
