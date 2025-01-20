import { getSession, withApiAuthRequired } from "@auth0/nextjs-auth0";
import { NextApiRequest, NextApiResponse } from 'next';

export default withApiAuthRequired(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession(req, res);
  if (session) {
    console.log("Сесія знайдена:", session);
    res.status(200).json({ user: session.user });
  } else {
    console.log("Сесію не знайдено");
    res.status(401).json({ user: null });
  }
});