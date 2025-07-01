import home_demo_1 from "@/assets/img/element/home-thumbnail.png";
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
      { link: "/", title: "Home", demo_img: home_demo_1 }
    ],
	},
	{
		id: 2,
		title: "Quienes somos",
		link: "/about",
		has_dropdown: false,
	},
	{
		id: 3,
		title: "Productos",
		link: "#",
		has_dropdown: true,
		sub_menus: [
			{ link: "/blog", title: "Productos" },
			{ link: "/faqs", title: "FAQ" }
		],
	},
	// {
	// 	id: 3,
	// 	title: "Menu 2",
	// 	link: "#",
	// 	has_dropdown: true,
	// 	sub_menus: [
	// 		{ link: "/", title: "Submenu 1" },
	// 		{ link: "/", title: "Submenu 2" },
	// 	],
	// },
	// {
	// 	id: 4,
	// 	title: "Menu 3",
	// 	link: "#",
	// 	has_dropdown: true,
	// 	sub_menus: [
	// 		{ link: "/", title: "Submenu 1" },
	// 		{ link: "/", title: "Submenu 2" },
	// 		{ link: "/", title: "Submenu 3" },
	// 		{ link: "/", title: "Submenu 4" },
	// 	],
	// },
	// {
	// 	id: 5,
	// 	title: "Menu 4",
	// 	link: "#",
	// 	has_dropdown: true,
	// 	sub_menus: [
	// 		{ link: "/", title: "Submenu 1" },
	// 		{ link: "/", title: "Submenu 2" },
	// 	],
	// },
	// {
	// 	id: 6,
	// 	title: "Menu 5",
	// 	link: "/",
	// 	has_dropdown: false,
	// },
];
export default menu_data;
