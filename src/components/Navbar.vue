<template lang="jade">
.nav_panel
  img(src="../assets/img/00_COMMON/HOME.png", @click="scrollTo('.pageIndex')")
  img(src="../assets/img/00_COMMON/INTRO.png", @click="scrollTo('.pageIntro')")
  img(src="../assets/img/00_COMMON/WORKS.png", @click="scrollTo('.pageWorks')")
  img(src="../assets/img/00_COMMON/TOUR.png", @click="scrollTo('.pageTours')")
  img(src="../assets/img/00_COMMON/CONTACT.png", @click="scrollTo('.pageContact')")


</template>

<script>
import {mapState , mapMutations} from 'vuex'
export default {
  data () {
    return {
    }
  },
  methods: {
    ...mapMutations(['scrollTo'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass?indentedSyntax">

@import "../assets/sass/_variables.sass"

.nav_panel
  position: fixed
  z-index: 10
  left: 7%
  bottom: 10%
  display: flex
  flex-direction: column
  img
    width: 100px
    margin-bottom: 20px
    cursor: pointer
    user-select: none
    +trans
    &:hover
      transform: translate(-2px,-2px)




  
</style>
