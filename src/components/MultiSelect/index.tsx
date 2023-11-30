/* eslint-disable indent */
import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { v4 as uuid } from 'uuid';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { CheckedState } from '@radix-ui/react-checkbox';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';

export type OptionType = { text: string; checked: CheckedState };

interface MultiSelectProps {
  options: OptionType[];
  setOptions: React.Dispatch<React.SetStateAction<OptionType[]>>;
  placeholder?: string;
}

const MultiSelect = ({ options, setOptions, placeholder = 'Select option' }: MultiSelectProps) => {
  const selectedOptions = options.filter((opt) => opt.checked);

  const validateRenderedString = (text: string) => {
    return text.length >= 56 ? `${text.slice(0, 55)}...` : text;
  };

  return (
    <div className="flex">
      <Popover>
        <PopoverTrigger asChild className="group h-40 w-full">
          <Button
            variant="outline"
            className={cn(
              'flex h-[44px] w-full items-center justify-start gap-3 truncate whitespace-normal rounded-xl text-left !text-sm font-normal',
            )}
          >
            <span className="flex flex-1">
              {selectedOptions.length
                ? validateRenderedString(selectedOptions.map((option) => option.text).join(', '))
                : placeholder}
            </span>
            <ChevronDown className="ease-[cubic-bezier(0.87,_0,_0.13,_1)] ml-auto flex h-4 w-4 items-center justify-end transition-transform duration-300 group-data-[state=open]:rotate-180 " />
          </Button>
        </PopoverTrigger>
        <PopoverContent align="start" className="PopoverContent  rounded-xl border-none bg-white p-2 shadow-lg">
          <div className="flex max-h-80 flex-col overflow-auto">
            {options.map((option, index) => {
              return (
                <div key={uuid()} className="flex items-center space-x-3 p-[14px]">
                  <Checkbox
                    id={option.text}
                    checked={option.checked}
                    onCheckedChange={(checked) => {
                      setOptions(
                        options.map((opt, i) => {
                          if (i === index) {
                            return { ...opt, checked };
                          }
                          return opt;
                        }),
                      );
                    }}
                  />
                  <label
                    htmlFor={option.text}
                    className="text-sm font-semibold leading-none text-[#131316] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {option.text}
                  </label>
                </div>
              );
            })}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default MultiSelect;
