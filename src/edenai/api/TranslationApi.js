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
    define(['edenai/ApiClient', 'edenai/model/InlineResponse20010', 'edenai/model/InlineResponse2009'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse20010'), require('../model/InlineResponse2009'));
  } else {
    // Browser globals (root is window)
    if (!root.EdenAiApiDocumentation) {
      root.EdenAiApiDocumentation = {};
    }
    root.EdenAiApiDocumentation.TranslationApi = factory(root.EdenAiApiDocumentation.ApiClient, root.EdenAiApiDocumentation.InlineResponse20010, root.EdenAiApiDocumentation.InlineResponse2009);
  }
}(this, function(ApiClient, InlineResponse20010, InlineResponse2009) {
  'use strict';

  /**
   * Translation service.
   * @module edenai/api/TranslationApi
   * @version v1
   */

  /**
   * Constructs a new TranslationApi. 
   * @alias module:edenai/api/TranslationApi
   * @class
   * @param {module:edenai/ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:edenai/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the automaticTranslation operation.
     * @callback module:edenai/api/TranslationApi~automaticTranslationCallback
     * @param {String} error Error message, if any.
     * @param {module:edenai/model/InlineResponse2009} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Machine translation refers to the translation of a text into another language using rules, statics or ml technics.  **SUPPORTED LANGUAGE**  |Name|Type|Value| |----|----|-----| |**Afrikaans**|`string`|`af-AF`| |**Albanian**|`string`|`sq-SQ`| |**Amharic**|`string`|`am-AM`| |**Arabic**|`string`|`ar-XA`| |**Armenian**|`string`|`hy-HY`| |**Azerbaijani**|`string`|`az-AZ`| |**Basque**|`string`|`eu-BA`| |**Belarusian**|`string`|`be-BE`| |**Bengali**|`string`|`bn-BN`| |**Bosnian**|`string`|`bs-BS`| |**Bulgarian**|`string`|`bg-BG`| |**Catalan**|`string`|`ca-ES`| |**Cebuano**|`string`|`ceb-CB`| |**Chinese-Simplified**|`string`|`zh-CN`| |**Chinese-Traditional**|`string`|`zh-TW`| |**Corsican**|`string`|`co-CO`| |**Croatian**|`string`|`hr-HR`| |**Czech**|`string`|`cz-CZ`| |**Danish**|`string`|`da-DK`| |**Dutch**|`string`|`nl-NL`| |**English**|`string`|`en-US`| |**Esperanto**|`string`|`eo-EO`| |**Estonian**|`string`|`et-ET`| |**Finnish**|`string`|`fn-FN`| |**French**|`string`|`fr-FR`| |**French-Canadian**|`string`|`fr-CA`| |**Frisian**|`string`|`fy-FY`| |**Galician**|`string`|`gl-GL`| |**Georgian**|`string`|`ka-KA`| |**German**|`string`|`de-DE`| |**Greek**|`string`|`gr-GR`| |**Gujarati**|`string`|`gu-GU`| |**Haitian-Creole**|`string`|`ht-HT`| |**Hausa**|`string`|`ha-HA`| |**Hawaiian**|`string`|`haw-HA`| |**Hebrew**|`string`|`he-HE`| |**Hindi**|`string`|`hi-HI`| |**Hmong**|`string`|`hmn_HM`| |**Hungarian**|`string`|`hu-HU`| |**Icelandic**|`string`|`is-IS`| |**Igbo**|`string`|`ig-IG`| |**Indonesian**|`string`|`id-ID`| |**Irish**|`string`|`ga-IR`| |**Italian**|`string`|`it-IT`| |**Japanese**|`string`|`ja-JP`| |**Javanese**|`string`|`jv-JV`| |**Kannada**|`string`|`kn-KN`| |**Kazakh**|`string`|`kk-KK`| |**Khmer**|`string`|`km-KM`| |**Korean**|`string`|`ko-KR`| |**Kurdish**|`string`|`ku-KU`| |**Kyrgyz**|`string`|`ky-KY`| |**Lao**|`string`|`lo-LO`| |**Latin**|`string`|`la-LA`| |**Latvian**|`string`|`lv-LV`| |**Lithuanian**|`string`|`lt-LT`| |**Luxembourgish**|`string`|`lb-LB`| |**Macedonian**|`string`|`mk-MK`| |**Malagasy**|`string`|`mg-MG`| |**Malay**|`string`|`ms-MY`| |**Malayalam**|`string`|`ml-ML`| |**Maltese**|`string`|`mt-MT`| |**Maori**|`string`|`mi-MI`| |**Marathi**|`string`|`mr-MR`| |**Mongolian**|`string`|`mn-MN`| |**Myanmar-Burmese**|`string`|`my-MY`| |**Nepali**|`string`|`ne-NE`| |**Norwegian**|`string`|`no-NO`| |**Nyanja Chichewa**|`string`|`ny-NY`| |**Pashto**|`string`|`ps-PS`| |**Persian**|`string`|`fa-FA`| |**Polish**|`string`|`pl-PO`| |**Portuguese**|`string`|`pt-PT`| |**Punjabi**|`string`|`pa-PA`| |**Romanian**|`string`|`ro-RO`| |**Russian**|`string`|`ru-RU`| |**Samoan**|`string`|`sm-SM`| |**Scots Gaelic**|`string`|`gd-GD`| |**Serbian**|`string`|`sr-SR`| |**Sesotho**|`string`|`st-ST`| |**Shona**|`string`|`sn-SN`| |**Sindhi**|`string`|`sd-SD`| |**Sinhala-Sinhalese**|`string`|`si-SI`| |**Slovak**|`string`|`sk-SK`| |**Slovenian**|`string`|`sl-SL`| |**Somali**|`string`|`so-SO`| |**Spanish**|`string`|`es-ES`| |**Sundanese**|`string`|`su-SU`| |**Swahili**|`string`|`sh-SH`| |**Swedish**|`string`|`sw-SW`| |**Tagalog-Filipino**|`string`|`tl-TL`| |**Tajik**|`string`|`tg-TG`| |**Tamil**|`string`|`ta-TA`| |**Telugu**|`string`|`te-TE`| |**Thai**|`string`|`th-TH`| |**Turkish**|`string`|`tr-TR`| |**Ukrainian**|`string`|`uk-UK`| |**Urdu**|`string`|`ur-UR`| |**Uzbek**|`string`|`uz-UZ`| |**Vietnamese**|`string`|`vi-VI`| |**Welsh**|`string`|`cy-CY`| |**Xhosa**|`string`|`xh-XH`| |**Yiddish**|`string`|`yi-YI`| |**Yoruba**|`string`|`yo-YO`|  **AVAILABLE PROVIDERS**   |Name|Value|Version| |----|-----|-------| |**Microsoft Azure**|`microsoft`| `v3.0`  |**Amazon Web Services**|`amazon`| `boto3 (v1.15.18)`  |**Google Cloud**|`google`| `v3` 
     * @param {String} text Text to translate
     * @param {String} sourceLanguage Language code of text (ex: fr (French), en (English), es (Spanish))
     * @param {String} targetLanguage Language code of text (ex: fr (French), en (English), es (Spanish))
     * @param {String} providers Provider to compare (ex: [ 'amazon', 'microsoft', 'ibm', 'google'])
     * @param {module:edenai/api/TranslationApi~automaticTranslationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:edenai/model/InlineResponse2009}
     */
    this.automaticTranslation = function(text, sourceLanguage, targetLanguage, providers, callback) {
      var postBody = null;

      // verify the required parameter 'text' is set
      if (text === undefined || text === null) {
        throw new Error("Missing the required parameter 'text' when calling automaticTranslation");
      }

      // verify the required parameter 'sourceLanguage' is set
      if (sourceLanguage === undefined || sourceLanguage === null) {
        throw new Error("Missing the required parameter 'sourceLanguage' when calling automaticTranslation");
      }

      // verify the required parameter 'targetLanguage' is set
      if (targetLanguage === undefined || targetLanguage === null) {
        throw new Error("Missing the required parameter 'targetLanguage' when calling automaticTranslation");
      }

      // verify the required parameter 'providers' is set
      if (providers === undefined || providers === null) {
        throw new Error("Missing the required parameter 'providers' when calling automaticTranslation");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'text': text,
        'source_language': sourceLanguage,
        'target_language': targetLanguage,
        'providers': providers
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = InlineResponse2009;

      return this.apiClient.callApi(
        '/pretrained/translation/automatic_translation', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the languageDetection operation.
     * @callback module:edenai/api/TranslationApi~languageDetectionCallback
     * @param {String} error Error message, if any.
     * @param {module:edenai/model/InlineResponse20010} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Language Detection or language guessing is the algorithm of determining which natural language given content is in.  **AVAILABLE PROVIDERS**   |Name|Value|Version| |----|-----|-------| |**Microsoft Azure**|`microsoft`| `v3.1`  |**Amazon Web Services**|`amazon`| `boto3 (v1.15.18)`  |**Google Cloud**|`google`| `v1` 
     * @param {String} text Text to analyze
     * @param {String} providers Provider to compare (ex: [ 'amazon', 'microsoft', 'ibm','google'])
     * @param {module:edenai/api/TranslationApi~languageDetectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:edenai/model/InlineResponse20010}
     */
    this.languageDetection = function(text, providers, callback) {
      var postBody = null;

      // verify the required parameter 'text' is set
      if (text === undefined || text === null) {
        throw new Error("Missing the required parameter 'text' when calling languageDetection");
      }

      // verify the required parameter 'providers' is set
      if (providers === undefined || providers === null) {
        throw new Error("Missing the required parameter 'providers' when calling languageDetection");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'text': text,
        'providers': providers
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = InlineResponse20010;

      return this.apiClient.callApi(
        '/pretrained/translation/language_detection', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
