"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { Photo } from "@prisma/client";

export const getMembers = async () => {
  const session = await auth();
  if (!session?.user) return null;
  try {
    return await prisma.member.findMany({
      where: {
        NOT: { userId: session.user.id },
      },
    });
  } catch (error) {
    throw error
  }
};

export async function getMemberByUserId(userId: string) {
  try {
    return await prisma.member.findUnique({
      where: {
        userId,
      },
    });
  } catch (error) {
    throw error;
  }
}

export async function getMemberPhotosByUserId(userId: string) {
  const member = await prisma.member.findUnique({
    where: { userId },
    select: { photos: true },
  });
  if (!member?.photos) return null;
  return member.photos.map((p) => p) as Photo[];
}
