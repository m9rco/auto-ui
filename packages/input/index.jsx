import './style'
import React from 'react'
import cn from 'classnames'

class Input extends React.Component {
  render() {
    const {
      type,
      className,
      addonBefore,
      addonAfter,
      error,
      multi,
      disabled,
      value,
      onChange,
      ...otherProps
    } = this.props

    const composeClassName = cn(
      'x-input',
      {
        'x-input--error': error,
        'x-input--multi': multi,
        'x-input--disabled': disabled
      },
      className
    )

    if (multi) {
      return (
        <div className={composeClassName}>
          {!!addonBefore && (
            <div className="x-input__addon-before">{addonBefore}</div>
          )}
          <textarea
            {...otherProps}
            disabled={disabled}
            className="x-input__ipt"
            value={value}
            onChange={onChange}
            type={type || 'text'}
          />
          {!!addonAfter && (
            <div className="x-input__addon-after">{addonAfter}</div>
          )}
        </div>
      )
    }

    return (
      <div className={composeClassName}>
        {!!addonBefore && (
          <div className="x-input__addon-before">{addonBefore}</div>
        )}
        <input
          {...otherProps}
          disabled={disabled}
          className="x-input__ipt"
          value={value}
          onChange={onChange}
          type={type || 'text'}
        />
        {!!addonAfter && (
          <div className="x-input__addon-after">{addonAfter}</div>
        )}
      </div>
    )
  }
}

export default Input
