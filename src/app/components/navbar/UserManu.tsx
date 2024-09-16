"use client";
import { signOutUser } from "@/app/(auth)/actions/authActions";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/react";
import { Session } from "next-auth";
import Link from "next/link";
import React from "react";

type Props = {
  user?: Session["user"]; // Optional type
};

export default function UserMenu({ user }: Props) {
  // Corrected typo
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          name={user?.name || "user avatar"}
          color="secondary"
          size="sm"
          src={user?.image || "/images/user.png"}
        />
      </DropdownTrigger>
      <DropdownMenu variant="flat" aria-label="User action menu">
        <DropdownSection showDivider>
          <DropdownItem
            isReadOnly
            as="span"
            className="h-14 flex flex-row"
            aria-label="username"
          >
            Signed in as <span className="font-bold">{user?.name || "Guest"}{" "}</span>
            {/* Fallback for missing name */}
          </DropdownItem>
        </DropdownSection>
        <DropdownItem as={Link} href="/members/edit">
            Edit profile
          </DropdownItem>
          <DropdownItem color="danger" onClick={async () => signOutUser()}>
            Log out
          </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
