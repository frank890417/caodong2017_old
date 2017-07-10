<template lang="jade">
.page.pageVideo
  .back_img
    .left_img
      .tile
    .content
      .video_nav
        img.tag(src="../assets/img/03_WORKS/歌名/山海.png")
      iframe(width="100%" height="700" src="https://www.youtube.com/embed/j2311FZWoFQ?rel=0" frameborder="0" allowfullscreen)
      
</template>

<script>

import {mapState} from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed:{
    ...mapState(['scrollTop','news'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass?indentedSyntax">

@import "../assets/sass/_variables.sass"

.pageVideo
  overflow: hidden
  +flex_center
  align-items: flex-end
  background-attachment: fixed
  text-align: left
  line-height: 40px
  li

    display: flex
    .date
      width: 110px

.back_img
  width: 80%
  height: 100vh
  // border-radius: 120px 120px 0px 0px
  // background: url("../assets/img/04_WORKS-02/UP_00.jpg")
  background-size: cover
  background-position: center bottom
  background-attachment: fixed
  display: flex
  position: absolute

  
  .left_img
    height: 100vh
    // border-radius: 120px 120px 0px 0px
    background: url("../assets/img/04_WORKS-02/DOWN_00.jpg")
    background-size: 1500px auto
    background-position: 10% center  
    overflow: hidden

iframe
  mix-blend-mode: lighten

.content

  +flex_center
  flex-direction: column
  .top
    +flex_center
    flex-direction: row
    align-items: flex-start
    justify-content: flex-start

.about_text
  height: 50px
  display: block
  margin-bottom: 20px

.right_1
  width: 50%
.right_2
  width: 40%
  margin-top: 30vmin

  
</style>
