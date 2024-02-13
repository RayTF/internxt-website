import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const TEMP_MAIL_API_KEY = process.env.TEMP_MAIL_API_KEY;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const email = await axios.get(`${process.env.NEXT_PUBLIC_TEMP_MAIL_URL}/inbox/create`, {
      headers: {
        Authorization: `Bearer ${TEMP_MAIL_API_KEY}`,
      },
    });

    return res.status(200).json(email.data);
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
