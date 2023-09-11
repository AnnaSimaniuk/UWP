export interface IAchievementsItems {
  text_1: string;
  text_2: string;
}

export interface IItemsDiscuss {
  name: string;
  image: string;
  position: string;
  description: string;
  achievements: IAchievementsItems[];
}

export interface IDiscuss {
  title: string;
  description: string;
  btn_text: string;
  btn_href: string;
  items: IItemsDiscuss[];
}
