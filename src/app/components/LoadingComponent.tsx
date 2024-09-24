import { Spinner } from "@nextui-org/react";
import React from "react";

export default function LoadingComponent({ label }: { label?: string }) {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center">
      <Spinner label={label} color="secondary" labelColor="secondary" />
    </div>
  );
}
