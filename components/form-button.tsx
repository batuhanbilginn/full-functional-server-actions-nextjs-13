"use client";

import { experimental_useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import Spinner from "./ui/spinner";

const FormButton = () => {
  const { pending } = experimental_useFormStatus();

  return (
    <Button type="submit" className="w-full">
      {pending ? <Spinner /> : "Submit"}
    </Button>
  );
};

export default FormButton;
