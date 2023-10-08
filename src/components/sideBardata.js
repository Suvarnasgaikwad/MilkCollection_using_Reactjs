import React from "react";
import * as FaIcons from "react-icons/fa";
//import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import { IoMdHome } from "react-icons/io";
import {SlUser} from "react-icons/sl";
import { IoMdBook } from "react-icons/io";
import { IoMdBicycle } from "react-icons/io";
export const SidebarData = [
{
	title: "Home",
	path: "/home",
	icon:<IoMdHome/>,
	

	subNav: [
	{
		title: "Our Aim",
		path: "/home/aim",
		icon: <IoIcons.IoIosPaper />,
	},
	{
		title: "Our Vision",
		path: "/home/vision",
		icon: <IoIcons.IoIosPaper />,
	},
	],
},
{
	title:"Registration",
	path:"/reg",
	icon: <SlUser/>,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,
},
{
	title:"Farmer List",
	path:"/farm",
	icon: <IoMdBook/>,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,
},
{
	title:"Milk Collection",
	path:"/colect",
	icon: < IoMdBicycle/>,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,
},
{
	title: "Services",
	path: "/services",
	icon: <IoIcons.IoIosPaper />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Service 1",
		path: "/services/services1",
		icon: <IoIcons.IoIosPaper />,
		cName: "sub-nav",
	},
	{
		title: "Service 2",
		path: "/services/services2",
		icon: <IoIcons.IoIosPaper />,
		cName: "sub-nav",
	},
	{
		title: "Service 3",
		path: "/services/services3",
		icon: <IoIcons.IoIosPaper />,
	},
	],
},
{
	title: "Contact",
	path: "/contact",
	icon: <FaIcons.FaPhone />,
},
{
	title: "Events",
	path: "/events",
	icon: <FaIcons.FaEnvelopeOpenText />,

	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Event 1",
		path: "/events/events1",
		icon: <IoIcons.IoIosPaper />,
	},
	{
		title: "Event 2",
		path: "/events/events2",
		icon: <IoIcons.IoIosPaper />,
	},
	],
},
{
	title: "Support",
	path: "/support",
	icon: <IoIcons.IoMdHelpCircle />,
},
];
