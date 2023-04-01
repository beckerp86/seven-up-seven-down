export class EnumUtils {
  static GetEnumMemberName(enumClass: any, enumMember: any): string {
    return enumClass[enumMember];
  }
}
