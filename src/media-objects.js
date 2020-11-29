// File for media objects

class MediaObject {
    constructor(tags, name, description, link, image, bg="has-background-info"){
        this.tags = tags;
        this.name = name;
        this.description = description;
        this.link = link;
        this.image = image;
        this.bg = bg;
    }
    tile(){
        let tags = `<div class="tags">`;
        for (let i of this.tags){
            tags += `<span class="tag">${i}</span>`;
        };
        tags += "</div>";

        return `
            <div class="tile is-child">
                <div class="tile">
                <article class=" box ${this.bg}">
                    <div class="container has-text-light">
                    <p class="title has-text-light has-text-weight-bold has-text-centered">${this.name}</p>
                    <a href="${this.link}" target="_blank">
                        <p class="subtitle has-text-light has-text-left has-text-weight-bold">Click here to view media</p>
                    </a>
                    <p class="content">${this.description}</p>
                    ${tags}
                    </div>
                </article>
                </div>
            </div>`;
    }
}
 
export const MediaObjects = [
    new MediaObject(["human concepts", "biology concepts"], 
    "Heart Model", 
    "Illustrates the process of how our heart circulates blood throughout our body. "+
    "Demonstrates masterys of human and biology concepts by illustrating the complexity & physiology of our heart which operates as an essential organ to our species.", 
    "./assets/heart_model.pdf", 
    null),
 
    new MediaObject(
    ["human connections"], 
    "Digestive System Game", 
    "Hypothetical game designed around teaching players about the stages of digestion and the interplay of various organs in absorbing nutrients. "+
    "Demonstrates mastery of human connections as an form of media showcasing the function of the human digestive system.", 
    "./assets/digestion_game.pdf", null, "has-background-danger"),
 
    new MediaObject(["science skills"], 
    "Qualitative & Quantitative Data Collection Methods", 
    "Document describing various qualitative and quantitative body parameters a person could measure as an experiment." +
    " Clearly demonstrates science skills by outlining differences and examples between qualitative and quantitative data collection methods.",
     "./assets/qualitative_quantitative.pdf", null),
 
    new MediaObject(["human connections", "human concepts"],
    "Body Water Multimedia",
    "A video and infographic which both describe some general roles which water plays in our body."+
    " Demonstrates mastery over human connections & concepts as a form of mixed-media describing our body's need and uses of water.",
    "./assets/body_water.pdf", null, "has-background-primary"),
 
    new MediaObject(
        ["human skills"],
        "Personalized Lab Safety Checklist",
        "A comprehensive checklist about indoor and outdoor lab procedures."+
        " Demonstrates mastery of human biology skills by explicitly explaining safe lab practices.",
        "./assets/safety_checklist.pdf",
        null,
        "has-background-warning"
    ),
    new MediaObject(
        ["human skills", "biology skills", "science skills"],
        "Body Parameter Experimental Procedure",
        "A description of my personal experiment of tracking my sleep schedule and general health over the spring term."+
        " Demonstrates mastery over human skills by being self-analysis, mastery over biology skills by including data collecting procedures and mastery over"
        +" science skills as an example of long-term studying.",
        "./assets/body_parameter_experiment.pdf",
        null,
        "has-background-danger"
    ),
    new MediaObject(
        ["science skills", "science concepts"],
        "Digitized Notes on Module 1A",
        "Thorough notes about the structure of cells and the various lenses through which we study biology & anatomy in this course."+
        " Explicitly demonstrates mastery of science skills & concepts through descriptive notes about the general function of cells.",
        "./assets/1a_notes.pdf",
        null,
        "has-background-warning"
    ),
    new MediaObject(
        ["biology connections"],
        "Mini Stress Study",
        "A quick self-done report on the quality of various stress-measuring questionnaires."+
        " Demonstrates biology connections by demonstrating current limitations of self-diagnosing stress via questionnaires.",
        "./assets/MiniStressStudy.pdf",
        null,
        "has-background-primary"
    ),
    new MediaObject(
        ["science connections"],
        "Secondary Science News Source Evaluation",
        "A review of a very inflammatory and misleading article relating to Coronavirus and possible treatments." + 
        " Demonstrates mastery of science connections by criticizing particular practices in the reporting of science in regards to current events.",
        "./assets/SecondarySource.pdf",
        null
    ),
    new MediaObject(
        ["biology skills"],
        "Body Parameters Data Visualization",
        "A brief overview of my data collecting methodology followed by visual representations of some of the body parameters I collected (hours slept & distance walked)."+
        " Demonstrates biology skills by show-casing data visualization & research design/data management through explaining the methodology behind the hours slept calculations.",
        "./assets/dataviz.pdf",
        null,
        "has-background-warning"
    ),
    new MediaObject(
        ["biology connections"],
        "Novel Sensory Experience",
        "My hedonic rating for consuming a kiwi-fruit"+
        "Demonstrates mastery of biology connections in the form of describing an every-day experience like eating food in regards to our body's predominate senses.",
        "./assets/novel_sensory_experience_media.pdf",
        null,
        "has-background-primary"
    ),
    new MediaObject(
        ["science connections"],
        "Honey Bee Invasive Species Story",
        "A science story about the invasive threats to western honey bee populations."+
        " Demonstrates mastery of science connections by describing global issues relating to honey bees & and their invasive predators.",
        "./assets/honeybee.pdf",
        null,
        "has-background-danger"
    ),
    new MediaObject(
        ["biology concepts"],
        "Immune System Quiz Answers",
        "Quiz answers which demonstrate an understanding over how our organ systems protect us from pathogens."+
        " Demonstrates mastery of biology concepts through describing the mechanisms behind our immune systems which work against infectious diseases.",
        "./assets/quizImmuneSystem.pdf",
        null
    ),
    new MediaObject(
        ["human connections"],
        "Life Stages Media",
        "Images meant to convey the message of how we grow and change with the times, both physically but also metaphysically." + 
        " Demonstrates mastery of human connections as it is photos communicating a message about humans.",
        "./assets/lifeStages.pdf",
        null,
        "has-background-danger"
    ),
    new MediaObject(
        ["science connections"],
        "Data Collection Reflection",
        "Thoughts about how some general science related concepts of Peer-Review & Ethical considerations play a role in my simple data collection project." +
        " This demonstrates mastery of science connections by showing how some cultural norms of surrounding science and ethical science may relate to my data collection.",
        "./assets/DataReflection.pdf",
        null,
        "has-background-primary"
    ),
    new MediaObject(
        ["science concepts"],
        "Quiz Answers about Science History, Patterns, Cause & Effect",
        "Curated quiz answers demonstrating mastery of a variety of general science concepts such as the history & patterns behind vaccine development.",
        "./assets/scienceHist.pdf",
        null,
        "has-background-warning"
    ),
    new MediaObject(
        ["biology connections"],
        "Lifelong Scientific Objectives",
        "Bucket list of science-related experiences I would like to have during my lifetime.  Demonstrates mastery of biology connections as a thorough"+
        " example of a life-long learning plan/list of metaphorical 'destinations'.",
        "./assets/LifelongScience.pdf",
        null
    ),
    new MediaObject(
        ["biology concepts"],
        "Curated Quiz Answers about Biology Concepts",
        "Demonstrates mastery of biology concepts of by explaining homeostatis, the general structure, function and interaction of various organs.",
        "./assets/bioConceptsQuiz.pdf",
        null,
        "has-background-danger"
    )
];
 
 

