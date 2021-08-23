
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { DividerComponent } from 'src/app/components/atoms/divider/divider.component';

export default {
  title: 'Components/Atoms/Divider',
  component: DividerComponent,
} as Meta;

const Template: Story<DividerComponent> = (args: DividerComponent) => ({
  props: args,
});

export const One = Template.bind({});
One.args = {
  type: 'one',
};


export const Two = Template.bind({});
Two.args = {
  type: 'two',
};

export const Three = Template.bind({});
Three.args = {
  type: 'three',
};
