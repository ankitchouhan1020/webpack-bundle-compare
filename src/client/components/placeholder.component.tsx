import * as React from 'react';
import * as styles from './placeholder.component.scss';

export const Placeholder: React.FC = props => (
  <div className={styles.placeholder}>{props.children}</div>
);
