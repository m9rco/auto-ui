import * as React from 'react';
import cn from 'classnames';
import Modal from '../modal/index';
import { createPortal } from 'react-dom';
import './style.scss';

interface IProps {
  className?: string;
  local?: boolean;
  top?: boolean;
  height?: number | string;
  visible?: boolean;
  children: React.ReactNode;
  onMaskClick?: () => void;
  noPadding?: boolean;
  [otherProps: string]: any;
}

interface IState {}

class Popup extends React.PureComponent<IProps, IState> {
  public static Scroller: React.FC<IScrollerProps>;
  private div: Element | undefined = undefined;

  constructor(props: IProps) {
    super(props);

    // 在当前节点中展示
    if (props.local) {
      return;
    }

    this.div = document.createElement('div');
    this.div.classList.add('_x_popup_');
    document.body.appendChild(this.div);
  }

  public componentWillUnmount() {
    if (this.div) {
      document.body.removeChild(this.div);
    }
  }

  public content() {
    const { className, top, onMaskClick, height, visible, noPadding, children, ...otherProps } = this.props;
    const composeClassName = cn(
      'x-popup',
      {
        'x-popup--top': top,
      },
      className,
    );

    const composeChildren: any[] = [];
    if (Array.isArray(children)) {
      composeChildren.push(...children);
    } else {
      composeChildren.push(children);
    }

    let hasScrollChildren = false;
    composeChildren.forEach(res => {
      if (res.type === Scroller && !hasScrollChildren) {
        hasScrollChildren = true;
      }
    });

    const innercss = cn('x-popup__inner', {
      'x-popup--no-scroll': hasScrollChildren,
      'x-popup--no-padding': noPadding,
    });

    // DOM没有local这个属性，需要删除
    delete otherProps.local;

    return (
      <Modal {...otherProps} visible={visible} height={height} onMaskClick={onMaskClick} className={composeClassName}>
        <div className={innercss}>{children}</div>
      </Modal>
    );
  }

  public render() {
    if (this.div) {
      return createPortal(this.content(), this.div);
    }
    if (this.props.local) {
      return this.content();
    }
    return null;
  }
}

interface IScrollerProps {
  className?: string;
  [otherProps: string]: any;
}

const Scroller: React.FC<IScrollerProps> = props => {
  const { className, children, ...otherProps } = props;
  const composeClassName = cn('x-popup__scroller', className);

  return (
    <div {...otherProps} className={composeClassName}>
      <div className="x-popup__inscroller">{children}</div>
    </div>
  );
};

Popup.Scroller = Scroller;

export default Popup;
