export const chartData = async () => {
  const response = await fetch("/data.json");

  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  return response.json();
};