import React from 'react';

import { freezeBeforeAll } from '@site/test/utils';
import { render } from '@testing-library/react';

import Example from '@examples/styling-css';

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

let container: HTMLElement;
beforeEach(() => {
  container = render(<Example />).container;
});

test('the caption should use the custom class name', () => {
  expect(container.getElementsByClassName('caption_aqua')[0]).toHaveTextContent(
    'November 2021'
  );
});
