import fetch from 'isomorphic-unfetch';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: any, res: any) => {
  try {
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const DATACENTER = process.env.MAILCHIMP_API_SERVER;

    const response = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}`,
      {
        headers: {
          Authorization: `api_key ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        method: 'GET',
      }
    );

    if (response.status >= 400) {
      return res.status(400).json({
        error: `There was an error subscribing to the newsletter :(.`,
      });
    }
    const json = await response.json();
    return res.send({
      count: json.stats.member_count,
    });
  } catch (error: any) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};
