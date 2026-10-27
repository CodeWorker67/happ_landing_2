const STEPS = [
  {
    n: '1',
    title: 'Создайте профиль',
    text: 'Войдите через email, телефон, Telegram или Google — пароль можно задать позже. Сразу откроется пробный день.',
  },
  {
    n: '2',
    title: 'Установите клиент',
    text: 'Скачайте Happ из App Store, Google Play или с сайта для Windows. Подписка подтягивается в один клик.',
  },
  {
    n: '3',
    title: 'Подключитесь',
    text: 'Выберите оптимальный сервер — сеть будет работать на полной скорости.',
  },
];

export default function StepsSection() {
  return (
    <section id="steps" className="section" style={{ background: 'linear-gradient(180deg,#f8fafc,#f0fdfa)' }}>
      <div className="section-inner">
        <p className="kicker">Подключение</p>
        <h2 className="h2" style={{ marginBottom: 48 }}>
          Три шага — около минуты.
        </h2>
        <div className="three">
          {STEPS.map((step) => (
            <div className="step-card" key={step.n}>
              <div className="step-num">{step.n}</div>
              <h3 className="card-title">{step.title}</h3>
              <p className="card-text">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
