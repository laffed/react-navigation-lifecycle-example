import {Context} from '@state';
import {UserState} from '@types';

/**
 * WARNING: Overmind is mutable state
 * do no set state equal to ogState directly. 
 * Always spread the ogState
 * ex. 
 * DO NOT:
 * state.user = ogUserState
 * DO:
 * state.user = {...ogUserState}
 */
const ogUserState: UserState = {
  loggedIn: false,
}

export const resetUserState = ({state}: Context) => {
  state.user = {...ogUserState};
}