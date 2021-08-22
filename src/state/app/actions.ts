import {Context} from '@state';

export const setShowSplash = ({state}: Context, bool: boolean) => {
  state.app.showSplash = bool;
}