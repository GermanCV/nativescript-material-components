<template>
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back"
                        android.systemIcon="ic_menu_back"
                        @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <StackLayout>
      <MDTextField id="textField1" helper="help me!" width="250" backgroundColor="orange"
                  placeholderColor="green" keyboardType="datetime"
                  hint="i am an hint" returnKeyType="next"
                  v-model="value"
                  @focus="onFocus" @blur="onBlur"
                  @textChange="onTextChange" @returnPress="onReturnPress" />
      <MDTextField id="textField2" maxLength="10" hint="hint me"
                  v-model="value"
                  @focus="onFocus" @blur="onBlur"
                  @textChange="onTextChange" @returnPress="onReturnPress"/>
      <MDTextField id="textField3" variant="outline" hint="outline"
                  @focus="onFocus" @blur="onBlur"
                  @textChange="onTextChange" @returnPress="onReturnPress"/>
      <MDTextField  variant="filled" required="true" email="true" hint="fill this out..."
                  @focus="onFocus" @blur="onBlur"
                  @textChange="onTextChange" @returnPress="onReturnPress"/>
    </StackLayout>
  </Page>
</template>

<script lang="ts">
import * as frameModule from 'tns-core-modules/ui/frame';
import Vue from 'vue'

export const title = 'Text fields sample';

export default Vue.extend({
    name: 'TextFields',

    data() {
        return {
            title: title,
            value: ''
        };
    },

    methods: {
        onNavigationButtonTap() {
            frameModule.topmost().goBack();
        },
        onFocus() {
            console.log('Focused');
        },
        onBlur() {
            console.log('Blurred');
        },
        onTextChange({ value }) {
            console.log(`Text changed to ${value}`);
        },
        onReturnPress() {
            console.log('Return key pressed');
        }
    },
});
</script>
