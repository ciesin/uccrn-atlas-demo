export default async function handler(req, res) {
  const { password } = req.body;
  const expectedPassword = import.meta.env.VITE_APP_PASSWORD;
  
  if (!expectedPassword) {
    console.error('Password environment variable not set');
    res.status(500).json({ success: false, error: 'Server configuration error' });
    return;
  }
  
  if (password === expectedPassword) {
    res.status(200).json({ success: true });
  } else {
    res.status(401).json({ success: false });
  }
}