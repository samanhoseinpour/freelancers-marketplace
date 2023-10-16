'use client';

import Image from 'next/image';
import { Menu } from '@headlessui/react';

const { Button, Items, Item } = Menu;

type CustomMenuProps = {
  title: string;
  state: string;
  setState: (value: string) => void;
  filters: Array<string>;
};

const CustomMenu = ({ title, state, setState, filters }: CustomMenuProps) => {
  return (
    <div className="flexStart flex-col w-full gap-7 relative">
      <label htmlFor="" className="w-full text-gray-100">
        {title}
      </label>

      <Menu as="div" className="self-start relative">
        <div>
          <Button className="flexCenter custom_menu-btn">
            {state || 'Select a Category'}
            <Image
              src="/arrow-down.svg"
              width={10}
              height={5}
              alt="arrow down"
            />
          </Button>
        </div>
        <Items className="flexStart custom_menu-items">
          {filters.map((tag, i) => (
            <Item key={i}>
              <button
                type="button"
                value={tag}
                className="custom_menu-item"
                onClick={(e) => setState(e.currentTarget.value)}
              >
                {tag}
              </button>
            </Item>
          ))}
        </Items>
      </Menu>
    </div>
  );
};

export default CustomMenu;
