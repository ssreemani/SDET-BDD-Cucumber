$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Activity1_1.feature");
formatter.feature({
  "line": 2,
  "name": "First Test",
  "description": "",
  "id": "first-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@activity1_1"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Opening a webpage using Selenium",
  "description": "",
  "id": "first-test;opening-a-webpage-using-selenium",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User is on Google Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User types in Cheese and hits ENTER",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Show how many search results were shown",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "GoogleSearchSteps.userIsOnGooglePage()"
});
formatter.result({
  "duration": 10080515000,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchSteps.userTypesInCheeseAndHitsENTER()"
});
formatter.result({
  "duration": 431080800,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchSteps.showHowManySearchResultsWereShown()"
});
formatter.result({
  "duration": 1421664700,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchSteps.closeTheBrowser()"
});
formatter.result({
  "duration": 1821909100,
  "status": "passed"
});
formatter.uri("Activity1_2.feature");
formatter.feature({
  "line": 2,
  "name": "Login Test",
  "description": "",
  "id": "login-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@activity1_2"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Testing Login",
  "description": "",
  "id": "login-test;testing-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters username and password",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Read the page title and confirmation message",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestSteps.loginPage()"
});
formatter.result({
  "duration": 8653431000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.enterCredentials()"
});
formatter.result({
  "duration": 421552800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.readTitleAndHeading()"
});
formatter.result({
  "duration": 93407000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.closeBrowser()"
});
formatter.result({
  "duration": 1682742000,
  "status": "passed"
});
formatter.uri("Activity1_3.feature");
formatter.feature({
  "line": 2,
  "name": "Testing with Tags",
  "description": "",
  "id": "testing-with-tags",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@activity1_3"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Testing with Simple Alert",
  "description": "",
  "id": "testing-with-tags;testing-with-simple-alert",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@SimpleAlert"
    },
    {
      "line": 4,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on the page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks the Simple Alert button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Alert opens",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Read the text from it and print it",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Close the alert",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Close Browser",
  "keyword": "And "
});
formatter.match({
  "location": "AlertTestSteps.openPage()"
});
formatter.result({
  "duration": 8570554500,
  "status": "passed"
});
formatter.match({
  "location": "AlertTestSteps.openSimpleAlert()"
});
formatter.result({
  "duration": 92671000,
  "status": "passed"
});
formatter.match({
  "location": "AlertTestSteps.switchFocus()"
});
formatter.result({
  "duration": 6170000,
  "status": "passed"
});
formatter.match({
  "location": "AlertTestSteps.readAlert()"
});
formatter.result({
  "duration": 10877400,
  "status": "passed"
});
formatter.match({
  "location": "AlertTestSteps.closeAlert()"
});
formatter.result({
  "duration": 32205900,
  "status": "passed"
});
formatter.match({
  "location": "AlertTestSteps.closeBrowser()"
});
formatter.result({
  "duration": 1705789100,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Testing with Simple Alert",
  "description": "",
  "id": "testing-with-tags;testing-with-simple-alert",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@ConfirmAlert"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User is on the page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User clicks the Confirm Alert button",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Alert opens",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Read the text from it and print it",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Close the alert with Cancel",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Close Browser",
  "keyword": "And "
});
formatter.match({
  "location": "AlertTestSteps.openPage()"
});
formatter.result({
  "duration": 9027493400,
  "status": "passed"
});
formatter.match({
  "location": "AlertTestSteps.openConfirmAlert()"
});
formatter.result({
  "duration": 87839400,
  "status": "passed"
});
formatter.match({
  "location": "AlertTestSteps.switchFocus()"
});
formatter.result({
  "duration": 11197800,
  "status": "passed"
});
formatter.match({
  "location": "AlertTestSteps.readAlert()"
});
formatter.result({
  "duration": 6865300,
  "status": "passed"
});
formatter.match({
  "location": "AlertTestSteps.closeAlertWithCAncel()"
});
formatter.result({
  "duration": 68002800,
  "status": "passed"
});
formatter.match({
  "location": "AlertTestSteps.closeBrowser()"
});
formatter.result({
  "duration": 1636289700,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Testing with Simple Alert",
  "description": "",
  "id": "testing-with-tags;testing-with-simple-alert",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@PromptAlert"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "User is on the page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User clicks the Prompt Alert button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Alert opens",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Read the text from it and print it",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Write a custom message in it",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Close the alert",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Close Browser",
  "keyword": "And "
});
formatter.match({
  "location": "AlertTestSteps.openPage()"
});
formatter.result({
  "duration": 9025822600,
  "status": "passed"
});
formatter.match({
  "location": "AlertTestSteps.openPromptAlert()"
});
formatter.result({
  "duration": 86317000,
  "status": "passed"
});
formatter.match({
  "location": "AlertTestSteps.switchFocus()"
});
formatter.result({
  "duration": 32012600,
  "status": "passed"
});
formatter.match({
  "location": "AlertTestSteps.readAlert()"
});
formatter.result({
  "duration": 13537300,
  "status": "passed"
});
formatter.match({
  "location": "AlertTestSteps.writeToPrompt()"
});
formatter.result({
  "duration": 15507600,
  "status": "passed"
});
formatter.match({
  "location": "AlertTestSteps.closeAlert()"
});
formatter.result({
  "duration": 41644700,
  "status": "passed"
});
formatter.match({
  "location": "AlertTestSteps.closeBrowser()"
});
formatter.result({
  "duration": 1850166400,
  "status": "passed"
});
});