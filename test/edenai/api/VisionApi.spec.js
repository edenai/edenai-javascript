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

(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD.
    define(["expect.js", "../../../src/edenai/index"], factory);
  } else if (typeof module === "object" && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require("expect.js"), require("../../../src/edenai/index"));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.EdenAiApiDocumentation);
  }
})(this, function (expect, EdenAiApiDocumentation) {
  "use strict";

  var instance;
  const fs = require("fs");

  beforeEach(function () {
    instance = new EdenAiApiDocumentation.VisionApi();
  });

  describe("edenai", function () {
    describe("VisionApi", function () {
      describe("explicitContentDetection", function () {
        it("should call explicitContentDetection successfully", function (done) {
          // TODO: uncomment, update parameter values for explicitContentDetection call and complete the assertions

          var files = fs.ReadStream("/home/michel/Desktop/meuble.png");
          var providers = "['google']";

          instance.explicitContentDetection(
            files,
            providers,
            function (error, data, response) {
              if (error) {
                done(error);
                return;
              }
              // TODO: update response assertions
              expect(data).to.be.a(EdenAiApiDocumentation.InlineResponse20011);
              {
                let dataCtr = data.result;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(
                    EdenAiApiDocumentation.InlineResponse20011Result1
                  );
                  expect(data.solutionName).to.be.a("string");
                  expect(data.provider).to.be.a("string");
                  expect(data.status).to.be.a("string");
                  expect(data.executionTime).to.be.a("number");
                  expect(data.originalResult).to.be.a(Object);
                  expect(data.result).to.be.a(
                    EdenAiApiDocumentation.InlineResponse20011Result
                  );
                  expect(data.result.imagePath).to.be.a("string");
                  {
                    let dataCtr = data.result.labels;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a("string");
                    }
                  }
                  {
                    let dataCtr = data.result.likelihood;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a("number");
                    }
                  }
                }
              }

              done();
            }
          );
        });
      });
      describe("faceDetection", function () {
        it("should call faceDetection successfully", function (done) {
          // TODO: uncomment, update parameter values for faceDetection call and complete the assertions
          /*
          var files = fs.ReadStream('C:\\Users\\zell_\\OneDrive\\Bureau\\stage\\meuble-tv-design-burga-184-cm-proposé-en-2-finitions.jpg');
          var providers = "['google']";

          instance.faceDetection(files, providers, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            
            expect(data).to.be.a(EdenAiApiDocumentation.InlineResponse20012);
            {
              let dataCtr = data.result;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(EdenAiApiDocumentation.InlineResponse20012Result1);
                expect(data.solutionName).to.be.a('string');
                expect(data.provider).to.be.a('string');
                expect(data.status).to.be.a('string');
                expect(data.executionTime).to.be.a('number');
                expect(data.originalResult).to.be.a(Object);
                expect(data.result).to.be.a(EdenAiApiDocumentation.InlineResponse20012Result);
                      expect(data.result.imagePath).to.be.a('string');
                  {
                    let dataCtr = data.result.attributesLabel;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a('string');
                    }
                  }
                  {
                    let dataCtr = data.result.confidences;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a('number');
                    }
                  }
                  {
                    let dataCtr = data.result.xMins;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a('number');
                    }
                  }
                  {
                    let dataCtr = data.result.xMaxs;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a('number');
                    }
                  }
                  {
                    let dataCtr = data.result.yMins;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a('number');
                    }
                  }
                  {
                    let dataCtr = data.result.yMaxs;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a('number');
                    }
                  }
                  expect(data.result.landmarks).to.be.a(EdenAiApiDocumentation.InlineResponse20012ResultLandmarks);
                        {
                      let dataCtr = data.result.landmarks.LEFT_EYE;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a('number');
                      }
                    }
                    {
                      let dataCtr = data.result.landmarks.RIGHT_EYE;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a('number');
                      }
                    }
                    {
                      let dataCtr = data.result.landmarks.LEFT_OF_LEFT_EYEBROW;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a('number');
                      }
                    }
                    {
                      let dataCtr = data.result.landmarks.RIGHT_OF_LEFT_EYEBROW;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a('number');
                      }
                    }
                    {
                      let dataCtr = data.result.landmarks.LEFT_OF_RIGHT_EYEBROW;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a('number');
                      }
                    }
                    {
                      let dataCtr = data.result.landmarks.RIGHT_OF_RIGHT_EYEBROW;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a('number');
                      }
                    }
                    {
                      let dataCtr = data.result.landmarks.MIDPOINT_BETWEEN_EYES;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a('number');
                      }
                    }
                    {
                      let dataCtr = data.result.landmarks.NOSE_TIP;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a('number');
                      }
                    }
                    {
                      let dataCtr = data.result.landmarks.UPPER_LIP;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a('number');
                      }
                    }
                    {
                      let dataCtr = data.result.landmarks.LOWER_LIP;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a('number');
                      }
                    }
                    {
                      let dataCtr = data.result.landmarks.MOUTH_LEFT;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a('number');
                      }
                    }
                    {
                      let dataCtr = data.result.landmarks.MOUTH_RIGHT;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a('number');
                      }
                    }
                    {
                      let dataCtr = data.result.landmarks.MOUTH_CENTER;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a('number');
                      }
                    }
                    {
                      let dataCtr = data.result.landmarks.NOSE_BOTTOM_RIGHT;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a('number');
                      }
                    }
                    {
                      let dataCtr = data.result.landmarks.NOSE_BOTTOM_LEFT;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a('number');
                      }
                    }
                    {
                      let dataCtr = data.result.landmarks.NOSE_BOTTOM_CENTER;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a('number');
                      }
                    }
                    {
                      let dataCtr = data.result.landmarks.LEFT_EYE_TOP_BOUNDARY;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a('number');
                      }
                    }
                    {
                      let dataCtr = data.result.landmarks.LEFT_EYE_RIGHT_CORNER;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a('number');
                      }
                    }
                    {
                      let dataCtr = data.result.landmarks.LEFT_EYE_BOTTOM_BOUNDARY;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a('number');
                      }
                    }
                    {
                      let dataCtr = data.result.landmarks.LEFT_EYE_LEFT_CORNER;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a('number');
                      }
                    }
                    {
                      let dataCtr = data.result.landmarks.RIGHT_EYE_TOP_BOUNDARY;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a('number');
                      }
                    }
                    {
                      let dataCtr = data.result.landmarks.RIGHT_EYE_RIGHT_CORNER;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a('number');
                      }
                    }
                    {
                      let dataCtr = data.result.landmarks.RIGHT_EYE_BOTTOM_BOUNDARY;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a('number');
                      }
                    }
                    {
                      let dataCtr = data.result.landmarks.RIGHT_EYE_LEFT_CORNER;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a('number');
                      }
                    }
                    {
                      let dataCtr = data.result.landmarks.LEFT_EYEBROW_UPPER_MIDPOINT;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a('number');
                      }
                    }
                    {
                      let dataCtr = data.result.landmarks.RIGHT_EYEBROW_UPPER_MIDPOINT;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a('number');
                      }
                    }
                    {
                      let dataCtr = data.result.landmarks.LEFT_EAR_TRAGION;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a('number');
                      }
                    }
                    {
                      let dataCtr = data.result.landmarks.RIGHT_EAR_TRAGION;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a('number');
                      }
                    }
                    {
                      let dataCtr = data.result.landmarks.FOREHEAD_GLABELLA;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a('number');
                      }
                    }
                    {
                      let dataCtr = data.result.landmarks.CHIN_GNATHION;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a('number');
                      }
                    }
                    {
                      let dataCtr = data.result.landmarks.CHIN_LEFT_GONION;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a('number');
                      }
                    }
                    {
                      let dataCtr = data.result.landmarks.CHIN_RIGHT_GONION;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a('number');
                      }
                    }
                    {
                      let dataCtr = data.result.landmarks.LEFT_CHEEK_CENTER;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a('number');
                      }
                    }
                    {
                      let dataCtr = data.result.landmarks.RIGHT_CHEEK_CENTER;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a('number');
                      }
                    }
                  expect(data.result.emotions).to.be.a(Object);
                  expect(data.result.poses).to.be.a(Object);

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe("objectDetection", function () {
        it("should call objectDetection successfully", function (done) {
          // TODO: uncomment, update parameter values for objectDetection call and complete the assertions

          var files = fs.ReadStream("/home/michel/Desktop/meuble.png");
          var providers = "['google']";

          instance.objectDetection(
            files,
            providers,
            function (error, data, response) {
              if (error) {
                done(error);
                return;
              }
              // TODO: update response assertions
              expect(data).to.be.a(EdenAiApiDocumentation.InlineResponse20013);
              {
                let dataCtr = data.result;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(
                    EdenAiApiDocumentation.InlineResponse20013Result1
                  );
                  expect(data.solutionName).to.be.a("string");
                  expect(data.provider).to.be.a("string");
                  expect(data.status).to.be.a("string");
                  expect(data.executionTime).to.be.a("number");
                  expect(data.originalResult).to.be.a(Object);
                  expect(data.result).to.be.a(
                    EdenAiApiDocumentation.InlineResponse20013Result
                  );
                  expect(data.result.fileName).to.be.a("string");
                  {
                    let dataCtr = data.result.labels;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a("string");
                    }
                  }
                  {
                    let dataCtr = data.result.confidences;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a("number");
                    }
                  }
                  {
                    let dataCtr = data.result.xMins;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a("number");
                    }
                  }
                  {
                    let dataCtr = data.result.xMaxs;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a("number");
                    }
                  }
                  {
                    let dataCtr = data.result.yMins;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a("number");
                    }
                  }
                  {
                    let dataCtr = data.result.yMaxs;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a("number");
                    }
                  }
                }
              }

              done();
            }
          );
        });
      });
    });
  });
});
