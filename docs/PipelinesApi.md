# Edenai.PipelinesApi

All URIs are relative to *https://api.edenai.run/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pipelines**](PipelinesApi.md#pipelines) | **POST** /pipelines | 


<a name="pipelines"></a>
# **pipelines**
> InlineResponse200 pipelines(description, returnOnlyLast, opts)



Pipelines let you combine different AI APIs from different providers into a single ready to use pipeline that you can run on your data.   **AVAILABLE FEATURES**   |Feature                   |Value|Can be first|Can be followed by| |--------------------------|-----------------------|------------|------------------| |**OCR**                     |`ocr`                  |`True`      |Sentiment Analysis, Syntax Analysis, Keyword Analysis, Named Entity Recognition, Text to speech, Translation,  Language Detection  | |**Translation**             |`automatic_translation`|`True`      |Sentiment Analysis, Syntax Analysis, Keyword Analysis, Named Entity Recognition, Text to speech, Language Detection                | |**Speech recognition**      |`speech_to_text`       |`True`      |Sentiment Analysis, Syntax Analysis, Keyword Analysis, Named Entity Recognition, Text to speech, Translation,  Language Detection  | |**Sentiment Analysis**      |`sentiment_analysis`   |`False`     |None                                                                                                                               | |**Syntax Analysis**         |`syntax_analysis`      |`False`     |None                                                                                                                               | |**Keyword Analysis**        |`keyword_extraction`   |`False`     |None                                                                                                                               | |**Named Entity Recognition**|`language_detection`   |`False`-    |None                                                                                                                               | |**Language Detection**      |`language_detection`   |`False`     |None                                                                                                                               | |**Text to speech**          |`text_to_speech`       |`False`     |None                                                                                                                               | 

### Example
```javascript
var Edenai = require('Edenai');
var defaultClient = Edenai.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Edenai.PipelinesApi();

var description = "description_example"; // String | The desciption field must be an array of ordered dictionaries.                                                      Each dictionary describes the feature to call. in fact, it has to contain two keys \"feature\" and \"params\".   * feature conatins a string (the value of the feature ex : automatic_translation).  * params contains a dictionary of parameters to be used to call the feature, see the feature corresponding documentation to know which parameters well be needed.   ex : `[ { \"feature\": \"ocr\",  \"params\": { \"providers\": \"['amazon']\",\"language\": \"en-US\" } }, { \"feature\": \"syntax_analysis\",  \"params\": { \"providers\": \"['amazon']\",\"language\": \"en-US\" } }]`                                                      

var returnOnlyLast = true; // Boolean | This parameter allows user to choose to output only the final result or all the intermediate results.

var opts = { 
  'text': "text_example", // String | The input text for the first feature of the pipeline
  'files': "/path/to/file.txt" // File | The input file for the first feature of the pipeline
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.pipelines(description, returnOnlyLast, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **description** | **String**| The desciption field must be an array of ordered dictionaries.                                                      Each dictionary describes the feature to call. in fact, it has to contain two keys \"feature\" and \"params\".   * feature conatins a string (the value of the feature ex : automatic_translation).  * params contains a dictionary of parameters to be used to call the feature, see the feature corresponding documentation to know which parameters well be needed.   ex : `[ { \"feature\": \"ocr\",  \"params\": { \"providers\": \"['amazon']\",\"language\": \"en-US\" } }, { \"feature\": \"syntax_analysis\",  \"params\": { \"providers\": \"['amazon']\",\"language\": \"en-US\" } }]`                                                       | 
 **returnOnlyLast** | **Boolean**| This parameter allows user to choose to output only the final result or all the intermediate results. | 
 **text** | **String**| The input text for the first feature of the pipeline | [optional] 
 **files** | **File**| The input file for the first feature of the pipeline | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

