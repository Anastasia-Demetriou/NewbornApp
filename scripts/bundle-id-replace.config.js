module.exports = {
    files: [
        'android/app/**',
        'android/app/**',
        'android/fastlane/**',
        'ios/**'
    ],
    ignore: [
        '**/Pods/**',
        '**/build/**'
    ],
    from: /com.newborntracker/g,
    encoding: 'utf8'
  };