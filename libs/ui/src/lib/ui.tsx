import { css } from '../../styled-system/css';

/* eslint-disable-next-line */
export interface UiProps {}

export function Ui(props: UiProps) {
  return (
    <div
      className={css({
        color: 'red.600',
      })}
    >
      <h1>Welcome to Ui!</h1>
    </div>
  );
}

export default Ui;
