// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { LinkComponent } from '../app/components/link/link.component';

export default {
  title: 'Components/Link',
  component: LinkComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<LinkComponent> = (args: LinkComponent) => ({
  props: args,
});


