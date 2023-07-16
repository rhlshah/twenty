import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const EditableFieldNormalModeOuterContainer = styled.div<
  Pick<OwnProps, 'disableClick'>
>`
  align-items: center;
  border-radius: ${({ theme }) => theme.border.radius.sm};
  display: flex;
  height: 100%;

  height: 16px;

  overflow: hidden;

  padding: ${({ theme }) => theme.spacing(1)};

  width: 100%;

  ${(props) => {
    if (props.disableClick) {
      return css`
        cursor: default;
      `;
    } else {
      return css`
        cursor: pointer;

        &:hover {
          background-color: ${props.theme.background.transparent.light};
        }
      `;
    }
  }}
`;

export const EditableFieldNormalModeInnerContainer = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.font.color.primary};
  font-size: ${({ theme }) => theme.font.size.md};
  font-weight: ${({ theme }) => theme.font.weight.regular};

  height: fit-content;

  overflow: hidden;

  text-overflow: ellipsis;
  white-space: nowrap;
`;

type OwnProps = {
  disableClick?: boolean;
  onClick?: () => void;
};

export function EditableFieldDisplayMode({
  children,
  disableClick,
  onClick,
}: React.PropsWithChildren<OwnProps>) {
  return (
    <EditableFieldNormalModeOuterContainer
      onClick={disableClick ? undefined : onClick}
      disableClick={disableClick}
    >
      <EditableFieldNormalModeInnerContainer>
        {children}
      </EditableFieldNormalModeInnerContainer>
    </EditableFieldNormalModeOuterContainer>
  );
}