# Edenai.OCRApi

All URIs are relative to *https://api.edenai.run/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**asyncOcrTablesJobIds**](OCRApi.md#asyncOcrTablesJobIds) | **GET** /pretrained/async/ocr/tables/get_jobs | 
[**asyncOcrTablesLaunch**](OCRApi.md#asyncOcrTablesLaunch) | **POST** /pretrained/async/ocr/tables/launch_job | 
[**asyncOcrTablesResults**](OCRApi.md#asyncOcrTablesResults) | **GET** /pretrained/async/ocr/tables/get_results/{public_id} | 
[**ocr**](OCRApi.md#ocr) | **POST** /pretrained/ocr/ocr | 
[**ocrInvoice**](OCRApi.md#ocrInvoice) | **POST** /pretrained/ocr/ocr_invoice | 
[**ocrTables**](OCRApi.md#ocrTables) | **POST** /pretrained/ocr/ocr_tables | 


<a name="asyncOcrTablesJobIds"></a>
# **asyncOcrTablesJobIds**
> InlineResponse2001 asyncOcrTablesJobIds()



Get all past jobs ids

### Example
```javascript
var Edenai = require('Edenai');
var defaultClient = Edenai.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Edenai.OCRApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.asyncOcrTablesJobIds(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="asyncOcrTablesLaunch"></a>
# **asyncOcrTablesLaunch**
> InlineResponse204 asyncOcrTablesLaunch(language, files, providers, opts)



The Async OCR Table API allows customers to analyze multi-page documents containing tables and return structured representation of said tables in the form of a Json object  **SUPPORTED LANGUAGE**  |Name|Type|Value| |----|----|-----| |**German**|`string`|`de-DE`| |**Spanish**|`string`|`es-ES`| |**French**|`string`|`fr-FR`| |**Portuguese (Portugal)**|`string`|`pt-PT`| |**English (US)**|`string`|`en-US`| |**Italian**|`string`|`it-IT`|  **AVAILABLE PROVIDERS**   |Name|Value|Version| |----|-----|-------| |**Google Cloud**|`google`| `DocumentAI v1 beta3`  |**Microsoft Azure**|`microsoft`| `rest API 3.0`  |**Amazon Web Services**|`amazon`| `boto3 (v1.15.18)` 

### Example
```javascript
var Edenai = require('Edenai');
var defaultClient = Edenai.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Edenai.OCRApi();

var language = "language_example"; // String | Language code expected (ex: fr-FR (French), en-US (English), es-ES (Spanish), nl-NL Dutch (Netherlands))

var files = "/path/to/file.txt"; // File | File to analyse

var providers = "providers_example"; // String | Provider to compare (ex: [ 'amazon', 'google'])

var opts = { 
  'webhookReceiver': "webhookReceiver_example", // String | Webhook receiver should be a valid https URL (ex : https://your.listner.com/endpoint)
  'usersWebhookParameters': "usersWebhookParameters_example", // String | Json data that consist of additional parameters that will be sent back to the webhook receiver (ex: api key for security).
  'showOriginalResponses': false // Boolean | Weither or not to show the provider original response
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.asyncOcrTablesLaunch(language, files, providers, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **language** | **String**| Language code expected (ex: fr-FR (French), en-US (English), es-ES (Spanish), nl-NL Dutch (Netherlands)) | 
 **files** | **File**| File to analyse | 
 **providers** | **String**| Provider to compare (ex: [ 'amazon', 'google']) | 
 **webhookReceiver** | **String**| Webhook receiver should be a valid https URL (ex : https://your.listner.com/endpoint) | [optional] 
 **usersWebhookParameters** | **String**| Json data that consist of additional parameters that will be sent back to the webhook receiver (ex: api key for security). | [optional] 
 **showOriginalResponses** | **Boolean**| Weither or not to show the provider original response | [optional] [default to false]

### Return type

[**InlineResponse204**](InlineResponse204.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="asyncOcrTablesResults"></a>
# **asyncOcrTablesResults**
> InlineResponse2002 asyncOcrTablesResults(publicId)



Get the status, or result of your async job

### Example
```javascript
var Edenai = require('Edenai');
var defaultClient = Edenai.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Edenai.OCRApi();

var publicId = "publicId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.asyncOcrTablesResults(publicId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **publicId** | **String**|  | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="ocr"></a>
# **ocr**
> InlineResponse2005 ocr(files, providers, language)



Optical Character Recognition or optical character reader (OCR) is the electronic or mechanical conversion of images of typed, handwritten or printed text into machine-encoded text, whether from a scanned document, a photo of a document  **SUPPORTED LANGUAGE**  |Name|Type|Value| |----|----|-----| |**Swedish**|`string`|`sw-SW`| |**Dutch (Netherlands)**|`string`|`nl-NL`| |**Greek**|`string`|`gr-GR`| |**Portuguese (Portugal)**|`string`|`pt-PT`| |**Japanese**|`string`|`ja-JP`| |**Polish**|`string`|`pl-PO`| |**Hungarian**|`string`|`hu-HU`| |**Arabic**|`string`|`ar-XA`| |**Finnish**|`string`|`fn-FN`| |**Czech**|`string`|`cz-CZ`| |**Korean**|`string`|`ko-KR`| |**Russian**|`string`|`ru-RU`| |**Danish**|`string`|`da-DK`| |**Chinese-Simplified**|`string`|`zh-CN`| |**French**|`string`|`fr-FR`| |**Turkish**|`string`|`tr-TR`| |**Chinese-Traditional**|`string`|`zh-TW`| |**German**|`string`|`de-DE`| |**Spanish**|`string`|`es-ES`| |**English (US)**|`string`|`en-US`| |**Italian**|`string`|`it-IT`|  **AVAILABLE PROVIDERS**   |Name|Value|Version| |----|-----|-------| |**Google Cloud**|`google`| `v1`  |**Microsoft Azure**|`microsoft`| `v3.2`  |**Amazon Web Services**|`amazon`| `boto3 (v1.15.18)`  |**Tesseract**|`tesseract`| `latest` 

### Example
```javascript
var Edenai = require('Edenai');
var defaultClient = Edenai.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Edenai.OCRApi();

var files = "/path/to/file.txt"; // File | File to analyse (ex: pdf, jpg, jpeg, png, tiff)

var providers = "providers_example"; // String | Providers to compare (ex: [ 'amazon', 'microsoft', 'ibm', 'google'])

var language = "language_example"; // String | Language code expected (ex: fr-FR)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ocr(files, providers, language, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **files** | **File**| File to analyse (ex: pdf, jpg, jpeg, png, tiff) | 
 **providers** | **String**| Providers to compare (ex: [ 'amazon', 'microsoft', 'ibm', 'google']) | 
 **language** | **String**| Language code expected (ex: fr-FR) | 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="ocrInvoice"></a>
# **ocrInvoice**
> InlineResponse2006 ocrInvoice(files, providers, language)



The OCR Invoice API enables customers to take invoices in a variety of formats and return structured data to automate the invoice processing.  **SUPPORTED LANGUAGE**  |Name|Type|Value| |----|----|-----| |**German**|`string`|`de-DE`| |**Danish**|`string`|`da-DK`| |**Spanish**|`string`|`es-ES`| |**French**|`string`|`fr-FR`| |**Portuguese (Portugal)**|`string`|`pt-PT`| |**English (US)**|`string`|`en-US`| |**Italian**|`string`|`it-IT`|  **AVAILABLE PROVIDERS**   |Name|Value|Version| |----|-----|-------| |**Mindee**|`mindee`| `v2`  |**Dataleon**|`dataleon`| `v3.1.0` 

### Example
```javascript
var Edenai = require('Edenai');
var defaultClient = Edenai.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Edenai.OCRApi();

var files = "/path/to/file.txt"; // File | File Image to analyse (ex: pdf, jpg, jpeg, png)

var providers = "providers_example"; // String | Provider to compare (ex: [ 'mindee', 'microsoft'])

var language = "language_example"; // String | Language code of invoice (ex: fr-FR (French), en-US (English), es-ES (Spanish))


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ocrInvoice(files, providers, language, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **files** | **File**| File Image to analyse (ex: pdf, jpg, jpeg, png) | 
 **providers** | **String**| Provider to compare (ex: [ 'mindee', 'microsoft']) | 
 **language** | **String**| Language code of invoice (ex: fr-FR (French), en-US (English), es-ES (Spanish)) | 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="ocrTables"></a>
# **ocrTables**
> InlineResponse2006 ocrTables(files, providers, language)



The OCR Table API allows customers to analyze documents containing tables and return structured representation of said tables in the form of a Json object  **SUPPORTED LANGUAGE**  |Name|Type|Value| |----|----|-----| |**German**|`string`|`de-DE`| |**Spanish**|`string`|`es-ES`| |**French**|`string`|`fr-FR`| |**Portuguese (Portugal)**|`string`|`pt-PT`| |**English (US)**|`string`|`en-US`| |**Italian**|`string`|`it-IT`|  **AVAILABLE PROVIDERS**   |Name|Value|Version| |----|-----|-------| |**Google Cloud**|`google`| `DocumentAI v1 beta3`  |**Microsoft Azure**|`microsoft`| `rest API 3.0`  |**Amazon Web Services**|`amazon`| `boto3 (v1.15.18)` 

### Example
```javascript
var Edenai = require('Edenai');
var defaultClient = Edenai.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Edenai.OCRApi();

var files = "/path/to/file.txt"; // File | File to analyse (ex: pdf, jpg, jpeg, png, tiff)

var providers = "providers_example"; // String | Providers to compare (ex: [ 'amazon', 'microsoft', 'google'])

var language = "language_example"; // String | Language code expected (ex: fr-FR)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ocrTables(files, providers, language, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **files** | **File**| File to analyse (ex: pdf, jpg, jpeg, png, tiff) | 
 **providers** | **String**| Providers to compare (ex: [ 'amazon', 'microsoft', 'google']) | 
 **language** | **String**| Language code expected (ex: fr-FR) | 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

