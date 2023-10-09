---
to: <%= path %>/<%= name%>.test.tsx
---

import { render, screen } from '@testing-library/react';
import React from 'react';

import <%= name%> from '.';

test('it renders the passed name prop', () => {
  render(<<%= name%> name='<%= name%>' />);

  const element = screen.getByText(/<%= name%>/i);

  expect(element).toBeTruthy();
})

