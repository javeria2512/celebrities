let celebrities = [
    {
        name:  "Abdul Qadir Khan",
        title :  "Nuclear Physicist",
        imgURL:"qadeer.jpg",
        readMoreURL:"https://en.wikipedia.org/wiki/Abdul_Qadeer_Khan",
        quote: "I am proud of my work for my country."
    },
    {
        name: "Abdul Sattar Edhi",
        title:"Founder, Edhi Foundation",
        imgURL: "edhi.jpg",
        readMoreURL:"https://en.wikipedia.org/wiki/Abdul_Sattar_Edhi",
        quote:"No religion is higher than humanity"
    },
    {
        name: "Quaid-e-Azam",
        title : "Founder of Pakistan",
        imgURL:"Jinnah.jpg",
        readMoreURL:"https://en.wikipedia.org/wiki/Muhammad_Ali_Jinnah",
        quote:"No nation can rise to the height of glory un-less your women are side by side with you."
    },
    {
        name: "Malala Yousuf Zai",
        title : "Female Education Activist",
        imgURL: "malal.jpg",
        readMoreURL:"https://en.wikipedia.org/wiki/Malala_Yousafzai",
        quote:"One child, one teacher, one book, one pen can change the world"
    },
    {
        name: "Allama Iqbal",
        title : "Spiritual Father of Pakistan.",
        imgURL:"allama.jpg",
        readMoreURL:"https://en.wikipedia.org/wiki/Muhammad_Iqbal",
        quote:"Nations are born in the hearts of poets, they prosper and die in the hands of politicians."
    },
    {
        name :"Arfa Karim",
        title:" Microsoft Certified Professional (MCP)",
        imgURL:"arfa.jpg",
        readMoreURL:"https://en.wikipedia.org/wiki/Arfa_Karim",
        quote:"Never let shyness conquer your mind."
    },
    {
        name : "Nawaz Sharif",
        title:"Chief Minister of Punjab",
        imgURL:"nawaz.jpg",
        readMoreURL:"https://en.wikipedia.org/wiki/Nawaz_Sharif",
        quote:"Rumours are always around but don't belive them"
    }
    
]

    function initialize (){
        let boldyEl= document.querySelector("#celeb-List");
        console.log(boldyEl);

        let name=document.querySelector("p");
        for(let i=0; i<celebrities.length; i++){
            boldyEl.innerHTML+= `
                <div class="celeb-img" 
                style="background-image:
                url('images/${celebrities[i].imgURL}')" onclick="changeCeleb(${i})">
                <p class="img-txt" >${celebrities[i].name}</p>
            </div>
        `
    }
   
}
    function changeCeleb(celebIndex){
    
        console.log(celebrities[celebIndex].name);  
        document.querySelector("#celeb-quote").innerHTML = celebrities[celebIndex].quote;
        document.querySelector("#celeb-name").innerHTML = celebrities[celebIndex].name;
        document.querySelector("#celeb-title").innerHTML = celebrities[celebIndex].title;
        document.querySelector("#celeb-img").style["background-image"]=`url(images/${celebrities[celebIndex].imgURL})`;
        document.querySelector("#celeb-quote").innerHTML = celebrities[celebIndex].quote;
        document.querySelector("#celeb-link a").href = celebrities[celebIndex].readMoreURL;

    }

