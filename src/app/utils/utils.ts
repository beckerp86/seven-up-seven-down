export class Utils {
  static GetEnumMemberName(enumClass: any, enumMember: any): string {
    return enumClass[enumMember];
  }

  static IsArray(arr: any): boolean {
    if (!arr) return false;
    return Array.isArray(arr);
  }

  static IsArrayAndHasValues(arr: any): boolean {
    return Utils.IsArray(arr) && arr.length > 0;
  }
}
