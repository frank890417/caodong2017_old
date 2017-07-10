<template lang="jade">
.page.pageWorks
  .back_img
    .left_img
      .tile
    .content
      .left.col_album
        .cover
          img.album_cover(alt="works",src="../assets/img/03_WORKS/album.jpg")
          .title 醜奴兒
          .eng The Servile
        .tracks
          .track(v-for="(track,id) in trackdata",
                 :class="{active: playingId==id}",
                 @click="playingId=id")
            img(:src="track.img")
      .right.col_lyrics
        p 我試過握著她的手 卻還是一樣寂寞<br>從沒想過 原來自己那麼醜陋<br>原來自己那麼醜陋<br><br><br>我說得像切身之痛 卻一直在退縮<br>從沒想過 原來自己那麼醜陋<br>原來自己那麼醜陋      
  

      
</template>

<script>

import INTRO from "@/assets/img/03_WORKS/歌名/INTRO.png"
import 醜 from "@/assets/img/03_WORKS/歌名/醜.png"
import 爛泥 from "@/assets/img/03_WORKS/歌名/爛泥.png"
import 勇敢的人 from "@/assets/img/03_WORKS/歌名/勇敢的人.png"
import 大風吹 from "@/assets/img/03_WORKS/歌名/大風吹.png"
import 艾瑪 from "@/assets/img/03_WORKS/歌名/艾瑪.png"
import 等 from "@/assets/img/03_WORKS/歌名/等.png"
// import ghost from "@/assets/img/03_WORKS/歌名/⻤.png"
import 在 from "@/assets/img/03_WORKS/歌名/在.png"
import 山海 from "@/assets/img/03_WORKS/歌名/山海.png"
import 我們 from "@/assets/img/03_WORKS/歌名/我們.png"
import 情歌 from "@/assets/img/03_WORKS/歌名/情歌.png"


import {mapState} from 'vuex'
export default {
  data () {
    return {
      playingId: 1,
      trackdata: [
        {
          name: "INTRO",
          img: INTRO,
          audio: "",
          lyrics: ""
        },
        {
          name: "醜",
          img: 醜,
          audio: "",
          lyrics: ""
        },
        {
          name: "爛泥",
          img: 爛泥,
          audio: "",
          lyrics: ""
        },
        {
          name: "勇敢的人",
          img: 勇敢的人,
          audio: "",
          lyrics: ""
        },
        {
          name: "大風吹",
          img: 大風吹,
          audio: "",
          lyrics: ""
        },
        {
          name: "艾瑪",
          img: 艾瑪,
          audio: "",
          lyrics: ""
        },
        {
          name: "等",
          img: 等,
          audio: "",
          lyrics: ""
        },
        {
          name: "⻤",
          img: null,
          audio: "",
          lyrics: ""
        },
        {
          name: "在",
          img: 在,
          audio: "",
          lyrics: ""
        },
        {
          name: "山海",
          img: 山海,
          audio: "",
          lyrics: ""
        },
        {
          name: "我們",
          img: 我們,
          audio: "",
          lyrics: ""
        },
        {
          name: "情歌",
          img: 情歌,
          audio: "",
          lyrics: ""
        }
      ]
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

.pageWorks
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
  // background: url("../assets/img/03_WORKS/UP_00.jpg")
  background-size: cover
  background-position: center bottom
  background-attachment: fixed
  display: flex
  position: absolute

  
  .left_img
    height: 100vh
    // border-radius: 120px 120px 0px 0px
    background: url("../assets/img/03_WORKS/DOWN_00.jpg")
    background-size: 1500px auto
    background-position: center center  
    overflow: hidden



.content
  display: flex
  width: 84%
  align-items: flex-end
  .left
    width: 30%
  .right
    box-sizing: border-box
    width: 70%
    padding-left: 10%


.about_text
  height: 50px
  display: block
  margin-bottom: 20px
  
.right_1
  width: 50%
.right_2
  width: 40%
  margin-top: 30vmin

.col_album
  display: flex
  flex-direction: column

  align-items: center


.album_cover
  width: 200px

.track
  opacity: 0.55
  cursor: pointer
  +trans
  img
    height: 30px
  &.active
    opacity: 1
  
</style>
