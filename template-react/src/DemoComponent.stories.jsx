import React from 'react';

import DemoComponent from './DemoComponent';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'DemoComponent',
  component: DemoComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <DemoComponent {...args} />;

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  msg: 'Basic',
};

export const Second = Template.bind({});
Second.args = {
  msg: 'Second'
};
