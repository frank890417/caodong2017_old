<template lang="jade">
.page.pageNews
  .back_img

    .left_img
      .tile
    .content
      .top
        img.right_1(src="../assets/img/02_INTRO-02/UP_pic/cover-1050x700.jpg",
                    :style="{'transform':`translateY(${-scrollTop/5+320}px)`}")
        img.right_2(src="../assets/img/02_INTRO-02/UP_pic/DSC_1777.jpg",
                    :style="{'transform':`translateY(${-scrollTop/7+270}px)`}")
      .bottom
        ul.news_block
          li(v-for="a_news in news")
            .date {{a_news.date}}
            .content(v-html="a_news.content")
      
</template>

<script>
var context = require.context('@/assets/img/02_INTRO-02/簡介02', true, /\.(png)$/);
var files={};

context.keys().forEach((filename)=>{
  console.log(filename);
  files[filename] = context(filename);
});
console.log(files);



import {mapState} from 'vuex'
export default {
  name: 'pageNews',
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

.pageNews
  position: relative
  height: 100vh
  width: 100%
  overflow: hidden
  +flex_center
  align-items: flex-end
  background-attachment: fixed
  
  li

    display: flex
    .date
      width: 110px

.back_img
  width: 80%
  height: 100vh
  // border-radius: 120px 120px 0px 0px
  // background: url("../assets/img/02_INTRO-02/UP_00.jpg")
  background-size: cover
  background-position: center bottom
  background-attachment: fixed
  display: flex
  position: absolute

  
  .left_img
    height: 100vh
    // border-radius: 120px 120px 0px 0px
    background: url("../assets/img/02_INTRO-02/DOWN_00.jpg")
    background-size: 1500px auto
    background-position: 25% center  
    overflow: hidden


.content

  +flex_center
  flex-direction: column
  .top
    +flex_center
    flex-direction: row
    align-items: flex-start
    justify-content: flex-start

.news_block
  text-align: left
  padding: 0
  font-weight: 500
  .content
    display: block



.right_1
  width: 50%
.right_2
  width: 40%
  margin-top: 30vmin

  
</style>
