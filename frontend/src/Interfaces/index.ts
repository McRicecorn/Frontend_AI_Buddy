export interface ChatMessage{
    from: "user" | "ai";
    text: string;
}