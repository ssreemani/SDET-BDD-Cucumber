package Cucumber_Runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
    features = "src/Feature",
    glue = {"StepDefinition"},
    tags = {"@JOBS"},
    plugin = { "pretty", "html:target/cucumber-reports/JOBS-reports" },
    strict = true,
    monochrome= true
)
public class ActivityRunner {

}
