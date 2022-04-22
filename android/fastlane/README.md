fastlane documentation
================
# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```
xcode-select --install
```

Install _fastlane_ using
```
[sudo] gem install fastlane -NV
```
or alternatively using `brew install fastlane`

# Available Actions
## Android
### android test
```
fastlane android test
```
Runs all the tests
### android build_staging
```
fastlane android build_staging
```
Build Staging
### android build_rc
```
fastlane android build_rc
```
Build RC
### android build_production
```
fastlane android build_production
```
Build Production
### android deploy_staging
```
fastlane android deploy_staging
```
Submit a new Staging Build to App Center
### android deploy_rc
```
fastlane android deploy_rc
```
Submit a new RC Build to App Center
### android deploy_store
```
fastlane android deploy_store
```
Deploy a new production version to the Google Play

----

This README.md is auto-generated and will be re-generated every time [_fastlane_](https://fastlane.tools) is run.
More information about fastlane can be found on [fastlane.tools](https://fastlane.tools).
The documentation of fastlane can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
