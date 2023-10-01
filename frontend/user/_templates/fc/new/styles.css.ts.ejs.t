---
to: <%= path%>/styles.css.ts
---

import { style } from '@vanilla-extract/css';

export const <%= lowerCaseName%> = style({
  backgroundColor: 'blue',
});