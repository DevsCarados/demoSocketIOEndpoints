export const endpointWithTimeout30seconds = (req, res) => {
  return res.send(JSON.stringify({ consumeThis : 'Light Yagami' }));
};
