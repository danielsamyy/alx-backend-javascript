/**
 * A weak map of endpoints and the number of calls made.
 */
export const weakMap = new WeakMap();

/**
 * The maximum number of calls for an endpoint.
 */
const MAX_ENDPOINT_CALLS = 5;

/**
 * Tracks the number of calls made to an API's endpoint.
 * @param {{
 *   protocol: String,
 *   name: String,
 * }} endpoint - The endpoint to make a request to.
 * @author Daniel Ongom <https://github.com/domodan>
 */
export function queryAPI(endpoint) {
  let count = weakMap.get(endpoint) || 0;
  count += 1;
  weakMap.set(endpoint, count);

  if (count >= MAX_ENDPOINT_CALLS) throw Error('Endpoint load is high');
}
