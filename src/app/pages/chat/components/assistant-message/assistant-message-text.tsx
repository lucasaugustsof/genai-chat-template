import React from 'react';

import { useClipboardContext } from '@ark-ui/react/clipboard';
import { ark, type HTMLArkProps } from '@ark-ui/react/factory';

import { cn } from '@/lib/cn';

import { assistantMessageParts } from './anatomy';

export interface AssistantMessageTextProps extends HTMLArkProps<'p'> {
  children: string;
}

export function AssistantMessageText({
  children: text,
  className,
  ...props
}: AssistantMessageTextProps) {
  const { setValue } = useClipboardContext();

  React.useEffect(() => {
    if (typeof text === 'string') {
      setValue(text);
    }
  }, [text, setValue]);

  return (
    <ark.p
      {...assistantMessageParts.text.attrs}
      {...props}
      className={cn('px-1 text-sm-plus/6 tracking-[-0.15px]', className)}
    >
      {text}
    </ark.p>
  );
}
