/*
 * Eden AI API Documentation
 * <a href=\"https://app.edenai.run/user/login\" target=\"_blank\"><img src=\"/static/images/welcome.png\"></a>. # Welcome  Eden AI simplifies the use and integration of AI technologies by providing a unique API connected to the best AI engines and combined with a powerful management platform. The platform covers a wide range of AI technologies: * Vision:  <a href=\"https://www.edenai.co/vision\" target=\"_blank\">www.edenai.co/vision</a>. * Text & NLP: <a href=\"https://www.edenai.co/text\" target=\"_blank\">www.edenai.co/text</a>. * Speech & Audio: <a href=\"https://www.edenai.co/speech\" target=\"_blank\">www.edenai.co/speech</a>. * OCR: <a href=\"https://www.edenai.co/ocr\" target=\"_blank\">www.edenai.co/ocr</a>. * Machine Translation: <a href=\"https://www.edenai.co/translation\" target=\"_blank\">www.edenai.co/translation</a>. * Prediction: <a href=\"https://www.edenai.co/prediction\" target=\"_blank\">www.edenai.co/prediction</a>.  For all the proposed technologies, we provide a single endpoint:  the service provider is only a parameter that can be changed very easily. All the engines available on Eden AI are listed here: www.edenai.co/catalog  # Support & community  ### 1- Support If you have any problems, please contact us at this email address: contact@edenai.co. We will be happy to help you in the use of Eden AI.   ### 2- Community  You can interact personally with other people actively using and working with Eden AI and join our  <a href=\"https://join.slack.com/t/edenai/shared_invite/zt-t68c2pr9-4lDKQ_qEqmLiWNptQzB_6w\" target=\"_blank\">Slack community</a>.  We are always updating our docs, so a good way to always stay up to date is to watch our documentation repo on Github: <a href=\"https://github.com/edenai\" target=\"_blank\">https://github.com/edenai</a>.  ### 3- Blog  We also regularly publish various articles with Eden AI news and technical articles on the different AI engines that exist. You can find these articles here: <a href=\"https://www.edenai.co/blog\" target=\"_blank\">https://www.edenai.co/blog</a>.   # Authentication  ## Create account ![Register](/static/images/register.png)  To create an account, please go to this link: <a href=\"https://app.edenai.run/user/login\" target=\"_blank\">app.edenai.run/user/login</a>. You can create an account with your email address or by using your account on available platforms (Gmail, Github, etc.).   By creating an account with your email address, you will receive a confirmation email with a link to click. Check your spam if needed and contact us if you have any problem: contact@edenai.co  ![Login](/static/images/login.png) ## API key  By going to your account page on the platform: <a href=\"https://app.edenai.run/admin/account\" target=\"_blank\">https://app.edenai.run/admin/account</a>, you will have access to your API key to start using the different AI engines offered by Eden AI.   ![api_key](/static/images/api_key.png)  ## Sandbox API key  By going to your account page on the platform: <a href=\"https://app.edenai.run/admin/account\" target=\"_blank\">https://app.edenai.run/admin/account</a>, you will also have access to your **Sandbox** API key that will allow you to make free calls and get dummy responses in order to implement and debug Eden AI without consuming credits.   ![api_key](/static/images/sandbox_api_key.png)  # Portal Guide  Eden AI provides a web portal that allows you to do several tasks:  ![portal](/static/images/portal.png)  ### 1- Benchmark and test The platform allows you to easily compare competing engines without having to code. By uploading your data, you have access to the prediction results of the different engines. This gives you a first overview of the performance of AI engines.   ![benchmark](/static/images/benchmark.png)  ### 2- Cost management The <a href=\"https://app.edenai.run/admin/cost-management\" target=\"_blank\">cost management page</a> also allows you to centralize the costs associated with the different engines with various filters to simplify the analysis.   This page also allows you to define monthly budget limits not to be exceeded to secure the use of different AI engines.   ![cost-management](/static/images/cost_management.png) ### 3- Account The <a href=\"https://app.edenai.run/admin/account\" target=\"_blank\">account page</a> allows you to change your information and password. It also gives you access to your API key that you can renew if needed.   This page also allows you to add a credit card and to buy with credits to use all the engines offered by Eden AI.   ![account](/static/images/account.png)   # API Guide  Eden AI API has different endpoints that refer to different AI services. The connected providers are thus parameters that the user can easily change. 
 *
 * OpenAPI spec version: v1
 * Contact: contact@edenai.co
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.24
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['edenai/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.EdenAiApiDocumentation) {
      root.EdenAiApiDocumentation = {};
    }
    root.EdenAiApiDocumentation.InlineResponse20012ResultLandmarks = factory(root.EdenAiApiDocumentation.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The InlineResponse20012ResultLandmarks model module.
   * @module edenai/model/InlineResponse20012ResultLandmarks
   * @version v1
   */

  /**
   * Constructs a new <code>InlineResponse20012ResultLandmarks</code>.
   * object
   * @alias module:edenai/model/InlineResponse20012ResultLandmarks
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>InlineResponse20012ResultLandmarks</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:edenai/model/InlineResponse20012ResultLandmarks} obj Optional instance to populate.
   * @return {module:edenai/model/InlineResponse20012ResultLandmarks} The populated <code>InlineResponse20012ResultLandmarks</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('LEFT_EYE'))
        obj.LEFT_EYE = ApiClient.convertToType(data['LEFT_EYE'], ['Number']);
      if (data.hasOwnProperty('RIGHT_EYE'))
        obj.RIGHT_EYE = ApiClient.convertToType(data['RIGHT_EYE'], ['Number']);
      if (data.hasOwnProperty('LEFT_OF_LEFT_EYEBROW'))
        obj.LEFT_OF_LEFT_EYEBROW = ApiClient.convertToType(data['LEFT_OF_LEFT_EYEBROW'], ['Number']);
      if (data.hasOwnProperty('RIGHT_OF_LEFT_EYEBROW'))
        obj.RIGHT_OF_LEFT_EYEBROW = ApiClient.convertToType(data['RIGHT_OF_LEFT_EYEBROW'], ['Number']);
      if (data.hasOwnProperty('LEFT_OF_RIGHT_EYEBROW'))
        obj.LEFT_OF_RIGHT_EYEBROW = ApiClient.convertToType(data['LEFT_OF_RIGHT_EYEBROW'], ['Number']);
      if (data.hasOwnProperty('RIGHT_OF_RIGHT_EYEBROW'))
        obj.RIGHT_OF_RIGHT_EYEBROW = ApiClient.convertToType(data['RIGHT_OF_RIGHT_EYEBROW'], ['Number']);
      if (data.hasOwnProperty('MIDPOINT_BETWEEN_EYES'))
        obj.MIDPOINT_BETWEEN_EYES = ApiClient.convertToType(data['MIDPOINT_BETWEEN_EYES'], ['Number']);
      if (data.hasOwnProperty('NOSE_TIP'))
        obj.NOSE_TIP = ApiClient.convertToType(data['NOSE_TIP'], ['Number']);
      if (data.hasOwnProperty('UPPER_LIP'))
        obj.UPPER_LIP = ApiClient.convertToType(data['UPPER_LIP'], ['Number']);
      if (data.hasOwnProperty('LOWER_LIP'))
        obj.LOWER_LIP = ApiClient.convertToType(data['LOWER_LIP'], ['Number']);
      if (data.hasOwnProperty('MOUTH_LEFT'))
        obj.MOUTH_LEFT = ApiClient.convertToType(data['MOUTH_LEFT'], ['Number']);
      if (data.hasOwnProperty('MOUTH_RIGHT'))
        obj.MOUTH_RIGHT = ApiClient.convertToType(data['MOUTH_RIGHT'], ['Number']);
      if (data.hasOwnProperty('MOUTH_CENTER'))
        obj.MOUTH_CENTER = ApiClient.convertToType(data['MOUTH_CENTER'], ['Number']);
      if (data.hasOwnProperty('NOSE_BOTTOM_RIGHT'))
        obj.NOSE_BOTTOM_RIGHT = ApiClient.convertToType(data['NOSE_BOTTOM_RIGHT'], ['Number']);
      if (data.hasOwnProperty('NOSE_BOTTOM_LEFT'))
        obj.NOSE_BOTTOM_LEFT = ApiClient.convertToType(data['NOSE_BOTTOM_LEFT'], ['Number']);
      if (data.hasOwnProperty('NOSE_BOTTOM_CENTER'))
        obj.NOSE_BOTTOM_CENTER = ApiClient.convertToType(data['NOSE_BOTTOM_CENTER'], ['Number']);
      if (data.hasOwnProperty('LEFT_EYE_TOP_BOUNDARY'))
        obj.LEFT_EYE_TOP_BOUNDARY = ApiClient.convertToType(data['LEFT_EYE_TOP_BOUNDARY'], ['Number']);
      if (data.hasOwnProperty('LEFT_EYE_RIGHT_CORNER'))
        obj.LEFT_EYE_RIGHT_CORNER = ApiClient.convertToType(data['LEFT_EYE_RIGHT_CORNER'], ['Number']);
      if (data.hasOwnProperty('LEFT_EYE_BOTTOM_BOUNDARY'))
        obj.LEFT_EYE_BOTTOM_BOUNDARY = ApiClient.convertToType(data['LEFT_EYE_BOTTOM_BOUNDARY'], ['Number']);
      if (data.hasOwnProperty('LEFT_EYE_LEFT_CORNER'))
        obj.LEFT_EYE_LEFT_CORNER = ApiClient.convertToType(data['LEFT_EYE_LEFT_CORNER'], ['Number']);
      if (data.hasOwnProperty('RIGHT_EYE_TOP_BOUNDARY'))
        obj.RIGHT_EYE_TOP_BOUNDARY = ApiClient.convertToType(data['RIGHT_EYE_TOP_BOUNDARY'], ['Number']);
      if (data.hasOwnProperty('RIGHT_EYE_RIGHT_CORNER'))
        obj.RIGHT_EYE_RIGHT_CORNER = ApiClient.convertToType(data['RIGHT_EYE_RIGHT_CORNER'], ['Number']);
      if (data.hasOwnProperty('RIGHT_EYE_BOTTOM_BOUNDARY'))
        obj.RIGHT_EYE_BOTTOM_BOUNDARY = ApiClient.convertToType(data['RIGHT_EYE_BOTTOM_BOUNDARY'], ['Number']);
      if (data.hasOwnProperty('RIGHT_EYE_LEFT_CORNER'))
        obj.RIGHT_EYE_LEFT_CORNER = ApiClient.convertToType(data['RIGHT_EYE_LEFT_CORNER'], ['Number']);
      if (data.hasOwnProperty('LEFT_EYEBROW_UPPER_MIDPOINT'))
        obj.LEFT_EYEBROW_UPPER_MIDPOINT = ApiClient.convertToType(data['LEFT_EYEBROW_UPPER_MIDPOINT'], ['Number']);
      if (data.hasOwnProperty('RIGHT_EYEBROW_UPPER_MIDPOINT'))
        obj.RIGHT_EYEBROW_UPPER_MIDPOINT = ApiClient.convertToType(data['RIGHT_EYEBROW_UPPER_MIDPOINT'], ['Number']);
      if (data.hasOwnProperty('LEFT_EAR_TRAGION'))
        obj.LEFT_EAR_TRAGION = ApiClient.convertToType(data['LEFT_EAR_TRAGION'], ['Number']);
      if (data.hasOwnProperty('RIGHT_EAR_TRAGION'))
        obj.RIGHT_EAR_TRAGION = ApiClient.convertToType(data['RIGHT_EAR_TRAGION'], ['Number']);
      if (data.hasOwnProperty('FOREHEAD_GLABELLA'))
        obj.FOREHEAD_GLABELLA = ApiClient.convertToType(data['FOREHEAD_GLABELLA'], ['Number']);
      if (data.hasOwnProperty('CHIN_GNATHION'))
        obj.CHIN_GNATHION = ApiClient.convertToType(data['CHIN_GNATHION'], ['Number']);
      if (data.hasOwnProperty('CHIN_LEFT_GONION'))
        obj.CHIN_LEFT_GONION = ApiClient.convertToType(data['CHIN_LEFT_GONION'], ['Number']);
      if (data.hasOwnProperty('CHIN_RIGHT_GONION'))
        obj.CHIN_RIGHT_GONION = ApiClient.convertToType(data['CHIN_RIGHT_GONION'], ['Number']);
      if (data.hasOwnProperty('LEFT_CHEEK_CENTER'))
        obj.LEFT_CHEEK_CENTER = ApiClient.convertToType(data['LEFT_CHEEK_CENTER'], ['Number']);
      if (data.hasOwnProperty('RIGHT_CHEEK_CENTER'))
        obj.RIGHT_CHEEK_CENTER = ApiClient.convertToType(data['RIGHT_CHEEK_CENTER'], ['Number']);
    }
    return obj;
  }

  /**
   * @member {Array.<Number>} LEFT_EYE
   */
  exports.prototype.LEFT_EYE = undefined;

  /**
   * @member {Array.<Number>} RIGHT_EYE
   */
  exports.prototype.RIGHT_EYE = undefined;

  /**
   * @member {Array.<Number>} LEFT_OF_LEFT_EYEBROW
   */
  exports.prototype.LEFT_OF_LEFT_EYEBROW = undefined;

  /**
   * @member {Array.<Number>} RIGHT_OF_LEFT_EYEBROW
   */
  exports.prototype.RIGHT_OF_LEFT_EYEBROW = undefined;

  /**
   * @member {Array.<Number>} LEFT_OF_RIGHT_EYEBROW
   */
  exports.prototype.LEFT_OF_RIGHT_EYEBROW = undefined;

  /**
   * @member {Array.<Number>} RIGHT_OF_RIGHT_EYEBROW
   */
  exports.prototype.RIGHT_OF_RIGHT_EYEBROW = undefined;

  /**
   * @member {Array.<Number>} MIDPOINT_BETWEEN_EYES
   */
  exports.prototype.MIDPOINT_BETWEEN_EYES = undefined;

  /**
   * @member {Array.<Number>} NOSE_TIP
   */
  exports.prototype.NOSE_TIP = undefined;

  /**
   * @member {Array.<Number>} UPPER_LIP
   */
  exports.prototype.UPPER_LIP = undefined;

  /**
   * @member {Array.<Number>} LOWER_LIP
   */
  exports.prototype.LOWER_LIP = undefined;

  /**
   * @member {Array.<Number>} MOUTH_LEFT
   */
  exports.prototype.MOUTH_LEFT = undefined;

  /**
   * @member {Array.<Number>} MOUTH_RIGHT
   */
  exports.prototype.MOUTH_RIGHT = undefined;

  /**
   * @member {Array.<Number>} MOUTH_CENTER
   */
  exports.prototype.MOUTH_CENTER = undefined;

  /**
   * @member {Array.<Number>} NOSE_BOTTOM_RIGHT
   */
  exports.prototype.NOSE_BOTTOM_RIGHT = undefined;

  /**
   * @member {Array.<Number>} NOSE_BOTTOM_LEFT
   */
  exports.prototype.NOSE_BOTTOM_LEFT = undefined;

  /**
   * @member {Array.<Number>} NOSE_BOTTOM_CENTER
   */
  exports.prototype.NOSE_BOTTOM_CENTER = undefined;

  /**
   * @member {Array.<Number>} LEFT_EYE_TOP_BOUNDARY
   */
  exports.prototype.LEFT_EYE_TOP_BOUNDARY = undefined;

  /**
   * @member {Array.<Number>} LEFT_EYE_RIGHT_CORNER
   */
  exports.prototype.LEFT_EYE_RIGHT_CORNER = undefined;

  /**
   * @member {Array.<Number>} LEFT_EYE_BOTTOM_BOUNDARY
   */
  exports.prototype.LEFT_EYE_BOTTOM_BOUNDARY = undefined;

  /**
   * @member {Array.<Number>} LEFT_EYE_LEFT_CORNER
   */
  exports.prototype.LEFT_EYE_LEFT_CORNER = undefined;

  /**
   * @member {Array.<Number>} RIGHT_EYE_TOP_BOUNDARY
   */
  exports.prototype.RIGHT_EYE_TOP_BOUNDARY = undefined;

  /**
   * @member {Array.<Number>} RIGHT_EYE_RIGHT_CORNER
   */
  exports.prototype.RIGHT_EYE_RIGHT_CORNER = undefined;

  /**
   * @member {Array.<Number>} RIGHT_EYE_BOTTOM_BOUNDARY
   */
  exports.prototype.RIGHT_EYE_BOTTOM_BOUNDARY = undefined;

  /**
   * @member {Array.<Number>} RIGHT_EYE_LEFT_CORNER
   */
  exports.prototype.RIGHT_EYE_LEFT_CORNER = undefined;

  /**
   * @member {Array.<Number>} LEFT_EYEBROW_UPPER_MIDPOINT
   */
  exports.prototype.LEFT_EYEBROW_UPPER_MIDPOINT = undefined;

  /**
   * @member {Array.<Number>} RIGHT_EYEBROW_UPPER_MIDPOINT
   */
  exports.prototype.RIGHT_EYEBROW_UPPER_MIDPOINT = undefined;

  /**
   * @member {Array.<Number>} LEFT_EAR_TRAGION
   */
  exports.prototype.LEFT_EAR_TRAGION = undefined;

  /**
   * @member {Array.<Number>} RIGHT_EAR_TRAGION
   */
  exports.prototype.RIGHT_EAR_TRAGION = undefined;

  /**
   * @member {Array.<Number>} FOREHEAD_GLABELLA
   */
  exports.prototype.FOREHEAD_GLABELLA = undefined;

  /**
   * @member {Array.<Number>} CHIN_GNATHION
   */
  exports.prototype.CHIN_GNATHION = undefined;

  /**
   * @member {Array.<Number>} CHIN_LEFT_GONION
   */
  exports.prototype.CHIN_LEFT_GONION = undefined;

  /**
   * @member {Array.<Number>} CHIN_RIGHT_GONION
   */
  exports.prototype.CHIN_RIGHT_GONION = undefined;

  /**
   * @member {Array.<Number>} LEFT_CHEEK_CENTER
   */
  exports.prototype.LEFT_CHEEK_CENTER = undefined;

  /**
   * @member {Array.<Number>} RIGHT_CHEEK_CENTER
   */
  exports.prototype.RIGHT_CHEEK_CENTER = undefined;


  return exports;

}));
