<template lang="jade">
.page.pageIntro
  .back_img(:style="{'background-position': 'right '+ ((scrollTop/6)>150?(-scrollTop/6):-100-scrollTop)+'px'}")
    .left_img
      .tile
    .content
      img.intro_title(src="../assets/img/00_COMMON/INTRO.png")
      img.about_text(src="../assets/img/01_INTRO/ABOUT/01.png")
      img.about_text(src="../assets/img/01_INTRO/ABOUT/02.png")
      img.about_text(src="../assets/img/01_INTRO/ABOUT/03.png")
      img.down_arrow(src="../assets/img/01_INTRO/ICON-03.png")
      img.about_text(src="../assets/img/01_INTRO/ABOUT/04.png")


</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'pageIntro',
  data () {
    return {
    }
  },
  computed:{
    ...mapState(['scrollTop'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass?indentedSyntax">

@import "../assets/sass/_variables.sass"

.pageIntro

  overflow: hidden
  +flex_center
  align-items: flex-end
  background-attachment: fixed

.back_img
  width: 80%
  height: 90vh
  border-radius: 120px 120px 0px 0px
  background: url("../assets/img/01_INTRO/UP_00.jpg")
  background-size: 90% auto
  background-position: right bottom
  background-attachment: fixed

  display: flex
  position: absolute
  // transition: 0.02s


  
  .left_img
    height: 90vh
    border-radius: 120px 120px 0px 0px
    background: url("../assets/img/01_INTRO/DOWN_00.jpg")
    background-size: 1500px auto
    background-position: center center  
    overflow: hidden

.content
  +flex_center
  flex-direction: column

.about_text
  height: 50px
  display: block
  margin-bottom: 20px

.intro_title
  height: 25px
  margin-bottom: 100px

.down_arrow
  margin-top: 50px
  margin-bottom: 50px
  height: 50px
  
</style>
