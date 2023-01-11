import { useId, useState, useRef } from 'react';
import { ButtonIcon } from '@/components';
import StyledFieldInput from './FieldInput.styled';
import { FieldInputProps } from './FieldInput.types';
import { useTranslation } from 'react-i18next';
import { jsxHelpers } from '@/helpers';

const { conditionalClasses } = jsxHelpers;

function FieldInput({
  value,
  onChange,
  label,
  placeholder,
  errorMessage,
  injectableClass,
  maxLength,
  info,
  disabled = false,
  onSearch,
  width,
}: FieldInputProps) {
  const [remainingChars, setRemainingChars] = useState(maxLength);
  const [inputValue, setInputValue] = useState(value ?? '');
  const [error, setError] = useState(errorMessage);
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [focused, setFocused] = useState(false);
  const { t } = useTranslation();

  const isMaxLengthSet = !!maxLength;

  const canType = () => {
    if (!isMaxLengthSet) {
      return true;
    }
    if ((remainingChars ?? 0) > 0) {
      return true;
    }
    return false;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!canType()) {
      return;
    }
    setRemainingChars((maxLength ?? 0) - e.target.value.length);
    setInputValue(e.target.value);
    onChange(e.target.value);
    setError('');
  };

  const cleanInputValue = () => {
    setInputValue('');
    setRemainingChars(maxLength);
    setError('');
  };

  const handleSearch = () => {
    onSearch?.(inputValue);
  };

  const classes = conditionalClasses({
    'im-error': !!error,
    'im-disabled': disabled,
  });

  const renderRemainingChar = () => {
    if (!maxLength) {
      return null;
    }

    const formatQuatity = (quantity: number) => (
      <p>
        <span>{t('Components.InputField.Characters')}</span>
        <span className={quantity === 0 ? 'im-input-no-qunatity' : ''}>{quantity}</span>
      </p>
    );

    if (disabled) {
      return formatQuatity(0);
    }

    return formatQuatity(remainingChars ?? 0);
  };

  return (
    <StyledFieldInput width={width} className={`im-field-input ${classes} ${injectableClass}`}>
      <div className="im-field-input-header">
        <label className="im-field-input-label" htmlFor={inputId}>
          {label}
        </label>
        {isMaxLengthSet && <p className="im-field-input-remaining-characters">{renderRemainingChar()}</p>}
      </div>
      <div className={`im-field-input-body ${focused ? 'im-input-focus' : ''}`}>
        <ButtonIcon icon="search" onClick={handleSearch} disabled={disabled} error={!!error} />
        <input
          className="im-field-input-field"
          id={inputId}
          value={inputValue}
          ref={inputRef}
          placeholder={placeholder}
          onChange={(e) => handleChange(e)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          disabled={disabled}
        />
        <ButtonIcon icon="close" onClick={cleanInputValue} disabled={disabled} error={!!error} hide={!inputValue} />
      </div>
      <div className="im-field-input-footer">
        <p className="im-field-input-info">{info && info}</p>
        <p className="im-field-input-error">{error && !disabled && error}</p>
      </div>
    </StyledFieldInput>
  );
}

export default FieldInput;

