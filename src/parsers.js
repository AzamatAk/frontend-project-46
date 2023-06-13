import YAML from 'yaml';

const parsingConfig = {
  '.json': JSON.parse,
  '.yaml': YAML.parse,
  '.yml': YAML.parse,
};

export default (Data, Extension) => {
  try {
    return parsingConfig[Extension](Data);
  } catch (e) {
    throw new Error(`Invalid parsing '${parsingConfig[extension](data)}' result!`);
  }
};
