package StepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Project2_1 {
    WebDriver driver;
    WebDriverWait wait; 
    Alert alert;

    @Before ("@Testcase5, @Testcase6, @Testcase7, @Testcase8")
    public void beforeall() {
    	driver = new FirefoxDriver();
    	driver.get("http://alchemy.hguy.co:8080/orangehrm/symfony/web/index.php/auth/login");
    	driver.findElement(By.xpath("//*[@id='txtUsername']")).sendKeys("orange");
    	driver.findElement(By.xpath("//*[@id='txtPassword']")).sendKeys("orangepassword123");
    	driver.findElement(By.xpath("//*[@id='btnLogin']")).click();
    }  
    
//Testcase5 & Testcase8 : Creating a job vacancy, Creating multiple vacancies
@Given ("^Open the page and navigate to the Add Job Vacancy form$")
public void naviagation() {
	//driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	WebDriverWait wait = new WebDriverWait(driver, 15);
	wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='menu_recruitment_viewRecruitmentModule']"))).click();
	//driver.findElement(By.xpath("//*[@id='menu_recruitment_viewRecruitmentModule']")).click();
	//driver.findElement(By.xpath("//*[@id='menu_recruitment_viewJobVacancy']")).click();
	wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='menu_recruitment_viewJobVacancy']"))).click();
	//driver.findElement(By.xpath("//*[@id='menu_recruitment_viewJobVacancy']")).click();
	driver.findElement(By.xpath("//*[@id='btnAdd']")).click();
}

//Testcase6: Adding a candidate for recruitment
@Given ("^Open the page and navigate to Candidateinformation$")
public void navigation1() {
	driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	driver.findElement(By.xpath("//*[@id='menu_recruitment_viewRecruitmentModule']")).click();
	driver.findElement(By.xpath("//*[@id='menu_recruitment_viewRecruitmentModule']")).click();
	driver.findElement(By.xpath("//*[@id='btnAdd']")).click();
}

//Testcase7: Adding a candidate for recruitment
@Given ("^Open the page and navigate to Add New Employee page$")
public void navigation2() {
	driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	driver.findElement(By.xpath("//*[@id='menu_pim_viewPimModule']")).click();
	driver.findElement(By.xpath("//*[@id='menu_pim_viewPimModule']")).click();
	driver.findElement(By.xpath("//*[@id='btnAdd']")).click();
}

//Testcase5 & Testcase8 : Creating a job vacancy, Creating multiple vacancies
@When ("^Fill in the all details \"(.*)\" and \"(.*)\" and \"(.*)\" and Click submit$")
public void Submit(String jobTitle, String vacancyname, String manager) {
	Select jobtitle= new Select (driver.findElement(By.xpath("//*[@id='addJobVacancy_jobTitle']")));
	jobtitle.selectByVisibleText(jobTitle);
	driver.findElement(By.xpath("//*[@id='addJobVacancy_name']")).sendKeys(vacancyname);
	driver.findElement(By.xpath("//*[@id='addJobVacancy_hiringManager']")).sendKeys(manager);
	driver.findElement(By.xpath("//*[@id='btnSave']")).click();
}

//Testcase6: Adding a candidate for recruitment
@When ("^Fill in the all details \"(.*)\" and \"(.*)\" and \"(.*)\" and \"(.*)\" and Click save$")
public void Submit1(String FirstName, String LastName, String Email, String Resume) {
	driver.findElement(By.xpath("//*[@id='addCandidate_firstName']")).sendKeys(FirstName);
	driver.findElement(By.xpath("//*[@id='addCandidate_lastName']")).sendKeys(LastName);
	driver.findElement(By.xpath("//*[@id='addCandidate_email']")).sendKeys(Email);
	WebElement uploadElement = driver.findElement(By.xpath("//*[@id='addCandidate_resume']"));
	uploadElement.sendKeys(Resume);
	
	JavascriptExecutor js = (JavascriptExecutor) driver;  
	js.executeScript("window.scrollBy(0,300)");
	driver.findElement(By.xpath("//*[@id='btnSave']")).click();
}

//Testcase7: Adding a candidate for recruitment
@When ("^Fill in the all details \"(.*)\" and \"(.*)\" and \"(.*)\" and \"(.*)\" and Click Submit$")
public void Submit2(String FirstName, String LastName, String Username, String Status) {
	driver.findElement(By.xpath("//*[@id='firstName']")).sendKeys(FirstName);
	driver.findElement(By.xpath("//*[@id='lastName']")).sendKeys(LastName);
	driver.findElement(By.xpath("//*[@id='chkLogin']")).click();
	driver.findElement(By.xpath("//*[@id='user_name']")).sendKeys(Username);
	Select jobtitle= new Select (driver.findElement(By.xpath("//*[@id='status']")));
	jobtitle.selectByVisibleText(Status);
	driver.findElement(By.xpath("//*[@id='btnSave']")).click();
}


//Testcase5 & Testcase8 : Creating a job vacancy, Creating multiple vacancies
@Then ("^Verify that the vacancy was created \"(.*)\" and \"(.*)\" and \"(.*)\"$")
public void verify(String jobTitle, String vacancyname, String manager) {
	driver.findElement(By.xpath("//*[@id='btnBack']")).click();
	driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	Select jobtitle= new Select (driver.findElement(By.xpath("//*[@id='vacancySearch_jobTitle']")));
	jobtitle.selectByVisibleText(jobTitle);
	Select vacancy= new Select (driver.findElement(By.xpath("//*[@id='vacancySearch_jobVacancy']")));
	vacancy.selectByVisibleText(vacancyname);
	Select managername= new Select (driver.findElement(By.xpath("//*[@id='vacancySearch_hiringManager']")));
	managername.selectByVisibleText(manager);
	driver.findElement(By.xpath("//*[@id='btnSrch']")).click();
	WebDriverWait wait = new WebDriverWait(driver, 15);
	String expected= wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//a[text()='"+vacancyname+"']"))).getText();
	System.out.println("The Job Name is: " +expected);
	driver.close();
}

//Testcase6: Adding a candidate for recruitment
@Then ("^Navigate back to the Recruitments page to confirm candidate \"(.*)\" and \"(.*)\" entry$")
public void verify1(String FirstName, String LastName) {
	driver.findElement(By.xpath("//*[@id='btnBack']")).click();
	driver.findElement(By.xpath("//*[@id='candidateSearch_candidateName']")).sendKeys(FirstName+LastName);
	driver.findElement(By.xpath("//*[@id='btnSrch']")).click();
	//driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	JavascriptExecutor js = (JavascriptExecutor) driver;  
	js.executeScript("window.scrollBy(0,300)");
	WebDriverWait wait = new WebDriverWait(driver, 15);
	String candidate= wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//a[text()='"+FirstName+"  "+LastName+"']"))).getText();
	System.out.println("Candidate name is: " +candidate);
	//Assert.assertEquals(FirstName  +LastName, candidate);
	driver.close();
	}

//Testcase7: Adding a candidate for recruitment
@Then ("^Verify that the employees \"(.*)\" and \"(.*)\" have been created$")
public void verify2(String FirstName, String LastName) {
	driver.findElement(By.xpath("//*[@id='btnSave']")).click();
	WebDriverWait wait = new WebDriverWait(driver, 20);
	String firstname= wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='personal_txtEmpFirstName']"))).getText();
	String lastname= wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='personal_txtEmpLastName']"))).getText();
	System.out.println("Candidate First name is: " +firstname + "and Last name is:"  +lastname);
	driver.findElement(By.xpath("//*[@id='btnSave']")).click();
	driver.close();
	}
}
