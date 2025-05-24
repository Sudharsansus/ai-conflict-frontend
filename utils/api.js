// frontend/utils/api.js

export async function analyzeMessage(message) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/analyze`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    if (!res.ok) {
      throw new Error("Failed to analyze message");
    }

    return await res.json();
  } catch (error) {
    console.error("API error:", error.message);
    return { error: "Failed to reach backend" };
  }
}
