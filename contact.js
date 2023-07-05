function check()
{
    let Name = document.getElementById('name').value;
    let Email = document.getElementById('email').value;
    let Query = document.getElementById('query').value;

    let user={
        name:Name,
        email:Email,
        query:Query
    }

    if(Name.length>1 && Email.length>10 && Query.length>1)
    {
        fetch('https://travebai---contact-default-rtdb.firebaseio.com/user.json',
        {
            method:'post',
            body:JSON.stringify(user)
        }).then(()=>
        {
            alert('Thank You For Contacting Us.');
            document.getElementById('name').value="";
            document.getElementById('email').value="";
            document.getElementById('query').value="";
            window.location.href='./contact.html'
        }) 
    }
    else if(Name.length<=1 && Query.length<=1 && Email.length<=10){
        alert('Please fill all Details.')
    }
    else if(Name.length<=1)
    {
        alert('Please give a Valid Name.')
    }
    else if(Email.length<=10){
        alert('Please enter a valid Email ID')
    }
    else if(Query.length<=1){
        alert('Your message is too short.')
    }
}