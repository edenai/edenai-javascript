# Edenai.TextApi

All URIs are relative to *https://api.edenai.run/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**keywordExtraction**](TextApi.md#keywordExtraction) | **POST** /pretrained/text/keyword_extraction | 
[**namedEntityRecognition**](TextApi.md#namedEntityRecognition) | **POST** /pretrained/text/named_entity_recognition | 
[**questionAnswering**](TextApi.md#questionAnswering) | **POST** /pretrained/text/qestion-answer | 
[**search**](TextApi.md#search) | **POST** /pretrained/text/search | 
[**sentimentAnalysis**](TextApi.md#sentimentAnalysis) | **POST** /pretrained/text/sentiment_analysis | 
[**syntaxAnalysis**](TextApi.md#syntaxAnalysis) | **POST** /pretrained/text/syntax_analysis | 
[**textSummarization**](TextApi.md#textSummarization) | **POST** /pretrained/text/text_summarization | 


<a name="keywordExtraction"></a>
# **keywordExtraction**
> InlineResponse2007 keywordExtraction(language, text, providers)



Keyword extraction (also known as keyword detection or keyword analysis) is a text analysis technique that consists of automatically extracting the mostimportant words and expressions in a text.  **SUPPORTED LANGUAGE**  |Name|Type|Value| |----|----|-----| |**Swedish**|`string`|`sw-SW`| |**German**|`string`|`de-DE`| |**Spanish**|`string`|`es-ES`| |**French**|`string`|`fr-FR`| |**Portuguese (Portugal)**|`string`|`pt-PT`| |**English (US)**|`string`|`en-US`| |**Finnish**|`string`|`fn-FN`| |**Italian**|`string`|`it-IT`|  **AVAILABLE PROVIDERS**   |Name|Value|Version| |----|-----|-------| |**Microsoft Azure**|`microsoft`| `v3.1`  |**Amazon Web Services**|`amazon`| `boto3 (v1.15.18)`  |**IBM Watson**|`ibm`| `v1 (2021-08-01)`  |**Lettria**|`lettria`| `v5.5.2` 

### Example
```javascript
var Edenai = require('Edenai');
var defaultClient = Edenai.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Edenai.TextApi();

var language = "language_example"; // String | Language code of text (ex: fr-FR (French), en-US (English), es-ES (Spanish))

var text = "text_example"; // String | Text to analyze

var providers = "providers_example"; // String | Provider to compare (ex: [ 'amazon', 'microsoft', 'ibm'])


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.keywordExtraction(language, text, providers, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **language** | **String**| Language code of text (ex: fr-FR (French), en-US (English), es-ES (Spanish)) | 
 **text** | **String**| Text to analyze | 
 **providers** | **String**| Provider to compare (ex: [ 'amazon', 'microsoft', 'ibm']) | 

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

<a name="namedEntityRecognition"></a>
# **namedEntityRecognition**
> InlineResponse2008 namedEntityRecognition(language, text, providers)



Named Entity Recognition (also called entity identification or entity extraction) is an information extraction technique that automatically identifies named entities in a text and classifies them into predefined categories.  **SUPPORTED LANGUAGE**  |Name|Type|Value| |----|----|-----| |**Chinese-Traditional**|`string`|`zh-TW`| |**Swedish**|`string`|`sw-SW`| |**German**|`string`|`de-DE`| |**Dutch (Netherlands)**|`string`|`nl-NL`| |**Spanish**|`string`|`es-ES`| |**French**|`string`|`fr-FR`| |**Chinese-Simplified**|`string`|`zh-CN`| |**Portuguese (Portugal)**|`string`|`pt-PT`| |**English (US)**|`string`|`en-US`| |**Japanese**|`string`|`ja-JP`| |**Finnish**|`string`|`fn-FN`| |**Arabic**|`string`|`ar-XA`| |**Italian**|`string`|`it-IT`| |**Korean**|`string`|`ko-KR`|  **AVAILABLE PROVIDERS**   |Name|Value|Version| |----|-----|-------| |**Amazon Web Services**|`amazon`| `boto3 (v1.15.18)`  |**IBM Watson**|`ibm`| `v1 (2021-08-01)`  |**Google Cloud**|`google`| `v1`  |**Lettria**|`lettria`| `v5.5.2` 

### Example
```javascript
var Edenai = require('Edenai');
var defaultClient = Edenai.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Edenai.TextApi();

var language = "language_example"; // String | Language code of text (ex: fr-FR (French), en-US (English), es-ES (Spanish))

var text = "text_example"; // String | Text to analyze

var providers = "providers_example"; // String | Provider to compare (ex: [ 'amazon', 'microsoft', 'ibm','google'])


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.namedEntityRecognition(language, text, providers, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **language** | **String**| Language code of text (ex: fr-FR (French), en-US (English), es-ES (Spanish)) | 
 **text** | **String**| Text to analyze | 
 **providers** | **String**| Provider to compare (ex: [ 'amazon', 'microsoft', 'ibm','google']) | 

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

<a name="questionAnswering"></a>
# **questionAnswering**
> InlineResponse2009 questionAnswering(texts, question, providers, examplesContext, examples, opts)



Given a question, a set of documents, and some examples, the API generates an answer to the question based on the information in the set of documents.  **AVAILABLE PROVIDERS**   |Name|Value|Version| |----|-----|-------| |**OpenAI Davinci**|`openai_davinci`| `v1`  |**OpenAI Ada**|`openai_ada`| `v1` 

### Example
```javascript
var Edenai = require('Edenai');
var defaultClient = Edenai.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Edenai.TextApi();

var texts = "texts_example"; // String | List of texts to analyze

var question = "question_example"; // String | Question about the text content

var providers = "providers_example"; // String | Providers to compare (ex: ['openai'])

var examplesContext = "examplesContext_example"; // String | example text serving as context

var examples = "examples_example"; // String | List of question/answer pairs (ex: [['When was Barack Obama elected president?', 'in 2009.'],])

var opts = { 
  'temperature': 0.0 // Number | Higher values mean the model will take more risks and value 0 (argmax sampling) works better for scenarios with a well-defined answer.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.questionAnswering(texts, question, providers, examplesContext, examples, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **texts** | **String**| List of texts to analyze | 
 **question** | **String**| Question about the text content | 
 **providers** | **String**| Providers to compare (ex: ['openai']) | 
 **examplesContext** | **String**| example text serving as context | 
 **examples** | **String**| List of question/answer pairs (ex: [['When was Barack Obama elected president?', 'in 2009.'],]) | 
 **temperature** | **Number**| Higher values mean the model will take more risks and value 0 (argmax sampling) works better for scenarios with a well-defined answer. | [optional] [default to 0.0]

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

<a name="search"></a>
# **search**
> InlineResponse20010 search(texts, query, providers)



Given a query and a set of documents or labels, the model ranks each document based on its semantic similarity to the provided query.  **AVAILABLE PROVIDERS**   |Name|Value|Version| |----|-----|-------| |**OpenAI Davinci**|`openai_davinci`| `v1`  |**OpenAI Ada**|`openai_ada`| `v1` 

### Example
```javascript
var Edenai = require('Edenai');
var defaultClient = Edenai.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Edenai.TextApi();

var texts = "texts_example"; // String | Texts to search

var query = "query_example"; // String | Your query

var providers = "providers_example"; // String | Providers to compare (ex: ['openai_davinci'])


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.search(texts, query, providers, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **texts** | **String**| Texts to search | 
 **query** | **String**| Your query | 
 **providers** | **String**| Providers to compare (ex: ['openai_davinci']) | 

### Return type

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

<a name="sentimentAnalysis"></a>
# **sentimentAnalysis**
> InlineResponse20011 sentimentAnalysis(language, text, providers)



Sentiment analysis API extracts sentiment in a given string of text.Sentiment analysis, also called 'opinion mining',uses natural language processing, text analysis and computational linguistics to identify and detect subjective information from the input text.  **SUPPORTED LANGUAGE**  |Name|Type|Value| |----|----|-----| |**Chinese-Traditional**|`string`|`zh-TW`| |**German**|`string`|`de-DE`| |**Dutch (Netherlands)**|`string`|`nl-NL`| |**Spanish**|`string`|`es-ES`| |**French**|`string`|`fr-FR`| |**Chinese-Simplified**|`string`|`zh-CN`| |**Portuguese (Portugal)**|`string`|`pt-PT`| |**English (US)**|`string`|`en-US`| |**Japanese**|`string`|`ja-JP`| |**Arabic**|`string`|`ar-XA`| |**Italian**|`string`|`it-IT`| |**Korean**|`string`|`ko-KR`|  **AVAILABLE PROVIDERS**   |Name|Value|Version| |----|-----|-------| |**Microsoft Azure**|`microsoft`| `v3.1`  |**Amazon Web Services**|`amazon`| `boto3 (v1.15.18)`  |**IBM Watson**|`ibm`| `v1 (2021-08-01)`  |**Lettria**|`lettria`| `v5.5.2`  |**Connexun**|`connexun`| `v1.0` 

### Example
```javascript
var Edenai = require('Edenai');
var defaultClient = Edenai.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Edenai.TextApi();

var language = "language_example"; // String | Language code of text (ex: fr-FR (French), en-US (English), es-ES (Spanish))

var text = "text_example"; // String | Text to analyze

var providers = "providers_example"; // String | Provider to compare (ex: [ 'amazon', 'microsoft', 'ibm', 'google'])


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sentimentAnalysis(language, text, providers, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **language** | **String**| Language code of text (ex: fr-FR (French), en-US (English), es-ES (Spanish)) | 
 **text** | **String**| Text to analyze | 
 **providers** | **String**| Provider to compare (ex: [ 'amazon', 'microsoft', 'ibm', 'google']) | 

### Return type

[**InlineResponse20011**](InlineResponse20011.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

<a name="syntaxAnalysis"></a>
# **syntaxAnalysis**
> InlineResponse20012 syntaxAnalysis(language, text, providers)



Syntax analysis consists principaly in highlighting the structure of a text.  **SUPPORTED LANGUAGE**  |Name|Type|Value| |----|----|-----| |**Chinese-Traditional**|`string`|`zh-TW`| |**Swedish**|`string`|`sw-SW`| |**German**|`string`|`de-DE`| |**Dutch (Netherlands)**|`string`|`nl-NL`| |**Spanish**|`string`|`es-ES`| |**French**|`string`|`fr-FR`| |**Chinese-Simplified**|`string`|`zh-CN`| |**Portuguese (Portugal)**|`string`|`pt-PT`| |**English (US)**|`string`|`en-US`| |**Japanese**|`string`|`ja-JP`| |**Finnish**|`string`|`fn-FN`| |**Arabic**|`string`|`ar-XA`| |**Italian**|`string`|`it-IT`| |**Korean**|`string`|`ko-KR`|  **AVAILABLE PROVIDERS**   |Name|Value|Version| |----|-----|-------| |**Amazon Web Services**|`amazon`| `boto3 (v1.15.18)`  |**IBM Watson**|`ibm`| `v1 (2021-08-01)`  |**Lettria**|`lettria`| `v5.5.2`  |**Google Cloud**|`google`| `v1` 

### Example
```javascript
var Edenai = require('Edenai');
var defaultClient = Edenai.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Edenai.TextApi();

var language = "language_example"; // String | Language code of text (ex: fr-FR (French), en-US (English), es-ES (Spanish))

var text = "text_example"; // String | Text to analyze

var providers = "providers_example"; // String | Provider to compare (ex: [ 'amazon', 'microsoft', 'ibm','google'])


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.syntaxAnalysis(language, text, providers, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **language** | **String**| Language code of text (ex: fr-FR (French), en-US (English), es-ES (Spanish)) | 
 **text** | **String**| Text to analyze | 
 **providers** | **String**| Provider to compare (ex: [ 'amazon', 'microsoft', 'ibm','google']) | 

### Return type

[**InlineResponse20012**](InlineResponse20012.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

<a name="textSummarization"></a>
# **textSummarization**
> InlineResponse20013 textSummarization(text, providers)



Text summarization is a technique for extracting the most important sentences from a text in order to create a smaller version of the text.  **SUPPORTED LANGUAGE**  |Name|Type|Value| |----|----|-----|   **AVAILABLE PROVIDERS**   |Name|Value|Version| |----|-----|-------| |**Connexun**|`connexun`| `v1.0`  |**Microsoft Azure**|`microsoft`| `v3.1`  |**MeaningCloud**|`meaningcloud`| `v1.0`  |**OpenAI Ada**|`openai_ada`| `v1`  |**OpenAI Davinci**|`openai_davinci`| `v1` 

### Example
```javascript
var Edenai = require('Edenai');
var defaultClient = Edenai.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Edenai.TextApi();

var text = "text_example"; // String | Text to summarize

var providers = "providers_example"; // String | Provider to compare (ex: [ 'DataVoice','OpenAI', 'Microsoft'])


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.textSummarization(text, providers, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | **String**| Text to summarize | 
 **providers** | **String**| Provider to compare (ex: [ 'DataVoice','OpenAI', 'Microsoft']) | 

### Return type

[**InlineResponse20013**](InlineResponse20013.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

