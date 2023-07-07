"use server";
import { redirect } from "next/navigation";
export const formSubmitHandler = async (formData: FormData) => {
  const data = {
    name: formData.get("full-name"),
    title: formData.get("title"),
    email: formData.get("email"),
  } as const;

  const delay = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("delayed");
    }, 2000);
  });

  await delay; // simulate a delay for server side actions

  // Run your logic here
  if (data.name === "error") {
    redirect("/?status=error");
  } else {
    redirect("/?status=success");
  }
};
