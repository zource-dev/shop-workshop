import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import MainLayout from '@/components/layouts/main';
import styles from '@/styles/Home.module.css';
import Button from '@/components/inputs/Button';
import List from '@/components/inputs/List';

export default function Home() {
  const [value, setValue] = useState(Math.random());

  return (
    <MainLayout
      className={styles.main}
      title="Main Page"
      description="Main Page Description"
    >
      {value}
      <Image
        className={styles.logo}
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
      <Link href="/hello">Say Hello!</Link>
      <List value={value} setValue={setValue} />
    </MainLayout>
  );
}
