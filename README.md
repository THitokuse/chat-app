# 「出会い系アプリ」

## 環境構築

- git clone
  取り込みたいディレクトリで git clone する。

```
$ git clone https://github.com/THitokuse/chat-app.git
```

- Expo Install
  ローカル環境内に Expo CLI を Install する

```
$ npm install -g expo-cli
```

- 各 OS の emulator をダウンロード
  IOS emulator

```
Download XCode
https://apps.apple.com/app/xcode/id497799835
Run Expo, open Expo Developer tool and click [Run on iOS simulator]
```

Android emulator

```
Download Android Studio
https://developer.android.com/studio/index.html?hl=ja
And Follow our Android Studio emulator guide to set up Android tools and create a virtual device.
https://docs.expo.io/versions/latest/workflow/android-studio-emulator/
```

- docker-compose up 　で docker を立ち上げる。

```
$ docker-compose up -d
```

- docker /bin/sh にログインする。

```
$ docker exec -it chat-app_vue_app_1 /bin/sh
```

- yarn を立ち上げる。

```
/chat-app # yarn start
```

## 要件定義

## DB 設計

## 今後の進め方
