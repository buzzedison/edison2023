import React from 'react';
import Head from 'next/head';

const Subscribe = () => {
  return (
    <>
      <Head>
        <title>Embed Page</title>
      </Head>
      <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <iframe
          src="https://embeds.beehiiv.com/fdde57ec-365b-42cc-a7e9-8a898a7b9c53"
          data-test-id="beehiiv-embed"
          width="100%"
          height="320"
          frameborder="0"
          scrolling="no"
          style={{
            borderRadius: '4px',
            border: '2px solid #e5e7eb',
            margin: 0,
            backgroundColor: 'transparent',
          }}
        ></iframe>
      </div>
    </>
  );
};

export default Subscribe;
