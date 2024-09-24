import React from "react";
import { getMembers } from "../(auth)/actions/memberAction";
import MemberCard from "./MemberCard";
import { fetchCurrentUserLikeIds } from "../(auth)/actions/likeAction";

export default async function MembersPage() {
  const memberData = await getMembers();
  const likeIds = await fetchCurrentUserLikeIds();
  return (
    <div className="px-4 my-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-8">
      {memberData &&
        memberData.map((item) => <MemberCard key={item.id} member={item} likeIds={likeIds} />)}
    </div>
  );
}
