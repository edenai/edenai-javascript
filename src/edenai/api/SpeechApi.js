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
    define(['edenai/ApiClient', 'edenai/model/InlineResponse2001', 'edenai/model/InlineResponse2002', 'edenai/model/InlineResponse201', 'edenai/model/InlineResponse2011'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse2001'), require('../model/InlineResponse2002'), require('../model/InlineResponse201'), require('../model/InlineResponse2011'));
  } else {
    // Browser globals (root is window)
    if (!root.EdenAiApiDocumentation) {
      root.EdenAiApiDocumentation = {};
    }
    root.EdenAiApiDocumentation.SpeechApi = factory(root.EdenAiApiDocumentation.ApiClient, root.EdenAiApiDocumentation.InlineResponse2001, root.EdenAiApiDocumentation.InlineResponse2002, root.EdenAiApiDocumentation.InlineResponse201, root.EdenAiApiDocumentation.InlineResponse2011);
  }
}(this, function(ApiClient, InlineResponse2001, InlineResponse2002, InlineResponse201, InlineResponse2011) {
  'use strict';

  /**
   * Speech service.
   * @module edenai/api/SpeechApi
   * @version v1
   */

  /**
   * Constructs a new SpeechApi. 
   * @alias module:edenai/api/SpeechApi
   * @class
   * @param {module:edenai/ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:edenai/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the asyncSpeechToText operation.
     * @callback module:edenai/api/SpeechApi~asyncSpeechToTextCallback
     * @param {String} error Error message, if any.
     * @param {module:edenai/model/InlineResponse2001} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Speech recognition is technology that can recognize spoken words, which can then be converted to text. This endpoint allows you to launch asynchronous speech recognition jobs.  **SUPPORTED LANGUAGE**  |Name|Type|Value| |----|----|-----| |**English (US)**|`string`|`en-US`| |**English (GB)**|`string`|`en-GB`| |**French**|`string`|`fr-FR`| |**Spanish**|`string`|`es-ES`| |**Dutch (Netherlands)**|`string`|`nl-NL`| |**Japanese**|`string`|`ja-JP`| |**Russian**|`string`|`ru-RU`| |**Arabic**|`string`|`ar-SA`| |**Italian**|`string`|`it-IT`| |**Korean**|`string`|`ko-KR`| |**Portuguese**|`string`|`pt-PT`| |**Turkish**|`string`|`tr-TR`| |**Indonesian**|`string`|`id-ID`| |**Malay**|`string`|`ms-MY`|  **AVAILABLE PROVIDERS**   |Name|Value|Version| |----|-----|-------| |**Amazon Web Services**|`amazon`| `boto3 (v1.15.18)`  |**Speechmatics**|`speechmatics`| `2.7.0` 
     * @param {String} language Language code expected (ex: fr-FR (French), en-US (English), es-ES (Spanish), nl-NL Dutch (Netherlands))
     * @param {File} files File to analyse (ex: mp3, wav, m4a)
     * @param {String} providers Provider to compare (ex: [ 'amazon', 'microsoft', 'ibm','google', 'threescribe])
     * @param {Object} opts Optional parameters
     * @param {String} opts.webhookReceiver Webhook reciever should be a valid https URL (ex : https://your.listner.com/endpoint)
     * @param {String} opts.usersWebhookParameters Json data that consist of additional parameters that will be sent back to the webhook receiver (ex: api key for security).                    **NOTE : The data will be returned back as a string that should be decoded into a json object!**
     * @param {String} opts.vocab Speechmatics allows to add a custom vocab dictionnary (json format) for better recognition, you can add it via this parameter.                     It has to be a list of dictionaries : {'content'(Required) : 'string', 'sounds_like'(Optional) : 'list of strings'}
     * @param {module:edenai/api/SpeechApi~asyncSpeechToTextCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:edenai/model/InlineResponse2001}
     */
    this.asyncSpeechToText = function(language, files, providers, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'language' is set
      if (language === undefined || language === null) {
        throw new Error("Missing the required parameter 'language' when calling asyncSpeechToText");
      }

      // verify the required parameter 'files' is set
      if (files === undefined || files === null) {
        throw new Error("Missing the required parameter 'files' when calling asyncSpeechToText");
      }

      // verify the required parameter 'providers' is set
      if (providers === undefined || providers === null) {
        throw new Error("Missing the required parameter 'providers' when calling asyncSpeechToText");
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
        'files': files,
        'providers': providers,
        'webhook_receiver': opts['webhookReceiver'],
        'users_webhook_parameters': opts['usersWebhookParameters'],
        'vocab': opts['vocab']
      };

      var authNames = ['Bearer'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = InlineResponse2001;

      return this.apiClient.callApi(
        '/pretrained/audio/speech_recognition_async', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the asyncSpeechToText_0 operation.
     * @callback module:edenai/api/SpeechApi~asyncSpeechToText_0Callback
     * @param {String} error Error message, if any.
     * @param {module:edenai/model/InlineResponse2002} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This endpoint allows you to check the state of  your asynchronous speech recognition job and returns the results if they are ready.
     * @param {String} jobId 
     * @param {module:edenai/api/SpeechApi~asyncSpeechToText_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:edenai/model/InlineResponse2002}
     */
    this.asyncSpeechToText_0 = function(jobId, callback) {
      var postBody = null;

      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling asyncSpeechToText_0");
      }


      var pathParams = {
        'job_id': jobId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse2002;

      return this.apiClient.callApi(
        '/pretrained/audio/speech_recognition_async/{job_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the speechToText operation.
     * @callback module:edenai/api/SpeechApi~speechToTextCallback
     * @param {String} error Error message, if any.
     * @param {module:edenai/model/InlineResponse201} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Speech recognition is technology that can recognize spoken words, which can then be converted to text.  **SUPPORTED LANGUAGE**  |Name|Type|Value| |----|----|-----| |**English (US)**|`string`|`en-US`| |**English (GB)**|`string`|`en-GB`| |**French**|`string`|`fr-FR`| |**Spanish**|`string`|`es-ES`| |**Dutch (Netherlands)**|`string`|`nl-NL`| |**Japanese**|`string`|`ja-JP`| |**Russian**|`string`|`ru-RU`| |**Arabic**|`string`|`ar-SA`| |**Italian**|`string`|`it-IT`| |**Korean**|`string`|`ko-KR`| |**Portuguese**|`string`|`pt-PT`| |**Turkish**|`string`|`tr-TR`| |**Indonesian**|`string`|`id-ID`| |**Malay**|`string`|`ms-MY`|  **AVAILABLE PROVIDERS**   |Name|Value|Version| |----|-----|-------| |**Microsoft Azure**|`microsoft`| `v1.0`  |**Amazon Web Services**|`amazon`| `boto3 (v1.15.18)`  |**Google Cloud**|`google`| `v1p1beta1`  |**Deepgram**|`deepgram`| `v1`  |**RevAi**|`revai`| `v1` 
     * @param {String} language Language code expected (ex: fr-FR (French), en-US (English), es-ES (Spanish), nl-NL Dutch (Netherlands))
     * @param {File} files File to analyse (ex: mp3, wav, m4a)
     * @param {String} providers Provider to compare (ex: [ 'amazon', 'microsoft', 'ibm','google', 'threescribe])
     * @param {Object} opts Optional parameters
     * @param {String} opts.vocab Speechmatics allows to add a custom vocab dictionnary (json format) for better recognition, you can add it via this parameter.                     It has to be a list of dictionaries : {'content'(Required) : 'string', 'sounds_like'(Optional) : 'list of strings'}
     * @param {module:edenai/api/SpeechApi~speechToTextCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:edenai/model/InlineResponse201}
     */
    this.speechToText = function(language, files, providers, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'language' is set
      if (language === undefined || language === null) {
        throw new Error("Missing the required parameter 'language' when calling speechToText");
      }

      // verify the required parameter 'files' is set
      if (files === undefined || files === null) {
        throw new Error("Missing the required parameter 'files' when calling speechToText");
      }

      // verify the required parameter 'providers' is set
      if (providers === undefined || providers === null) {
        throw new Error("Missing the required parameter 'providers' when calling speechToText");
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
        'files': files,
        'providers': providers,
        'vocab': opts['vocab']
      };

      var authNames = ['Bearer'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = InlineResponse201;

      return this.apiClient.callApi(
        '/pretrained/audio/speech_to_text', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the textToSpeech operation.
     * @callback module:edenai/api/SpeechApi~textToSpeechCallback
     * @param {String} error Error message, if any.
     * @param {module:edenai/model/InlineResponse2011} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Text-to-speech (TTS) system converts normal language text into speech.  **SUPPORTED LANGUAGE**  |Name|Type|Value| |----|----|-----| |**Arabic**|`string`|`ar-XA`| |**Chinese**|`string`|`cmn-CN`| |**Danish**|`string`|`da-DK`| |**Dutch**|`string`|`nl-NL`| |**English (US)**|`string`|`en-US`| |**English (UK)**|`string`|`en-GB`| |**German**|`string`|`de-DE`| |**Italy**|`string`|`it-IT`| |**Japanese**|`string`|`ja-JP`| |**Portuguese (Brazil)**|`string`|`pt-BR`| |**Portuguese (Portugal)**|`string`|`pt-PT`| |**Russian**|`string`|`ru-RU`| |**Spanish**|`string`|`es-ES`|  **AVAILABLE PROVIDERS**   |Name|Value|Version| |----|-----|-------| |**Microsoft Azure**|`microsoft`| `v1.0`  |**Amazon Web Services**|`amazon`| `boto3 (v1.15.18)`  |**Google Cloud**|`google`| `v1` 
     * @param {String} text Text to transform
     * @param {String} language Language code expected (ex: fr-FR (French), en-US (English), es-ES (Spanish))
     * @param {String} option Voice gender selected (ex: FEMALE ou MALE)
     * @param {String} providers Provider to compare (ex: [ 'amazon', 'microsoft', 'ibm','google'])
     * @param {module:edenai/api/SpeechApi~textToSpeechCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:edenai/model/InlineResponse2011}
     */
    this.textToSpeech = function(text, language, option, providers, callback) {
      var postBody = null;

      // verify the required parameter 'text' is set
      if (text === undefined || text === null) {
        throw new Error("Missing the required parameter 'text' when calling textToSpeech");
      }

      // verify the required parameter 'language' is set
      if (language === undefined || language === null) {
        throw new Error("Missing the required parameter 'language' when calling textToSpeech");
      }

      // verify the required parameter 'option' is set
      if (option === undefined || option === null) {
        throw new Error("Missing the required parameter 'option' when calling textToSpeech");
      }

      // verify the required parameter 'providers' is set
      if (providers === undefined || providers === null) {
        throw new Error("Missing the required parameter 'providers' when calling textToSpeech");
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
        'language': language,
        'option': option,
        'providers': providers
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = InlineResponse2011;

      return this.apiClient.callApi(
        '/pretrained/audio/text_to_speech', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
