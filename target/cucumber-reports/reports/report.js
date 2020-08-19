$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Project3_1.feature");
formatter.feature({
  "line": 2,
  "name": "SuiteCRM",
  "description": "",
  "id": "suitecrm",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@CRM"
    }
  ]
});
formatter.scenarioOutline({
  "line": 38,
  "name": "Creating a Product",
  "description": "To use an external Excel to add products",
  "id": "suitecrm;creating-a-product",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 37,
      "name": "@Testcase12"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "Open the browser Navigate to Create Product",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "Fill \"\u003cProduct Name\u003e\" and \"\u003cPrice\u003e\" and click Save",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "Navigate to the View Products page to see result",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 45,
  "name": "",
  "description": "",
  "id": "suitecrm;creating-a-product;",
  "rows": [
    {
      "cells": [
        "Product Name",
        "Price"
      ],
      "line": 46,
      "id": "suitecrm;creating-a-product;;1"
    },
    {
      "cells": [
        "Testing",
        "1234"
      ],
      "line": 47,
      "id": "suitecrm;creating-a-product;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 21136908600,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Creating a Product",
  "description": "To use an external Excel to add products",
  "id": "suitecrm;creating-a-product;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@CRM"
    },
    {
      "line": 37,
      "name": "@Testcase12"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "Open the browser Navigate to Create Product",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "Fill \"Testing\" and \"1234\" and click Save",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "Navigate to the View Products page to see result",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Project3_1.navigation3()"
});
formatter.result({
  "duration": 3709692200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing",
      "offset": 6
    },
    {
      "val": "1234",
      "offset": 20
    }
  ],
  "location": "Project3_1.action3(String,String)"
});
formatter.result({
  "duration": 4278502900,
  "status": "passed"
});
formatter.match({
  "location": "Project3_1.verify2()"
});
formatter.result({
  "duration": 4950780700,
  "status": "passed"
});
formatter.match({
  "location": "Project1_1.close()"
});
formatter.result({
  "duration": 104000,
  "status": "passed"
});
});