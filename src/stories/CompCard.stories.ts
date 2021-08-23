
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { CardComponent } from 'src/app/components/organisms/card/card.component';

export default {
  title: 'Components/Organism/Card',
  component: CardComponent,
} as Meta;

const Template: Story<CardComponent> = (args: CardComponent) => ({
  props: args,
});

export const Single = Template.bind({});
Single.args = {
  type: 'single',
  content: 'Butasdf asdf asdf asdf asdf asdf asdf ton. asdf asfd asdf asdf asdf asfd .asdf asdf asdf ',
};

export const Container = Template.bind({});
Container.args = {
  type: 'container',
  content: 'Butasdf asdf asdf asdf asdf asdf asdf ton. asdf asfd asdf asdf asdf asfd .asdf asdf asdf ',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  content: 'Butasdf asdf asdf asdf asdf asdf asdf ton. asdf asfd asdf asdf asdf asfd .asdf asdf asdf ',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  content: 'Butasdf asdf asdf asdf asdf asdf asdf ton. asdf asfd asdf asdf asdf asfd .asdf asdf asdf ',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  content: 'Butasdf asdf asdf asdf asdf asdf asdf ton. asdf asfd asdf asdf asdf asfd .asdf asdf asdf ',
};