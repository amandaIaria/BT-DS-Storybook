import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from '../app/components/inputs/button/button.component';
import {HeaderComponent} from '../app/components/organisms/header/header.component';
import {PageComponent} from '../app/components/organisms/page/page.component'; 

import * as HeaderStories from './CompHeader.stories';

export default {
  title: 'Example/Page',
  component: PageComponent,
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent, HeaderComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<PageComponent> = (args: PageComponent) => ({
  props: args,
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
