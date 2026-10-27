function LightningIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#0891B2" strokeWidth="2" strokeLinecap="round" width="23" height="23">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#0891B2" strokeWidth="2" strokeLinecap="round" width="23" height="23">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#0891B2" strokeWidth="2" strokeLinecap="round" width="23" height="23">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

const FEATURES = [
  {
    icon: LightningIcon,
    title: 'Максимальная скорость',
    text: 'Каналы до 10 Гбит без лимитов — 4K, стримы и онлайн-игры без задержек.',
  },
  {
    icon: PhoneIcon,
    title: 'Все популярные платформы',
    text: 'Единый профиль для телефона, планшета и ПК. Клиент Happ — бесплатно.',
  },
  {
    icon: ShieldIcon,
    title: 'Работа без простоев',
    text: 'Инфраструктура под круглосуточным контролем. Поддержка на связи в любое время.',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="section" style={{ background: '#fff' }}>
      <div className="section-inner">
        <p className="kicker">Возможности</p>
        <h2 className="h2" style={{ marginBottom: 48, maxWidth: 520 }}>
          Включили — и пользуйтесь.
          <br />
          Без сложных настроек.
        </h2>
        <div className="three">
          {FEATURES.map((item) => (
            <div className="feat-card" key={item.title}>
              <div className="icon-wrap">
                <item.icon />
              </div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
