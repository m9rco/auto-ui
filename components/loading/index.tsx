import * as React from 'react';
import Spin from '../spin/index';
import { createPortal, render, unmountComponentAtNode } from 'react-dom';
import './style.scss';

let div: HTMLDivElement | null;

const close = (): void => {
  if (div && div.parentNode) {
    unmountComponentAtNode(div);
    div.parentNode.removeChild(div);
    div = null;
  }
};

type ILoading = ((text?: string) => [() => void, void]) & { hide: () => void };

const Loading: ILoading = text => {
  // 防止多次调用先 close 检查下
  close();

  div = document.createElement('div');
  div.classList.add('x-loading', 'x-loading--show');
  document.body.appendChild(div);

  render(
    createPortal(
      <div className="x-loading__inner">
        <Spin />
        {!!text && <p>{text}</p>}
      </div>,
      div
    ),
    div
  );

  return [close, undefined];
};

Loading.hide = close;

export default Loading;
