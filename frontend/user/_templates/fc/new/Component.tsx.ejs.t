---
to: <%= path %>/<%= name%>.tsx
---

import { type FC } from 'react';

import * as styles from './styles.css';

interface <%= name%>Props {
  name: string;
}

export const <%= name%>: FC<<%= name%>Props> = (props) => {
  const { name } = props;

  return (
    <div className={styles.<%= lowerCaseName%>}>
      <h1>{name}</h1>
    </div>
  );
};