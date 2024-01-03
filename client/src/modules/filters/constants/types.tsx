import * as uuid from "uuid";

import CakeIcon from "@mui/icons-material/Cake";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import NightlifeIcon from "@mui/icons-material/Nightlife";
import PartyModeIcon from "@mui/icons-material/PartyMode";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import WcIcon from "@mui/icons-material/Wc";

export enum FilterTypes {
  childrenHoliday = "children_holiday",
  restaurant = "restaurant",
  flowers = "flowers",
  corporate = "corporate",
  presenters = "presenters",
  genderParty = "gender_party",
  themedParties = "themed_parties",
}

export const FILTER_TYPES = [
  {
    id: uuid.v4(),
    type: FilterTypes.childrenHoliday,
    title: "Дитяче свято",
    icon: <CakeIcon />,
  },
  {
    id: uuid.v4(),
    type: FilterTypes.restaurant,
    title: "Ресторани",
    icon: <RestaurantIcon />,
  },
  {
    id: uuid.v4(),
    type: FilterTypes.flowers,
    title: "Квіти",
    icon: <LocalFloristIcon />,
  },
  {
    id: uuid.v4(),
    type: FilterTypes.corporate,
    title: "Корпоративи",
    icon: <NightlifeIcon />,
  },
  {
    id: uuid.v4(),
    type: FilterTypes.presenters,
    title: "Гендер вечірка",
    icon: <EmojiPeopleIcon />,
  },
  {
    id: uuid.v4(),
    type: FilterTypes.genderParty,
    title: "Корпоративи",
    icon: <WcIcon />,
  },
  {
    id: uuid.v4(),
    type: FilterTypes.themedParties,
    title: "Тиматичні вечірки",
    icon: <PartyModeIcon />,
  },
];
