import axios from 'axios'

function UseDelete(result) {

    console.log("Data in delete function: ",result);
    axios.delete(`https://wiki-ideas-back.fly.dev/topics/${result}`)
        // .then(function (response) {
        //     console.log(response);
        // })
        .then((response)=>{
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    //   return (
    //     <div>UseEdit</div>
    //   )
}

export default UseDelete