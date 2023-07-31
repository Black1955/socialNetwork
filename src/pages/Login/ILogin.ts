export interface ILogin {}

export interface FormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
}
export interface YourFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}
