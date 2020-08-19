$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Project2_1.feature");
formatter.feature({
  "line": 2,
  "name": "OrangeHRM",
  "description": "",
  "id": "orangehrm",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@HRM"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Counting Dashlets",
  "description": "To create a job vacancy for �DevOps Engineer�",
  "id": "orangehrm;counting-dashlets",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Testcase5"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "Open the page and navigate to the Add Job Vacancy form",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Fill in the all details \"\u003cJob Title\u003e\" and \"\u003cVacancy Name\u003e\" and \"\u003cHiring Manager\u003e\" and Click submit",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Verify that the vacancy was created \"\u003cJob Title\u003e\" and \"\u003cVacancy Name\u003e\" and \"\u003cHiring Manager\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "orangehrm;counting-dashlets;",
  "rows": [
    {
      "cells": [
        "Job Title",
        "Vacancy Name",
        "Hiring Manager"
      ],
      "line": 13,
      "id": "orangehrm;counting-dashlets;;1"
    },
    {
      "cells": [
        "DevOps Engineer",
        "Orange Test1",
        "Robert Downey"
      ],
      "line": 14,
      "id": "orangehrm;counting-dashlets;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 13516667700,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Counting Dashlets",
  "description": "To create a job vacancy for �DevOps Engineer�",
  "id": "orangehrm;counting-dashlets;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Testcase5"
    },
    {
      "line": 1,
      "name": "@HRM"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "Open the page and navigate to the Add Job Vacancy form",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Fill in the all details \"DevOps Engineer\" and \"Orange Test1\" and \"Robert Downey\" and Click submit",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Verify that the vacancy was created \"DevOps Engineer\" and \"Orange Test1\" and \"Robert Downey\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Project2_1.naviagation()"
});
formatter.result({
  "duration": 2515955300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DevOps Engineer",
      "offset": 25
    },
    {
      "val": "Orange Test1",
      "offset": 47
    },
    {
      "val": "Robert Downey",
      "offset": 66
    }
  ],
  "location": "Project2_1.Submit(String,String,String)"
});
formatter.result({
  "duration": 1181506500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DevOps Engineer",
      "offset": 37
    },
    {
      "val": "Orange Test1",
      "offset": 59
    },
    {
      "val": "Robert Downey",
      "offset": 78
    }
  ],
  "location": "Project2_1.verify(String,String,String)"
});
formatter.result({
  "duration": 4566412800,
  "status": "passed"
});
formatter.match({
  "location": "Project1_1.close()"
});
formatter.result({
  "duration": 65000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Adding a candidate for recruitment",
  "description": "Add information about a candidate for recruitment",
  "id": "orangehrm;adding-a-candidate-for-recruitment",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@Testcase6"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "Open the page and navigate to Candidateinformation",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Fill in the all details \"\u003cFirst Name\u003e\" and \"\u003cLast Name\u003e\" and \"\u003cEmail\u003e\" and \"\u003cResume\u003e\" and Click save",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Navigate back to the Recruitments page to confirm candidate \"\u003cFirst Name\u003e\" and \"\u003cLast Name\u003e\" entry",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "orangehrm;adding-a-candidate-for-recruitment;",
  "rows": [
    {
      "cells": [
        "First Name",
        "Last Name",
        "Email",
        "Resume"
      ],
      "line": 25,
      "id": "orangehrm;adding-a-candidate-for-recruitment;;1"
    },
    {
      "cells": [
        "orange Test4",
        "orange Test4",
        "orangetest4@gmail.com",
        "C:\\Users\\SudiptaSreemani\\Desktop\\Bitlocker.pdf"
      ],
      "line": 26,
      "id": "orangehrm;adding-a-candidate-for-recruitment;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9483793700,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Adding a candidate for recruitment",
  "description": "Add information about a candidate for recruitment",
  "id": "orangehrm;adding-a-candidate-for-recruitment;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@Testcase6"
    },
    {
      "line": 1,
      "name": "@HRM"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "Open the page and navigate to Candidateinformation",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Fill in the all details \"orange Test4\" and \"orange Test4\" and \"orangetest4@gmail.com\" and \"C:\\Users\\SudiptaSreemani\\Desktop\\Bitlocker.pdf\" and Click save",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Navigate back to the Recruitments page to confirm candidate \"orange Test4\" and \"orange Test4\" entry",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Project2_1.navigation1()"
});
formatter.result({
  "duration": 2317094100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "orange Test4",
      "offset": 25
    },
    {
      "val": "orange Test4",
      "offset": 44
    },
    {
      "val": "orangetest4@gmail.com",
      "offset": 63
    },
    {
      "val": "C:\\Users\\SudiptaSreemani\\Desktop\\Bitlocker.pdf",
      "offset": 91
    }
  ],
  "location": "Project2_1.Submit1(String,String,String,String)"
});
formatter.result({
  "duration": 1266071600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "orange Test4",
      "offset": 61
    },
    {
      "val": "orange Test4",
      "offset": 80
    }
  ],
  "location": "Project2_1.verify1(String,String)"
});
formatter.result({
  "duration": 3815797700,
  "status": "passed"
});
formatter.match({
  "location": "Project1_1.close()"
});
formatter.result({
  "duration": 32300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 30,
  "name": "Adding a candidate for recruitment",
  "description": "Add multiple employees using an the Examples table",
  "id": "orangehrm;adding-a-candidate-for-recruitment",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@Testcase7"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "Open the page and navigate to Add New Employee page",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "Fill in the all details \"\u003cFirst Name\u003e\" and \"\u003cLast Name\u003e\" and \"\u003cUsername\u003e\" and \"\u003cStatus\u003e\" and Click Submit",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "Verify that the employees \"\u003cFirst Name\u003e\" and \"\u003cLast Name\u003e\" have been created",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "orangehrm;adding-a-candidate-for-recruitment;",
  "rows": [
    {
      "cells": [
        "First Name",
        "Last Name",
        "Username",
        "Status"
      ],
      "line": 38,
      "id": "orangehrm;adding-a-candidate-for-recruitment;;1"
    },
    {
      "cells": [
        "orange Test7",
        "orange Test7",
        "orangetest7",
        "Enabled"
      ],
      "line": 39,
      "id": "orangehrm;adding-a-candidate-for-recruitment;;2"
    },
    {
      "cells": [
        "orange Test8",
        "orange Test8",
        "orangetest8",
        "Disabled"
      ],
      "line": 40,
      "id": "orangehrm;adding-a-candidate-for-recruitment;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9318935900,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Adding a candidate for recruitment",
  "description": "Add multiple employees using an the Examples table",
  "id": "orangehrm;adding-a-candidate-for-recruitment;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@Testcase7"
    },
    {
      "line": 1,
      "name": "@HRM"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "Open the page and navigate to Add New Employee page",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "Fill in the all details \"orange Test7\" and \"orange Test7\" and \"orangetest7\" and \"Enabled\" and Click Submit",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "Verify that the employees \"orange Test7\" and \"orange Test7\" have been created",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Project2_1.navigation2()"
});
formatter.result({
  "duration": 2207721900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "orange Test7",
      "offset": 25
    },
    {
      "val": "orange Test7",
      "offset": 44
    },
    {
      "val": "orangetest7",
      "offset": 63
    },
    {
      "val": "Enabled",
      "offset": 81
    }
  ],
  "location": "Project2_1.Submit2(String,String,String,String)"
});
formatter.result({
  "duration": 1881492900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "orange Test7",
      "offset": 27
    },
    {
      "val": "orange Test7",
      "offset": 46
    }
  ],
  "location": "Project2_1.verify2(String,String)"
});
formatter.result({
  "duration": 3077695900,
  "status": "passed"
});
formatter.match({
  "location": "Project1_1.close()"
});
formatter.result({
  "duration": 55400,
  "status": "passed"
});
formatter.before({
  "duration": 9508238200,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Adding a candidate for recruitment",
  "description": "Add multiple employees using an the Examples table",
  "id": "orangehrm;adding-a-candidate-for-recruitment;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@Testcase7"
    },
    {
      "line": 1,
      "name": "@HRM"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "Open the page and navigate to Add New Employee page",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "Fill in the all details \"orange Test8\" and \"orange Test8\" and \"orangetest8\" and \"Disabled\" and Click Submit",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "Verify that the employees \"orange Test8\" and \"orange Test8\" have been created",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Project2_1.navigation2()"
});
formatter.result({
  "duration": 2236059900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "orange Test8",
      "offset": 25
    },
    {
      "val": "orange Test8",
      "offset": 44
    },
    {
      "val": "orangetest8",
      "offset": 63
    },
    {
      "val": "Disabled",
      "offset": 81
    }
  ],
  "location": "Project2_1.Submit2(String,String,String,String)"
});
formatter.result({
  "duration": 2003967400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "orange Test8",
      "offset": 27
    },
    {
      "val": "orange Test8",
      "offset": 46
    }
  ],
  "location": "Project2_1.verify2(String,String)"
});
formatter.result({
  "duration": 3410897300,
  "status": "passed"
});
formatter.match({
  "location": "Project1_1.close()"
});
formatter.result({
  "duration": 39600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 43,
  "name": "Creating multiple vacancies",
  "description": "Creating multiple vacancies using data from an external excel spreadsheet",
  "id": "orangehrm;creating-multiple-vacancies",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 42,
      "name": "@Testcase8"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "Open the page and navigate to the Add Job Vacancy form",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "Fill in the all details \"\u003cJob Title\u003e\" and \"\u003cVacancy Name\u003e\" and \"\u003cHiring Manager\u003e\" and Click submit",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "Verify that the vacancy was created \"\u003cJob Title\u003e\" and \"\u003cVacancy Name\u003e\" and \"\u003cHiring Manager\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 50,
  "name": "",
  "description": "",
  "id": "orangehrm;creating-multiple-vacancies;",
  "rows": [
    {
      "cells": [
        "Job Title",
        "Vacancy Name",
        "Hiring Manager"
      ],
      "line": 51,
      "id": "orangehrm;creating-multiple-vacancies;;1"
    },
    {
      "cells": [
        "Android Developer",
        "Orange Test2",
        "Robert Downey"
      ],
      "line": 52,
      "id": "orangehrm;creating-multiple-vacancies;;2"
    },
    {
      "cells": [
        "DevOps Engineer",
        "Orange Test3",
        "Robert Downey"
      ],
      "line": 53,
      "id": "orangehrm;creating-multiple-vacancies;;3"
    },
    {
      "cells": [
        "Rust Engineer",
        "Orange Test4",
        "Robert Downey"
      ],
      "line": 54,
      "id": "orangehrm;creating-multiple-vacancies;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9849955700,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "Creating multiple vacancies",
  "description": "Creating multiple vacancies using data from an external excel spreadsheet",
  "id": "orangehrm;creating-multiple-vacancies;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 42,
      "name": "@Testcase8"
    },
    {
      "line": 1,
      "name": "@HRM"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "Open the page and navigate to the Add Job Vacancy form",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "Fill in the all details \"Android Developer\" and \"Orange Test2\" and \"Robert Downey\" and Click submit",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "Verify that the vacancy was created \"Android Developer\" and \"Orange Test2\" and \"Robert Downey\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Project2_1.naviagation()"
});
formatter.result({
  "duration": 2353746100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Android Developer",
      "offset": 25
    },
    {
      "val": "Orange Test2",
      "offset": 49
    },
    {
      "val": "Robert Downey",
      "offset": 68
    }
  ],
  "location": "Project2_1.Submit(String,String,String)"
});
formatter.result({
  "duration": 1235976400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Android Developer",
      "offset": 37
    },
    {
      "val": "Orange Test2",
      "offset": 61
    },
    {
      "val": "Robert Downey",
      "offset": 80
    }
  ],
  "location": "Project2_1.verify(String,String,String)"
});
formatter.result({
  "duration": 4164821700,
  "status": "passed"
});
formatter.match({
  "location": "Project1_1.close()"
});
formatter.result({
  "duration": 49900,
  "status": "passed"
});
formatter.before({
  "duration": 9477924900,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Creating multiple vacancies",
  "description": "Creating multiple vacancies using data from an external excel spreadsheet",
  "id": "orangehrm;creating-multiple-vacancies;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 42,
      "name": "@Testcase8"
    },
    {
      "line": 1,
      "name": "@HRM"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "Open the page and navigate to the Add Job Vacancy form",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "Fill in the all details \"DevOps Engineer\" and \"Orange Test3\" and \"Robert Downey\" and Click submit",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "Verify that the vacancy was created \"DevOps Engineer\" and \"Orange Test3\" and \"Robert Downey\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Project2_1.naviagation()"
});
formatter.result({
  "duration": 2112047000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DevOps Engineer",
      "offset": 25
    },
    {
      "val": "Orange Test3",
      "offset": 47
    },
    {
      "val": "Robert Downey",
      "offset": 66
    }
  ],
  "location": "Project2_1.Submit(String,String,String)"
});
formatter.result({
  "duration": 1149920900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DevOps Engineer",
      "offset": 37
    },
    {
      "val": "Orange Test3",
      "offset": 59
    },
    {
      "val": "Robert Downey",
      "offset": 78
    }
  ],
  "location": "Project2_1.verify(String,String,String)"
});
formatter.result({
  "duration": 4304501000,
  "status": "passed"
});
formatter.match({
  "location": "Project1_1.close()"
});
formatter.result({
  "duration": 76100,
  "status": "passed"
});
formatter.before({
  "duration": 9316774300,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Creating multiple vacancies",
  "description": "Creating multiple vacancies using data from an external excel spreadsheet",
  "id": "orangehrm;creating-multiple-vacancies;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 42,
      "name": "@Testcase8"
    },
    {
      "line": 1,
      "name": "@HRM"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "Open the page and navigate to the Add Job Vacancy form",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "Fill in the all details \"Rust Engineer\" and \"Orange Test4\" and \"Robert Downey\" and Click submit",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "Verify that the vacancy was created \"Rust Engineer\" and \"Orange Test4\" and \"Robert Downey\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Project2_1.naviagation()"
});
formatter.result({
  "duration": 2017332500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rust Engineer",
      "offset": 25
    },
    {
      "val": "Orange Test4",
      "offset": 45
    },
    {
      "val": "Robert Downey",
      "offset": 64
    }
  ],
  "location": "Project2_1.Submit(String,String,String)"
});
formatter.result({
  "duration": 1079840400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rust Engineer",
      "offset": 37
    },
    {
      "val": "Orange Test4",
      "offset": 57
    },
    {
      "val": "Robert Downey",
      "offset": 76
    }
  ],
  "location": "Project2_1.verify(String,String,String)"
});
formatter.result({
  "duration": 4127770800,
  "status": "passed"
});
formatter.match({
  "location": "Project1_1.close()"
});
formatter.result({
  "duration": 84100,
  "status": "passed"
});
});