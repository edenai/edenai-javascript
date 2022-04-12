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
    define(['edenai/ApiClient', 'edenai/model/InlineResponse2005', 'edenai/model/InlineResponse2006', 'edenai/model/InlineResponse2007', 'edenai/model/InlineResponse2008'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse2005'), require('../model/InlineResponse2006'), require('../model/InlineResponse2007'), require('../model/InlineResponse2008'));
  } else {
    // Browser globals (root is window)
    if (!root.EdenAiApiDocumentation) {
      root.EdenAiApiDocumentation = {};
    }
    root.EdenAiApiDocumentation.TextApi = factory(root.EdenAiApiDocumentation.ApiClient, root.EdenAiApiDocumentation.InlineResponse2005, root.EdenAiApiDocumentation.InlineResponse2006, root.EdenAiApiDocumentation.InlineResponse2007, root.EdenAiApiDocumentation.InlineResponse2008);
  }
}(this, function(ApiClient, InlineResponse2005, InlineResponse2006, InlineResponse2007, InlineResponse2008) {
  'use strict';

  /**
   * Text service.
   * @module edenai/api/TextApi
   * @version v1
   */

  /**
   * Constructs a new TextApi. 
   * @alias module:edenai/api/TextApi
   * @class
   * @param {module:edenai/ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:edenai/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the keywordExtraction operation.
     * @callback module:edenai/api/TextApi~keywordExtractionCallback
     * @param {String} error Error message, if any.
     * @param {module:edenai/model/InlineResponse2005} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Keyword extraction (also known as keyword detection or keyword analysis) is a text analysis technique that consists of automatically extracting the mostimportant words and expressions in a text.  **SUPPORTED LANGUAGE**  |Name|Type|Value| |----|----|-----| |**English(US)**|`string`|`en-US`| |**French**|`string`|`fr-FR`| |**Spanish**|`string`|`es-ES`|  **AVAILABLE PROVIDERS**   |Name|Value|Version| |----|-----|-------| |**Microsoft Azure**|`microsoft`| `v3.1`  |**Amazon Web Services**|`amazon`| `boto3 (v1.15.18)`  |**IBM Watson**|`ibm`| `v1 (2021-08-01)` 
     * @param {String} language Language code of text (ex: fr-FR (French), en-US (English), es-ES (Spanish))
     * @param {String} text Text to analyze
     * @param {String} providers Provider to compare (ex: [ 'amazon', 'microsoft', 'ibm'])
     * @param {module:edenai/api/TextApi~keywordExtractionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:edenai/model/InlineResponse2005}
     */
    this.keywordExtraction = function(language, text, providers, callback) {
      var postBody = null;

      // verify the required parameter 'language' is set
      if (language === undefined || language === null) {
        throw new Error("Missing the required parameter 'language' when calling keywordExtraction");
      }

      // verify the required parameter 'text' is set
      if (text === undefined || text === null) {
        throw new Error("Missing the required parameter 'text' when calling keywordExtraction");
      }

      // verify the required parameter 'providers' is set
      if (providers === undefined || providers === null) {
        throw new Error("Missing the required parameter 'providers' when calling keywordExtraction");
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
        'language': language,
        'text': text,
        'providers': providers
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = InlineResponse2005;

      return this.apiClient.callApi(
        '/pretrained/text/keyword_extraction', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the namedEntityRecognition operation.
     * @callback module:edenai/api/TextApi~namedEntityRecognitionCallback
     * @param {String} error Error message, if any.
     * @param {module:edenai/model/InlineResponse2006} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Named Entity Recognition (also called entity identification or entity extraction) is an information extraction technique that automatically identifies named entities in a text and classifies them into predefined categories.  **SUPPORTED LANGUAGE**  |Name|Type|Value| |----|----|-----| |**English(US)**|`string`|`en-US`| |**French**|`string`|`fr-FR`| |**Spanish**|`string`|`es-ES`|  **AVAILABLE PROVIDERS**   |Name|Value|Version| |----|-----|-------| |**Microsoft Azure**|`microsoft`| `v3.1`  |**Amazon Web Services**|`amazon`| `boto3 (v1.15.18)`  |**IBM Watson**|`ibm`| `v1 (2021-08-01)`  |**Google Cloud**|`google`| `v1` 
     * @param {String} language Language code of text (ex: fr-FR (French), en-US (English), es-ES (Spanish))
     * @param {String} text Text to analyze
     * @param {String} providers Provider to compare (ex: [ 'amazon', 'microsoft', 'ibm','google'])
     * @param {module:edenai/api/TextApi~namedEntityRecognitionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:edenai/model/InlineResponse2006}
     */
    this.namedEntityRecognition = function(language, text, providers, callback) {
      var postBody = null;

      // verify the required parameter 'language' is set
      if (language === undefined || language === null) {
        throw new Error("Missing the required parameter 'language' when calling namedEntityRecognition");
      }

      // verify the required parameter 'text' is set
      if (text === undefined || text === null) {
        throw new Error("Missing the required parameter 'text' when calling namedEntityRecognition");
      }

      // verify the required parameter 'providers' is set
      if (providers === undefined || providers === null) {
        throw new Error("Missing the required parameter 'providers' when calling namedEntityRecognition");
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
        'language': language,
        'text': text,
        'providers': providers
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = InlineResponse2006;

      return this.apiClient.callApi(
        '/pretrained/text/named_entity_recognition', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the sentimentAnalysis operation.
     * @callback module:edenai/api/TextApi~sentimentAnalysisCallback
     * @param {String} error Error message, if any.
     * @param {module:edenai/model/InlineResponse2007} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Sentiment analysis API extracts sentiment in a given string of text.Sentiment analysis, also called 'opinion mining',uses natural language processing, text analysis and computational linguistics to identify and detect subjective information from the input text.  **SUPPORTED LANGUAGE**  |Name|Type|Value| |----|----|-----| |**English(US)**|`string`|`en-US`| |**French**|`string`|`fr-FR`| |**Spanish**|`string`|`es-ES`| |**Dutch**|`string`|`nl-NL`|  **AVAILABLE PROVIDERS**   |Name|Value|Version| |----|-----|-------| |**Microsoft Azure**|`microsoft`| `v3.1`  |**Amazon Web Services**|`amazon`| `boto3 (v1.15.18)`  |**IBM Watson**|`ibm`| `v1 (2021-08-01)`  |**Google Cloud**|`google`| `v1` 
     * @param {String} language Language code of text (ex: fr-FR (French), en-US (English), es-ES (Spanish))
     * @param {String} text Text to analyze
     * @param {String} providers Provider to compare (ex: [ 'amazon', 'microsoft', 'ibm', 'google'])
     * @param {module:edenai/api/TextApi~sentimentAnalysisCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:edenai/model/InlineResponse2007}
     */
    this.sentimentAnalysis = function(language, text, providers, callback) {
      var postBody = null;

      // verify the required parameter 'language' is set
      if (language === undefined || language === null) {
        throw new Error("Missing the required parameter 'language' when calling sentimentAnalysis");
      }

      // verify the required parameter 'text' is set
      if (text === undefined || text === null) {
        throw new Error("Missing the required parameter 'text' when calling sentimentAnalysis");
      }

      // verify the required parameter 'providers' is set
      if (providers === undefined || providers === null) {
        throw new Error("Missing the required parameter 'providers' when calling sentimentAnalysis");
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
        'language': language,
        'text': text,
        'providers': providers
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = InlineResponse2007;

      return this.apiClient.callApi(
        '/pretrained/text/sentiment_analysis', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the syntaxAnalysis operation.
     * @callback module:edenai/api/TextApi~syntaxAnalysisCallback
     * @param {String} error Error message, if any.
     * @param {module:edenai/model/InlineResponse2008} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Syntax analysis consists principaly in highlighting the structure of a text.  **SUPPORTED LANGUAGE**  |Name|Type|Value| |----|----|-----| |**English(US)**|`string`|`en-US`| |**French**|`string`|`fr-FR`| |**Spanish**|`string`|`es-ES`|  **AVAILABLE PROVIDERS**   |Name|Value|Version| |----|-----|-------| |**Amazon Web Services**|`amazon`| `boto3 (v1.15.18)`  |**IBM Watson**|`ibm`| `v1 (2021-08-01)`  |**Google Cloud**|`google`| `v1` 
     * @param {String} language Language code of text (ex: fr-FR (French), en-US (English), es-ES (Spanish))
     * @param {String} text Text to analyze
     * @param {String} providers Provider to compare (ex: [ 'amazon', 'microsoft', 'ibm','google'])
     * @param {module:edenai/api/TextApi~syntaxAnalysisCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:edenai/model/InlineResponse2008}
     */
    this.syntaxAnalysis = function(language, text, providers, callback) {
      var postBody = null;

      // verify the required parameter 'language' is set
      if (language === undefined || language === null) {
        throw new Error("Missing the required parameter 'language' when calling syntaxAnalysis");
      }

      // verify the required parameter 'text' is set
      if (text === undefined || text === null) {
        throw new Error("Missing the required parameter 'text' when calling syntaxAnalysis");
      }

      // verify the required parameter 'providers' is set
      if (providers === undefined || providers === null) {
        throw new Error("Missing the required parameter 'providers' when calling syntaxAnalysis");
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
        'language': language,
        'text': text,
        'providers': providers
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = InlineResponse2008;

      return this.apiClient.callApi(
        '/pretrained/text/syntax_analysis', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
