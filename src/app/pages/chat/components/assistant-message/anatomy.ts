import { createAnatomy } from '@ark-ui/react/anatomy';

export const assistantMessageAnatomy = createAnatomy('assistant-message').parts(
  'root',
  'text',
  'actions',
);
export const assistantMessageParts = assistantMessageAnatomy.build();
