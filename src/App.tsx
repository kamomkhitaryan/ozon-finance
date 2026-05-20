import { useState } from 'react';
import './App.css';

type Screen = 'home' | 'ozon';

export default function App() {
  const [screen, setScreen] = useState<Screen>('home');

  if (screen === 'ozon') {
    return (
      <div className="ozon-page">
        <button className="back-btn" onClick={() => setScreen('home')}>
          ← Назад
        </button>
        <h2>Ozon Finance Dashboard</h2>
        <p>Здесь будет загрузка отчётов и таблица.</p>
      </div>
    );
  }

  return (
    <div className="home">
      {/* Header */}
      <header className="header">
        <div className="header-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
            <polyline points="16 7 22 7 22 13" />
          </svg>
        </div>
        <div className="header-text">
          <div className="header-title">Marketplace Analytics</div>
          <div className="header-subtitle">Аналитика маркетплейсов</div>
        </div>
      </header>

      {/* Center content */}
      <main className="main">
        <h1 className="main-title">Выберите маркетплейс</h1>
        <p className="main-subtitle">Выберите платформу для анализа данных</p>

        <div className="cards">
          {/* Ozon - active */}
          <button className="card card-active" onClick={() => setScreen('ozon')}>
            <div className="card-icon ozon-icon">O</div>
            <div className="card-name">Ozon</div>
            <div className="card-desc">Заказы, финансы, аналитика</div>
            <div className="card-action">
              Перейти <span className="arrow">→</span>
            </div>
          </button>

          {/* Wildberries - locked */}
          <div className="card card-locked">
            <div className="card-icon wb-icon">WB</div>
            <div className="card-name">Wildberries</div>
            <div className="card-desc">Скоро</div>
            <div className="card-action locked-action">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              В разработке
            </div>
          </div>

          {/* Яндекс Маркет - locked */}
          <div className="card card-locked">
            <div className="card-icon ym-icon">ЯМ</div>
            <div className="card-name">Яндекс Маркет</div>
            <div className="card-desc">Скоро</div>
            <div className="card-action locked-action">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              В разработке
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
