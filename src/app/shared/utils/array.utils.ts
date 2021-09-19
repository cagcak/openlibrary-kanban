export class ArrayUtils {
  static filterList(list: string[], payload: string[] | string) {
    return list.filter((name) => (Array.isArray(payload) ? payload.indexOf(name) < 0 : name !== payload));
  }
}
