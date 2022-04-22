const replace = require('replace-in-file');

const replaceOldBundleIdWith = async (newBundleId) => {
    const options = require('./bundle-id-replace.config');
    options.to = `${newBundleId}`

    try {
        const results = await replace(options)
        // console.log('Replacement results:', results);
        console.log('Files succesfully updated!')
      }
      catch (error) {
        console.error('Error occurred:', error);
      }

}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log("************* READ CAREFULLY **************");
console.log("")
console.log("To be published to the store, your app must have a unique identifier.");
console.log("We recommend to set the initial part of your identifier to reflect the domain name of your company (e.g., example.com => com.example)");
console.log("The last part should be the name of your app.");
console.log("")
console.log("Examples:")
console.log("com.google.gmail");
console.log("com.facebook.instagram");
console.log("")

readline.question(`New bundle id: `, async (bundleId) => {
    console.log(`Setting new bundle id...`)
    await replaceOldBundleIdWith(bundleId)
    readline.close()
})



