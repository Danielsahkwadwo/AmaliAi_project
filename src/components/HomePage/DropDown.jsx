"use client";

import { Dropdown } from "flowbite-react";
import { HiCog, HiUserCircle, HiLogout } from "react-icons/hi";
import "./styles.css";

export default function DropDown({ data, logout }) {
  const customTheme = {
    inlineWrapper: " bg-transparent  text-center inline-flex items-center",
  };

  return (
    <Dropdown
      label={
        <img
          src="profilePhoto.png" // Replace with your image URL
          alt="User Avatar"
          className="dropdown h-12 w-12 rounded-full border-2 border-white"
        />
      }
      className=""
      inline={true}
      arrowIcon={false}
      theme={customTheme}
    >
      <Dropdown.Header>
        <span className="block text-sm">{data?.name}</span>
        <span className="block truncate text-sm font-medium">
          {data?.email}
        </span>
      </Dropdown.Header>
      <Dropdown.Item icon={HiUserCircle}>Profile</Dropdown.Item>
      <Dropdown.Item icon={HiCog}>Settings</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item
        icon={HiLogout}
        onClick={async () => {
          await logout();
        }}
      >
        Sign out
      </Dropdown.Item>
    </Dropdown>
  );
}
