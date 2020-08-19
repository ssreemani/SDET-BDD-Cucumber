@CRM
Feature: SuiteCRM

@Testcase9
Scenario: Counting Dashlets
Open the homepage and count the number of the dashlets on the page.  

    Given Open the browser and login
    When Count the number of Dashlets on the homepage
    Then Print the number and title of each Dashlet into the console
		And Close the browser
		
@Testcase10
Scenario Outline: Create leads using parameterization
Open the Leads page and add multiple lead accounts using values passed from  Feature file  

    Given Open the browser Navigate to Create Lead
    When Fill "<First Name>" and "<Last Name>" the necessary details Click Save
    Then Navigate to the View Leads page to see "<First Name>" and "<Last Name>" result
		And Close the browser
		Examples: 
    |  First Name    | Last Name       |      
    |  Testing7      |  Testing7       | 
   
@Testcase11
Scenario Outline: Schedule a meeting and invite members
To schedule a meeting and include at least 3 invitees  

    Given Open the browser Navigate to Schedule a Meeting
    When Fill "<Subject>" and "<Member1>" and "<Member2>" and "<Member3>" the necessary details click Save
    Then Navigate to the View Meetings page to see result
		And Close the browser
		Examples: 
    |  Subject    | Member1       |    Member2    |  Member3 |  
    |  Testing2      |  admin       |    testing1      | testing2    |
 
@Testcase12
Scenario Outline: Creating a Product
To use an external Excel to add products 

    Given Open the browser Navigate to Create Product
    When Fill "<Product Name>" and "<Price>" and click Save
    Then Navigate to the View Products page to see result
		And Close the browser
		Examples: 
    |  Product Name    | Price       |    
    |  Testing      |  1234       |    
         