<!--
We use the import components!
-->
<template>
 <HeadingCog/>
 <ModelCog/>
 <ContentCog/>
</template>

<!--
In this section we import all components
and use them.
-->
<script>
import ModelCog from './components/ModelCog.vue';
import HeadingCog from './components/HeadingCog.vue';
import ContentCog from './components/ContentCog.vue';
export default {
  name: 'App',
  components: {
    ModelCog,
    HeadingCog,
    ContentCog
  }
};
</script>

<!--
This section controls
how the app looks and feels.
-->
<style lang="scss">
// Here we set some global SASS
// rules and then apply these
// to the imported SASS files.
@font-face {
    font-family: 'Lobster';
    src: url('https://blckunicorn.art/assets/fonts/Lobster.ttf') format('truetype');
}
$fontColor: #FFF;
$bgColor: #FFACA5;
$shadowColor: #FF7BAC;
$stdFont: 'Lobster';
@import './sass/desktop.scss';
@import './sass/responsive.scss';
</style>
