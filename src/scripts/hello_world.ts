import * as admin from "firebase-admin";

/**
 * A sample script.
 *
 * @returns {void}
 */
export default () : void => {
  const firestore = admin.firestore();
  
  console.log("Hello world!");
};
