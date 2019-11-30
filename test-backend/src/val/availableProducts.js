import BaseValidator from './validators/base';

import RenderModel from './model/AvailableProducts';

class Validator extends BaseValidator {

    validateResponse(data) {
    return this.validate(RenderModel, data);
  }
}

export default Validator;
