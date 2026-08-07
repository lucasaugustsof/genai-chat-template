import { Tooltip as ArkTooltip } from '@ark-ui/react/tooltip';

export type TooltipRootProps = Omit<ArkTooltip.RootProps, 'openDelay'>;

const TOOLTIP_OPEN_DELAY_MS = 600;

export function TooltipRoot(props: TooltipRootProps) {
  return <ArkTooltip.Root {...props} openDelay={TOOLTIP_OPEN_DELAY_MS} />;
}
