"use client";

import OraLogo from "../SupabaseLogo";
import { navItems } from "@/config/navitems";
import { Fragment, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";

import { Menu, XIcon, ChevronDown } from "lucide-react";
import AuthButton from "../AuthButton";
import Image from "next/image";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b">
      <nav className="container p-4 flex items-center justify-between mx-auto">
        <Link href="/" className="-m-1.5 p-1.5">
          <OraLogo />
        </Link>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6 mr-3" />
          </button>
        </div>

        <div className="hidden lg:flex lg:justify-end items-center gap-10 z-40">
          <Popover.Group className="hidden lg:flex gap-x-8 lg:gap-x-12 items-center">
            {navItems.map((item, index) => {
              if (item.items) {
                return (
                  Array.isArray(item.items) && (
                    <PopOverItems
                      itemName={item.name}
                      items={item.items}
                      index={index}
                    />
                  )
                );
              }
              return (
                <Link
                  key={index}
                  href={item.href}
                  className={`
                  ${
                    pathname === item.href
                      ? "text-gray-900 font-bold"
                      : "text-gray-500 hover:text-gray-900 font-medium"
                  }
                `}
                >
                  {item.name}
                </Link>
              );
            })}
            <AuthButton />
          </Popover.Group>
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <OraLogo />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navItems.map((menuItem, index) => {
                  if (menuItem.items) {
                    return (
                      <Disclosure as="div" key={index} className="-mx-3">
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                              {menuItem.name}
                              <ChevronDown
                                className={classNames(
                                  open ? "rotate-180" : "",
                                  "h-5 w-5 flex-none"
                                )}
                                aria-hidden="true"
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel className="mt-2 space-y-2">
                              {Array.isArray(menuItem.items) &&
                                menuItem.items.map((item) => (
                                  <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className="flex gap-4 items-center rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                  >
                                    <Image
                                      src={item.icon}
                                      alt={item.name}
                                      className="w-40"
                                    />
                                    {item.name}
                                  </Disclosure.Button>
                                ))}
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    );
                  }
                  return (
                    <Link
                      href={menuItem.href}
                      key={index}
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {menuItem.name}
                    </Link>
                  );
                })}
              </div>
              <div className="py-6">
                <AuthButton />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

const PopOverItems = ({
  itemName,
  items,
  index,
}: {
  itemName: string;
  items: { name: string; description: string; href: string; icon: any }[];
  index: number;
}) => {
  return (
    <Popover key={index} className="relative">
      <Popover.Button className="flex items-center gap-x-1 font-semibold text-gray-900  ring-0">
        <span className="text-gray-500 hover:text-gray-900 font-medium">
          {itemName}
        </span>
        <ChevronDown
          className="h-5 w-5 flex-none text-gray-400"
          aria-hidden="true"
        />
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg">
          <div className="p-4">
            {Array.isArray(items) &&
              items.map((subitem) => (
                <div
                  key={subitem.name}
                  className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                >
                  <div className="flex h-12 w-28 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <Image src={subitem.icon} alt={subitem.name} />
                  </div>
                  <div className="flex-auto">
                    <a
                      href={subitem.href}
                      target="_blank"
                      rel="noreferrer"
                      className="block font-semibold text-gray-900"
                    >
                      {subitem.name}
                      <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 text-gray-600">{subitem.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};
