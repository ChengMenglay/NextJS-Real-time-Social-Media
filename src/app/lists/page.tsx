import React from "react";
import ListTab from "./ListTab";
import {
  fetchCurrentUserLikeIds,
  fetchLikedMember,
} from "../(auth)/actions/likeAction";

export default async function ListPage({
  searchParams,
}: {
  searchParams: { type: string };
}) {
  const likeIds = await fetchCurrentUserLikeIds();
  const members = await fetchLikedMember(searchParams.type);
  return (
    <div>
      <ListTab members={members} likeIds={likeIds} />
    </div>
  );
}
