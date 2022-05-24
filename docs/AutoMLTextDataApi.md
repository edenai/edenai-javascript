# Edenai.AutoMLTextDataApi

All URIs are relative to *https://api.edenai.run/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**automlTextDataDelete**](AutoMLTextDataApi.md#automlTextDataDelete) | **DELETE** /automl/text/project/{project_id}/train/{train_id} | 
[**automlTextDataLaunchPrediction**](AutoMLTextDataApi.md#automlTextDataLaunchPrediction) | **POST** /automl/text/project/{project_id}/train/{train_id}/prediction | 
[**automlTextDataPredictionDetail**](AutoMLTextDataApi.md#automlTextDataPredictionDetail) | **GET** /automl/text/project/{project_id}/train/{train_id}/prediction/{predict_id} | 
[**automlTextDataPredictionResults**](AutoMLTextDataApi.md#automlTextDataPredictionResults) | **GET** /automl/text/project/{project_id}/train/{train_id}/prediction/{predict_id}/results | 
[**automlTextDataTrain**](AutoMLTextDataApi.md#automlTextDataTrain) | **POST** /automl/text/project/{project_id}/train | 
[**automlTextDataTrainDetail**](AutoMLTextDataApi.md#automlTextDataTrainDetail) | **GET** /automl/text/project/{project_id}/train/{train_id} | 
[**automlTextProjectCreate**](AutoMLTextDataApi.md#automlTextProjectCreate) | **POST** /automl/text/project | 
[**automlTextProjectDelete**](AutoMLTextDataApi.md#automlTextProjectDelete) | **DELETE** /automl/text/project/{project_id} | 
[**automlTextProjectDetail**](AutoMLTextDataApi.md#automlTextProjectDetail) | **GET** /automl/text/project/{project_id} | 
[**automlTextProjectList**](AutoMLTextDataApi.md#automlTextProjectList) | **GET** /automl/text/project | 
[**automlTextProjectUpdate**](AutoMLTextDataApi.md#automlTextProjectUpdate) | **PUT** /automl/text/project/{project_id} | 


<a name="automlTextDataDelete"></a>
# **automlTextDataDelete**
> automlTextDataDelete(projectId, trainId)



AutoML Text Data Delete

### Example
```javascript
var Edenai = require('Edenai');
var defaultClient = Edenai.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Edenai.AutoMLTextDataApi();

var projectId = "projectId_example"; // String | 

var trainId = "trainId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.automlTextDataDelete(projectId, trainId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **trainId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="automlTextDataLaunchPrediction"></a>
# **automlTextDataLaunchPrediction**
> automlTextDataLaunchPrediction(projectId, trainId, files)



  **SUPPORTED FILES**  The API takes a csv file with no header and only one column, where each line contains a document to classify.  

### Example
```javascript
var Edenai = require('Edenai');
var defaultClient = Edenai.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Edenai.AutoMLTextDataApi();

var projectId = "projectId_example"; // String | 

var trainId = "trainId_example"; // String | 

var files = "/path/to/file.txt"; // File | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.automlTextDataLaunchPrediction(projectId, trainId, files, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **trainId** | **String**|  | 
 **files** | **File**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="automlTextDataPredictionDetail"></a>
# **automlTextDataPredictionDetail**
> automlTextDataPredictionDetail(predictId, projectId, trainId)



  **SUPPORTED FILES**  The API takes a csv file with no header and only one column, where each line contains a document to classify.  

### Example
```javascript
var Edenai = require('Edenai');
var defaultClient = Edenai.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Edenai.AutoMLTextDataApi();

var predictId = "predictId_example"; // String | 

var projectId = "projectId_example"; // String | 

var trainId = "trainId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.automlTextDataPredictionDetail(predictId, projectId, trainId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **predictId** | **String**|  | 
 **projectId** | **String**|  | 
 **trainId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="automlTextDataPredictionResults"></a>
# **automlTextDataPredictionResults**
> automlTextDataPredictionResults(predictId, projectId, trainId)



  **SUPPORTED FILES**  The API takes a csv file with no header and only one column, where each line contains a document to classify.  

### Example
```javascript
var Edenai = require('Edenai');
var defaultClient = Edenai.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Edenai.AutoMLTextDataApi();

var predictId = "predictId_example"; // String | 

var projectId = "projectId_example"; // String | 

var trainId = "trainId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.automlTextDataPredictionResults(predictId, projectId, trainId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **predictId** | **String**|  | 
 **projectId** | **String**|  | 
 **trainId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="automlTextDataTrain"></a>
# **automlTextDataTrain**
> automlTextDataTrain(projectId, provider, trainingName)



  **AVAILABLE PROVIDERS**  |Name|Value| |-------------------------------|---------------| |[**Google Cloud Services**](https://www.edenai.co/catalog/google-cloud-natural-language)|`google`| |[**Amazon Web Services**](https://www.edenai.co/catalog/amazon-comprehend)|`amazon`|  

### Example
```javascript
var Edenai = require('Edenai');
var defaultClient = Edenai.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Edenai.AutoMLTextDataApi();

var projectId = "projectId_example"; // String | 

var provider = "provider_example"; // String | 

var trainingName = "trainingName_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.automlTextDataTrain(projectId, provider, trainingName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **provider** | **String**|  | 
 **trainingName** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="automlTextDataTrainDetail"></a>
# **automlTextDataTrainDetail**
> automlTextDataTrainDetail(projectId, trainId)



AutoML Text Data Train Detail

### Example
```javascript
var Edenai = require('Edenai');
var defaultClient = Edenai.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Edenai.AutoMLTextDataApi();

var projectId = "projectId_example"; // String | 

var trainId = "trainId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.automlTextDataTrainDetail(projectId, trainId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **trainId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="automlTextProjectCreate"></a>
# **automlTextProjectCreate**
> automlTextProjectCreate(projectName, projectDescription, files, type, language)



  **SUPPORTED FILES**  The API takes csv files separated using ','. The csv must contain a header and exactly two columns, named `docs` and `labels` In case a document might have several labels, please separate your labels using '|'     **SUPPORTED LANGUAGE**  |Name|Type|Value| |---------------------------|-------------------------------|---------------| | **English (US)**|*`string`*|`en`| | **French**      |*`string`*|`fr`| | **German**      |*`string`*|`de`| | **Italian**     |*`string`*|`it`| | **Portuguese**  |*`string`*|`pt`| | **Arabic**      |*`string`*|`ar`| | **Chinese-Simplified**|*`string`*|`zh`| | **Chinese-Traditional**|*`string`*|`zh-TW`| | **Korean**      |*`string`*|`ko`| | **Japanese**    |*`string`*|`ja`| | **Hindi**       |*`string`*|`hi`| | **Spanish**     |*`string`*|`es`|    **AVAILABLE CLASSIFICATION TYPES**  |Type|Value|Description| |---------------------------|-------------------------------|---------------| | **Single Label Classification**|`single_label_classification`|Each document belongs to one category (label)| | **Multi Label Classification**|`multi_label_classification`|Documents might have several labels|  

### Example
```javascript
var Edenai = require('Edenai');
var defaultClient = Edenai.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Edenai.AutoMLTextDataApi();

var projectName = "projectName_example"; // String | 

var projectDescription = "projectDescription_example"; // String | 

var files = "/path/to/file.txt"; // File | 

var type = "type_example"; // String | 

var language = "language_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.automlTextProjectCreate(projectName, projectDescription, files, type, language, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectName** | **String**|  | 
 **projectDescription** | **String**|  | 
 **files** | **File**|  | 
 **type** | **String**|  | 
 **language** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="automlTextProjectDelete"></a>
# **automlTextProjectDelete**
> automlTextProjectDelete(projectId)



AutoML Text Project Delete

### Example
```javascript
var Edenai = require('Edenai');
var defaultClient = Edenai.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Edenai.AutoMLTextDataApi();

var projectId = "projectId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.automlTextProjectDelete(projectId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="automlTextProjectDetail"></a>
# **automlTextProjectDetail**
> automlTextProjectDetail(projectId)



AutoML Text Project Detail

### Example
```javascript
var Edenai = require('Edenai');
var defaultClient = Edenai.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Edenai.AutoMLTextDataApi();

var projectId = "projectId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.automlTextProjectDetail(projectId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="automlTextProjectList"></a>
# **automlTextProjectList**
> automlTextProjectList()



AutoML Text Project List

### Example
```javascript
var Edenai = require('Edenai');
var defaultClient = Edenai.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Edenai.AutoMLTextDataApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.automlTextProjectList(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="automlTextProjectUpdate"></a>
# **automlTextProjectUpdate**
> automlTextProjectUpdate(projectIdprojectName, projectDescription, type, language)



AutoML Text Project Update

### Example
```javascript
var Edenai = require('Edenai');
var defaultClient = Edenai.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Edenai.AutoMLTextDataApi();

var projectId = "projectId_example"; // String | 

var projectName = "projectName_example"; // String | 

var projectDescription = "projectDescription_example"; // String | 

var type = "type_example"; // String | 

var language = "language_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.automlTextProjectUpdate(projectIdprojectName, projectDescription, type, language, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **projectName** | **String**|  | 
 **projectDescription** | **String**|  | 
 **type** | **String**|  | 
 **language** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

