import React from 'react';

import { useVirtualizer } from '@tanstack/react-virtual';

import { cn } from '@/lib/cn';

import { AssistantMessage } from './assistant-message';
import { Bubble } from './bubble';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export interface MessageListProps {
  messages: ChatMessage[];
}

const USER_ROW_ESTIMATED_HEIGHT = 44;
const ASSISTANT_ROW_ESTIMATED_HEIGHT = 80;
const ROW_GAP = 14;
const ROW_OVERSCAN = 6;
const SCROLL_END_THRESHOLD = 80;

export function MessageList({ messages }: MessageListProps) {
  const parentRef = React.useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtualizer({
    // Data
    count: messages.length,
    getItemKey: (index) => messages[index].id,

    // Sizing
    estimateSize: (index) =>
      messages[index].role === 'user' ? USER_ROW_ESTIMATED_HEIGHT : ASSISTANT_ROW_ESTIMATED_HEIGHT,
    gap: ROW_GAP,
    overscan: ROW_OVERSCAN,

    // Scroll behavior
    getScrollElement: () => parentRef.current,
    anchorTo: 'end',
    followOnAppend: true,
    scrollEndThreshold: SCROLL_END_THRESHOLD,
    useFlushSync: false,
  });

  React.useLayoutEffect(() => {
    rowVirtualizer.scrollToEnd();
  }, [rowVirtualizer]);

  return (
    <div
      ref={parentRef}
      role="log"
      aria-label="Conversation"
      tabIndex={0}
      className="h-full scroll-fade-y overflow-y-auto px-4 py-12 outline-none scroll-fade-32"
    >
      <ul
        ref={rowVirtualizer.containerRef}
        role="list"
        className="relative mx-auto max-w-175"
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualItem) => {
          const { role, content } = messages[virtualItem.index];

          return (
            <li
              key={virtualItem.key}
              ref={rowVirtualizer.measureElement}
              role="listitem"
              aria-setsize={messages.length}
              aria-posinset={virtualItem.index + 1}
              className="absolute top-0 left-0 w-full"
              style={{
                transform: `translateY(${virtualItem.start}px)`,
              }}
              data-index={virtualItem.index}
            >
              <div className={cn('w-[inherit]', role === 'user' && 'flex justify-end')}>
                <span className="sr-only">
                  {role === 'user' ? 'You said: ' : 'Assistant said: '}
                </span>

                {role === 'user' ? (
                  <Bubble>{content}</Bubble>
                ) : (
                  <AssistantMessage.Root>
                    <AssistantMessage.Text>{content}</AssistantMessage.Text>
                    <AssistantMessage.Actions />
                  </AssistantMessage.Root>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
