import { getExamples } from '../examples';

export default {
    name: 'Home',
    template: `
    <Page>
      <ActionBar title="Material Vue">
      </ActionBar>
      <ListView ref="listView"
          for="example in examples"
          separatorColor="transparent"
          @itemTap="goToExample">
        <v-template>
          <StackLayout class="item" orientation="vertical">
            <Label :text="example.title" class="title"></Label>
            <StackLayout height="1" backgroundColor="#EEEEEE"></StackLayout>
          </StackLayout>
        </v-template>
      </ListView>
    </Page>
    `,
    data() {
        return {
            examples: getExamples()
        };
    },
    methods: {
        goToExample({ item }) {
            this.$navigateTo(item.component);
        }
    }
};
