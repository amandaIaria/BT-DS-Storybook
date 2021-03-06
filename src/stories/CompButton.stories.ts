
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent } from '../app/components/inputs/button/button.component';

export default {
  title: 'Components/Inputs/Button',
  component: ButtonComponent,
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
