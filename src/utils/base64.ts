/**
 * @param str
 *        The base64 encoded string to decode.
 * @returns {string}
 *           The decoded string.
 */
export const decodeBase64 =
  (str: string):string => Buffer.from(str, "base64").toString("binary");
/**
 * @param str
 *        The string to encode to base64.
 * @returns {string}
 *          The base64 encoded string.
 */
export const encodeBase64 =
  (str: string):string => Buffer.from(str, "binary").toString("base64");
