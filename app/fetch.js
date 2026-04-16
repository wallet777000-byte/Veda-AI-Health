import fs from 'fs';
import https from 'https';

https.get('https://ais-pre-jnwxthx22gdy6mv3xmpsn2-115336131120.asia-southeast1.run.app', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    fs.writeFileSync('fetched.html', data);
    console.log('Fetched HTML length:', data.length);
  });
}).on('error', (err) => {
  console.error('Error:', err.message);
});
