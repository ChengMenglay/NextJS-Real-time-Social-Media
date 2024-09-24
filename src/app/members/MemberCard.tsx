"use client";
import { Member } from "@prisma/client";
import { Card, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";
import { calculateAge } from "@/lib/util";
import LikeButton from "../components/LikeButton";
import React from "react";
type Props = {
  member: Member;
  likeIds: string[];
};

export default function MemberCard({ member, likeIds }: Props) {
  const hasLiked = likeIds.includes(member.userId);
  const prventLinkaction = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };
  return (
    <Card as={Link} href={`/members/${member.userId}`} isPressable fullWidth>
      <Image
        isZoomed
        alt={member.name}
        width={300}
        src={member.image || "/images/user.png"}
        className=" aspect-square object-cover"
      />
      <div onClick={prventLinkaction}>
        <div className=" absolute top-3 right-3 z-50">
          <LikeButton targetUserId={member.userId} hasLiked={hasLiked} />
        </div>
      </div>

      <CardFooter className="flex justify-start bg-black absolute bottom-0 overflow-hidden z-10 bg-dark-gradient">
        <div className="flex flex-col text-white">
          <span className="font-semibold">
            {member.name}, {calculateAge(member.dateOfBirth)}
          </span>
          <span className="text-sm">{member.city}</span>
        </div>
      </CardFooter>
    </Card>
  );
}
