import url from 'url';

import axios from 'axios';
import { google } from 'googleapis';
import { NextApiRequest, NextApiResponse } from 'next';

import { consoleError } from '../../utils/log';

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const HOST =
      process.env.NODE_ENV === 'production' ? 'https://miracle-morning.herokuapp.com' : 'http://localhost:8000';
    const oauth2Client = new google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, `${HOST}/api/google`);
    const qs = new url.URL(req.url || '', HOST).searchParams;
    const code = qs.get('code');
    // eslint-disable-next-line camelcase
    const {
      tokens: { access_token },
    } = await oauth2Client.getToken(code || '');

    const result = await axios.post(
      `${HOST}/api/v1/signin`,
      { snsType: 'google' },
      {
        headers: { Authorization: access_token },
      },
    );
    res.writeHead(301, {
      'Set-Cookie': [
        `token=${result.data.data.accessToken}; Path=/; max-age=604800;`,
        `refreshToken=${result.data.data.refreshToken}; Path=/; max-age=2592000;`,
      ],
      Location: '/',
    });
    res.end();
  } catch (error) {
    console.log(555, error);
    consoleError('error', error);
    res.end('Error');
  }
};
