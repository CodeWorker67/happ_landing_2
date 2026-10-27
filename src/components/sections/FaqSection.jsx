import { useState } from 'react';
import clsx from 'clsx';

const FAQ = [
  {
    q: 'Как пройти регистрацию?',
    a: 'Доступны email, телефон, Google и Telegram. Пароль можно не задавать сразу — это делается в личном кабинете. После регистрации автоматически активируется пробный день.',
  },
  {
    q: 'Сколько девайсов можно использовать параллельно?',
    a: 'На любом тарифе — до пяти одновременных подключений: смартфон, ноутбук, планшет, ТВ и другое.',
  },
  {
    q: 'Когда появится конфиг после оплаты?',
    a: 'Сразу после подтверждения платежа настройки доступны в аккаунте — перезапуск клиента не требуется.',
  },
  {
    q: 'Есть ли лимиты по скорости или объёму?',
    a: 'Нет ограничений: трафик безлимитный, каналы серверов — до 10 Гбит.',
  },
  {
    q: 'Подойдёт ли для Smart TV или роутера?',
    a: 'Да. Apple TV (tvOS) поддерживается напрямую. Для роутеров — ручная настройка, команда поддержки подскажет шаги.',
  },
  {
    q: 'Соединение стало нестабильным — что делать?',
    a: 'Смените сервер в приложении. Если не помогло — напишите в поддержку; обычно отвечаем в течение 10 минут.',
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="section" style={{ background: '#1e293b' }}>
      <div style={{ maxWidth: 820, margin: '0 auto' }}>
        <p className="kicker" style={{ color: '#22d3ee' }}>
          FAQ
        </p>
        <h2 className="h2" style={{ color: '#fff', marginBottom: 36 }}>
          Ответы на частые вопросы
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <div className={clsx('faq-item', isOpen && 'is-open')} key={item.q}>
                <button
                  type="button"
                  className="faq-q"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span>{item.q}</span>
                  <span className="faq-sign">{isOpen ? '−' : '+'}</span>
                </button>
                <p className="faq-a">{item.a}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
