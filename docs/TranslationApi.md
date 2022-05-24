# Edenai.TranslationApi

All URIs are relative to *https://api.edenai.run/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**automaticTranslation**](TranslationApi.md#automaticTranslation) | **POST** /pretrained/translation/automatic_translation | 
[**languageDetection**](TranslationApi.md#languageDetection) | **POST** /pretrained/translation/language_detection | 


<a name="automaticTranslation"></a>
# **automaticTranslation**
> InlineResponse20014 automaticTranslation(text, sourceLanguage, targetLanguage, providers)



Machine translation refers to the translation of a text into another language using rules, statics or ml technics.  **SUPPORTED LANGUAGE**  |Name|Type|Value| |----|----|-----| |**Italian**|`string`|`it-IT`| |**German**|`string`|`de-DE`| |**English (GB)**|`string`|`en-GB`| |**Dutch (Netherlands)**|`string`|`nl-NL`| |**Japanese**|`string`|`ja-JP`| |**Arabic (Saudi Arabia)**|`string`|`ar-SA`| |**French**|`string`|`fr-FR`| |**Korean**|`string`|`ko-KR`| |**Turkish**|`string`|`tr-TR`| |**Spanish**|`string`|`es-ES`| |**Portuguese (Portugal)**|`string`|`pt-PT`| |**Indonesian**|`string`|`id-ID`| |**English (US)**|`string`|`en-US`| |**Russian**|`string`|`ru-RU`| |**Portuguese (Brazil)**|`string`|`pt-BR`| |**Malay**|`string`|`ms-MY`|  **AVAILABLE PROVIDERS**   |Name|Value|Version| |----|-----|-------| |**Microsoft Azure**|`microsoft`| `v3.0`  |**Amazon Web Services**|`amazon`| `boto3 (v1.15.18)`  |**Google Cloud**|`google`| `v3` 

### Example
```javascript
var Edenai = require('Edenai');
var defaultClient = Edenai.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Edenai.TranslationApi();

var text = "text_example"; // String | Text to translate

var sourceLanguage = "sourceLanguage_example"; // String | Language code of text (ex: fr (French), en (English), es (Spanish))

var targetLanguage = "targetLanguage_example"; // String | Language code of text (ex: fr (French), en (English), es (Spanish))

var providers = "providers_example"; // String | Provider to compare (ex: [ 'amazon', 'microsoft', 'ibm', 'google'])


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.automaticTranslation(text, sourceLanguage, targetLanguage, providers, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | **String**| Text to translate | 
 **sourceLanguage** | **String**| Language code of text (ex: fr (French), en (English), es (Spanish)) | 
 **targetLanguage** | **String**| Language code of text (ex: fr (French), en (English), es (Spanish)) | 
 **providers** | **String**| Provider to compare (ex: [ 'amazon', 'microsoft', 'ibm', 'google']) | 

### Return type

[**InlineResponse20014**](InlineResponse20014.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

<a name="languageDetection"></a>
# **languageDetection**
> InlineResponse20015 languageDetection(text, providers)



Language Detection or language guessing is the algorithm of determining which natural language given content is in.  **AVAILABLE PROVIDERS**   |Name|Value|Version| |----|-----|-------| |**Microsoft Azure**|`microsoft`| `v3.1`  |**Amazon Web Services**|`amazon`| `boto3 (v1.15.18)`  |**IBM Watson**|`ibm`| `v1 (2021-08-01)`  |**Google Cloud**|`google`| `v1`  |**Lettria**|`lettria`| `v5.5.2` 

### Example
```javascript
var Edenai = require('Edenai');
var defaultClient = Edenai.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Edenai.TranslationApi();

var text = "text_example"; // String | Text to analyze

var providers = "providers_example"; // String | Provider to compare (ex: [ 'amazon', 'microsoft', 'ibm','google'])


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.languageDetection(text, providers, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | **String**| Text to analyze | 
 **providers** | **String**| Provider to compare (ex: [ 'amazon', 'microsoft', 'ibm','google']) | 

### Return type

[**InlineResponse20015**](InlineResponse20015.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

