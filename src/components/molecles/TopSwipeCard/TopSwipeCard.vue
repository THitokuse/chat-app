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
            class="tinder"
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
  /* background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  color: #fff;
  padding: 20px;
  width: 360px;
  height: 360px;
  top: 50px;
  left: 50px;
  position: absolute;
  cursor: hand; */
  border-radius: 10px;
}
.avatar {
  /* background: #222;
  width: 340px;
  height: 340px;
  display: block;
  margin-top: 10px;
  margin-left: 10px;
  background-size: auto 160% !important;
  background-position: center;
  background-repeat: no-repeat; */
}
</style>
