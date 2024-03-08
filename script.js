
var questions = [[`R`, `I like to work on car`], [`I`, `I like to do puzzles`], [`A`, `I am good at working independently`],
                       [`S`, `I like to work in teams`], [`E`, `I am an ambitious person, I set goals for myself`], [`C`, `I like to organize things, (files, desks/offices)`],
                       [`R`, `I like to build things`], [`A`, `I like to read about art and music`], [`C`, `I like to have clear instructions to follow`],
                       [`E`, `I like to try to influence or persuade people`], [`I`, `I like to do experiments`], [`S`, `I like to teach or train people`],
                       [`S`, `I like trying to help people solve their problems`], [`R`, `I like to take care of animals`], [`C`, `I wouldn't mind working 8 hours per day in an office`],
                       [`E`, `I like selling things`], [`A`, `I enjoy creative writing`], [`I`, `I enjoy science`],
                       [`E`, `I am quick to take on new responsibilities`], [`S`, `I am interested in healing people`], [`I`, `I enjoy trying to figure out how things work`],
                       [`R`, `I like putting things together or assembling things`], [`A`, `I am a creative person`], [`C`, `I pay attention to details`],
                       [`C`, `I like to do filing or typing`], [`I`, `I like to analyze things (problems/situations)`], [`A`, `I like to play instruments or sing`],
                       [`S`, `I enjoy learning about other cultures`], [`E`, `I would like to start my own business`], [`R`, `I like to cook`],
                       [`A`, `I like acting in plays`], [`R`, `I am a practical person`], [`I`, `I like working with numbers or charts`],
                       [`S`, `I like to get into discussions about issues`], [`C`, `I am good at keeping records of my work`], [`E`, `I like to lead`],
                       [`R`, `I like working outdoors`], [`C`, `I would like to work in an office`], [`I`, `I'm good at math`],
                       [`S`, `I like helping people`], [`A`, `I like to draw`], [`E`, `I like to give speeches`]];

var jobs = { 
    "R" : [
    [`-- Realistic--`],
    [`These people are often good at mechanical or athletic 
    jobs. Good college majors for Realistic people are…`],
    [[`Agriculture`],
    [`Health Assistant`],
    [`Computers`],
    [`Construction`],
    [`Mechanic/Machinist`],
    [`Engineering`],
    [`Food and Hospitality`]]
],
 "I" : [
    [`--Investigative--`],
    [`These people like to watch, learn, analyze and solve 
    problems. Good college majors for Investigative 
    people are…`],
    [[`Marine Biology`],
    [`Engineering`],
    [`Chemistry`],
    [`Zoology`],
    [`Medicine/Surgery`],
    [`Consumer Economics`],
    [`Psychology`]]
],
"A" : [
    [`--Artistic--`],
    [`These people like to work in unstructured situations 
    where they can use their creativity. Good majors for 
    Artistic people are…`],
    [[`Communications`],
    [`Cosmetology`],
    [`Fine and Performing Arts`],
    [`Photography`],
    [`Radio and TV`],
    [`Interior Design`],
    [`Architecture`]]
],
 "S" : [
    [`--Social--`],
    [`These people like to work with other people, 
    rather than things. Good college majors for 
    Social people are…`],
   [[`Counseling`],
    [`Nursing`],
    [`Physical Therapy`],
    [`Travel`],
    [`Advertising`],
    [`Public Relations`],
    [`Education`]]
],
 "E" : [
    [`--Enterprising--`],
    [`These people like to work with others and enjoy 
    persuading and and performing. Good college majors 
    for Enterprising people are:`],
    [[`Fashion Merchandising`]
    [`Real Estate`],
    [`Marketing/Sales`],
    [`Law`],
    [`Political Science`],
    [`International Trade`],
    [`Banking/Finance`]]
],
 "C" : [
    [`--Conventional--`],
    [`These people are very detail oriented,organized 
    and like to work with data. Good college majors 
    for Conventional people are…`],
    [[`Accounting`],
    [`Court Reporting`],
    [`Insurance`],
    [`Administration`],
    [`Medical Records`],
    [`Banking`],
    [`Data Processing`]]
]}
var option = ["agree", "disagree"];
var i = 0;
var types = {
    'R': 0,
    'I': 0,
    'A': 0,
    'S': 0,
    'E': 0,
    'C': 0
};

var maxitems = {}

// -----------------------------------------------
var nextqus = () => {
    event.preventDefault();
    var r = document.getElementById("question");
    r.innerHTML = questions[i][1];
    r.style.width = (r.innerHTML.length * 10) + "px"; // Adjust width based on content length

    // Clear existing radio buttons
    var radioContainer = document.getElementById("radio-container");
    radioContainer.innerHTML = "";

    // Create new radio buttons
    option.forEach(opt => {
        var radioBtn = document.createElement("input");
        radioBtn.setAttribute("type", "radio");
        radioBtn.setAttribute("name", "btn");
        radioBtn.setAttribute("value", opt);
        // radioBtn.style.   ;
        radioContainer.appendChild(radioBtn);

        var label = document.createElement("span");
        label.textContent = opt.charAt(0).toUpperCase() + opt.slice(1); // Capitalize the option
        radioContainer.appendChild(label);
        radioContainer.appendChild(document.createElement("br")); // Line break for spacing
    });

    var container = document.getElementById("next");
    if (container){    
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }}
    var nxt = document.createElement("button");
    nxt.setAttribute("id", "nextbutton");
    nxt.setAttribute("onclick" , "sub()")
    nxt.textContent = "Next"; // Text content of the button
    if (questions[i + 1]) {
        nxt.addEventListener("click", nextqus);
    }

    var container = document.getElementById("next");
    var space = document.createElement("br");
    container.appendChild(nxt);
    container.append(space)
    if (i === 0 ){
    var startrem = document.getElementById("start");
    startrem.remove();
    }
};

// -----------------------------------------------
var sub =() => {
var ele = document.getElementsByName('btn');
for (var j = 0; j < ele.length; j++) {
    if (ele[j].checked && ele[j].value === "agree") {
        types[questions[i][0]]++;
        console.log(types)
         break; // Exit loop once an agree option is found
    }
}
if (questions[i + 1]) {
    i++;
}else{
    var nextrem = document.getElementById("next");
    nextrem.remove();
    var sub = document.createElement("input")
    sub.setAttribute("type","submit")

    var form = document.getElementById("form")
    form.appendChild(sub)
    


}
// nextqus();
}

// -----------------------------------------------

var findlargest = ()  => {
    let maxval = 0
    
    for (let i in types ){
        if (types.hasOwnProperty(i)){
            if (types[i] > maxval){
                maxval = types[i]
            }
        }}
    for (let j in types){
        if (types[j] === maxval){
            maxitems[j] = types[j]
        }
    }
    console.log(maxitems)
}

// -----------------------------------------------
var submitForm = () => {
    event.preventDefault();
    findlargest()
    var fullDiv = document.querySelector('.full');
    fullDiv.innerHTML = "";

    for (let item in maxitems){ 
        for (let job in jobs){
            if (item[0] === job){
            
                // console.log(name[0] , name[1]) 
                const heading = document.createElement("h1")
                const description = document.createElement("p")
                const sectors = document.createElement("ul")

                heading.innerHTML = jobs[job][0]
                heading.style.textAlign="center";

                description.innerHTML = jobs[job][1]
                description.style.margin = "30px"
                description.style.textAlign="center"

                // sectors.style.list-style-type == "none"
                // sectors.style.textAlign="center"
                //for creating list items
                for (i = 0; i < jobs[job][2].length; ++i) {
                    let li = document.createElement('li');
                    li.innerText = jobs[job][2][i];
                    
                    sectors.appendChild(li);
                }

                fullDiv.appendChild(heading) 
                fullDiv.appendChild(description)
                fullDiv.appendChild(sectors)
            }
        }
    }
}