export type DynmanicEnvironmentVars = {
  apiUrl: string,
  debug: boolean,
}

// @ts-ignore
export const DynamicEnvVariables: DynmanicEnvironmentVars = window['env'];
