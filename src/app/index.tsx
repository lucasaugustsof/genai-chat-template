import { Chat } from './pages/chat';
import { SoundProvider } from '@web-kits/audio/react';

export default function App() {
  return (
    <SoundProvider volume={0.6} enabled>
      <Chat />
    </SoundProvider>
  );
}
