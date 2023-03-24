import type { NextApiRequest, NextApiResponse } from 'next';
import NotionServer from '../../lib/NotionServer';

type Data = any;

const notionServer = new NotionServer();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const address = req.body.address;
  const email = req.body.email;
  if (address) {
    // test eth address format
    const regex = /^0x[a-fA-F0-9]{40}$/;

    if (!regex.test(address)) {
      return res.status(400).json({ error: 'Invalid wallet address' });
    }
  }

  const data = await notionServer.createWallet(address, email);
  res.status(200).json(data);
}
