import { Button } from "./ui/button";
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

interface Props {}

const submitHandler = async (formData: FormData) => {
  "use server";

  const data = {
    name: formData.get("full-name"),
    title: formData.get("title"),
    email: formData.get("email"),
  };

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });

  const result = await promise;
  console.log(result);
};

const Form = async (props: Props) => {
  return (
    <div className="w-full max-w-lg px-6 py-4 rounded-md">
      {/* Form */}
      <form action={submitHandler} className="space-y-6">
        <div className="space-y-3">
          <Label>Full Name</Label>
          <Input
            name="full-name"
            className="bg-transparent"
            placeholder="Type your email."
          />
        </div>
        <div className="space-y-2">
          <Label>Title</Label>
          <Select name="title">
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
            name="email"
            className="bg-transparent"
            type="email"
            placeholder="Type your email."
          />
        </div>
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Form;
