import axios from "axios";

const Pochi =  async () =>{
const result= await axios.get(`https://wiki-ideas-back.fly.dev/topics/search/vida`)
console.log(result.data)
console.log(result.message)

return (
    <ul>
                
                {result.data?.map((dat) => (
                    <li key={dat._id}>{dat.title}</li>
                ))}
            </ul>
)

                }

                export default Pochi