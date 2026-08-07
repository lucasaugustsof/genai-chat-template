import type { SoundDefinition } from '@web-kits/audio';

export const checkbox: SoundDefinition = {
  source: {
    type: 'sine',
    frequency: 1000,
  },
  envelope: {
    attack: 0,
    decay: 0.018,
    sustain: 0,
    release: 0.005,
  },
  gain: 0.09,
};
