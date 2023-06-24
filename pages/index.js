import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import MainLayout from '@/components/layouts/main';
import styles from '@/styles/Home.module.css';
import List from '@/components/inputs/List';
import Counter from '@/components/contexts/Counter';


export default function Home() {
  const [value, setValue] = useState(0);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(`http://localhost:3000/api/hello?value=${value}`);
      setData(await response.json());
    })().catch(setError);
  }, [value]);

  return (
    <MainLayout
      className={styles.main}
      title="Main Page"
      description="Main Page Description"
    >
      {value}
      {error && <div>{error}</div>}
      {JSON.stringify(data)}
      <Image
        className={styles.logo}
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
      <Link href="/hello">Say Hello!</Link>
      <Counter.Provider value={{ value, setValue }}>
        <List />
      </Counter.Provider>
    </MainLayout>
  );
}
