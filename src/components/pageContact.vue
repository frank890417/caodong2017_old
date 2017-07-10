<template lang="jade">
.page.pageContact
  .back_img
    .left_img
      .tile
  .agent
    p.agent_info ROGE<br>［Booking Agent］<br>LINE ID CaoDong_Official<br>WeChat ID CaoDong_Official<br>nopartyforcaodong@gmail.com
  a.platform(v-for="platform in platforms",
    :style="platform_css(platform)",
    :href="platform.link",
    target="_blank")
    img(:src="platform.logo",)
                 

</template>

<script>
import {mapState} from 'vuex'
import Bandcamp from "@/assets/img/06_CONTACT/連結/Bandcamp.png"
import Bandsintown from "@/assets/img/06_CONTACT/連結/Bandsintown.png"
import Facebook from "@/assets/img/06_CONTACT/連結/Facebook.png"
import Ig from "@/assets/img/06_CONTACT/連結/Ig.png"
import INDIEVOX from "@/assets/img/06_CONTACT/連結/INDIEVOX.png"
import ITUNES from "@/assets/img/06_CONTACT/連結/ITUNES.png"
import MMT from "@/assets/img/06_CONTACT/連結/MMT.png"
import Spotify from "@/assets/img/06_CONTACT/連結/Spotify.png"
import TWITTER from "@/assets/img/06_CONTACT/連結/TWITTER.png"
import Weibo from "@/assets/img/06_CONTACT/連結/Weibo.png"
import YOUTUBE from "@/assets/img/06_CONTACT/連結/YOUTUBE.png"

var platforms= [
        {
          name: "Bandcamp", 
          logo: Bandcamp , 
          pos: {left: 74,top: 52},
          link: "https://nopartyforcaodong.bandcamp.com/releases"
        },
        {
          name: "Bandsintown", 
          logo: Bandsintown , 
          pos: {left: 57,top: 21},
          link: "http://bandsintown.com/草東沒有派對NoPartyForCaoDong"
        },
        {
          name: "Facebook", 
          logo: Facebook , 
          pos: {left: 42,top: 32},
          link: "https://www.facebook.com/nopartyforcaodong/"
        },
        {
          name: "Ig", 
          logo: Ig , 
          pos: {left: 47,top: 54},
          link: "https://www.instagram.com/nopartyforcaodong/"
        },
        {
          name: "INDIEVOX", 
          logo: INDIEVOX , 
          pos: {left: 64,top: 36},
          link: "https://www.indievox.com/nopartyforcd"
        },
        {
          name: "ITUNES", 
          logo: ITUNES , 
          pos: {left: 68,top: 11},
          link: "https://itunes.apple.com/tw/artist/cao-dong-mei-you-pai-dui/id1110664089?l=zh"
        },
        {
          name: "MMT", 
          logo: MMT , 
          pos: {left: 78,top: 24},
          link: "https://www.mymusictaste.com/artist/NoPartyforCaoDong,436884/"
        },
        {
          name: "Spotify", 
          logo: Spotify , 
          pos: {left: 62,top: 47},
          link: "https://open.spotify.com/artist/3HXSUfI76zVZk71UMAeVfp"
        },
        {
          name: "TWITTER", 
          logo: TWITTER , 
          pos: {left: 63,top: 61},
          link: "https://twitter.com/nopartyforcd"
        },
        {
          name: "Weibo", 
          logo: Weibo , 
          pos: {left: 52,top: 41},
          link: "http://www.weibo.com/u/5697791666?refer_flag=1001030101_"
        },
        {
          name: "YOUTUBE", 
          logo: YOUTUBE , 
          pos: {left: 52,top: 12},
          link: "https://www.youtube.com/channel/UCYAyQjEhGHKARXnZe0U__9g"
        }
      ]

export default {
  name: 'pageContact',
  data () {
    return {
      platforms
    }
  },
  methods: {
    platform_css(pl){
      return {
        left: pl.pos.left+'%',
        top: pl.pos.top+'%',
      }
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

.pageContact

  overflow: hidden
  background: url("../assets/img/01_INTRO/BG-01.jpg")
  background-size: cover
  +flex_center
  align-items: flex-start
  background-attachment: fixed

.back_img
  width: 80%
  height: 90vh
  border-radius: 0px 0px 120px 120px
  background: url("../assets/img/06_CONTACT/UP.jpg")
  background-size: 80% auto
  background-position: center center
  // background-attachment: fixed
  display: flex
  position: absolute
  transition: 0.04s
  &:before
    +pseudo_ab_full
    background: linear-gradient(rgba(black,0.7) 0%,transparent 50%)
    background-size: 100% 100%
    z-index: 0
    pointer-events: none

  
  .left_img
    height: 90vh
    border-radius: 0px 0px 120px 120px
    background: url("../assets/img/06_CONTACT/DOWN.jpg")
    background-size: 1500px auto
    background-position: 10% center  
    overflow: hidden


.agent_info
  position: absolute
  left: 30%
  bottom: 20%
  font-weight: 500

.platform
  position: absolute
  img
    height: 40px
  opacity: 0.6
  cursor: pointer
  +trans
  &:hover
    opacity: 1

.content
  +flex_center
  flex-direction: column
.about_text
  height: 50px
  display: block
  margin-bottom: 20px


</style>
