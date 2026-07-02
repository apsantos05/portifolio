import { ImageResponse } from 'next/og'
import { site } from '@/lib/site'

// Sem edge runtime → a imagem é gerada no build (estática, melhor cache).
export const alt = `${site.name} — ${site.role}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/**
 * Imagem Open Graph gerada com a identidade da marca (navy + periwinkle + blueprint).
 * Sem fontes externas (usa system) para máxima confiabilidade no build/edge.
 */
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          background:
            'radial-gradient(1100px 620px at 82% -12%, rgba(63,93,170,0.35), #090D17 62%), #090D17',
          backgroundImage:
            'linear-gradient(rgba(132,163,218,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(132,163,218,0.08) 1px, transparent 1px)',
          backgroundSize: '46px 46px',
        }}
      >
        {/* topo: monograma + papel */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 72,
              height: 72,
              borderRadius: 16,
              border: '1px solid rgba(132,163,218,0.45)',
              background: '#121A2E',
              fontSize: 36,
              fontWeight: 800,
              color: '#EEF1F7',
            }}
          >
            A<span style={{ color: '#84A3DA' }}>S</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 26, fontWeight: 700, color: '#EEF1F7' }}>
              {site.name}
            </span>
            <span
              style={{
                fontSize: 16,
                letterSpacing: 6,
                textTransform: 'uppercase',
                color: '#8B95A8',
              }}
            >
              Full Stack Dev
            </span>
          </div>
        </div>

        {/* headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
              color: '#EEF1F7',
              maxWidth: 940,
              display: 'flex',
              flexWrap: 'wrap',
            }}
          >
            Transformo a história do seu negócio em software que&nbsp;
            <span style={{ color: '#84A3DA' }}>funciona</span>.
          </div>
          <div style={{ fontSize: 24, color: '#8B95A8' }}>
            Sites, sistemas e aplicações sob medida.
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
