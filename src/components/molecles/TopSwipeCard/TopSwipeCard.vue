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
      <transition-group @leave="leave" @afterLeave="reset">
        <view
          class="card-wrapper"
          :style="{ width: 360, height: 360}"
          resizeMode='contain'
        >
          <image-background
            class="avatar"
            :style="{ width: 340, height: 340}"
            :source="{uri:person.src}"
          />
        </view>
      </transition-group>
    </view>
  </view>
</template>

<script>
const initStatus = () => ({
  touchId: null,
  start: {},
  move: {},
  ratio: 0,
  result: null
})

export default {
  name: 'TopSwipeCard',
  data() {
    return {
      cardStatus: "normal",
      moveStatus: initStatus(),
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
      if (this.moveStatus.touchId !== null || this.cardStatus === "leave") {
        return;
      }
      this.cardStatus = "move";

      let pageX, pageY;
      if (e.type === "touchstart") {
        pageX = e.changedTouches[0].pageX;
        pageY = e.changedTouches[0].pageY;
      } else {
        pageX = e.clientX;
        pageY = e.clientY;
      }
      // identifier: タッチを開始すると振り分けられる、ユニークな識別番号
      this.moveStatus = {
        touchId:
          e.type === "touchstart" ? e.changedTouches[0].identifier : "mouse",
        start: {
          x: pageX,
          y: pageY
        },
        move: {}
      };
    },
    end(e) {
      if (
        e.type === "touchstart" &&
        this.moveStatus.touchId !== e.changedTouches[0].identifier
      ) {
        return;
      }
      if (this.cardStatus === "leave") return;
      if (this.checkFace === "Like" || this.checkFace === "Nope") {
        this.shiftCard(this.checkFace);
      } else {
        this.reset();
      }
    },
    move(e) {
      if (
        this.moveStatus.touchId === null ||
        this.cardStatus === "leave" ||
        (e.type === "touchmove" &&
          this.moveStatus.touchId !== e.changedTouches[0].identifier)
      ) {
        return;
      }
      this.cardStatus = "move";
      let pageX, pageY;
      if (e.type === "touchmove") {
        pageX = e.changedTouches[0].pageX;
        pageY = e.changedTouches[0].pageY;
      } else {
        pageX = e.clientX;
        pageY = e.clientY;
      }
      this.moveStatus.move = {
        x: pageX,
        y: pageY
      };
    },
    leave(el, done) {
      const { start, move } = this.moveStatus;
      let x = move.x - start.x || 0;
      let y = move.y - start.y || 0;
      x += this.size.width * (x < 0 ? -0.5 : 0.5);
      y *= x / (move.x - start.x);
      const ratio = x / (this.size.width * 0.5);
      const rotate = (ratio / (0.8 /0.5)) * 15;
      const duration =
        this.moveStatus.touchId === null
          ? 800
          : 300;
      el.className += ` ${this.moveStatus.result}`;
      el.style.opacity = 0;
      el.style.transform = `translate3d(${x}px,${y}px,0) rotate(${rotate}deg)`;
      el.style.transition = `all ${duration}ms ease`;
      setTimeout(done, duration);
    },
    reset() {
      this.cardStatus = "normal";
      this.moveStatus = initStatus();
    }
  }
}
</script>

<style>
.tinder {
  position: relative;
}
.card-wrapper {
  top: 30px;
  left: 30px;
  position: absolute;
  shadow-color: #000;
  shadow-opacity: 0.25;
  shadow-radius: 3.84;
  elevation: 5;
  background-color: #fff;
  border-radius: 10px;
}
.avatar {
  margin-top: 10px;
  margin-left: 10px;
  background-color: #222;
}
</style>
