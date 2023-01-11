import { useState } from 'react';
import StyledAvatar from './Avatar.styled';
import { AvatarProps } from './Avatar.types';
import { useTranslation } from 'react-i18next';

function Avatar({ src, name, size, onClick }: AvatarProps) {
  const [isError, setIsError] = useState(false);
  const { t } = useTranslation();
  const handleError = () => {
    setIsError(true);
  };

  const firstLetter = name.substring(0, 1);

  return (
    <StyledAvatar onClick={onClick} size={size}>
      {!isError ? <img src={src} alt={t('Components.Avatar.Name')} onError={handleError} /> : <div>{firstLetter}</div>}
    </StyledAvatar>
  );
}

export default Avatar;
