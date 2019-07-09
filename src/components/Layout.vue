<template>
  <div>
    <header-div />
    <main>
      <slot name="layout"></slot>
    </main>
    <footer-div />
  </div>
</template>

<script>
import HeaderDiv from './HeaderDiv'
import FooterDiv from './FooterDiv'
export default {
  name: 'Layout',
  components:{
    HeaderDiv,
    FooterDiv
  }
}
</script>

<style lang="scss" scoped>

</style>
