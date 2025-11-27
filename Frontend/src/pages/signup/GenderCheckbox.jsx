import React from 'react'

const GenderCheckbox = ({ oncheckboxchange, selectedgender }) => {
    return (
        <div className='flex'>
            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer ${selectedgender === "male" ? "selected" : ""}`}>
                    <span className='label-text text-gray-200'>Male</span>
                    <input type="checkbox" className='checkbox border-slate-900'
                        checked={selectedgender === "male"}
                        onChange={() => oncheckboxchange("male")}
                    />
                </label>
            </div>
            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer ${selectedgender === "female" ? "selected" : ""}`}>
                    <span className='label-text text-gray-200'>Female</span>
                    <input type="checkbox" className='checkbox border-slate-900'
                        checked={selectedgender === "female"}
                        onChange={() => oncheckboxchange("female")}
                    />
                </label>
            </div>
        </div>
    )
}

export default GenderCheckbox

//start code snippet
// import React from 'react'

// const GenderCheckbox = () => {
//   return (
//     <div className='flex'>
//         <div className='form-control'>
//             <label className={`label gap-2 cursor-pointer`}>
//                 <span className='label-text'>Male</span>
//                 <input type="checkbox" className='checkbox border-slate-900'/>
//             </label>
//         </div>
//         <div className='form-control'>
//             <label className={`label gap-2 cursor-pointer`}>
//                 <span className='label-text'>Female</span>
//                 <input type="checkbox" className='checkbox border-slate-900'/>
//             </label>
//         </div>
//     </div>
//   )
// }

// export default GenderCheckbox