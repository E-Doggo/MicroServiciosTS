interface MessageWithContext {
  message: string;
  context: Record<string, unknown>;
}

export type Message = string | MessageWithContext;

export interface Logger {
  info(message: Message): void;
  error(message: Message): void;
}
