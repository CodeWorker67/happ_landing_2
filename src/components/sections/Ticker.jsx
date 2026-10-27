const ITEMS = [
  { value: '130 000+', label: 'Активных пользователей' },
  { value: '10', label: 'Стран и регионов' },
  { value: '99.9%', label: 'Доступность' },
  { value: '10 Гбит', label: 'Пропускная способность' },
  { value: '<50 мс', label: 'Задержка EU' },
  { value: '5', label: 'Устройств на аккаунт' },
];

function TickerItem({ value, label }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: '16px 52px',
        whiteSpace: 'nowrap',
        borderRight: '1px solid rgba(255,255,255,.08)',
      }}
    >
      <span style={{ fontSize: 18, fontWeight: 800, color: '#5eead4', letterSpacing: -0.4 }}>{value}</span>
      <span
        style={{
          fontSize: 12,
          color: 'rgba(255,255,255,.45)',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: 0.6,
        }}
      >
        {label}
      </span>
    </div>
  );
}

export default function Ticker() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div style={{ overflow: 'hidden', background: 'linear-gradient(100deg,#0f172a 0%,#1e293b 50%,#0f172a 100%)' }}>
      <div style={{ display: 'flex', width: 'max-content', animation: 'tick 22s linear infinite' }}>
        {loop.map((item, i) => (
          <TickerItem key={`${item.label}-${i}`} value={item.value} label={item.label} />
        ))}
      </div>
    </div>
  );
}
