import fs from 'fs';
import path from 'path';

const VIEWS_FILE = path.join(process.cwd(), 'data', 'views.json');

// Ensure the data directory exists
const dataDir = path.dirname(VIEWS_FILE);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Initialize views file if it doesn't exist
if (!fs.existsSync(VIEWS_FILE)) {
  fs.writeFileSync(VIEWS_FILE, JSON.stringify({ views: 0 }));
}

function getViews() {
  try {
    const data = fs.readFileSync(VIEWS_FILE, 'utf8');
    return JSON.parse(data).views;
  } catch (error) {
    console.error('Error reading views file:', error);
    return 0;
  }
}

function setViews(count) {
  try {
    fs.writeFileSync(VIEWS_FILE, JSON.stringify({ views: count }));
  } catch (error) {
    console.error('Error writing views file:', error);
  }
}

export default function handler(req, res) {
  if (req.method === 'POST') {
    const currentViews = getViews();
    const newViews = currentViews + 1;
    setViews(newViews);
    res.status(200).json({ views: newViews });
  } else {
    const views = getViews();
    res.status(200).json({ views });
  }
}