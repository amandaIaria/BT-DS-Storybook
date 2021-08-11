
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { AlertComponent } from 'src/app/components/alert/alert.component';

export default {
  title: 'Components/Organism/Alert',
  component: AlertComponent,
} as Meta;

const Template: Story<AlertComponent> = (args: AlertComponent) => ({
  props: args,
});

export const Error = Template.bind({});
Error.args = {
  type: 'error',
  content: 'Button',
};

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  content: 'Button',
};

export const Info = Template.bind({});
Info.args = {
  type: 'info',
  content: 'Button',
};

export const Caution = Template.bind({});
Caution.args = {
  type: 'caution',
  content: 'Button',
};
