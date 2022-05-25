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

  const path = require("path");
  var file_path = path.join(__dirname, "data/test_invoice.png");

  var instance;
  var fs = require("fs");

  beforeEach(function () {
    require("dotenv").config();

    var defaultClient = EdenAiApiDocumentation.ApiClient.instance;
    var Bearer = defaultClient.authentications["Bearer"];
    Bearer.apiKey = process.env.API_KEY;
    Bearer.apiKeyPrefix = "Bearer";

    instance = new EdenAiApiDocumentation.OCRApi();
  });

  describe("edenai", function () {
    describe("OCRApi", function () {
      describe("ocr", function () {
        it("should call ocr successfully", function (done) {
          // TODO: uncomment, update parameter values for ocr call and complete the assertions

          var files = fs.ReadStream(file_path);
          var providers = "['amazon']";
          var language = "fr-FR";

          instance.ocr(
            files,
            providers,
            language,
            function (error, data, response) {
              if (error) {
                done(error);
                return;
              }
              // TODO: update response assertions
              expect(data).to.be.a(EdenAiApiDocumentation.InlineResponse2003);
              {
                let dataCtr = data.result;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];

                  expect(data).to.be.a(
                    EdenAiApiDocumentation.InlineResponse2003Result1
                  );
                  expect(data.solutionName).to.be.a("string");
                  expect(data.provider).to.be.a("string");
                  expect(data.status).to.be.a("string");
                  expect(data.executionTime).to.be.a("number");
                  expect(data.originalResult).to.be.a(Object);
                  expect(data.result).to.be.a(
                    EdenAiApiDocumentation.InlineResponse2003Result
                  );
                  expect(data.result.text).to.be.a("string");
                  // {
                  //   let dataCtr = data.result.boundingBoxes;
                  //   expect(dataCtr).to.be.an(Array);
                  //   expect(dataCtr).to.not.be.empty();
                  //   for (let p in dataCtr) {
                  //     let data = dataCtr[p];
                  //     expect(data).to.be.a(
                  //       EdenAiApiDocumentation.InlineResponse2003ResultBoundingBoxes
                  //     );
                  //     expect(data.wordText).to.be.a("string");
                  //     expect(data.left).to.be.a("number");
                  //     expect(data.top).to.be.a("number");
                  //     expect(data.width).to.be.a("number");
                  //     expect(data.hight).to.be.a("number");
                  //   }
                  // }
                }
              }

              done();
            }
          );
        });
      });
      describe("ocrInvoice", function () {
        it("should call ocrInvoice successfully", function (done) {
          // TODO: uncomment, update parameter values for ocrInvoice call and complete the assertions
          var files = fs.ReadStream(file_path);
          var providers = "['dataleon']";
          var language = "fr-FR";

          instance.ocrInvoice(
            files,
            providers,
            language,
            function (error, data, response) {
              if (error) {
                done(error);
                return;
              }
              // TODO: update response assertions
              expect(data).to.be.a(EdenAiApiDocumentation.InlineResponse2004);
              {
                let dataCtr = data.result;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(
                    EdenAiApiDocumentation.InlineResponse2004Result1
                  );
                  expect(data.solutionName).to.be.a("string");
                  expect(data.provider).to.be.a("string");
                  expect(data.status).to.be.a("string");
                  expect(data.executionTime).to.be.a("number");
                  expect(data.originalResult).to.be.a(Object);
                  {
                    let dataCtr = data.result;
                    expect(dataCtr).to.be.an(Object);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a(
                        EdenAiApiDocumentation.InlineResponse2004Result
                      );
                      {
                        let dataCtr = data;
                        // console.log(dataCtr);
                        expect(dataCtr).to.be.an(Object);
                        expect(dataCtr).to.not.be.empty();
                        expect(dataCtr.customerInformation).to.be.a(
                          EdenAiApiDocumentation.InlineResponse2004CustomerInformation
                        );
                        expect(
                          dataCtr.customerInformation.customerAddress
                        ).to.be.a("string");
                        expect(dataCtr.merchantInformation).to.be.a(
                          EdenAiApiDocumentation.InlineResponse2004MerchantInformation
                        );
                        expect(
                          dataCtr.merchantInformation.merchantAddress
                        ).to.be.a("string");
                        expect(
                          dataCtr.merchantInformation.merchantName
                        ).to.be.a("string");
                        expect(dataCtr.invoiceTotal).to.be.a("number");
                        expect(dataCtr.subtotal).to.be.a("number");
                        expect(dataCtr._date).to.be.a("string");
                        expect(dataCtr.dueDate).to.be.a("string");
                        expect(dataCtr.invoiceNumber).to.be.a("string");
                        expect(dataCtr.taxes).to.be.a("string");
                      }
                      //version swagger de base qui marche pas pcq ocr invoice a un retour de merde !
                      // for (let p in dataCtr) {
                      //   let data = dataCtr[p];
                      //   expect(data).to.be.a(EdenAiApiDocumentation.InlineResponse2004Results);
                      //   expect(data.wordText).to.be.a('string');
                      //   expect(data.left).to.be.a('number');
                      //   expect(data.top).to.be.a('number');
                      //   expect(data.width).to.be.a('number');
                      //   expect(data.hight).to.be.a('number');
                      //   expect(data.customerInformation).to.be.a(EdenAiApiDocumentation.InlineResponse2004CustomerInformation);
                      //   expect(data.customerInformation.customerAddress).to.be.a('string');
                      //   expect(data.customerInformation.customerName).to.be.a('string');
                      //   expect(data.merchantInformation).to.be.a(EdenAiApiDocumentation.InlineResponse2004MerchantInformation);
                      //   expect(data.merchantInformation.merchantAddress).to.be.a('string');
                      //   expect(data.merchantInformation.merchantName).to.be.a('string');
                      //   expect(data.invoiceTotal).to.be.a('string');
                      //   expect(data.subtotal).to.be.a('string');
                      //   expect(data._date).to.be.a('string');
                      //   expect(data.dueDate).to.be.a('string');
                      //   expect(data.invoiceNumber).to.be.a('string');
                      //   expect(data.taxes).to.be.a('string');
                      //   expect(data.locale).to.be.a(EdenAiApiDocumentation.InlineResponse2004Locale);
                      //   expect(data.locale.currency).to.be.a('string');
                      //   expect(data.locale.language).to.be.a('string');
                      //   {
                      //     let dataCtr = data.itemLines;
                      //     expect(dataCtr).to.be.an(Array);
                      //     expect(dataCtr).to.not.be.empty();
                      //     for (let p in dataCtr) {
                      //       let data = dataCtr[p];
                      //       expect(data).to.be.a(EdenAiApiDocumentation.InlineResponse2004ItemLines);
                      //       expect(data.amount).to.be.a('string');
                      //       expect(data.description).to.be.a('string');
                      //       expect(data.quantity).to.be.a('string');
                      //       expect(data.unitPrice).to.be.a('string');
                      //     }
                      //   }
                      // }
                    }
                  }
                }
              }

              done();
            }
          );
        });
      });
      describe("ocrTables", function () {
        it("should call ocrTables successfully", function (done) {
          var files = "/path/to/file.txt";
          var providers = "providers_example";
          var language = "language_example";

          instance.ocrTables(
            files,
            providers,
            language,
            function (error, data, response) {
              if (error) {
                done(error);
                return;
              }
              // TODO: update response assertions
              expect(data).to.be.a(Edenai.InlineResponse2006);
              {
                let dataCtr = data.result;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(Edenai.InlineResponse2006Result1);
                  expect(data.solutionName).to.be.a("string");
                  expect(data.solutionName).to.be("");
                  expect(data.provider).to.be.a("string");
                  expect(data.provider).to.be("");
                  expect(data.status).to.be.a("string");
                  expect(data.status).to.be("");
                  expect(data.executionTime).to.be.a("number");
                  expect(data.executionTime).to.be();
                  expect(data.originalResult).to.be.a(Object);
                  expect(data.originalResult).to.be();
                  {
                    let dataCtr = data.result;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a(Edenai.InlineResponse2006Result);
                      expect(data.text).to.be.a("string");
                      expect(data.text).to.be("");
                      {
                        let dataCtr = data.results;
                        expect(dataCtr).to.be.an(Array);
                        expect(dataCtr).to.not.be.empty();
                        for (let p in dataCtr) {
                          let data = dataCtr[p];
                          expect(data).to.be.a(
                            Edenai.InlineResponse2006Results
                          );
                          expect(data.wordText).to.be.a("string");
                          expect(data.wordText).to.be("");
                          expect(data.left).to.be.a("number");
                          expect(data.left).to.be();
                          expect(data.top).to.be.a("number");
                          expect(data.top).to.be();
                          expect(data.width).to.be.a("number");
                          expect(data.width).to.be();
                          expect(data.hight).to.be.a("number");
                          expect(data.hight).to.be();
                          expect(data.customerInformation).to.be.a(
                            Edenai.InlineResponse2006CustomerInformation
                          );
                          expect(
                            data.customerInformation.customerAddress
                          ).to.be.a("string");
                          expect(
                            data.customerInformation.customerAddress
                          ).to.be("");
                          expect(data.customerInformation.customerName).to.be.a(
                            "string"
                          );
                          expect(data.customerInformation.customerName).to.be(
                            ""
                          );
                          expect(data.merchantInformation).to.be.a(
                            Edenai.InlineResponse2006MerchantInformation
                          );
                          expect(
                            data.merchantInformation.merchantAddress
                          ).to.be.a("string");
                          expect(
                            data.merchantInformation.merchantAddress
                          ).to.be("");
                          expect(data.merchantInformation.merchantName).to.be.a(
                            "string"
                          );
                          expect(data.merchantInformation.merchantName).to.be(
                            ""
                          );
                          expect(data.invoiceTotal).to.be.a("string");
                          expect(data.invoiceTotal).to.be("");
                          expect(data.subtotal).to.be.a("string");
                          expect(data.subtotal).to.be("");
                          expect(data._date).to.be.a("string");
                          expect(data._date).to.be("");
                          expect(data.dueDate).to.be.a("string");
                          expect(data.dueDate).to.be("");
                          expect(data.invoiceNumber).to.be.a("string");
                          expect(data.invoiceNumber).to.be("");
                          expect(data.taxes).to.be.a("string");
                          expect(data.taxes).to.be("");
                          expect(data.locale).to.be.a(
                            Edenai.InlineResponse2006Locale
                          );
                          expect(data.locale.currency).to.be.a("string");
                          expect(data.locale.currency).to.be("");
                          expect(data.locale.language).to.be.a("string");
                          expect(data.locale.language).to.be("");
                          {
                            let dataCtr = data.itemLines;
                            expect(dataCtr).to.be.an(Array);
                            expect(dataCtr).to.not.be.empty();
                            for (let p in dataCtr) {
                              let data = dataCtr[p];
                              expect(data).to.be.a(
                                Edenai.InlineResponse2006ItemLines
                              );
                              expect(data.amount).to.be.a("string");
                              expect(data.amount).to.be("");
                              expect(data.description).to.be.a("string");
                              expect(data.description).to.be("");
                              expect(data.quantity).to.be.a("string");
                              expect(data.quantity).to.be("");
                              expect(data.unitPrice).to.be.a("string");
                              expect(data.unitPrice).to.be("");
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }

              done();
            }
          );
        });
      });
      describe("asyncOcrTablesLaunch", function () {
        it("should call asyncOcrTablesLaunch successfully", function (done) {
          var language = "language_example";
          var files = "/path/to/file.txt";
          var providers = "providers_example";
          var opts = {};
          opts.webhookReceiver = "webhookReceiver_example";
          opts.usersWebhookParameters = "usersWebhookParameters_example";
          opts.showOriginalResponses = false;

          instance.asyncOcrTablesLaunch(
            language,
            files,
            providers,
            opts,
            function (error, data, response) {
              if (error) {
                done(error);
                return;
              }
              // TODO: update response assertions
              expect(data).to.be.a(Edenai.InlineResponse204);
              {
                let dataCtr = data.result;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(Edenai.InlineResponse204Result1);
                  expect(data.solutionName).to.be.a("string");
                  expect(data.solutionName).to.be("");
                  expect(data.status).to.be.a("string");
                  expect(data.status).to.be("");
                  expect(data.error).to.be.a("string");
                  expect(data.error).to.be("");
                  expect(data.originalResult).to.be.a(Object);
                  expect(data.originalResult).to.be();
                  expect(data.result).to.be.a(Edenai.InlineResponse204Result);
                  expect(data.result.jobId).to.be.a("string");
                  expect(data.result.jobId).to.be("");
                  expect(data.result.status).to.be.a("string");
                  expect(data.result.status).to.be("");
                }
              }

              done();
            }
          );
        });
      });
      describe("asyncOcrTablesResults", function () {
        it("should call asyncOcrTablesResults successfully", function (done) {
          var publicId = "publicId_example";

          instance.asyncOcrTablesResults(
            publicId,
            function (error, data, response) {
              if (error) {
                done(error);
                return;
              }
              // TODO: update response assertions
              expect(data).to.be.a(Edenai.InlineResponse2002);
              {
                let dataCtr = data.result;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(Edenai.InlineResponse2002Result1);
                  expect(data.solutionName).to.be.a("string");
                  expect(data.solutionName).to.be("");
                  expect(data.status).to.be.a("string");
                  expect(data.status).to.be("");
                  expect(data.error).to.be.a("string");
                  expect(data.error).to.be("");
                  expect(data.originalResult).to.be.a(Object);
                  expect(data.originalResult).to.be();
                  {
                    let dataCtr = data.result;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a(Edenai.InlineResponse2002Result);
                      expect(data.numberOfPages).to.be.a("number");
                      expect(data.numberOfPages).to.be();
                      {
                        let dataCtr = data.pages;
                        expect(dataCtr).to.be.an(Array);
                        expect(dataCtr).to.not.be.empty();
                        for (let p in dataCtr) {
                          let data = dataCtr[p];
                          expect(data).to.be.a(Edenai.InlineResponse2002Pages);
                          {
                            let dataCtr = data.tables;
                            expect(dataCtr).to.be.an(Array);
                            expect(dataCtr).to.not.be.empty();
                            for (let p in dataCtr) {
                              let data = dataCtr[p];
                              expect(data).to.be.a(
                                Edenai.InlineResponse2002Tables
                              );
                              {
                                let dataCtr = data.rows;
                                expect(dataCtr).to.be.an(Array);
                                expect(dataCtr).to.not.be.empty();
                                for (let p in dataCtr) {
                                  let data = dataCtr[p];
                                  expect(data).to.be.a(
                                    Edenai.InlineResponse2002Rows
                                  );
                                  expect(data.isHeader).to.be.a("boolean");
                                  expect(data.isHeader).to.be(false);
                                  {
                                    let dataCtr = data.cells;
                                    expect(dataCtr).to.be.an(Array);
                                    expect(dataCtr).to.not.be.empty();
                                    for (let p in dataCtr) {
                                      let data = dataCtr[p];
                                      expect(data).to.be.a(
                                        Edenai.InlineResponse2002Cells
                                      );
                                      expect(data.text).to.be.a("string");
                                      expect(data.text).to.be("");
                                      expect(data.rowSpan).to.be.a("number");
                                      expect(data.rowSpan).to.be();
                                      expect(data.colSpan).to.be.a("number");
                                      expect(data.colSpan).to.be();
                                      expect(data.confidence).to.be.a("number");
                                      expect(data.confidence).to.be();
                                      expect(data.boundingBox).to.be.a(
                                        Edenai.InlineResponse2002BoundingBox
                                      );
                                      expect(data.boundingBox.left).to.be.a(
                                        "number"
                                      );
                                      expect(data.boundingBox.left).to.be();
                                      expect(data.boundingBox.top).to.be.a(
                                        "number"
                                      );
                                      expect(data.boundingBox.top).to.be();
                                      expect(data.boundingBox.width).to.be.a(
                                        "number"
                                      );
                                      expect(data.boundingBox.width).to.be();
                                      expect(data.boundingBox.height).to.be.a(
                                        "number"
                                      );
                                      expect(data.boundingBox.height).to.be();
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
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
