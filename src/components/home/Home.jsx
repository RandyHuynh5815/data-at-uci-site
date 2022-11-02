import React from 'react';
import Title from './title/Title';
import Mission from './mission/Mission';

import './home.scss'

export default function Home() {
  return (
    <div className='home'>
      <Title />
      <Mission />
    </div>
  )
}
