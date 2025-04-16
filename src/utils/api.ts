export const baseURL = 'https://valorant-api.com/v1';

export const getAllAgentsURL = `${baseURL}/agents?isPlayableCharacter=true`;

export const getAgentByIdURL = (uuid: string) => `${baseURL}/agents/${uuid}`;
