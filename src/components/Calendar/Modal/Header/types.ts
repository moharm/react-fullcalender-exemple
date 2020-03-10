export interface Ichangedate {}
export interface IheaderProps {
  changeview: (view: string) => void;
  gotobackdate: () => void;
  gotonextdate: () => void;
  currentdate: () => string;
}
