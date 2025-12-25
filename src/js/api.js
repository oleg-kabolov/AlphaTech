async function sendClientData(data) {
  const url = "https://257d26ade8f53d9d.mokky.dev/clientRequest";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export { sendClientData };
