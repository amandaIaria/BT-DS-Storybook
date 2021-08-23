
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { FooterComponent } from 'src/app/components/organisms/footer/footer.component';

export default {
  title: 'Components/Organism/Footer',
  component: FooterComponent,
} as Meta;

const Template: Story<FooterComponent> = (args: FooterComponent) => ({
  props: args,
});

export const One = Template.bind({});
One.args = {
  
};


export const Two = Template.bind({});
Two.args = {
  
};

export const Three = Template.bind({});
Three.args = {
  
};