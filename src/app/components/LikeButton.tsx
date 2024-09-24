"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { toggleLikeMember } from "../(auth)/actions/likeAction";
import { AiFillHeart } from "react-icons/ai";

type Props = {
  targetUserId: string;
  hasLiked: boolean;
};
export default function LikeButton({ targetUserId, hasLiked }: Props) {
  const router = useRouter();

  async function toggleLike() {
    await toggleLikeMember(targetUserId, hasLiked);
    router.refresh();
  }
  return (
    <div
      onClick={toggleLike}
      className="relative hover:opacity-80 transition cursor-pointer"
    >
      <AiFillHeart
        size={28}
        className={hasLiked ? "fill-rose-500" : "fill-white"}
      />
    </div>
  );
}
