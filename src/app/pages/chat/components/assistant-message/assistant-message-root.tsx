import { Clipboard as ArkClipboard } from '@ark-ui/react/clipboard';

import { cn } from '@/lib/cn';

import { assistantMessageParts } from './anatomy';

export type AssistantMessageRootProps = React.ComponentProps<'div'>;

const COPY_FEEDBACK_RESET_MS = 1000;

export function AssistantMessageRoot({ children, className, ...props }: AssistantMessageRootProps) {
  return (
    <ArkClipboard.Root timeout={COPY_FEEDBACK_RESET_MS} asChild>
      <div
        {...assistantMessageParts.root.attrs}
        {...props}
        className={cn('flex flex-col gap-y-2', className)}
      >
        {children}
      </div>
    </ArkClipboard.Root>
  );
}
