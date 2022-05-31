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
 * Swagger Codegen version: 2.4.27
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Edenai) {
      root.Edenai = {};
    }
    root.Edenai.AutoMLTextDataApi = factory(root.Edenai.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * AutoMLTextData service.
   * @module Edenai/AutoMLTextDataApi
   * @version v1
   */

  /**
   * Constructs a new AutoMLTextDataApi. 
   * @alias module:Edenai/AutoMLTextDataApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the automlTextDataDelete operation.
     * @callback module:Edenai/AutoMLTextDataApi~automlTextDataDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * AutoML Text Data Delete
     * @param {String} projectId 
     * @param {String} trainId 
     * @param {module:Edenai/AutoMLTextDataApi~automlTextDataDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.automlTextDataDelete = function(projectId, trainId, callback) {
      var postBody = null;

      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling automlTextDataDelete");
      }

      // verify the required parameter 'trainId' is set
      if (trainId === undefined || trainId === null) {
        throw new Error("Missing the required parameter 'trainId' when calling automlTextDataDelete");
      }


      var pathParams = {
        'project_id': projectId,
        'train_id': trainId
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
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/automl/text/project/{project_id}/train/{train_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the automlTextDataLaunchPrediction operation.
     * @callback module:Edenai/AutoMLTextDataApi~automlTextDataLaunchPredictionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     *   **SUPPORTED FILES**  The API takes a csv file with no header and only one column, where each line contains a document to classify.  
     * @param {String} projectId 
     * @param {String} trainId 
     * @param {File} files 
     * @param {module:Edenai/AutoMLTextDataApi~automlTextDataLaunchPredictionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.automlTextDataLaunchPrediction = function(projectId, trainId, files, callback) {
      var postBody = null;

      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling automlTextDataLaunchPrediction");
      }

      // verify the required parameter 'trainId' is set
      if (trainId === undefined || trainId === null) {
        throw new Error("Missing the required parameter 'trainId' when calling automlTextDataLaunchPrediction");
      }

      // verify the required parameter 'files' is set
      if (files === undefined || files === null) {
        throw new Error("Missing the required parameter 'files' when calling automlTextDataLaunchPrediction");
      }


      var pathParams = {
        'project_id': projectId,
        'train_id': trainId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'files': files
      };

      var authNames = ['Bearer'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/automl/text/project/{project_id}/train/{train_id}/prediction', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the automlTextDataPredictionDetail operation.
     * @callback module:Edenai/AutoMLTextDataApi~automlTextDataPredictionDetailCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     *   **SUPPORTED FILES**  The API takes a csv file with no header and only one column, where each line contains a document to classify.  
     * @param {String} predictId 
     * @param {String} projectId 
     * @param {String} trainId 
     * @param {module:Edenai/AutoMLTextDataApi~automlTextDataPredictionDetailCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.automlTextDataPredictionDetail = function(predictId, projectId, trainId, callback) {
      var postBody = null;

      // verify the required parameter 'predictId' is set
      if (predictId === undefined || predictId === null) {
        throw new Error("Missing the required parameter 'predictId' when calling automlTextDataPredictionDetail");
      }

      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling automlTextDataPredictionDetail");
      }

      // verify the required parameter 'trainId' is set
      if (trainId === undefined || trainId === null) {
        throw new Error("Missing the required parameter 'trainId' when calling automlTextDataPredictionDetail");
      }


      var pathParams = {
        'predict_id': predictId,
        'project_id': projectId,
        'train_id': trainId
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
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/automl/text/project/{project_id}/train/{train_id}/prediction/{predict_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the automlTextDataPredictionResults operation.
     * @callback module:Edenai/AutoMLTextDataApi~automlTextDataPredictionResultsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     *   **SUPPORTED FILES**  The API takes a csv file with no header and only one column, where each line contains a document to classify.  
     * @param {String} predictId 
     * @param {String} projectId 
     * @param {String} trainId 
     * @param {module:Edenai/AutoMLTextDataApi~automlTextDataPredictionResultsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.automlTextDataPredictionResults = function(predictId, projectId, trainId, callback) {
      var postBody = null;

      // verify the required parameter 'predictId' is set
      if (predictId === undefined || predictId === null) {
        throw new Error("Missing the required parameter 'predictId' when calling automlTextDataPredictionResults");
      }

      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling automlTextDataPredictionResults");
      }

      // verify the required parameter 'trainId' is set
      if (trainId === undefined || trainId === null) {
        throw new Error("Missing the required parameter 'trainId' when calling automlTextDataPredictionResults");
      }


      var pathParams = {
        'predict_id': predictId,
        'project_id': projectId,
        'train_id': trainId
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
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/automl/text/project/{project_id}/train/{train_id}/prediction/{predict_id}/results', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the automlTextDataTrain operation.
     * @callback module:Edenai/AutoMLTextDataApi~automlTextDataTrainCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     *   **AVAILABLE PROVIDERS**  |Name|Value| |-------------------------------|---------------| |[**Google Cloud Services**](https://www.edenai.co/catalog/google-cloud-natural-language)|`google`| |[**Amazon Web Services**](https://www.edenai.co/catalog/amazon-comprehend)|`amazon`|  
     * @param {String} projectId 
     * @param {String} provider 
     * @param {String} trainingName 
     * @param {module:Edenai/AutoMLTextDataApi~automlTextDataTrainCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.automlTextDataTrain = function(projectId, provider, trainingName, callback) {
      var postBody = null;

      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling automlTextDataTrain");
      }

      // verify the required parameter 'provider' is set
      if (provider === undefined || provider === null) {
        throw new Error("Missing the required parameter 'provider' when calling automlTextDataTrain");
      }

      // verify the required parameter 'trainingName' is set
      if (trainingName === undefined || trainingName === null) {
        throw new Error("Missing the required parameter 'trainingName' when calling automlTextDataTrain");
      }


      var pathParams = {
        'project_id': projectId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'provider': provider,
        'training_name': trainingName
      };

      var authNames = ['Bearer'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/automl/text/project/{project_id}/train', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the automlTextDataTrainDetail operation.
     * @callback module:Edenai/AutoMLTextDataApi~automlTextDataTrainDetailCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * AutoML Text Data Train Detail
     * @param {String} projectId 
     * @param {String} trainId 
     * @param {module:Edenai/AutoMLTextDataApi~automlTextDataTrainDetailCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.automlTextDataTrainDetail = function(projectId, trainId, callback) {
      var postBody = null;

      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling automlTextDataTrainDetail");
      }

      // verify the required parameter 'trainId' is set
      if (trainId === undefined || trainId === null) {
        throw new Error("Missing the required parameter 'trainId' when calling automlTextDataTrainDetail");
      }


      var pathParams = {
        'project_id': projectId,
        'train_id': trainId
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
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/automl/text/project/{project_id}/train/{train_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the automlTextProjectCreate operation.
     * @callback module:Edenai/AutoMLTextDataApi~automlTextProjectCreateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     *   **SUPPORTED FILES**  The API takes csv files separated using ','. The csv must contain a header and exactly two columns, named `docs` and `labels` In case a document might have several labels, please separate your labels using '|'     **SUPPORTED LANGUAGE**  |Name|Type|Value| |---------------------------|-------------------------------|---------------| | **English (US)**|*`string`*|`en`| | **French**      |*`string`*|`fr`| | **German**      |*`string`*|`de`| | **Italian**     |*`string`*|`it`| | **Portuguese**  |*`string`*|`pt`| | **Arabic**      |*`string`*|`ar`| | **Chinese-Simplified**|*`string`*|`zh`| | **Chinese-Traditional**|*`string`*|`zh-TW`| | **Korean**      |*`string`*|`ko`| | **Japanese**    |*`string`*|`ja`| | **Hindi**       |*`string`*|`hi`| | **Spanish**     |*`string`*|`es`|    **AVAILABLE CLASSIFICATION TYPES**  |Type|Value|Description| |---------------------------|-------------------------------|---------------| | **Single Label Classification**|`single_label_classification`|Each document belongs to one category (label)| | **Multi Label Classification**|`multi_label_classification`|Documents might have several labels|  
     * @param {String} projectName 
     * @param {String} projectDescription 
     * @param {File} files 
     * @param {String} type 
     * @param {String} language 
     * @param {module:Edenai/AutoMLTextDataApi~automlTextProjectCreateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.automlTextProjectCreate = function(projectName, projectDescription, files, type, language, callback) {
      var postBody = null;

      // verify the required parameter 'projectName' is set
      if (projectName === undefined || projectName === null) {
        throw new Error("Missing the required parameter 'projectName' when calling automlTextProjectCreate");
      }

      // verify the required parameter 'projectDescription' is set
      if (projectDescription === undefined || projectDescription === null) {
        throw new Error("Missing the required parameter 'projectDescription' when calling automlTextProjectCreate");
      }

      // verify the required parameter 'files' is set
      if (files === undefined || files === null) {
        throw new Error("Missing the required parameter 'files' when calling automlTextProjectCreate");
      }

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling automlTextProjectCreate");
      }

      // verify the required parameter 'language' is set
      if (language === undefined || language === null) {
        throw new Error("Missing the required parameter 'language' when calling automlTextProjectCreate");
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
        'project_name': projectName,
        'project_description': projectDescription,
        'files': files,
        'type': type,
        'language': language
      };

      var authNames = ['Bearer'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/automl/text/project', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the automlTextProjectDelete operation.
     * @callback module:Edenai/AutoMLTextDataApi~automlTextProjectDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * AutoML Text Project Delete
     * @param {String} projectId 
     * @param {module:Edenai/AutoMLTextDataApi~automlTextProjectDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.automlTextProjectDelete = function(projectId, callback) {
      var postBody = null;

      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling automlTextProjectDelete");
      }


      var pathParams = {
        'project_id': projectId
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
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/automl/text/project/{project_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the automlTextProjectDetail operation.
     * @callback module:Edenai/AutoMLTextDataApi~automlTextProjectDetailCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * AutoML Text Project Detail
     * @param {String} projectId 
     * @param {module:Edenai/AutoMLTextDataApi~automlTextProjectDetailCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.automlTextProjectDetail = function(projectId, callback) {
      var postBody = null;

      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling automlTextProjectDetail");
      }


      var pathParams = {
        'project_id': projectId
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
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/automl/text/project/{project_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the automlTextProjectList operation.
     * @callback module:Edenai/AutoMLTextDataApi~automlTextProjectListCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * AutoML Text Project List
     * @param {module:Edenai/AutoMLTextDataApi~automlTextProjectListCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.automlTextProjectList = function(callback) {
      var postBody = null;


      var pathParams = {
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
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/automl/text/project', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the automlTextProjectUpdate operation.
     * @callback module:Edenai/AutoMLTextDataApi~automlTextProjectUpdateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * AutoML Text Project Update
     * @param {String} projectId 
     * @param {String} projectName 
     * @param {String} projectDescription 
     * @param {String} type 
     * @param {String} language 
     * @param {module:Edenai/AutoMLTextDataApi~automlTextProjectUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.automlTextProjectUpdate = function(projectId, projectName, projectDescription, type, language, callback) {
      var postBody = null;

      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling automlTextProjectUpdate");
      }

      // verify the required parameter 'projectName' is set
      if (projectName === undefined || projectName === null) {
        throw new Error("Missing the required parameter 'projectName' when calling automlTextProjectUpdate");
      }

      // verify the required parameter 'projectDescription' is set
      if (projectDescription === undefined || projectDescription === null) {
        throw new Error("Missing the required parameter 'projectDescription' when calling automlTextProjectUpdate");
      }

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling automlTextProjectUpdate");
      }

      // verify the required parameter 'language' is set
      if (language === undefined || language === null) {
        throw new Error("Missing the required parameter 'language' when calling automlTextProjectUpdate");
      }


      var pathParams = {
        'project_id': projectId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'project_name': projectName,
        'project_description': projectDescription,
        'type': type,
        'language': language
      };

      var authNames = ['Bearer'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/automl/text/project/{project_id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
