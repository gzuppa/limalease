import home_demo_1 from "@/assets/img/banner/home1-vr.png";
import { StaticImageData } from "next/image";

interface MenuType {
  id: number;
  title: string;
  link: string;
  has_dropdown: boolean;
  img_dropdown?: boolean;
  sub_menus?: {
      link: string;
      title: string;
      demo_img?: StaticImageData;
  } [];
}

// menu data
const menu_data:MenuType[] = [
	{
		id: 1,
		title: "Home",
		link: "#",
		has_dropdown: false,
		img_dropdown: true,
		sub_menus: [
      { link: "/", title: "Main Home", demo_img: home_demo_1 }
    ],
	},
	{
		id: 2,
		title: "Menu 1",
		link: "/about",
		has_dropdown: false,
	},
	{
		id: 3,
		title: "Menu 2",
		link: "#",
		has_dropdown: true,
		sub_menus: [
			{ link: "/service", title: "Submenu 1" },
			{ link: "/service-details", title: "Submenu 2" },
		],
	},
	{
		id: 4,
		title: "Menu 3",
		link: "#",
		has_dropdown: true,
		sub_menus: [
			{ link: "/team", title: "Submenu 1" },
			{ link: "/pricing", title: "Submenu 2" },
			{ link: "/faqs", title: "Submenu 3" },
			{ link: "/contact", title: "Submenu 4" },
		],
	},
	{
		id: 5,
		title: "Menu 4",
		link: "#",
		has_dropdown: true,
		sub_menus: [
			{ link: "/blog", title: "Submenu 1" },
			{ link: "/blog-details", title: "Submenu 2" },
		],
	},
	{
		id: 6,
		title: "Menu 5",
		link: "/contact",
		has_dropdown: false,
	},
];
export default menu_data;
