"use client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import React from "react";
import { BiSolidError } from "react-icons/bi";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex justify-center items-center vertical-center">
      <Card className="w-2/5 mx-auto">
        <CardHeader className="flex flex-col items-center">
          <div className="flex flex-row gap-x-3 justify-center text-secondary">
            <BiSolidError size={30} />
            <h1 className="text-3xl text-secondary text-center font-bold">
              Error
            </h1>
          </div>
        </CardHeader>
        <CardBody>
          <div className="text-danger flex flex-col items-center text-md font-normal">
            {error.message}
          </div>
        </CardBody>
        <CardFooter className="flex flex-col items-center">
          <Button onClick={() => reset()} color="secondary">
            Try Again
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
