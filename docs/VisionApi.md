# Edenai.VisionApi

All URIs are relative to *https://api.edenai.run/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**explicitContentDetection**](VisionApi.md#explicitContentDetection) | **POST** /pretrained/vision/explicit_content_detection | 
[**faceDetection**](VisionApi.md#faceDetection) | **POST** /pretrained/vision/face_detection | 
[**objectDetection**](VisionApi.md#objectDetection) | **POST** /pretrained/vision/object_detection | 


<a name="explicitContentDetection"></a>
# **explicitContentDetection**
> InlineResponse20016 explicitContentDetection(files, providers)



Explicit Content Detection detects adult only content in videos, who is generally inappropriate for people under the age of 18 and includes nudity, sexual activity and pornography ...  **AVAILABLE PROVIDERS**   |Name|Value|Version| |----|-----|-------| |**Microsoft Azure**|`microsoft`| `v3.2`  |**Amazon Web Services**|`amazon`| `boto3 (v1.15.18)`  |**Google Cloud**|`google`| `v1` 

### Example
```javascript
var Edenai = require('Edenai');
var defaultClient = Edenai.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Edenai.VisionApi();

var files = "/path/to/file.txt"; // File | File Image to analyse (ex: pdf, jpg, jpeg, png, tiff)

var providers = "providers_example"; // String | Provider to compare (ex: [ 'amazon', 'microsoft', 'google'])


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.explicitContentDetection(files, providers, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **files** | **File**| File Image to analyse (ex: pdf, jpg, jpeg, png, tiff) | 
 **providers** | **String**| Provider to compare (ex: [ 'amazon', 'microsoft', 'google']) | 

### Return type

[**InlineResponse20016**](InlineResponse20016.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="faceDetection"></a>
# **faceDetection**
> InlineResponse20017 faceDetection(files, providers)



Face Detection is a computer technology being used in a variety of applicationsthat identifies human faces in digital images.  **AVAILABLE PROVIDERS**   |Name|Value|Version| |----|-----|-------| |**Microsoft Azure**|`microsoft`| `v3.2`  |**Google Cloud**|`google`| `v1` 

### Example
```javascript
var Edenai = require('Edenai');
var defaultClient = Edenai.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Edenai.VisionApi();

var files = "/path/to/file.txt"; // File | File Image to analyse (ex: pdf, jpg, jpeg, png, tiff)

var providers = "providers_example"; // String | Provider to compare (ex: [ 'amazon', 'microsoft','google'])


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.faceDetection(files, providers, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **files** | **File**| File Image to analyse (ex: pdf, jpg, jpeg, png, tiff) | 
 **providers** | **String**| Provider to compare (ex: [ 'amazon', 'microsoft','google']) | 

### Return type

[**InlineResponse20017**](InlineResponse20017.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="objectDetection"></a>
# **objectDetection**
> InlineResponse20018 objectDetection(files, providers)



Object Detection is a computer vision technique that allows us to identify and locate objects in an image or video  **AVAILABLE PROVIDERS**   |Name|Value|Version| |----|-----|-------| |**Microsoft Azure**|`microsoft`| `v3.2`  |**Amazon Web Services**|`amazon`| `boto3 (v1.15.18)`  |**Google Cloud**|`google`| `v1` 

### Example
```javascript
var Edenai = require('Edenai');
var defaultClient = Edenai.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Edenai.VisionApi();

var files = "/path/to/file.txt"; // File | File Image to analyse (ex: pdf, jpg, jpeg, png, tiff)

var providers = "providers_example"; // String | Provider to compare (ex: [ 'amazon', 'microsoft','google'])


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.objectDetection(files, providers, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **files** | **File**| File Image to analyse (ex: pdf, jpg, jpeg, png, tiff) | 
 **providers** | **String**| Provider to compare (ex: [ 'amazon', 'microsoft','google']) | 

### Return type

[**InlineResponse20018**](InlineResponse20018.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

