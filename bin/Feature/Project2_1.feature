@HRM
Feature: OrangeHRM

@Testcase5
Scenario Outline: Counting Dashlets
To create a job vacancy for “DevOps Engineer”

    Given Open the page and navigate to the Add Job Vacancy form
    When Fill in the all details "<Job Title>" and "<Vacancy Name>" and "<Hiring Manager>" and Click submit
    Then Verify that the vacancy was created "<Job Title>" and "<Vacancy Name>" and "<Hiring Manager>"
    And Close the browser
    Examples: 
      |      Job Title       |      Vacancy Name      |    Hiring Manager  |  
      |  DevOps Engineer    |   Orange Test1         |    Robert Downey         |    

@Testcase6
Scenario Outline: Adding a candidate for recruitment
Add information about a candidate for recruitment

    Given Open the page and navigate to Candidateinformation
    When Fill in the all details "<First Name>" and "<Last Name>" and "<Email>" and "<Resume>" and Click save
    Then Navigate back to the Recruitments page to confirm candidate "<First Name>" and "<Last Name>" entry
		And Close the browser
     Examples: 
      | First Name       |      Last Name      |    Email                     |  Resume                                               |
      |  orange Test4    |   orange Test4      |    orangetest4@gmail.com     |    C:\Users\SudiptaSreemani\Desktop\Bitlocker.pdf     |

      
@Testcase7
Scenario Outline: Adding a candidate for recruitment
Add multiple employees using an the Examples table

    Given Open the page and navigate to Add New Employee page
    When Fill in the all details "<First Name>" and "<Last Name>" and "<Username>" and "<Status>" and Click Submit
    Then Verify that the employees "<First Name>" and "<Last Name>" have been created
		And Close the browser
     Examples: 
      | First Name       |      Last Name      |    Username               |    Status         |
      |  orange Test7    |   orange Test7      |    orangetest7                |    Enabled        |
      |  orange Test8    |   orange Test8      |    orangetest8                |    Disabled       |
      
@Testcase8
Scenario Outline: Creating multiple vacancies
Creating multiple vacancies using data from an external excel spreadsheet

    Given Open the page and navigate to the Add Job Vacancy form
    When Fill in the all details "<Job Title>" and "<Vacancy Name>" and "<Hiring Manager>" and Click submit
    Then Verify that the vacancy was created "<Job Title>" and "<Vacancy Name>" and "<Hiring Manager>"
    And Close the browser
    Examples: 
      |      Job Title       |      Vacancy Name      |    Hiring Manager  |  
      |  Android Developer    |   Orange Test2         |    Robert Downey  |   
      |  DevOps Engineer   |   Orange Test3         |    Robert Downey     |   
      |  Rust Engineer    |   Orange Test4        |    Robert Downey      |         