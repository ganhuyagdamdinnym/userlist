// import { useState } from "react"

// export default function Logout() {
//     const [passWord, setPassWord] = useState("")
//     return (
//         <div className="flex flex-col items-center  mt-60 gap-10">
//             <div className="flex justify-center">
//                 <h1 className="bg-white text-black px-2 rounded-xl border-black border-2">User CRUD with FS Module</h1>
//             </div>
//             <div className="flex justify-center " >
//                 <input className=" rounded-xl border-black border-2 w-60"
//                     placeholder="Password.."
//                     onChange={(e) => setPassWord(e.target.value)}
//                     value={passWord}
//                 />
//                 <Image src="key.svg" height={16} width={16} className="ml-[-25px]"
//                     onClick={() => Key()}
//                 />
//             </div>
//         </div>)
// }