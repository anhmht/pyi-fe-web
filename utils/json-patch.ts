import * as jsonpatch from 'fast-json-patch';

export const patch = (newObject: any, original: any) => {
  return jsonpatch.compare(original, newObject);
}
