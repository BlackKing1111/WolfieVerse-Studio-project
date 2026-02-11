export default function BotDetail({ params }) {
  return (
    <div style={{ padding: 40 }}>
      <h1>Bot Details for: {params.botId}</h1>
      <p>This is where the portal will send users.</p>
    </div>
  );
}
