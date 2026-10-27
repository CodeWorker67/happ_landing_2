import clsx from 'clsx';

export default function HeroIllustration({ placement = 'desktop' }) {
  return (
    <div className={clsx('hero-logo-wrap', placement === 'desktop' ? 'hero-logo--desktop' : 'hero-logo--mobile')}>
      <img
        className="hero-logo-img"
        src="/hero-happ-vpn.png"
        alt="Happ VPN"
        width={340}
        height={120}
        decoding="async"
      />
    </div>
  );
}
