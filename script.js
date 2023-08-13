const menuChevronDown=document.querySelector("#menu-chevron-down");
const menuChevronUp=document.querySelector("#menu-chevron-up");
const menuPage=document.querySelector(".menu-page");



menuChevronDown.addEventListener("click",() => 
{
    menuPage.style.display="flex";
    menuChevronDown.style.display="none";
    menuChevronUp.style.display="inline-block";
})

menuChevronUp.addEventListener("click",() => 
{
    menuPage.style.display="none";
    menuChevronUp.style.display="none";
    menuChevronDown.style.display="inline-block";
})

const menuItems=
[
    {
        id:1,
        img:"https://mcdonalds.az/images/5d61dc895b83f47eafc0f6cbfb353bad.png",
        title:'Burgerler'
    },
    {
        id:2,
        img:"https://mcdonalds.az/images/bf93706e65a4eb7a0bec356f94053f4e.jpg",
        title:'Ickiler'
    },
    {
        id:3,
        img:"https://mcdonalds.az/images/867cff5309d79402a604b6b8b6f6fcce.jpg",
        title:'Happy Meal'
    },
    {
        id:4,
        img:"https://mcdonalds.az/images/d53a391310a492a79740d611bbfd53b9.jpg",
        title:'Qelyanaltilar'
    },
    {
        id:5,
        img:"https://mcdonalds.az/images/5226794fdd6873f66f37ae0397286b8c.png",
        title:'Salatlar'
    },
    {
        id:6,
        img:"https://mcdonalds.az/images/5465ab8529156a71e76c3d569863862b.png",
        title:'Souslar'
    },
    {
        id:7,
        img:"https://mcdonalds.az/images/fed86781205af0e755e7553dbf0da55b.jpg",
        title:'Sirniyyat ve Kokteyller'
    },
    {
        id:8,
        img:"https://mcdonalds.az/images/decdafe4e7aa96fbb17420635b19eec3.jpg",
        title:'Isti Ickiler'
    },
    {
        id:9,
        img:"https://mcdonalds.az/images/879d7da33c37647f84a6a22e87c658b3.png",
        title:'McCafe'
    },
]
   

menuItems.forEach((item)=>
{
    const menuItem =document.createElement("div");
    menuItem.classList.add("menu-item");
    menuPage.appendChild(menuItem)
    const menuItemImg = document.createElement("div");
    menuItemImg.classList.add("menu-item-img");
    menuItem.appendChild(menuItemImg);
    const menuItemTitle = document.createElement("p");
    menuItemTitle.classList.add("menu-item-title");
    menuItem.appendChild(menuItemTitle);
    menuItemImg.style.backgroundImage =`url(${item.img})`;
    menuItemTitle.innerHTML=item.title;
})