import { cn } from '@/lib/cn';

export type BubbleProps = React.ComponentProps<'div'>;

export function Bubble({ className, ...props }: BubbleProps) {
  return (
    <div
      {...props}
      className={cn(
        'd w-fit max-w-full list-none rounded-[--spacing(3.5)] rounded-br-lg bg-neutral-200 px-3.5 py-2.5 text-pretty whitespace-pre-wrap',
        'text-sm-plus/6 tracking-[-0.15px] text-neutral-950',
        className,
      )}
      data-scope="bubble"
    />
  );
}
