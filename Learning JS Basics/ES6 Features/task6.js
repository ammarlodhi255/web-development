class HttpError extends Error { 
    constructor(response) { 
        super(
            `${response.status} for ${response.url}`
        ); 
        this.name = 'HttpError'; 
        this.response = response; 
    }
}

async function loadJson(url) { 
    let response = await fetch(url); 
    if (response.status == 200) 
        return response.json(); 
    else 
        throw new HttpError(response); 
}

async function demoGithubUser() { 
    let user = '';
    
    while (!user) {
        let name = prompt("Enter a name?", "iliakan");
        
        try {
            user = await loadJson(`https://api.github.com/users/${name}`);
        } catch(err) { 
            if (err instanceof HttpError && err.response.status == 404) { 
                alert("No such user, please reenter."); 
                continue; 
            } else {
                throw err; 
            } 
        }
    }
    alert(`Full name: ${user.name}.`); 
    return user; 
}