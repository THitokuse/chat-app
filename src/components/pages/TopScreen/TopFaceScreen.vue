<template>
  <view class="container">
    <Header :headerComponent="'TopHeader'"></Header>
    <default-template>
      <text>Top Face Screen</text>
      <scroll-view>
        <view class="personality-content">
          <personality-card v-for="person in people" :key="person.id" :person="person" />
        </view>
      </scroll-view>
    </default-template>
  </view>
</template>

<script>
import Header from '../../globals/Header';
import { DefaultTemplate } from "../../templates";
import { PersonalityCard } from "../../molecles";

export default {
  name: "TopFaceScreen",
  components: {
    Header,
    DefaultTemplate,
    PersonalityCard
  },
  data() {
    return {
      people: [
        {
          id: 1,
          name: "長谷川たいこ",
          age: 445,
          prefecture: "東京",
          image: "https://hitokuse.com/blog/wp-content/uploads/2019/06/DSC06289-1024x683.jpg",
          promotion: "長谷川たいこで〜す！好きな事は福神漬けの直食いで〜〜す！"
        },
        {
          id: 2,
          name: "長谷川たいこ",
          age: 445,
          prefecture: "滋賀",
          image: "https://hitokuse.com/blog/wp-content/uploads/2019/06/DSC06289-1024x683.jpg",
          promotion: "長谷川たいこで〜す！好きな事は福神漬けの直食いで〜〜す！"
        },
        {
          id: 3,
          name: "長谷川たいこ",
          age: 445,
          prefecture: "埼玉",
          image: "https://hitokuse.com/blog/wp-content/uploads/2019/06/DSC06289-1024x683.jpg",
          promotion: "長谷川たいこで〜す！好きな事は福神漬けの直食いで〜〜す！"
        },
        {
          id: 4,
          name: "長谷川たいこ",
          age: 445,
          prefecture: "北海道",
          image: "https://hitokuse.com/blog/wp-content/uploads/2019/06/DSC06289-1024x683.jpg",
          promotion: "長谷川たいこで〜す！好きな事は福神漬けの直食いで〜〜す！"
        }
      ]
    }
  }
};
</script>

<style>
.container {
  flex: 1;
  margin-bottom: 30;
}
.personality-content {
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
