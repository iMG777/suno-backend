import fetch from 'node-fetch';

const API_KEY = process.env.SUNO_API_KEY;
const BASE = 'https://suno-backend_.vercel.app';

export default async function handler(req, res) {
  const { taskId } = req.query;

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  try {
    const response = await fetch(`${BASE}/generate/record-info?taskId=${taskId}`, {
      headers: { 'Authorization': `Bearer ${API_KEY}` }
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}