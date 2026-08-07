"""Run with ARCENCIEL_API_KEY and optionally ARCENCIEL_CHAT_THREAD_ID."""

from __future__ import annotations

import os
from uuid import uuid4

from arcenciel import ArcEnCielClient

api_key = os.environ["ARCENCIEL_API_KEY"]
thread_id = int(os.environ.get("ARCENCIEL_CHAT_THREAD_ID", "0"))
client = ArcEnCielClient(api_key=api_key)

inbox = client.call_sync(lambda: client.chat.list_chat_threads_sync(folder="inbox", limit=10))
print(
    [{"id": thread.id, "title": thread.title, "unread": thread.has_unread} for thread in inbox.data]
)

if thread_id > 0:
    created = client.call_sync(
        lambda: client.chat.create_chat_message_sync(
            thread_id=thread_id,
            idempotency_key=str(uuid4()),
            content="SDK v1.7 chat example",
        )
    )
    print({"created_message_id": created.id})
