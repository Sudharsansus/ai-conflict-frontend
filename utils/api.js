export async function analyzeMessage(message) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}analyze`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });

  if (!res.ok) throw new Error("Failed to analyze message");
  return res.json();
}
