import { ReactElement } from 'react';

import { TitleText, TitleLine } from './styled.components';

type TitleProps = {
  size: 'lg' | 'md' | 'sm',
  children: any,
}

function Title({ size, children }: TitleProps): ReactElement<typeof Title> {
  return (
    <div>
      <TitleText $size={size}>{children}</TitleText>
      <TitleLine $size={size}/>
    </div>
  );
}

Title.defaultProps = {
  size: 'md',
};

export default Title;
