import { TabBarBottom, TabNavigator } from "vue-native-router";
import {
  TopFaceScreen,
  TopPersonalityScreen,
  ColumnScreen,
  MypageScreen,
  PersonalityCheckScreen
} from "../components/pages";

export const tabNav = TabNavigator(
  {
    TopFace: { screen: TopFaceScreen },
    PersonalityCheck: { screen: PersonalityCheckScreen },
    TopPersonalityScreen: { screen: TopPersonalityScreen },
    Column: { screen: ColumnScreen },
    MyPage: { screen: MypageScreen }
  },
  {
    initialRouteName: "MyPage",
    tabBarPosition: "bottom",
    tabBarComponent: TabBarBottom
  }
);
