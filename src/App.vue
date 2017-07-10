<template lang="jade">
  #app
    Navbar
    //router-view
    pageIndex     
    pageIntro
    pageNews
    pageWorks
    pageVideo
    pageTour
    pageContact
    footer
      blockqoute Copyright 2017 © 草東沒有派對 No Party For Cao Dong, All right reserved.


</template>

<script>
import pageIndex from './components/pageIndex'
import pageIntro from './components/pageIntro'
import pageNews from './components/pageNews'
import pageWorks from './components/pageWorks'
import pageVideo from './components/pageVideo'
import pageContact from './components/pageContact'
import pageTour from './components/pageTour'
import Navbar from './components/Navbar'
export default {
  name: 'app',
  components: {
    pageIndex, pageIntro,pageNews , pageWorks, pageVideo , pageContact ,pageTour,Navbar
  }
}
</script>

<style lang="sass?indentedSyntax">

@import url("http://fonts.googleapis.com/earlyaccess/notosanstc.css")
@import "./assets/sass/_variables.sass"

html,body
  padding: 0
  margin: 0
  color: white
  text-align: left
  line-height: 40px
  background-color: black
p
  text-align: left
  font-weight: 700
  color: white
  letter-spacing: 1px


#app 
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #fff


*
  font-family: 'Noto Sans TC','微軟正黑體','Avenir', Helvetica, Arial, sans-serif

@keyframes tv_tile
  0%
    transform: translateY(0px)
  30%
    transform: translateY(7px)
  50%
    transform: translateY(11px)
  100%
    transform: translateY(20px)

.tile
  background-image: linear-gradient(transparent 0%, transparent 30% , black 30%, black 100%) 
  background-repeat: repeat
  background-size: 100% 10px
  +size(100%)
  z-index: 1
  animation: tv_tile 10s infinite linear  

//每一頁
.page
  +size(100%,100vh)  
  position: relative
  background: url("./assets/img/01_INTRO/BG-01.jpg")
  background-size: cover
  background-attachment: fixed

//左側長條
.left_img
  width: 16%

//聲明
blockqoute
  font-size: 14px
  opacity: 0.5
  letter-spacing: 2px
  padding-bottom: 20px


</style>
