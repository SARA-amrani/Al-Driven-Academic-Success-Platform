import { Button } from '@/components/ui/button';

interface ChatHeaderProps {
  onClearChat: () => void;
}

export function ChatHeader({ onClearChat }: ChatHeaderProps) {
  return (
    <div className="border-b px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <span className="font-medium">AI Assistant</span>
      </div>
      <Button variant="ghost" size="sm" onClick={onClearChat}>
        Clear Chat
      </Button>
    </div>
  );
}
