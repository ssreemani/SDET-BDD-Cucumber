@JOBS
Feature: Application: Alchemy Jobs

@Testcase1
Scenario Outline: Create a new user
    Given Navigate to admin page and Login
    And  Click on Users button and Add New button
    When Fill in the necessary details "<user_login>" and "<email>" and Click the Add New User button
    Then Verify that the user was created with "<user_login>" 
    And Close the browser
        Examples: 
      |      user_login       |      email      |    
      |      jobs1             |   jobs1@gmail.com   |  

@Testcase2
Scenario: Searching for jobs using XPath
    Given Open browser and navigate to Jobs page
    And  Search for jobs and filter job type 
    When Find a job and see job details
    Then Find the title of the job and Apply for job
    And Close the browser

@Testcase3
Scenario:  Posting a job using parameterization
    Given Open browser and navigate to Post a Jobs page
    When fill in the all details "jobtest2@gmail.com" and "Job Test2" and "Kolkata" and "None" and "https://www.ambrino.com" and "IBM" and Click submit
    Then Go to the Jobs page and check the job "Job Test2" and "Kolkata"
		And Close the browser
		
@Testcase4
Scenario Outline: Using Examples table to post a job
    Given Open browser and navigate to Post a Jobs page
    When fill in the all details "<Email>" and "<Title>" and "<Location>" and "<Desription>" and "<URL>" and "<Company Name>" and Click submit
    Then Go to the Jobs page and check the job "<Title>" and "<Location>"
		And Close the browser
    Examples: 
      |      Email       |      Title      |    Location  |  Desription  |             URL            |   Company Name |
      |  jobtest3@gmail.com  |   Job Test3   |    Kolkata   |    None      |   https://www.ambrino.com  |       IBM      |
      
