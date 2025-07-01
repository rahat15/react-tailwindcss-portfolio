import fs from 'fs';
import path from 'path';

// Use /tmp directory which is writable on Vercel
const VIEWS_FILE = '/tmp/views.json';

function getViews() {
  try {
    if (fs.existsSync(VIEWS_FILE)) {
      const data = fs.readFileSync(VIEWS_FILE, 'utf8');
      const parsed = JSON.parse(data);
      return parsed.views || 0;
    }
    return 0;
  } catch (error) {
    console.error('Error reading views file:', error);
    return 0;
  }
}

function setViews(count) {
  try {
    const data = JSON.stringify({ views: count });
    fs.writeFileSync(VIEWS_FILE, data);
    console.log('Successfully wrote views:', count);
  } catch (error) {
    console.error('Error writing views file:', error);
  }
}

export default function handler(req, res) {
  console.log('API called:', req.method, req.url);
  
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    const currentViews = getViews();
    const newViews = currentViews + 1;
    setViews(newViews);
    console.log('POST: Updated views from', currentViews, 'to', newViews);
    res.status(200).json({ views: newViews });
  } else {
    const views = getViews();
    console.log('GET: Current views:', views);
    res.status(200).json({ views });
  }
}