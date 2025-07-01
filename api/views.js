let count = 0;

export default function handler(req, res) {
  count += 1;
  res.status(200).json({ views: count });
} 