export interface IItemsBlog {
  name: string;
  href: string;
  image: string;
  category: string;
  category_href: string;
  date: string;
}

export interface IBlog {
  title: string;
  btn_text: string;
  btn_href: string;
  items: IItemsBlog[];
}
