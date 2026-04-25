import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'

function Home() {
  return (
    <div className="page">
      <header className="hero">
        <h1>Welcome to Hex64</h1>
        <p>A modern web application framework</p>
      </header>
      
      <section className="features">
        <div className="feature-card">
          <h3>快速开发</h3>
          <p>使用 React 和 Vite，提供极速的开发体验</p>
        </div>
        <div className="feature-card">
          <h3>响应式设计</h3>
          <p>自动适应各种屏幕尺寸，桌面和移动设备都完美支持</p>
        </div>
        <div className="feature-card">
          <h3>路由管理</h3>
          <p>内置 React Router，轻松管理页面导航</p>
        </div>
      </section>
    </div>
  )
}

function About() {
  return (
    <div className="page">
      <header className="hero small">
        <h1>关于我们</h1>
      </header>
      
      <section className="content-section">
        <h2>Hex64 App Framework</h2>
        <p>这是一个现代化的网页应用框架，使用最新的前端技术栈构建。</p>
        <ul>
          <li>React 18 - 用户界面库</li>
          <li>Vite - 下一代前端构建工具</li>
          <li>React Router - 页面路由管理</li>
        </ul>
      </section>
    </div>
  )
}

function Dashboard() {
  return (
    <div className="page">
      <header className="hero small">
        <h1>控制面板</h1>
      </header>
      
      <section className="dashboard-grid">
        <div className="dashboard-card">
          <h3>用户总数</h3>
          <p className="stat">1,234</p>
        </div>
        <div className="dashboard-card">
          <h3>活跃用户</h3>
          <p className="stat">567</p>
        </div>
        <div className="dashboard-card">
          <h3>总收入</h3>
          <p className="stat">¥89,000</p>
        </div>
        <div className="dashboard-card">
          <h3>增长率</h3>
          <p className="stat positive">+12.5%</p>
        </div>
      </section>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="nav-brand">
            <Link to="/">Hex64</Link>
          </div>
          <div className="nav-links">
            <Link to="/">首页</Link>
            <Link to="/dashboard">控制面板</Link>
            <Link to="/about">关于</Link>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>&copy; 2026 Hex64 App. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
