import { type ChatMessage, MessageList } from './components/message-list';

const messages: ChatMessage[] = [
  {
    id: crypto.randomUUID(),
    role: 'assistant',
    content: 'Hey James, what can I help you with today?',
  },
  {
    id: crypto.randomUUID(),
    role: 'user',
    content: 'Hey Spectrum, I have a question for you.',
  },
  {
    id: crypto.randomUUID(),
    role: 'assistant',
    content: "Of course. I'm listening, how can I help you?",
  },
  {
    id: crypto.randomUUID(),
    role: 'user',
    content: "What's the difference between serif and sans-serif fonts?",
  },
  {
    id: crypto.randomUUID(),
    role: 'assistant',
    content:
      'Serif fonts have strokes (Times New Roman); sans-serif are clean (Arial). Serif feels traditional for print, sans-serif modern for screens.',
  },
  {
    id: crypto.randomUUID(),
    role: 'user',
    content: 'Which one should I use for my website?',
  },
  {
    id: crypto.randomUUID(),
    role: 'assistant',
    content:
      'Use sans-serif for body text - easier to read on screens. Try Inter, Roboto, or Open Sans. Serif works for headings if you want elegance.',
  },
  {
    id: crypto.randomUUID(),
    role: 'user',
    content: 'Got it, thanks. What about line height then?',
  },
  {
    id: crypto.randomUUID(),
    role: 'assistant',
    content:
      "Good question. For body text, aim for a line-height between 1.4 and 1.6 times the font size - roughly 22-24px for a 15-16px font. Tighter line-height works for headings since long lines aren't a concern there, but for paragraphs it hurts readability because the eye struggles to track back to the start of the next line.",
  },
  {
    id: crypto.randomUUID(),
    role: 'user',
    content: 'Makes sense. Any tips for line length too?',
  },
  {
    id: crypto.randomUUID(),
    role: 'assistant',
    content: 'Yep - keep it to about 45-75 characters per line, 66 is often cited as ideal.',
  },
  {
    id: crypto.randomUUID(),
    role: 'user',
    content: 'Cool, one more: how do I pick a good color contrast?',
  },
  {
    id: crypto.randomUUID(),
    role: 'assistant',
    content:
      'Follow WCAG guidelines: at least 4.5:1 contrast ratio for normal text and 3:1 for large text (18px+ bold or 24px+ regular) to hit AA compliance. For AAA, bump that to 7:1 and 4.5:1 respectively. Tools like the Chrome DevTools contrast checker or a plugin like Stark can verify this directly against your design tokens as you pick colors, rather than guessing and testing after the fact.',
  },
  {
    id: crypto.randomUUID(),
    role: 'user',
    content: 'Perfect, that helps a lot.',
  },
  {
    id: crypto.randomUUID(),
    role: 'assistant',
    content: "Glad it helped! Let me know if there's anything else you want to dig into.",
  },
  {
    id: crypto.randomUUID(),
    role: 'user',
    content: 'Actually yes - what about dark mode? Any gotchas?',
  },
  {
    id: crypto.randomUUID(),
    role: 'assistant',
    content:
      "A few big ones. First, avoid pure black backgrounds (#000) - they create harsh contrast with white text and can cause halation for some users; a dark gray like #121212 is easier on the eyes. Second, don't just invert your light-mode colors - desaturate them slightly, since fully saturated colors tend to vibrate against dark backgrounds. Third, remember that elevation in dark mode is usually communicated with lighter surface colors rather than shadows, since shadows barely show up on dark backgrounds.",
  },
  {
    id: crypto.randomUUID(),
    role: 'user',
    content: 'What about images and icons in dark mode?',
  },
  {
    id: crypto.randomUUID(),
    role: 'assistant',
    content:
      'For icons, use a currentColor fill so they follow your text color automatically. For photos and illustrations, consider a subtle white border or a light background card so they don\'t look like they\'re "floating" against the dark backdrop - especially for images with transparent backgrounds or a lot of white space.',
  },
  {
    id: crypto.randomUUID(),
    role: 'user',
    content: 'Great, thank you!',
  },
  {
    id: crypto.randomUUID(),
    role: 'assistant',
    content: "You're welcome, James. Anything else on your mind?",
  },
  {
    id: crypto.randomUUID(),
    role: 'user',
    content: 'Not right now, I think I have enough to get started.',
  },
  {
    id: crypto.randomUUID(),
    role: 'assistant',
    content:
      'Sounds good - good luck with the redesign, and ping me anytime you want a second opinion.',
  },
  {
    id: crypto.randomUUID(),
    role: 'user',
    content: 'Will do. Bye for now!',
  },
  {
    id: crypto.randomUUID(),
    role: 'assistant',
    content: 'Bye, James!',
  },
];

export function Chat() {
  return (
    <div className="h-screen">
      <MessageList messages={messages} />
    </div>
  );
}
