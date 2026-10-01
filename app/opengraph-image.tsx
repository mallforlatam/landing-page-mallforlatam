import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const alt = 'Mall for Latam — Compra Globalmente, Paga Localmente';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  const logoBuffer = await readFile(join(process.cwd(), 'public', 'logo-full.png'));
  const logoSrc = `data:image/png;base64,${logoBuffer.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #5b66ff 0%, #cc00ff 100%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            background: '#ffffff',
            borderRadius: 32,
            padding: '48px 72px',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} alt="Mall for Latam" width={520} height={250} />
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 48,
            fontSize: 42,
            fontWeight: 700,
            color: '#ffffff',
            textAlign: 'center',
          }}
        >
          Compra Globalmente, Paga Localmente
        </div>
      </div>
    ),
    { ...size }
  );
}
