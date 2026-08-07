import { ark, type HTMLArkProps } from '@ark-ui/react/factory';

import { cn } from '@/lib/cn';

export type CustomIconButtonProps = HTMLArkProps<'button'>;

export function CustomIconButton({ className, ...props }: CustomIconButtonProps) {
  return (
    <ark.button
      {...props}
      className={cn(
        [
          'inline-flex size-6 items-center justify-center rounded-md bg-white whitespace-nowrap outline-hidden transition-[background-color,scale] will-change-transform',
          'hover:bg-neutral-50 focus-visible:bg-neutral-50 focus-visible:ring-1 focus-visible:ring-neutral-950/8 active:scale-95',
        ],
        [
          '[&_svg]:size-4.5 [&_svg]:shrink-0 [&_svg]:fill-neutral-400 [&_svg]:transition-[fill]',
          'hover:[&_svg]:fill-neutral-600 focus-visible:[&_svg]:fill-neutral-600',
        ],
        className,
      )}
      data-scope="custom-icon-button"
    />
  );
}
