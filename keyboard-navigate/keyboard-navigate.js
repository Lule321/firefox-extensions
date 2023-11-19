
var listOfATags = [];
var selected = -1;

document.addEventListener('keyup', (e) => {
    if(listOfATags.length == 0)
    {
        listOfATags = document.querySelectorAll("div div div div div div div span a[jsname='UWckNb']");
    }
    let code = e.code;
    if(code == "KeyW")
    {

    }
    else if(code == "KeyS")
    {
        if(selected >= 0)
        {

        }
        if(selected + 1 < listOfATags.length)
        {
            selected++;
            let selectedTag = listOfATags[selected];

            for(let child of selectedTag.children)
            {
                if(child.tagName == 'H3')
                {

                    child.setAttribute('style', 'text-decoration: underline;');
                    break;
                }
            }
            console.log(selectedTag);
        }

        console.log(selected)

        
    }
}, false);