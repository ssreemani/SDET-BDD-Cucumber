$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Project1_1.feature");
formatter.feature({
  "line": 2,
  "name": "Application: Alchemy Jobs",
  "description": "",
  "id": "application:-alchemy-jobs",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@JOBS"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Create a new user",
  "description": "",
  "id": "application:-alchemy-jobs;create-a-new-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Testcase1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Navigate to admin page and Login",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Click on Users button and Add New button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Fill in the necessary details \"\u003cuser_login\u003e\" and \"\u003cemail\u003e\" and Click the Add New User button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Verify that the user was created with \"\u003cuser_login\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "application:-alchemy-jobs;create-a-new-user;",
  "rows": [
    {
      "cells": [
        "user_login",
        "email"
      ],
      "line": 12,
      "id": "application:-alchemy-jobs;create-a-new-user;;1"
    },
    {
      "cells": [
        "jobs1",
        "jobs1@gmail.com"
      ],
      "line": 13,
      "id": "application:-alchemy-jobs;create-a-new-user;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Create a new user",
  "description": "",
  "id": "application:-alchemy-jobs;create-a-new-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Testcase1"
    },
    {
      "line": 1,
      "name": "@JOBS"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Navigate to admin page and Login",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Click on Users button and Add New button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Fill in the necessary details \"jobs1\" and \"jobs1@gmail.com\" and Click the Add New User button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Verify that the user was created with \"jobs1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Project1_1.openadmin()"
});
formatter.result({
  "duration": 12600276800,
  "status": "passed"
});
formatter.match({
  "location": "Project1_1.navigation()"
});
formatter.result({
  "duration": 2913133600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jobs1",
      "offset": 31
    },
    {
      "val": "jobs1@gmail.com",
      "offset": 43
    }
  ],
  "location": "Project1_1.fillup(String,String)"
});
formatter.result({
  "duration": 2558012800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jobs1",
      "offset": 39
    }
  ],
  "location": "Project1_1.verify(String)"
});
formatter.result({
  "duration": 1937939900,
  "status": "passed"
});
formatter.match({
  "location": "Project1_1.close()"
});
formatter.result({
  "duration": 2473224100,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Searching for jobs using XPath",
  "description": "",
  "id": "application:-alchemy-jobs;searching-for-jobs-using-xpath",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@Testcase2"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "Open browser and navigate to Jobs page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "Search for jobs and filter job type",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Find a job and see job details",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Find the title of the job and Apply for job",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Project1_1.jobpage()"
});
formatter.result({
  "duration": 8968567500,
  "status": "passed"
});
formatter.match({
  "location": "Project1_1.seachjobs()"
});
formatter.result({
  "duration": 581060200,
  "status": "passed"
});
formatter.match({
  "location": "Project1_1.jobdetails()"
});
formatter.result({
  "duration": 2258485400,
  "status": "passed"
});
formatter.match({
  "location": "Project1_1.verfiyjob()"
});
formatter.result({
  "duration": 310178300,
  "status": "passed"
});
formatter.match({
  "location": "Project1_1.close()"
});
formatter.result({
  "duration": 1851582600,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Posting a job using parameterization",
  "description": "",
  "id": "application:-alchemy-jobs;posting-a-job-using-parameterization",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@Testcase3"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Open browser and navigate to Post a Jobs page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "fill in the all details \"jobtest2@gmail.com\" and \"Job Test2\" and \"Kolkata\" and \"None\" and \"https://www.ambrino.com\" and \"IBM\" and Click submit",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Go to the Jobs page and check the job \"Job Test2\" and \"Kolkata\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Project1_1.postjobs()"
});
formatter.result({
  "duration": 10363272100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jobtest2@gmail.com",
      "offset": 25
    },
    {
      "val": "Job Test2",
      "offset": 50
    },
    {
      "val": "Kolkata",
      "offset": 66
    },
    {
      "val": "None",
      "offset": 80
    },
    {
      "val": "https://www.ambrino.com",
      "offset": 91
    },
    {
      "val": "IBM",
      "offset": 121
    }
  ],
  "location": "Project1_1.postajob(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2797639300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Job Test2",
      "offset": 39
    },
    {
      "val": "Kolkata",
      "offset": 55
    }
  ],
  "location": "Project1_1.checkjob(String,String)"
});
formatter.result({
  "duration": 1147038500,
  "status": "passed"
});
formatter.match({
  "location": "Project1_1.close()"
});
formatter.result({
  "duration": 1980231600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 31,
  "name": "Using Examples table to post a job",
  "description": "",
  "id": "application:-alchemy-jobs;using-examples-table-to-post-a-job",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 30,
      "name": "@Testcase4"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "Open browser and navigate to Post a Jobs page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "fill in the all details \"\u003cEmail\u003e\" and \"\u003cTitle\u003e\" and \"\u003cLocation\u003e\" and \"\u003cDesription\u003e\" and \"\u003cURL\u003e\" and \"\u003cCompany Name\u003e\" and Click submit",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "Go to the Jobs page and check the job \"\u003cTitle\u003e\" and \"\u003cLocation\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 36,
  "name": "",
  "description": "",
  "id": "application:-alchemy-jobs;using-examples-table-to-post-a-job;",
  "rows": [
    {
      "cells": [
        "Email",
        "Title",
        "Location",
        "Desription",
        "URL",
        "Company Name"
      ],
      "line": 37,
      "id": "application:-alchemy-jobs;using-examples-table-to-post-a-job;;1"
    },
    {
      "cells": [
        "jobtest3@gmail.com",
        "Job Test3",
        "Kolkata",
        "None",
        "https://www.ambrino.com",
        "IBM"
      ],
      "line": 38,
      "id": "application:-alchemy-jobs;using-examples-table-to-post-a-job;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 38,
  "name": "Using Examples table to post a job",
  "description": "",
  "id": "application:-alchemy-jobs;using-examples-table-to-post-a-job;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 30,
      "name": "@Testcase4"
    },
    {
      "line": 1,
      "name": "@JOBS"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "Open browser and navigate to Post a Jobs page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "fill in the all details \"jobtest3@gmail.com\" and \"Job Test3\" and \"Kolkata\" and \"None\" and \"https://www.ambrino.com\" and \"IBM\" and Click submit",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "Go to the Jobs page and check the job \"Job Test3\" and \"Kolkata\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Project1_1.postjobs()"
});
formatter.result({
  "duration": 9619402500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jobtest3@gmail.com",
      "offset": 25
    },
    {
      "val": "Job Test3",
      "offset": 50
    },
    {
      "val": "Kolkata",
      "offset": 66
    },
    {
      "val": "None",
      "offset": 80
    },
    {
      "val": "https://www.ambrino.com",
      "offset": 91
    },
    {
      "val": "IBM",
      "offset": 121
    }
  ],
  "location": "Project1_1.postajob(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2769744100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Job Test3",
      "offset": 39
    },
    {
      "val": "Kolkata",
      "offset": 55
    }
  ],
  "location": "Project1_1.checkjob(String,String)"
});
formatter.result({
  "duration": 1210352400,
  "status": "passed"
});
formatter.match({
  "location": "Project1_1.close()"
});
formatter.result({
  "duration": 2040403600,
  "status": "passed"
});
});