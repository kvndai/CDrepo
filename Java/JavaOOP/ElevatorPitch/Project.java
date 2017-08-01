/**
 * Project
 */
public class Project {
    private String name;
    private String description;
    private Double initialCost = 0.0;
    public Project () {
        
    }
    public Project (String name) {
        this.name = name;
    }
    public Project (String name, String description) {
        this.name = name;
        this.description = description;
    }

    public String elevatorPitch() {
        System.out.println(name+": "+ description);
        return name + " (" + initialCost + "): " + description;
    }
    public Double getInitialCost() {
        return initialCost;
    }
    public void setInitialCost(Double initialCost) {
        this.initialCost = initialCost;
    }

}