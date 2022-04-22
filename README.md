<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Project overview](#project-overview)
  - [How does mobile distribution work](#how-does-mobile-distribution-work)
  - [Objectives of this project](#objectives-of-this-project)
    - [1. A simple environment and distribution strategy](#1-a-simple-environment-and-distribution-strategy)
    - [2. A normalised configuration layer across iOS and Android](#2-a-normalised-configuration-layer-across-ios-and-android)
    - [3. A normalised execution system across iOS and Android](#3-a-normalised-execution-system-across-ios-and-android)
    - [4. A simple naming and versioning convention](#4-a-simple-naming-and-versioning-convention)
    - [5. Be CI/CD agnostic](#5-be-cicd-agnostic)
- [Getting started](#getting-started)
  - [0. Fixing a bug with the repo](#0-fixing-a-bug-with-the-repo)
  - [1. Setup a development environment](#1-setup-a-development-environment)
- [Join an existing team](#join-an-existing-team)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->



## Project overview

The focus of this application is to provide an easy starting point to build and distribute native mobile applications.
To get the most out of it, it is important to understand a few concepts.

### How does mobile distribution work
Native mobile applications can be distributed in three ways:
1. Public distribution: Apple App Store (iOS), Google Play Store (Android)
2. Internal/beta distribution:  
    a. Official channels: TestFlight (iOS), Google Play Internal/Alpha/Beta (Android)  
    b. Third party providers: Appcenter, Firebase Distribution, Bitrise, etc.
	
3. Enterprise distribution: Apple Enterprise Store (iOS), Google Enterprise (Android, several options)

### Objectives of this project

#### 1. A simple environment and distribution strategy
The code is structured to support 4 types of builds (called `flavours` on Android, `schemas` on iOS): development, staging, release candidate, and production.
Each release type has a clear objective, and is intended to be connected to a specific environment and distributed to a specific target audience through the appropriate channel.



| Build type        | Objective                                                    | Environment                                                  | Target                                                       | Distribution channel                  |
| ----------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------- |
| Development       | Testing the code locally during the development              | Local server (e.g., `https://localhost:8080`), or some stub data (e.g., `./data/dummy-data.json`) | By default no one. If needed, this app could be connected to a remote development environment and distributed to all the developers | None                                  |
| Staging           | Providing access to the wider venture team (e.g., PM, designers, client) to the most recent version of the application | Staging server (e.g., `https://staging.myventure.com`)       | Wider venture team (e.g., PM, designers, client)             | Internal                              |
| Release Candidate | Providing access to the wider venture team (e.g., PM, designers, client) to the pre-release version of the app to **get the approval to publish to the store**. | Production server (e.g., `https://www.myventure.com`)        | Wider venture team (e.g., PM, designers, client). This team must **include the person(s) responsible** for the decision to publish the application. | Internal                              |
| Production        | Providing public access to the application                   | Production server (e.g., `https://www.myventure.com`)        | End users                                                    | Apple App Store and Google Play Store |



#### 2. A normalised configuration layer across iOS and Android

Configuring environment variables on React Native for both iOS and Android would require looking into Xcode and Gradle.

The app include [react-native-config](https://github.com/luggit/react-native-config) and it's configured to provide an abstraction layer for setting environmental variable through `.env` files (`.env.development`, `.env.staging`, `.env.rc`, and `.env.production`).



#### 3. A normalised execution system across iOS and Android

React Native provide a list of actions to normalise the execution of both iOS and Android in the most similar way (e.g., commands like `react-native run-ios` and `react-native run-android`).
The app provides additional npm commands to allow debugging, building and deploying both Android and iOS in a consistent manner using the following convention: `<platform>-<action>:<release-type>`.
Actions are:

- `debug`: runs the application in the local simulator
- `build`: build the app locally
- `deploy`: release the local package to the appropriate distribution channel



Example:

`npm run ios-debug:staging` will run the `staging` application in the iOS Simulator.

`npm run android-build:rc` will build the `release-candidate` application for Android



#### 4. A simple naming and versioning convention

The application is configured to support and follow the Branching/Versioning/Releasing Strategy [recommended by DV Berlin](https://confluence.bcgdv.io/x/8Z7XAw):

The app is configured to support a simple naming and versioning convention out-of-the-box.

Building the app will set the name, version and build number of the application automatically.



| Release type      | App name                        | Version                                 | Build number                                                 |
| ----------------- | ------------------------------- | --------------------------------------- | ------------------------------------------------------------ |
| Development       | `<your-app-name>` - Development | `Development-0.0.1`                     | Number of commits on the branch up until this ref (e.g. `5`) |
| Staging           | `<your-app-name>` - Staging     | `Staging-0.0.1`                         | Number of commits on the branch up until this ref (e.g. `5`) |
| Release Candidate | `<your-app-name>` - RC          | `ReleaseCandidate-0.0.1`                | Number of commits on the branch up until this ref (e.g. `5`) |
| Production        | `<your-app-name>`               | Latest tag on the branch (e.g. `3.0.1`) | Latest version published on the store incremented by 1.      |



#### 5. Be CI/CD agnostic

There are a few solutions on the market (e.g., Appcenter, Bitrise, Codemagic) that offer e2e build and distribution of a native mobile application, however most of these tools create a few issues in the overall application managment:
- force the branch and release strategy to adapt to their service (e.g., Appcenter requires one branch per distribution type, so in our scenario we would need 3 branches, `staging`, `release-candidate`, and `production`)
- create issues with signing of appliction in the local environment (e.g., Codemagic can provide [Automatic iOS Code Signing](https://blog.codemagic.io/app-store-connect-api-codemagic-cli-tools/)  however this automatically invalidates all certificates on the developers' machines)

To solve this problem, the building phase is managed indipendently using [Fastlane](https://fastlane.tools/), the most popular open-source mobile automation framework on the market.

This gives four advantages:

1. `Fastlane` has a built-in functionality called `Match` that automate creating and distributing signing certificates across the entire team (key information and concepts can be found on [this guide](codesigning.guide/))
2. the building phase is independent from the distribution phase, so the app can be distributed using **any channel** without changing the code.
3. gives an additional way to create consistent automated commands across platforms
4. because `Fastlane` is so popular, it is very easy to find tutorials and plugins to integrate with different distribution channels



## Getting started

Using this app requires different main setup phases:

0. Fixing a bug with the repo

1. Setup a development environment

2. Setup a distribution environment

3. Setup a CI/CD

4. Onboard new developers



### 0. Fixing a bug with the repo

Due to [this bug](https://github.com/react-native-community/cli/issues/1456) app name is not replaced correctly in `package.json`.
To fix the problem, open `package.json` and search for any occurence of `NewApp` or the name of your app.

The error usually occurs only on this lines:

```json
    "ios-debug": "react-native run-ios --scheme=\"NewApp Development\" --configuration=\"Development Debug\"",
    "ios-debug:staging": "react-native run-ios --scheme=\"NewApp Staging\" --configuration=\"Staging Debug\"",
    "ios-debug:rc": "react-native run-ios --scheme=\"NewApp RC\" --configuration=\"RC Debug\"",
    "ios-debug:production": "react-native run-ios --scheme=\"NewApp Production\" --configuration=\"Production Debug\"",
```

This step will hopefull not be needed in the future as soon as the bug fix gets merged.



### 1. Setup a development environment



1. **Setup the React Native environment**

Follow the [official React Native guide](https://reactnative.dev/docs/environment-setup) to setup the environment for both iOS and Android. Make sure you **select React Native CLI and not Expo**.

2. **Install `Fastlane`**

If you are on MacOS, `brew install fastlane` is probably the quickest option. An alternative option is to install it directly through Ruby using `gem install fastlane --user-install -NV` (`--user-install` is required to avoid using `sudo`). More options are available through the [official Fastlane guide](https://docs.fastlane.tools/getting-started/ios/setup/).

3. **Choose a bundle identifier**

To be published to the store, your app must have a unique identifier.
The usual recommendation is to use the domain company in the reverse order (e.g., `example.com` => `com.example`) and then add the name of your app as a unique identifier for your app (e.g., `com.example.<your-app-name>`).

Examples: `com.google.gmail` , `com.facebook.instagram`, `com.microsoft.excel`

4. **Change the bundle identifier for your app**

Run `npm run update-bundle-id` and follow the instructions.

5. **Test everything is working**

Check iOS is working correctly by running: `npm run ios-debug`

Check Android is working correctly by running: `npm run android-debug`

Check Fastlane is working correctly by running: `npm run check-fastlane`



### 2. Setup a distribution environment

This step is the most tricky and annoying one, but it has to be done. The sooner you set up the entire end-to-end environment the better.

The last thing you want is to find yourself close to the release day and spending time trying signing your application.



##### Prerequisites:

Permissions to access and manage an [Apple Developer Program](https://developer.apple.com/programs/) account and a [Google Play Store](https://play.google.com/console/about/) account.



**If you don't have an Apple Developer Program account:**

Enroll in the Apple Developer Program requires 48 hours for an individual and a couple of weeks for a company.

You can't enroll for a Company account without a D-U-N-S Number. 

Most DV ventures don't have a D-U-N-S Number as they don't have a legal entity yet.

As workaround you can create a personal account to be used during the development.

This type of account has some limitation compared to a company account. The most relevant is you **can't invite other developers to join the team** (so everyone is sharing the same certificates and logging in with the same account).

In addition to this, you must be aware that when you transfer the account to a new entity all data stored in the users' keychain will be lost (e.g., sessions, tokens, etc.)



**if you don't have a Google Play Store account:**

Create one visiting [Google Play Console](https://play.google.com/console/about/).



**If the accounts are managed by the client:**

You must ask the client to grant you permission to manage the application or they have to create everything for you.



### 3. Configure the iOS for distribution



**Configure `Fastlane` to user your Apple account**

1. Open `ios/fastlane/Appfile` 
2. Set `apple_id` with the email you use to access your Apple account (e.g., `myemail@example.com`)
3. Set `team_id` to your Apple team id. You can find the id on the **top-right corner** of the [certificates list page](https://developer.apple.com/account/resources/certificates/list) next to your account name
4. Open `ios/fastlane/Matchfile` 
5. Set `username` with the email you use to access your Apple account (e.g., `myemail@example.com`)



**Create the bundle identifiers on Apple Developer Portal**

1. `cd ios` 
2. Run `fastlane produce -u <your-apple-username> -a com.newapp --skip_itc`



## Join an existing team

The first phase is the creating the signing and distribution environment, it has to be done only once during the initial phase of the venture, and requires permissions to create and manage an [Apple Developer Program](https://developer.apple.com/programs/) account and a Google Play Store account.

1. Environment setup => React Native
2. Accounts setup => Setup Google Play and Apple Store
3. Application setup => Create certificates, names, etc.
4. CI/CD setup => Add credentials to CI/CD and create required scripts






1. Make sure the app name has been replaced correctly everywhere

2. Install fastlane

`gem install fastlane -NV`

You might get a permission error on MacOS.
If so, try adding `--user` to install `fastlane` in your user folder.

`gem install fastlane -NV --user`

3. Pod install
Pods should have been automatically installed from the setup script.
If that's not the case, just run `cd ios && pod install`

