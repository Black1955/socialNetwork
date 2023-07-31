import { FormElements } from "../Login/ILogin";

interface IFormElements extends FormElements {
  name: HTMLInputElement;
}

export interface YourFormElement extends HTMLFormElement {
  readonly elements: IFormElements;
}
