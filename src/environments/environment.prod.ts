import { DynamicEnvVariables } from 'src/DynamicEnvVars';


export const environment = {
  production: true,
  apiUrl: DynamicEnvVariables.apiUrl || "default",
  debug: DynamicEnvVariables.debug || false,
};
