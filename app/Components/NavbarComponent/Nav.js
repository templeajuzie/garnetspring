"use client";

import logowhite from "../../Resources/Images/logolight.png";
import logo from "../../Resources/Images/logo2.png";
import { Fragment, createElement, useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { FaBox } from "react-icons/fa6";

import Link from "next/link";
import Image from "next/image";

const navListMenuItems2 = [
  {
    title: "Product Packaging",
    description: "Explore multiple product packaging solutions",
    icon: NewspaperIcon,
    alink: "/productspackaging",
  },
];

const navListMenuItems1 = [
  {
    title: "Home Page",
    description: "Explore multiple product packaging solutions",
    icon: NewspaperIcon,
    alink: "/"
  },
  {
    title: "Who we are",
    description: "Explore multiple product packaging solutions",
    icon: NewspaperIcon,
    alink: "/about"
  },
  {
    title: "Our Team",
    description: "Explore multiple product packaging solutions",
    icon: NewspaperIcon,
    alink: "/team"
  },
];

function NavListMenu2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderItems = navListMenuItems2.map(
    ({ icon, title, description, alink }, key) => (
      <Link href="#" key={key}>
        <MenuItem>
          <Link
            href={alink}
            className="flex items-center gap-3 mt-1 rounded-lg"
          >
            <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2">
              {" "}
              {createElement(icon, {
                strokeWidth: 2,
                className: "h-6 text-gray-900 w-6",
              })}
            </div>
            <div>
              <Typography
                variant="h6"
                color="blue-gray"
                className="flex items-center text-sm font-bold"
              >
                {title}
              </Typography>
              <Typography
                variant="paragraph"
                className="text-xs !font-medium text-blue-gray-500"
              >
                {description}
              </Typography>
            </div>
          </Link>
        </MenuItem>
      </Link>
    )
  );

  return (
    <Fragment className="sticky top-0 ">
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Solutions
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-1 outline-none gap-y-2 outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </Fragment>
  );
}

function NavListMenu1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderItems = navListMenuItems1.map(
    ({ icon, title, description, alink }, key) => (
      <Link href="#" key={key}>
        <MenuItem>
          <Link
            href={alink}
            className="flex items-center gap-3 mt-1 rounded-lg"
          >
            <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2">
              {" "}
              {createElement(icon, {
                strokeWidth: 2,
                className: "h-6 text-gray-900 w-6",
              })}
            </div>
            <div>
              <Typography
                variant="h6"
                color="blue-gray"
                className="flex items-center text-sm font-bold"
              >
                {title}
              </Typography>
              <Typography
                variant="paragraph"
                className="text-xs !font-medium text-blue-gray-500"
              >
                {description}
              </Typography>
            </div>
          </Link>
        </MenuItem>
      </Link>
    )
  );

  return (
    <Fragment className="sticky top-0">
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Home
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="items-center justify-center hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-1 outline-none gap-y-2 outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </Fragment>
  );
}

function NavList() {
  return (
    <List className="p-0 mt-4 mb-6 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 lg:justify-center">
      <NavListMenu1 />

      

      {/* <Typography variant="small" color="blue-gray" className="font-medium">
        <Link href="/about">
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            Team
          </ListItem>
        </Link>
      </Typography> */}
      <NavListMenu2 />
      <Typography variant="small" color="blue-gray" className="font-medium">
        <Link href="#">
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            Store
          </ListItem>
        </Link>
      </Typography>
      <Typography variant="small" color="blue-gray" className="font-medium">
        <Link href="/career">
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            Career
          </ListItem>
        </Link>
      </Typography>
    </List>
  );
}

export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <div className="md:py-5 bg:red-500">
      <Navbar className="max-w-screen-xl px-4 py-2 mx-auto">
        <div className="flex items-center justify-between text-blue-gray-900">
          <div className=" md:flex md:items-center md:gap-12">
            <Link
              className="flex flex-row items-center gap-2 text-teal-600"
              href="/"
            >
              <Image
                className="h-[55px] w-auto object-cover "
                src={logo}
                height={200}
                width={200}
                alt=""
              />
            </Link>
          </div>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <div className="items-center hidden gap-2 lg:flex">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-medium hover:bg-transparent"
            >
              <Link href="">
                <ListItem className="flex items-center gap-2 py-2 pr-4 hover:bg-transparent">
                  Sales: +234-9035-525-955
                </ListItem>
              </Link>
            </Typography>

            <Link
              className="flex flex-row items-center gap-2 text-teal-600"
              href="/contact"
            >
              <Button variant="gradient" size="md">
                Contact Us
              </Button>
            </Link>
          </div>
          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="w-6 h-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="w-6 h-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
          <div className="flex items-center w-full gap-2 flex-nowrap lg:hidden">
            <Link href="/contact">
              <Button variant="gradient" size="sm" fullWidth>
                Contact Us
              </Button>
            </Link>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}
