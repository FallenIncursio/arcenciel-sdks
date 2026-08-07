"""Read-only Developer API v1.8 feedback and Trust & Safety smoke workflow."""

from __future__ import annotations

import os

from arcenciel import ArcEnCielClient

api_key = os.environ.get("ARCENCIEL_API_KEY")
if not api_key:
    raise RuntimeError("Set ARCENCIEL_API_KEY with FeedbackRead for this read-only example.")

client = ArcEnCielClient(api_key=api_key)
feedback = client.call_sync(client.feedback.list_my_feedback_sync)
notices = client.call_sync(client.trust_safety.list_my_illegal_content_notices_sync)

print(f"Own feedback cases: {len(feedback)}")
print(f"Own illegal-content notices: {len(notices)}")

if feedback:
    detail = client.call_sync(
        lambda: client.feedback.get_feedback_sync(public_id=feedback[0].public_id)
    )
    print(f"{detail.public_id}: {detail.status} — {detail.title}")

if notices:
    detail = client.call_sync(
        lambda: client.trust_safety.get_illegal_content_notice_sync(public_id=notices[0].public_id)
    )
    print(f"{detail.public_id}: {detail.status} — {detail.target_type}")
