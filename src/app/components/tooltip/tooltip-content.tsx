import { Portal as ArkPortal } from '@ark-ui/react/portal';
import { Tooltip as ArkTooltip } from '@ark-ui/react/tooltip';

import { cn } from '@/lib/cn';

export type TooltipContentProps = ArkTooltip.ContentProps;

export function TooltipContent({ children, ...props }: TooltipContentProps) {
  return (
    <ArkPortal>
      <ArkTooltip.Positioner>
        <ArkTooltip.Content
          {...props}
          className={cn(
            [
              'origin-(--transform-origin) rounded-sm border border-neutral-200 bg-(--surface) px-1.5 py-0.5 text-xs/4 whitespace-nowrap shadow-tooltip duration-150 ease-out [--surface:var(--color-white)]',
            ],
            [
              'data-[state=open]:animate-in data-[state=open]:zoom-in-95 data-[state=open]:fade-in',
              'data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=closed]:fade-out',
            ],
          )}
          style={
            {
              '--arrow-background': 'var(--surface)',
              '--arrow-size': '0.375rem',
            } as React.CSSProperties
          }
        >
          <ArkTooltip.Arrow>
            <ArkTooltip.ArrowTip className="border-t border-l border-neutral-200" />
          </ArkTooltip.Arrow>

          {children}
        </ArkTooltip.Content>
      </ArkTooltip.Positioner>
    </ArkPortal>
  );
}
