import Validator from './val/availableProducts';

const validator = new Validator();

const validatorTransformer = {
  transformResponse: (data) => {
    const response = data;
    return validator.validateResponse(response) ?
      response : null;
  }
};

export default validatorTransformer;