import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TestLoginComponent } from './test-login.component';

export default {
  title: 'TestLoginComponent',
  component: TestLoginComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<TestLoginComponent>;

const Template: Story<TestLoginComponent> = (args: TestLoginComponent) => ({
  component: TestLoginComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}