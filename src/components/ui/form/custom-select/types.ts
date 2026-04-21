export default interface Option<T extends string = string, U extends string = string> {
  id: T;
  title: U;
}
