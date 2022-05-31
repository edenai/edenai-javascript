# Edenai.PretrainedApi

All URIs are relative to *https://api.edenai.run/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pretrainedAsyncOcrTablesWebhookCreate**](PretrainedApi.md#pretrainedAsyncOcrTablesWebhookCreate) | **POST** /pretrained/async/ocr/tables/webhook/{provider} | 
[**pretrainedAudioSpeechRecognitionAsyncList**](PretrainedApi.md#pretrainedAudioSpeechRecognitionAsyncList) | **GET** /pretrained/audio/speech_recognition_async | 


<a name="pretrainedAsyncOcrTablesWebhookCreate"></a>
# **pretrainedAsyncOcrTablesWebhookCreate**
> pretrainedAsyncOcrTablesWebhookCreate(provider)





### Example
```javascript
var Edenai = require('Edenai');
var defaultClient = Edenai.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Edenai.PretrainedApi();

var provider = "provider_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.pretrainedAsyncOcrTablesWebhookCreate(provider, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **provider** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: text/plain; charset=UTF-8
 - **Accept**: application/json

<a name="pretrainedAudioSpeechRecognitionAsyncList"></a>
# **pretrainedAudioSpeechRecognitionAsyncList**
> pretrainedAudioSpeechRecognitionAsyncList()





### Example
```javascript
var Edenai = require('Edenai');
var defaultClient = Edenai.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Edenai.PretrainedApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.pretrainedAudioSpeechRecognitionAsyncList(callback);
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

