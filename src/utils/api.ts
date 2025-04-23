// base url for api
export const baseURL = 'https://valorant-api.com/v1';

// api endpoint to get all agents
export const getAllAgentsURL = `${baseURL}/agents?isPlayableCharacter=true`;

// api endpoint to get agent by uuid
export const getAgentByIdURL = (uuid: string) => `${baseURL}/agents/${uuid}`;


// api endpoint to get all weapons
export const getAllWeaponsURL = () => 'https://valorant-api.com/v1/weapons';
