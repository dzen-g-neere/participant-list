import compareStrings from "./Comparators/compareStrings";
import States from './States.json'

export class ComparatorByState {
  static [States.NameAsc] = (a, b) => compareStrings(a.name, b.name);
  static [States.NameDec] = (a, b) => -compareStrings(a.name, b.name);
  static [States.EmailAsc] = (a, b) => compareStrings(a.email, b.email);
  static [States.EmailDec] = (a, b) => -compareStrings(a.email, b.email);
  static [States.PhoneAsc] = (a, b) => compareStrings(a.phone, b.phone);
  static [States.PhoneDec] = (a, b) => -compareStrings(a.phone, b.phone);
}
