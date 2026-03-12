/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Anthem from './components/Anthem';
import Philosophy from './components/Philosophy';
import Ecosystem from './components/Ecosystem';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-gray-200 font-sans selection:bg-yellow-900 selection:text-yellow-100">
      <Header />
      <main>
        <Hero />
        <Anthem />
        <Philosophy />
        <Ecosystem />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
