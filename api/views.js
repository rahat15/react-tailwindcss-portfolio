let count = 0;

export default function handler(req, res) {
  if (req.method === 'POST') {
    count += 1;
  }
  res.status(200).json({ views: count });
}