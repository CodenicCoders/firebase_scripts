import * as admin from "firebase-admin";

import {decodeBase64} from "./utils/base64";

const serviceAccount =
  JSON.parse(decodeBase64(process.env.FIREBASE_SERVICE_ACCOUNT));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

admin.firestore().settings({ignoreUndefinedProperties: true});

for (let i = 2; i < process.argv.length; i++) {
  const scriptName = process.argv[i];

  console.log(`Script "${scriptName}" started...`);

  import(`./scripts/${scriptName}`).then(async (module) => {
    await module.default();
    console.log(`Script "${scriptName}" completed.`);
  });
}

