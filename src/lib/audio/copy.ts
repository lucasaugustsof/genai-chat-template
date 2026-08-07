import type { SoundDefinition } from '@web-kits/audio';

export const copy: SoundDefinition = {
  layers: [
    {
      source: {
        type: 'sine',
        frequency: 1200,
      },
      envelope: {
        attack: 0,
        decay: 0.015,
        sustain: 0,
        release: 0.006,
      },
      gain: 0.16,
    },
    {
      source: {
        type: 'sine',
        frequency: 1400,
      },
      envelope: {
        attack: 0,
        decay: 0.015,
        sustain: 0,
        release: 0.006,
      },
      delay: 0.04,
      gain: 0.14,
    },
  ],
};
