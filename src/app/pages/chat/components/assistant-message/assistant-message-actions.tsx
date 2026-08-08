import React from 'react';

import { Clipboard as ArkClipboard } from '@ark-ui/react/clipboard';
import { Presence as ArkPresence } from '@ark-ui/react/presence';
import { ToggleGroup as ArkToggleGroup } from '@ark-ui/react/toggle-group';

import {
  RiFileCopyLine,
  RiCheckLine,
  RiThumbUpLine,
  RiThumbDownLine,
  RiThumbUpFill,
  RiThumbDownFill,
} from '@remixicon/react';

import { CustomIconButton, type CustomIconButtonProps } from '@/app/components/custom-icon-button';
import { Tooltip } from '@/app/components/tooltip';
import { copySound, checkboxSound } from '@/lib/audio';
import { cn } from '@/lib/cn';

import { assistantMessageParts } from './anatomy';
import { useSound } from '@web-kits/audio/react';

const ASSISTANT_MESSAGE_FEEDBACK_OPTIONS = {
  GOOD: 'good',
  BAD: 'bad',
} as const;

type AssistantMessageFeedbackValue = Lowercase<keyof typeof ASSISTANT_MESSAGE_FEEDBACK_OPTIONS>;

interface AssistantMessageFeedbackToggleItemProps extends Omit<ArkToggleGroup.ItemProps, 'value'> {
  value: AssistantMessageFeedbackValue;
  icon: Record<'on' | 'off', React.ReactNode>;
}

interface AssistantMessageCopyButtonProps extends CustomIconButtonProps {}

interface AssistantMessageActionsProps {
  onFeedbackResponse?(feedback: AssistantMessageFeedbackValue): void;
}

function AssistantMessageCopyButton(props: AssistantMessageCopyButtonProps) {
  const playSound = useSound(copySound);

  return (
    <ArkClipboard.Context>
      {(clipboard) => {
        function handleCopyText() {
          if (!clipboard.copied) {
            clipboard.copy();
            playSound();
          }
        }

        return (
          <CustomIconButton
            {...props}
            className="**: relative **:absolute **:inset-0 **:m-auto"
            onClick={handleCopyText}
          >
            <ArkPresence
              present={clipboard.copied}
              className={cn('[&_svg]:fill-neutral-600', [
                'data-[state=open]:animate-in data-[state=open]:fade-in data-[state=open]:zoom-in-60 data-[state=open]:blur-in-xs',
                'data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:zoom-out-60 data-[state=closed]:blur-out-xs',
              ])}
            >
              <RiCheckLine />
            </ArkPresence>

            <ArkPresence
              present={!clipboard.copied}
              className={cn([
                'data-[state=open]:animate-in data-[state=open]:fade-in data-[state=open]:zoom-in-60 data-[state=open]:blur-in-xs',
                'data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:zoom-out-60 data-[state=closed]:blur-out-xs',
              ])}
              skipAnimationOnMount
            >
              <RiFileCopyLine />
            </ArkPresence>
          </CustomIconButton>
        );
      }}
    </ArkClipboard.Context>
  );
}

function AssistantMessageFeedbackToggleItem({
  value,
  icon,
  ...props
}: AssistantMessageFeedbackToggleItemProps) {
  return (
    <ArkToggleGroup.Context>
      {(toggle) => {
        const isSelected = toggle.value[0] === value;

        return (
          <ArkToggleGroup.Item {...props} value={value} asChild>
            <CustomIconButton className={cn(isSelected && '[&_svg]:fill-neutral-600')}>
              {isSelected ? icon.on : icon.off}
            </CustomIconButton>
          </ArkToggleGroup.Item>
        );
      }}
    </ArkToggleGroup.Context>
  );
}

const actions = [
  {
    id: 'copy',
    label: 'Copy answer',
    component: <AssistantMessageCopyButton aria-label="Copy answer" />,
  },
  {
    id: ASSISTANT_MESSAGE_FEEDBACK_OPTIONS.GOOD,
    label: 'Mark answer as good',
    component: (
      <AssistantMessageFeedbackToggleItem
        aria-label="Mark answer as good"
        icon={{
          on: <RiThumbUpFill />,
          off: <RiThumbUpLine />,
        }}
        value={ASSISTANT_MESSAGE_FEEDBACK_OPTIONS.GOOD}
      />
    ),
  },
  {
    id: ASSISTANT_MESSAGE_FEEDBACK_OPTIONS.BAD,
    label: 'Mark answer as bad',
    component: (
      <AssistantMessageFeedbackToggleItem
        aria-label="Mark answer as bad"
        icon={{
          on: <RiThumbDownFill />,
          off: <RiThumbDownLine />,
        }}
        value={ASSISTANT_MESSAGE_FEEDBACK_OPTIONS.BAD}
      />
    ),
  },
];

export function AssistantMessageActions({ onFeedbackResponse }: AssistantMessageActionsProps) {
  const [activeActionId, setActiveActionId] = React.useState<string | null>(null);

  const playSound = useSound(checkboxSound);

  const activeActionLabel = React.useMemo(() => {
    return actions.find((action) => action.id === activeActionId)?.label;
  }, [activeActionId]);

  return (
    <ArkToggleGroup.Root
      {...assistantMessageParts.actions.attrs}
      className="inline-flex items-center gap-x-1.5"
      onValueChange={(details) => {
        playSound();
        onFeedbackResponse?.(details.value[0] as AssistantMessageFeedbackValue);
      }}
    >
      <Tooltip.Root onTriggerValueChange={(details) => setActiveActionId(details.value)}>
        {actions.map((action) => (
          <Tooltip.Trigger key={action.id} value={action.id} asChild>
            {action.component}
          </Tooltip.Trigger>
        ))}

        <Tooltip.Content>{activeActionLabel}</Tooltip.Content>
      </Tooltip.Root>
    </ArkToggleGroup.Root>
  );
}
