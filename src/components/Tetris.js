import React from 'react';
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';
import { createStage } from '../gameHelpers.js';
import {StyledTetris, StyledTetrisWrapper} from './styles/StyledTetris';

export default function Tetris() {
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={createStage()} />
        <aside>
          <div>
            <Display text='Score' />
            <Display text='Rows' />
            <Display text='Level' />
          </div>
          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
}
