$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/vineelaa/Desktop/Test/BDDProject/src/main/java/features/login.feature");
formatter.feature({
  "line": 1,
  "name": "FreeCrm login feature",
  "description": "",
  "id": "freecrm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#Scenario: FreeCrm Login test scenario"
    },
    {
      "line": 5,
      "value": "#Given User is already in loginpage"
    },
    {
      "line": 6,
      "value": "#When title of login page is FreeCrm"
    },
    {
      "line": 7,
      "value": "#Then user enters \"batchautomation\" and \"Test@12345\""
    },
    {
      "line": 8,
      "value": "#And user clicks on login button"
    },
    {
      "line": 9,
      "value": "#Then user is on home Page"
    },
    {
      "line": 12,
      "value": "#with example keyword"
    }
  ],
  "line": 14,
  "name": "FreeCrm Login test scenario",
  "description": "",
  "id": "freecrm-login-feature;freecrm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User is already in loginpage",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "title of login page is FreeCrm",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user is on home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "freecrm-login-feature;freecrm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 25,
      "id": "freecrm-login-feature;freecrm-login-test-scenario;;1"
    },
    {
      "cells": [
        "batchautomation",
        "Test@12345"
      ],
      "line": 26,
      "id": "freecrm-login-feature;freecrm-login-test-scenario;;2"
    },
    {
      "cells": [
        "tom",
        "test@123"
      ],
      "line": 27,
      "id": "freecrm-login-feature;freecrm-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "FreeCrm Login test scenario",
  "description": "",
  "id": "freecrm-login-feature;freecrm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User is already in loginpage",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "title of login page is FreeCrm",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user enters \"batchautomation\" and \"Test@12345\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user is on home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_already_in_loginpage()"
});
formatter.result({
  "duration": 12319317300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page_is_FreeCrm()"
});
formatter.result({
  "duration": 11780500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "batchautomation",
      "offset": 13
    },
    {
      "val": "Test@12345",
      "offset": 35
    }
  ],
  "location": "LoginStepDefination.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 237556700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 5888398900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_home_Page()"
});
formatter.result({
  "duration": 21167100,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Free CRM - CRM software for customer relationship management, sales, and support.]\u003e but was:\u003c[CRMPRO]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat stepDefination.LoginStepDefination.user_is_on_home_Page(LoginStepDefination.java:39)\r\n\tat ✽.Then user is on home Page(C:/Users/vineelaa/Desktop/Test/BDDProject/src/main/java/features/login.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefination.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 27,
  "name": "FreeCrm Login test scenario",
  "description": "",
  "id": "freecrm-login-feature;freecrm-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User is already in loginpage",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "title of login page is FreeCrm",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user enters \"tom\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user is on home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_already_in_loginpage()"
});
formatter.result({
  "duration": 9085192200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page_is_FreeCrm()"
});
formatter.result({
  "duration": 49818700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tom",
      "offset": 13
    },
    {
      "val": "test@123",
      "offset": 23
    }
  ],
  "location": "LoginStepDefination.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 788822300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 5561223300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_home_Page()"
});
formatter.result({
  "duration": 9227300,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Free CRM - CRM software for customer relationship management, sales, and support.]\u003e but was:\u003c[CRMPRO]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat stepDefination.LoginStepDefination.user_is_on_home_Page(LoginStepDefination.java:39)\r\n\tat ✽.Then user is on home Page(C:/Users/vineelaa/Desktop/Test/BDDProject/src/main/java/features/login.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefination.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});