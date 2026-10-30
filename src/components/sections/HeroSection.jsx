import { useTrackedLinks } from '@/hooks/useTrackedLinks';
import HeroIllustration from './HeroIllustration';

export default function HeroSection() {
  const { authUrl } = useTrackedLinks();

  return (
    <section
      id="top"
      className="hero-section"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #f0fdfa 0%, #fff 55%)',
      }}
    >
      <div className="hero-inner">
        <div className="hero-badges">
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 9,
              background: 'rgba(8,145,178,.1)',
              border: '1px solid rgba(8,145,178,.28)',
              borderRadius: 10,
              padding: '9px 18px',
              fontSize: 14,
              fontWeight: 600,
              color: '#0e7490',
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#0891b2',
                boxShadow: '0 0 6px rgba(8,145,178,.8)',
                animation: 'glowdot 2s ease-in-out infinite',
              }}
            />
            Надежен
          </span>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 9,
              background: 'rgba(99,102,241,.08)',
              border: '1px solid rgba(99,102,241,.22)',
              borderRadius: 10,
              padding: '9px 18px',
              fontSize: 14,
              fontWeight: 600,
              color: '#4338ca',
            }}
          >
            Более 130 000 клиентов
          </span>
        </div>

        <h1 className="hero-title">
          Оформите подписку
          <br />
          <span className="hero-title-accent">для Happ</span>
        </h1>

        <HeroIllustration placement="desktop" />

        <div className="hero-body">
          <p className="hero-lead">
            iOS, Android и Windows — один профиль на пять гаджетов одновременно.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <a className="btn-primary" href={authUrl}>
              Активировать доступ
            </a>
            <a className="btn-outline" href={authUrl}>
              Попробовать за 9 рублей
            </a>
          </div>
          <p className="hero-note">
            3 дня за 9 ₽ · регистрация за минуту ·{' '}
            <a href={authUrl} style={{ fontWeight: 700, color: '#0891b2' }}>
              уже зарегистрированы?
            </a>
          </p>
        </div>

        <HeroIllustration placement="mobile" />
      </div>
    </section>
  );
}
