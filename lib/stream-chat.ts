import "server-only";
import { StreamChat } from "stream-chat";

export const streamChat = StreamChat.getInstance(
  process.env.NEXT_PUBLIC_STREAM_CHAT_API_KEY!,
  process.env.STREAM_CHAT_SECRET_KEY!,
);

// Ensure exactly ONE message.new webhook hook exists.
// Reads existing hooks, deduplicates if needed, and adds one if missing.
streamChat
  .getAppSettings()
  .then(({ app }) => {
    const existingHooks = app?.event_hooks ?? [];

    // Separate message.new webhook hooks from everything else
    const messageNewHooks = existingHooks.filter(
      (hook) =>
        hook.hook_type === "webhook" &&
        hook.event_types?.includes("message.new"),
    );
    const otherHooks = existingHooks.filter(
      (hook) =>
        !(
          hook.hook_type === "webhook" &&
          hook.event_types?.includes("message.new")
        ),
    );

    // Already exactly one — nothing to do
    if (messageNewHooks.length === 1) return;

    // Find a public webhook URL from any existing hook
    const webhookUrl =
      messageNewHooks[0]?.webhook_url ??
      existingHooks.find(
        (hook) => hook.hook_type === "webhook" && hook.webhook_url,
      )?.webhook_url;

    if (!webhookUrl) {
      console.warn(
        "[stream-chat] No existing webhook URL found — configure one in the Stream Dashboard first.",
      );
      return;
    }

    console.log(
      `[stream-chat] Fixing message.new hooks (${messageNewHooks.length} → 1) → ${webhookUrl}`,
    );

    // Keep all other hooks, plus exactly one message.new hook
    return streamChat.updateAppSettings({
      event_hooks: [
        ...otherHooks,
        {
          hook_type: "webhook",
          enabled: true,
          event_types: ["message.new"],
          webhook_url: webhookUrl,
        },
      ],
    });
  })
  .catch((err) => {
    console.error("Failed to configure Stream Chat webhook:", err);
  });
