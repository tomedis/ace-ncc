# React Native Redux Toolkit Example

This is an example project for a blog post about using Redux Toolkit in React Native.

Find out more here https://hybridheroes.de/blog

## Getting started

### Install dependencies

```sh
npm install
```

### Run iOS

```sh
npm run ios
```

### Run Android

```sh
npm run android
```

### Build app

```sh
Android:

setup:
- create keystore

keytool -genkey -v -keystore example.keystore -alias example-alias -keyalg RSA -keysize 2048 -validity 10000

move keystore to android/app

***
buildTypes -> change debug to release (signingConfig)

go to gradle.properties: 
MYAPP_RELEASE_STORE_FILE=exampleLoi.keystore
MYAPP_RELEASE_KEY_ALIAS=exampleLoi-alias
MYAPP_RELEASE_STORE_PASSWORD=11223344
MYAPP_RELEASE_KEY_PASSWORD=11223344

- build apk:

cd android && ./gradlew assembleRelease

get apk file: android/app/build/outputs/apk/release/app-release.apk

- build abb:

cd android && ./gradlew bundleRelease

Update apk targe sdk: compileSdkVersion 33 -> 34

```
