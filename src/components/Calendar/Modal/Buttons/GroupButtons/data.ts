import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

export interface IButtonView {
  key: string;
  title: string;
  view: string;
  isSelected: boolean;
  isFavorite: boolean;
  iconButton: (arg: any) => JSX.Element;
  iconButtonFavorite: (arg: any) => JSX.Element;
}

export const buttons: Array<IButtonView> = [
  {
    key: "Jour",
    title: "Jour",
    view: "timeGridDay",
    isSelected: false,
    isFavorite: false,
    iconButton: StarBorderIcon,
    iconButtonFavorite: StarIcon
  },
  {
    key: "Semaine",
    title: "Semaine",
    view: "dayGridWeek",
    isSelected: true,
    isFavorite: true,
    iconButton: StarBorderIcon,
    iconButtonFavorite: StarIcon
  },
  {
    key: "Mois",
    title: "Mois",
    view: "dayGridMonth",
    isSelected: false,
    isFavorite: false,
    iconButton: StarBorderIcon,
    iconButtonFavorite: StarIcon
  },
  {
    key: "Liste",
    title: "Liste",
    view: "listWeek",
    isSelected: false,
    isFavorite: false,
    iconButton: StarBorderIcon,
    iconButtonFavorite: StarIcon
  }
];
