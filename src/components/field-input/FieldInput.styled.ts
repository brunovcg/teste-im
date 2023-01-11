import styled from 'styled-components';
import { StyledFieldInputProps } from './FieldInput.types';

const StyledFieldInput = styled.div<StyledFieldInputProps>`
  width: ${(props) => props.width ?? '100%'};
  .im-field-input-header,
  .im-field-input-body,
  .im-field-input-footer {
    display: flex;
    width: 100%;
  }

  .im-field-input-header,
  .im-field-input-footer {
    padding: 0 15px;
  }

  .im-field-input-header {
    height: 20px;
    justify-content: space-between;
    .im-field-input-label {
      font-size: 14px;
      font-weight: bold;
      flex: 1;
      color: var(--typeface-medium);
    }
    .im-field-input-remaining-characters {
      font-size: 12px;
      font-weight: bold;
      color: var(--typeface-light);
      display: flex;
      justify-content: end;
      align-items: end;

      .im-input-no-qunatity {
        color: var(--error);
      }
    }
  }

  .im-field-input-body {
    align-items: center;
    gap: 15px;
    padding: 5px;
    border: 1px solid var(--border);
    border-radius: 20px;
    background-color: var(--surface-white);
    height: 40px;

    &:hover {
      border: 1px solid var(--border-hover);
    }

    &.im-input-focus {
      box-shadow: var(--box-shadow-light);
      border: 1px solid var(--border-focus);
    }

    .im-field-input-field {
      border: none;
      flex: 1;

      ::placeholder {
        color: var(--placeholder);
      }
    }
  }

  .im-field-input-footer {
    flex-direction: column;
    gap: 5px;
    margin-top: 5px;
    height: 25px;

    .im-field-input-info,
    .im-field-input-error {
      font-size: 14px;
    }

    .im-field-input-info {
      color: var(--typeface-light);
    }

    .im-field-input-error {
      color: var(--error);
    }
  }

  &.im-error:not(.im-disabled) {
    .im-field-input-body {
      border: 1px solid var(--error);

      .im-field-input-field {
        ::placeholder {
          color: var(--error);
        }
      }
    }
  }

  &.im-disabled {
    .im-field-input-label,
    .im-field-input-remaining-characters,
    .im-field-input-field::placeholder,
    .im-field-input-info {
      color: var(--disabled);
    }

    .im-field-input-body {
      &:hover {
        border: 1px solid var(--border);
      }
    }
  }
`;

export default StyledFieldInput;

