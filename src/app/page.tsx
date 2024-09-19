"use client";
import React, { useState } from 'react';
import Button from '../app/component/button/page';

export default function Home() {

  const [Loading, setLoading] = useState(false);

  const handleOnclick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false); // Reset loading state after 2 seconds
    }, 3000); // 2000ms = 2 seconds
  };




  return (
    <div>
      <main>
        <Button onClick={handleOnclick} className="spinnerbtn btn-primary" loading={Loading}>
          Follow
        </Button>
      </main>
    </div >
  );
}
