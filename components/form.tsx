"use client";
import { formSubmitHandler } from "@/actions";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";
import FormButton from "./form-button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useToast } from "./ui/use-toast";

const Form = () => {
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  // Reset Params Handler
  const resetParams = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("status");
    router.replace(`${pathname}?${params.toString()}`);
  }, [pathname, router, searchParams]);

  // Show Toast based on Status
  useEffect(() => {
    const status = searchParams.get("status");
    if (status) {
      if (status === "error") {
        toast({
          title: "Error",
          description: "Something went wrong.",
          variant: "destructive",
        });

        resetParams();
      } else {
        toast({
          title: "Success",
          description: "Your form has been submitted.",
        });
        resetParams();
      }
    }
  }, [resetParams, searchParams, toast]);

  return (
    <div className="w-full max-w-lg px-6 space-y-6">
      <div>
        <h1 className="text-4xl font-bold">Job Application</h1>
        <p className="text-lg font-light text-neutral-500">
          Please fill the form to apply to this role.
        </p>
      </div>
      {/* Form */}
      <form action={formSubmitHandler} className="space-y-6">
        <div className="space-y-3">
          <Label>Full Name</Label>
          <Input
            required
            name="full-name"
            className="bg-transparent"
            placeholder="Type your email."
          />
        </div>
        <div className="space-y-2">
          <Label>Title</Label>
          <Select required name="title">
            <SelectTrigger className="">
              <SelectValue placeholder="Select a title" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Titles</SelectLabel>
                <SelectItem value="marketing">Marketer</SelectItem>
                <SelectItem value="developer">Developer</SelectItem>
                <SelectItem value="designer">Designer</SelectItem>
                <SelectItem value="product-manager">
                  Product Manageer
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Email</Label>
          <Input
            required
            name="email"
            className="bg-transparent"
            type="email"
            placeholder="Type your email."
          />
        </div>
        <FormButton />
      </form>
    </div>
  );
};

export default Form;
