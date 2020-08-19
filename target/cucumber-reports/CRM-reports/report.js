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
formatter.before({
  "duration": 20001196000,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Counting Dashlets",
  "description": "Open the homepage and count the number of the dashlets on the page.�",
  "id": "suitecrm;counting-dashlets",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Testcase9"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "Open the browser and login",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Count the number of Dashlets on the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Print the number and title of each Dashlet into the console",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Project3_1.navigation()"
});
formatter.result({
  "duration": 468900800,
  "status": "passed"
});
formatter.match({
  "location": "Project3_1.action()"
});
formatter.result({
  "duration": 731774400,
  "status": "passed"
});
formatter.match({
  "location": "Project3_1.print()"
});
formatter.result({
  "duration": 986111500,
  "status": "passed"
});
formatter.match({
  "location": "Project1_1.close()"
});
formatter.result({
  "duration": 83500,
  "status": "passed"
});
formatter.after({
  "duration": 2543339600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Create leads using parameterization",
  "description": "Open the Leads page and add multiple lead accounts using values passed from� Feature file�",
  "id": "suitecrm;create-leads-using-parameterization",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@Testcase10"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "Open the browser Navigate to Create Lead",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "Fill \"\u003cFirst Name\u003e\" and \"\u003cLast Name\u003e\" the necessary details Click Save",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Navigate to the View Leads page to see \"\u003cFirst Name\u003e\" and \"\u003cLast Name\u003e\" result",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "suitecrm;create-leads-using-parameterization;",
  "rows": [
    {
      "cells": [
        "First Name",
        "Last Name"
      ],
      "line": 22,
      "id": "suitecrm;create-leads-using-parameterization;;1"
    },
    {
      "cells": [
        "Testing7",
        "Testing7"
      ],
      "line": 23,
      "id": "suitecrm;create-leads-using-parameterization;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 13885971900,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Create leads using parameterization",
  "description": "Open the Leads page and add multiple lead accounts using values passed from� Feature file�",
  "id": "suitecrm;create-leads-using-parameterization;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@CRM"
    },
    {
      "line": 13,
      "name": "@Testcase10"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "Open the browser Navigate to Create Lead",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "Fill \"Testing7\" and \"Testing7\" the necessary details Click Save",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Navigate to the View Leads page to see \"Testing7\" and \"Testing7\" result",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Project3_1.navigation1()"
});
formatter.result({
  "duration": 4280862500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing7",
      "offset": 6
    },
    {
      "val": "Testing7",
      "offset": 21
    }
  ],
  "location": "Project3_1.action1(String,String)"
});
formatter.result({
  "duration": 3651786400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing7",
      "offset": 40
    },
    {
      "val": "Testing7",
      "offset": 55
    }
  ],
  "location": "Project3_1.verify(String,String)"
});
formatter.result({
  "duration": 5239265200,
  "status": "passed"
});
formatter.match({
  "location": "Project1_1.close()"
});
formatter.result({
  "duration": 36000,
  "status": "passed"
});
formatter.after({
  "duration": 2584997500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 26,
  "name": "Schedule a meeting and invite members",
  "description": "To schedule a meeting and include at least 3 invitees�",
  "id": "suitecrm;schedule-a-meeting-and-invite-members",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@Testcase11"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "Open the browser Navigate to Schedule a Meeting",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "Fill \"\u003cSubject\u003e\" and \"\u003cMember1\u003e\" and \"\u003cMember2\u003e\" and \"\u003cMember3\u003e\" the necessary details click Save",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Navigate to the View Meetings page to see result",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "suitecrm;schedule-a-meeting-and-invite-members;",
  "rows": [
    {
      "cells": [
        "Subject",
        "Member1",
        "Member2",
        "Member3"
      ],
      "line": 34,
      "id": "suitecrm;schedule-a-meeting-and-invite-members;;1"
    },
    {
      "cells": [
        "Testing2",
        "admin",
        "testing1",
        "testing2"
      ],
      "line": 35,
      "id": "suitecrm;schedule-a-meeting-and-invite-members;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 14938972600,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Schedule a meeting and invite members",
  "description": "To schedule a meeting and include at least 3 invitees�",
  "id": "suitecrm;schedule-a-meeting-and-invite-members;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@CRM"
    },
    {
      "line": 25,
      "name": "@Testcase11"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "Open the browser Navigate to Schedule a Meeting",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "Fill \"Testing2\" and \"admin\" and \"testing1\" and \"testing2\" the necessary details click Save",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Navigate to the View Meetings page to see result",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Project3_1.navigation2()"
});
formatter.result({
  "duration": 4017130000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing2",
      "offset": 6
    },
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "testing1",
      "offset": 33
    },
    {
      "val": "testing2",
      "offset": 48
    }
  ],
  "location": "Project3_1.action2(String,String,String,String)"
});
formatter.result({
  "duration": 11166888500,
  "status": "passed"
});
formatter.match({
  "location": "Project3_1.verify1()"
});
formatter.result({
  "duration": 5071063800,
  "status": "passed"
});
formatter.match({
  "location": "Project1_1.close()"
});
formatter.result({
  "duration": 70700,
  "status": "passed"
});
formatter.after({
  "duration": 2472997900,
  "status": "passed"
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
  "duration": 14828450100,
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
  "duration": 3912135100,
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
  "duration": 3136083300,
  "status": "passed"
});
formatter.match({
  "location": "Project3_1.verify2()"
});
formatter.result({
  "duration": 4129563500,
  "status": "passed"
});
formatter.match({
  "location": "Project1_1.close()"
});
formatter.result({
  "duration": 70600,
  "status": "passed"
});
formatter.after({
  "duration": 2498103900,
  "status": "passed"
});
});