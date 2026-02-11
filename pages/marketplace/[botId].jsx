import { useRouter } from "next/router";

export default function BotDetail() {
  const router = useRouter();
  const { botId } = router.query;

  return (
    <div style={{ padding: 40 }}>
      <h1>Bot Details</h1>
      <p>Bot ID: {botId}</p>
    </div>
  );
}
