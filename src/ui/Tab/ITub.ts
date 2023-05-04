export interface ITub {
  text: string;
  name: string;
  value: string;
  selectedValue?: string;
  onChange: (arg: any) => void;
}
