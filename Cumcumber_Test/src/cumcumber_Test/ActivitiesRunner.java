package cumcumber_Test;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
    features = "src/Feature",
    glue = {"stepDefinitions"},
    tags = {"@activity1_1, @activity1_2, @activity1_3"},
    plugin = { "pretty", "html:target/cucumber-reports/reports" },
    strict = true,
    monochrome= true
)
public class ActivitiesRunner {

}
