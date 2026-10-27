import { useTrackedLinks } from '@/hooks/useTrackedLinks';

export default function CtaSection() {
  const { authUrl, supportUrl } = useTrackedLinks();

  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #134e4a 0%, #115e59 40%, #0f766e 100%)',
        padding: 'clamp(64px,8vw,104px) clamp(20px,4vw,56px)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 70% 55% at 50% 100%, rgba(34,211,238,.2), transparent 65%)',
        }}
      />
      <div style={{ position: 'relative' }}>
        <h2
          style={{
            fontSize: 'clamp(30px,4vw,52px)',
            fontWeight: 800,
            letterSpacing: -1.6,
            color: '#fff',
            marginBottom: 14,
          }}
        >
          Сутки в подарок —
          <br />
          начните сегодня.
        </h2>
        <p style={{ fontSize: 17, color: 'rgba(255,255,255,.78)', marginBottom: 32 }}>
          Минута на регистрацию. Профиль создаётся без лишних шагов.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a className="cta-white" href={authUrl}>
            Активировать пробный период
          </a>
          <a className="cta-ghost" href={supportUrl} target="_blank" rel="noopener noreferrer">
            Связаться с поддержкой
          </a>
        </div>
      </div>
    </section>
  );
}
