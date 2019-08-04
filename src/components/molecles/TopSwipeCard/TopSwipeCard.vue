<template>
  <view>
    <view
      v-for="person in people"
      :key="person.id"
      class="tinder"
      @touchstart="start"
      @touchmove="move"
      @touchend="end"
      @touchcancel="end"
      @mousedown="start"
      @mousemove="move"
      @mouseup="end"
      @mouseout="end"
    >
      <view
        class="card-wrapper"
        :style="{ width: 360, height: 360}"
        resizeMode='contain'>
          <image-background
            class="avatar"
            :style="{ width: 340, height: 340}"
            :source="{uri:person.src}"
          />
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'TopSwipeCard',
  data() {
    return {
      start: {},
      move: {},
      people: [
        {
          id: 1,
          src:
            "https://1.bp.blogspot.com/_qEbjiFbQWGM/TCBVlN3mkYI/AAAAAAAADCM/7CjYqUHwbgY/s1600/workshop_modell_0126.jpg"
        },
        {
          id: 2,
          src:
            "http://static.stylemagazin.hu/medias/29280/Nem-ehezik-a-Women-of-the-Year-legjobb-modell-dijara-eselyes-szepseg_32fc7c86954a8847610499a0fc7261e2.jpg"
        },
        {
          id: 3,
          src: "http://w1nd.cc/promo/347.jpg"
        },
        {
          id: 4,
          src:
            "http://ell.h-cdn.co/assets/cm/15/01/54a769be3112d_-_elle-rata-insta-1-24375723.png"
        },
        {
          id: 5,
          src:
            "http://static.stylemagazin.hu/medias/29280/Nem-ehezik-a-Women-of-the-Year-legjobb-modell-dijara-eselyes-szepseg_32fc7c86954a8847610499a0fc7261e2.jpg"
        }
      ]
    }
  },
  methods: {
    start(e) {
      e.preventDefault();
    },
    end(e) {
      e.preventDefault();
    },
    move(e) {
      e.preventDefault();
    }
  }
}
</script>

<style>
.tinder {
  position: relative;
}
.card-wrapper {
  /*
  color: #fff;
  padding: 20px;
  cursor: hand; */
  top: 30px;
  left: 30px;
  position: absolute;
  /* padding-horizontal: 50; */
  shadow-color: #000;
  shadow-opacity: 0.25;
  shadow-radius: 3.84;
  elevation: 5;
  background-color: #fff;
  border-radius: 10px;
}
.avatar {
  /*
  display: block;
  background-size: auto 160% !important;
  background-position: center;
  background-repeat: no-repeat; */
  margin-top: 10px;
  margin-left: 10px;
  background-color: #222;
}
</style>
