import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

export const buttons = [
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
    isSelected: false,
    isFavorite: true,
    iconButton: StarBorderIcon,
    iconButtonFavorite: StarIcon
  },
  {
    key: "Mois",
    title: "Mois",
    view: "dayGridMonth",
    isSelected: true,
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
