import React from 'react';

const test = () => {
  console.log('test');
};

export default function Home() {
  return (
    <div>
      I am React home component!
      <a onClick={test}>Click ME</a>
    </div>
  );
}
