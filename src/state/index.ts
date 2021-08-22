import {IContext} from 'overmind';
import {
  createStateHook,
  createActionsHook,
} from 'overmind-react'

import {namespaced, } from 'overmind/config'
import * as app from './app';
import * as user from './user';

export const config = namespaced({
  app,
  user,
});


export type Context = IContext<{
  state: typeof config.state,
  actions: typeof config.actions,
}>

export const useAppState = createStateHook<Context>()
export const useActions = createActionsHook<Context>()