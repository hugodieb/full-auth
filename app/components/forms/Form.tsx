import { FormEvent, ChangeEvent } from "react";
import { Input } from '@/app/components/forms';
import { Spinner } from "@/app/components/common";

interface Config {
  labelText: string;
  labelId: string;
  type: string;
  value: string;
  link?: {
    linkText: string;
    linkUrl: string;
  }
  required?: boolean
}

interface Props {
  config: Config[];
  isLoading: boolean;
  btnText: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export default function Form({ config, isLoading, btnText, onChange, onSubmit }: Props) {
  return (
    <form className="space-y-2" onSubmit={onSubmit}>
      {config.map(input => (
        <Input
          key={input.labelId}
          labelId={input.labelId}
          type={input.type}
          onChange={onChange}
          value={input.value}
          link={input.link}
          required={input.required}
        >
          {input.labelText}
        </Input>
      ))}

      <div className="mt-3">
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 mt-5 px-3 py-2 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          disabled={isLoading}
        >
          {isLoading ? <Spinner sm /> : `${btnText}`}
        </button>
      </div>
    </form>
  );
}