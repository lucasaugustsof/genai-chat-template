import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        {
          text: ['sm-plus'],
        },
      ],
    },
  },
});

export const cn = (...input: ClassValue[]) => twMerge(clsx(...input));
