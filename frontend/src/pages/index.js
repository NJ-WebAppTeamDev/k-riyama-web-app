// src/pages/index.js
import Navbar from '../components/Navbar';

export default function Home() {
    return (
        <div>
            <Navbar />
            <h1>ようこそ！</h1>
            <p>このページにはハンバーガーメニューが含まれています。</p>
        </div>
    );
}
