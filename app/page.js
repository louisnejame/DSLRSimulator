'use client'

import React from 'react';
import DSLRSimulator from './DSLRSimulator';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DSLRSimulator />
    </main>
  );
}