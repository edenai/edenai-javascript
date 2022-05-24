# Edenai.EdenAIToolsApi

All URIs are relative to *https://api.edenai.run/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**search**](EdenAIToolsApi.md#search) | **POST** /tools/search | 


<a name="search"></a>
# **search**
> InlineResponse20019 search(text, words)



This is an easy tool to lookup for a list of words in a given text

### Example
```javascript
var Edenai = require('Edenai');
var defaultClient = Edenai.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Edenai.EdenAIToolsApi();

var text = "text_example"; // String | Text to analyze

var words = "words_example"; // String | (ex: [ 'Happy', 'New', 'Year'])


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.search(text, words, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | **String**| Text to analyze | 
 **words** | **String**| (ex: [ 'Happy', 'New', 'Year']) | 

### Return type

[**InlineResponse20019**](InlineResponse20019.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

