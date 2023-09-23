const click=document.querySelector('.click');
const p=document.querySelector('.joke');



click.addEventListener('click',getJokes)

async function  getJokes(){
  const res =  await fetch('https://api.api-ninjas.com/v1/dadjokes?limit=1',{
    headers: { 'X-Api-Key': 'aaiSIX9fb+6+4lg+B+yf4Q==71r8W2Do5Y3RpRzk'}
  })

  let data= await res.json();
  

  const jokes = data[0].joke;


  p.innerHTML = jokes;

  console.log(res)

  console.log(data)
  console.log(data[0])
  console.log(jokes)



}

getJokes();