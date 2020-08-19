package StepDefinition;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Project3_1 {

    WebDriver driver;
    WebDriverWait wait; 
    Alert alert;
    
    
    @Before("@Testcase9, @Testcase10, @Testcase11, @Testcase12")
    public void beforeall() {
    	driver = new FirefoxDriver();
    	driver.get("https://alchemy.hguy.co/crm/index.php?action=Login&module=Users");
    	driver.findElement(By.xpath("//*[@id='user_name']")).sendKeys("admin");
    	driver.findElement(By.xpath("//*[@id='username_password']")).sendKeys("pa$$w0rd");
    	driver.findElement(By.xpath("//*[@id='bigbutton']")).click();
    }

//Testcase9: Counting Dashlets    
@Given ("^Open the browser and login$")
public void navigation() {}

//@Testcase10: Create leads using parameterization
@Given ("^Open the browser Navigate to Create Lead$")
public void navigation1() throws InterruptedException {
	//driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
	Actions action = new Actions(driver);
	WebElement we = driver.findElement(By.xpath("//*[text()='Sales']"));
	action.moveToElement(we).build().perform();
	WebDriverWait wait = new WebDriverWait(driver, 15);
    wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//a[@id='moduleTab_9_Leads']"))).click();
	wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//div[text()='Create Lead']"))).click();
}

//Testcase11: Schedule a meeting and invite members
@Given ("^Open the browser Navigate to Schedule a Meeting$")
public void navigation2() {
	//driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
	Actions action = new Actions(driver);
	WebElement we1 = driver.findElement(By.xpath("//*[text()='Activities']"));
	action.moveToElement(we1).build().perform();
	WebDriverWait wait = new WebDriverWait(driver, 15);
    wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//a[@id='moduleTab_9_Meetings']"))).click();
	wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//div[text()='Schedule Meeting']"))).click();	
}

//Testcase12: Creating a Product
@Given ("^Open the browser Navigate to Create Product$")
public void navigation3() {
	//driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
	Actions action = new Actions(driver);
	WebElement we2 = driver.findElement(By.xpath("//*[@id='grouptab_5']"));
	action.moveToElement(we2).build().perform();
	//action.moveToElement(we2,30,0).perform();
	JavascriptExecutor js = (JavascriptExecutor) driver;  
	js.executeScript("window.scrollBy(0,350)");
	WebDriverWait wait = new WebDriverWait(driver, 15);
	wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//a[text()='Products']"))).click();
	wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//div[text()='Create Product']"))).click();	
}

//Testcase9: Counting Dashlets    
@When ("^Count the number of Dashlets on the homepage$")
public void action() {
	driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	List<WebElement> dashlets = driver.findElements(By.xpath("//*[@class='dashletPanel']"));
    // print your number of frames
    System.out.println("Number of Dashlets on the Homepage: " + dashlets.size());
}


//@Testcase10: Create leads using parameterization
@When ("^Fill \"(.*)\" and \"(.*)\" the necessary details Click Save$")
public void action1(String firstname, String lastname) {
	driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
	WebDriverWait wait = new WebDriverWait(driver, 15);
    wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//input[@id='first_name']"))).sendKeys(firstname);;
	driver.findElement(By.xpath("//input[@id='last_name']")).sendKeys(lastname);
	driver.findElement(By.xpath("//input[@id='SAVE']")).click();
	String lead=driver.findElement(By.xpath("//*[text()=' "+firstname+" "+lastname+" ']")).getText();
	System.out.println("Lead name is: " + lead);
}

//Testcase11: Schedule a meeting and invite members
@When ("^Fill \"(.*)\" and \"(.*)\" and \"(.*)\" and \"(.*)\" the necessary details click Save$")
public void action2(String subject, String member1, String member2, String member3) {
	driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	WebDriverWait wait = new WebDriverWait(driver, 15);
    wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='name']"))).sendKeys(subject);
	JavascriptExecutor js = (JavascriptExecutor) driver;  
	js.executeScript("window.scrollBy(0,300)");
	wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='btn_assigned_user_name']"))).click();
	ArrayList<String> tabs = new ArrayList<String> (driver.getWindowHandles());
	driver.switchTo().window(tabs.get(1));
	wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//input[@id='user_name_advanced']"))).sendKeys(member1);
	driver.findElement(By.xpath("//input[@id='search_form_submit']")).click();
	js.executeScript("window.scrollBy(0,300)");
	driver.findElement(By.xpath("/html/body/table[4]/tbody/tr/td[1]/a")).click();
	driver.switchTo().window(tabs.get(0));
	wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//input[@id='search_first_name']"))).sendKeys(member2);
	js.executeScript("window.scrollBy(0,300)");
	driver.findElement(By.xpath("//input[@id='invitees_search']")).click();
	wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='invitees_add_1']"))).click();
	driver.findElement(By.xpath("//input[@id='search_first_name']")).clear();
	wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//input[@id='search_first_name']"))).sendKeys(member3);
	driver.findElement(By.xpath("//input[@id='invitees_search']")).click();
	wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='invitees_add_1']"))).click();
	driver.findElement(By.xpath("//input[@id='SAVE_HEADER']")).click();
	
}

//Testcase12: Creating a Product
@When ("^Fill \"(.*)\" and \"(.*)\" and click Save$")
public void action3(String product, String price) {
	WebDriverWait wait = new WebDriverWait(driver, 15);
    wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='name']"))).sendKeys(product);
    wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='price']"))).sendKeys(price);
    driver.findElement(By.xpath("//*[@id='SAVE']")).click();
}


//Testcase9: Counting Dashlets    
@Then ("^Print the number and title of each Dashlet into the console$")
public void print() {
	driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	List<WebElement> dashlets = driver.findElements(By.xpath("//*[@class='hd dashlet']"));
		for (int i=0;i<dashlets.size();i++)
		{
			System.out.println("Dashlet Name: " +dashlets.get(i).getText());
		}
}

//@Testcase10: Create leads using parameterization
@Then ("^Navigate to the View Leads page to see \"(.*)\" and \"(.*)\" result$")
public void verify(String firstname, String lastname) {
	driver.findElement(By.xpath("//div[text()='View Leads']")).click();
	WebDriverWait wait = new WebDriverWait(driver, 15);
    wait.until(ExpectedConditions.elementToBeClickable(By.xpath("/html/body/div[4]/div/div[3]/form[2]/div[3]/table/tbody/tr[1]/td[3]/b/a"))).click();
	String Name= wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[text()=' "+firstname+" "+lastname+" ']"))).getText();
	System.out.println("Lead Name is: " +Name);
}

//Testcase11: Schedule a meeting and invite members
@Then ("^Navigate to the View Meetings page to see result$")
public void verify1() {
	driver.findElement(By.xpath("//div[text()='View Meetings']")).click();
	WebDriverWait wait = new WebDriverWait(driver, 15);
	wait.until(ExpectedConditions.elementToBeClickable(By.xpath("/html/body/div[4]/div/div[3]/form[2]/div[3]/table/tbody/tr[1]/td[4]/b/a"))).click();
	String Name= wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//div[@type='name']"))).getText();
	System.out.println("Meeting Subject is: " +Name);
}

//Testcase12: Creating a Product
@Then ("^Navigate to the View Products page to see result$")
public void verify2() {
	driver.findElement(By.xpath("//div[text()='View Products']")).click();
	WebDriverWait wait = new WebDriverWait(driver, 15);
	wait.until(ExpectedConditions.elementToBeClickable(By.xpath("/html/body/div[4]/div/div[3]/form[2]/div[3]/table/tbody/tr[1]/td[3]/b/a"))).click();
	String product= wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//div[@type='name']"))).getText();
	System.out.println("Product Name is: " +product);
}
	@After("@Testcase9, @Testcase10, @Testcase11, @Testcase12")
	public void afftereall() {
		driver.close();
	}
}
