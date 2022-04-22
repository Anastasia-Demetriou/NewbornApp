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
## iOS
### ios certificates
```
fastlane ios certificates
```
Fetch certificates and provisioning profiles
### ios test
```
fastlane ios test
```
Runs all the tests
### ios build_staging
```
fastlane ios build_staging
```
Build a new Staging Build to App Center
### ios build_rc
```
fastlane ios build_rc
```
Build a new RC Build to App Center
### ios build_production
```
fastlane ios build_production
```
Build a new Production Build to Apple Store
### ios deploy_staging
```
fastlane ios deploy_staging
```
Submit a new Staging Build to App Center
### ios deploy_rc
```
fastlane ios deploy_rc
```
Submit a new RC Build to App Center
### ios deploy_store
```
fastlane ios deploy_store
```
Submit a new Production Build to Apple Store

----

This README.md is auto-generated and will be re-generated every time [_fastlane_](https://fastlane.tools) is run.
More information about fastlane can be found on [fastlane.tools](https://fastlane.tools).
The documentation of fastlane can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
