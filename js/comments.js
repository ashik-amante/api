const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('error occured', error)
        )
}


const loadData2 = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/comments')
        const data = await res.json();
        console.log(data);
    }
    catch(error){
        console.error('load data error');
        
    }
}