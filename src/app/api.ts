export const getVersion = async () => {
  const resp = await fetch("/api/version", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!resp.ok) {
    throw new Error("Fetch error!");
  }

  return await resp.json();
};
