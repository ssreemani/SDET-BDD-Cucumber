package StepDefinition;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class Project1_1 {
    WebDriver driver;
    WebDriverWait wait; 
    Alert alert;

//Testcase1: Create a new user     
@Given ("^Navigate to admin page and Login$")
public void openadmin() {
	driver = new FirefoxDriver();
	driver.get("https://alchemy.hguy.co/jobs/wp-admin");
	
	driver.findElement(By.xpath("//input[@id=\"user_login\"]")).sendKeys("root");
	driver.findElement(By.xpath("//input[@id=\"user_pass\"]")).sendKeys("pa$$w0rd");
	driver.findElement(By.xpath("//input[@id=\"wp-submit\"]")).click();
}

//Testcase2:Searching for jobs using XPath
@Given ("^Open browser and navigate to Jobs page$")
public void jobpage() {
	driver = new FirefoxDriver();
	driver.get("https://alchemy.hguy.co/jobs/");
	driver.findElement(By.id("menu-item-24")).click();
}

//Testcase 3 & 4 :Posting a job
@Given ("^Open browser and navigate to Post a Jobs page$")
public void postjobs() {
	driver = new FirefoxDriver();
	driver.get("https://alchemy.hguy.co/jobs/");
	driver.findElement(By.id("menu-item-26")).click();
}

//Testcase1: Create a new user 
@And ("^Click on Users button and Add New button$")
public void navigation() {
	driver.findElement(By.xpath("//div[text()='Users']")).click();	
	driver.findElement(By.xpath("//a[@class='page-title-action']")).click();
}

//Testcase2:Searching for jobs using XPath
@And ("^Search for jobs and filter job type$")
public void seachjobs() {
	driver.findElement(By.xpath("//input[@id='search_keywords']")).clear();
	driver.findElement(By.xpath("//input[@id='search_location']")).clear();
	driver.findElement(By.xpath("//input[@id='search_keywords']")).sendKeys("Automation Tester");
	driver.findElement(By.xpath("//input[@id='search_location']")).sendKeys("Kolkata");
	driver.findElement(By.xpath("//input[@value='Search Jobs']")).click();
}

//Testcase1: Create a new user 
@When ("^Fill in the necessary details \"(.*)\" and \"(.*)\" and Click the Add New User button$")
public void fillup(String user_login, String email) throws InterruptedException {
	driver.findElement(By.xpath("//*[@id='user_login']")).sendKeys(user_login);
	driver.findElement(By.xpath("//*[@id='email']")).sendKeys(email);
	
	WebDriverWait wait = new WebDriverWait(driver, 20);
    wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[text()='Show password']"))).click();
	//driver.findElement(By.xpath("//*[text()='Show password']")).click();
    wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='pass1']"))).click();
	//driver.findElement(By.xpath("//*[@id='pass1']")).click();
	
	JavascriptExecutor js = (JavascriptExecutor) driver;  
	js.executeScript("window.scrollBy(0,300)");
	Thread.sleep(20);
	wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='createusersub']"))).click();
	//driver.findElement(By.xpath("//*[@id='createusersub']")).click();
}

//Testcase2:Searching for jobs using XPath
@When ("^Find a job and see job details$")
public void jobdetails() {
	driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	driver.findElement(By.xpath("//*[@id='job_type_freelance']")).click();
	driver.findElement(By.xpath("//*[@id='job_type_internship']")).click();
	driver.findElement(By.xpath("//*[@id='job_type_part-time']")).click();
	driver.findElement(By.xpath("//*[@id='job_type_temporary']")).click();
	driver.findElement(By.xpath("//*[text()='Automation Tester']")).click();
}

//Testcase 3 & 4 :Posting a job
@When ("^fill in the all details \"(.*)\" and \"(.*)\" and \"(.*)\" and \"(.*)\" and \"(.*)\" and \"(.*)\" and Click submit$")
public void postajob(String email, String title, String location, String description, String url, String company) 
{
	driver.findElement(By.xpath("//input[@id='create_account_email']")).sendKeys(email);
	driver.findElement(By.xpath("//input[@id='job_title']")).sendKeys(title);
	driver.findElement(By.xpath("//input[@id='job_location']")).sendKeys(location);
	
	JavascriptExecutor js = (JavascriptExecutor) driver;  
	js.executeScript("window.scrollBy(0,300)");
	   
	driver.findElement(By.xpath("//iframe[@id='job_description_ifr']")).sendKeys(description);
	driver.findElement(By.xpath("//input[@id='application']")).sendKeys(url);
	driver.findElement(By.xpath("//input[@id='company_name']")).sendKeys(company);
	
	js.executeScript("window.scrollBy(0,500)");
	driver.findElement(By.xpath("//input[@name='submit_job']")).click();
	driver.findElement(By.xpath("//input[@id='job_preview_submit_button']")).click();
}

//Testcase1: Create a new user 
@Then ("^Verify that the user was created with \"(.*)\"$")
public void verify(String user_login) {
	WebDriverWait wait = new WebDriverWait(driver, 15);
    wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='user-search-input']"))).sendKeys(user_login);
	wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='search-submit']"))).click();
	String expected= driver.findElement(By.xpath("//*[text()='"+user_login+"']")).getText();
	System.out.println("Jobs added: " +expected);
	Assert.assertEquals(user_login, expected);
}


//Testcase2:Searching for jobs using XPath
@Then ("^Find the title of the job and Apply for job$")
public void verfiyjob() {
	String title= driver.findElement(By.xpath("//*[@class='entry-title']")).getText();
	System.out.println("Job Title is: "+title);
	driver.findElement(By.xpath("//*[@class='application_button button']")).click();
}

//Testcase 3 & 4 :Posting a job
@Then ("^Go to the Jobs page and check the job \"(.*)\" and \"(.*)\"$")
public void checkjob(String title, String location) {
	driver.findElement(By.id("menu-item-24")).click();
	driver.findElement(By.xpath("//input[@id='search_keywords']")).sendKeys(title);
	driver.findElement(By.xpath("//input[@id='search_location']")).sendKeys(location);
	driver.findElement(By.xpath("//input[@value='Search Jobs']")).click();
}

@And ("^Close the browser$")
public void close() {
	driver.close();
	//driver.quit();
}
}
