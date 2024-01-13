"use client";
import { Button } from "keep-react";
import { Gear, SquaresFour, Cube } from "phosphor-react";

export const ButtonComponent = () => {
  return (
    <>
      <Button notificationLabel="100" type="primary" size="md">Messages</Button>
      <Button type="primary" size="md">
        <span className="pr-2">
          <Gear size={24} />
        </span>
        Settings
      </Button>
      <Button type="primary" size="md">
        Dashboard
        <span className="pl-2">
          <SquaresFour size={24} />
        </span>
      </Button>
    </>
  );
};

export default ButtonComponent;