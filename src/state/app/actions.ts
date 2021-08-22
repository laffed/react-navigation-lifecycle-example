import {Context} from '@state';

export const incrementGlobalCount = ({state}: Context) => {
  state.app.globalStateCount = state.app.globalStateCount + 1;
}