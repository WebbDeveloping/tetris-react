import React from 'react';
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

export default function Tetris() {
  return (
    <div>
      <Stage />
      <asid>
        <div>
          <Display text='Score' />
          <Display text='Rows' />
          <Display text='Level' />
        </div>
        <StartButton/>
      </asid>
      Tetris
    </div>
  );
}
