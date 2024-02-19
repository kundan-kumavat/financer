import react from 'react';
import logo from '../logo.svg';
import { options, sidebar_title } from '../constants';

function Sidebar(){
    return(
        <div className='bg-secondary md:block hidden w-[100px] h-[100vh] fixed'>
            <div className='p-[15px] items-center h-[100vh] flex flex-col justify-between text-center'>
               <img className='' src={logo} alt="logo" />

               <div className='flex flex-col'>
                {
                    sidebar_title.map((title) => (
                        <div className='m-[15px] font-poppins text-[13px] hover:text-color'>
                        <a className='text-dimWhite hover:text-color' key={title.id} href={`${title.id}`}>
                            <span className='material-symbols-outlined text-[25px] text-dimWhite font-normal hover:text-color'>{title.title}</span>
                            <br /> {title.title}
                        </a>
                        </div>
                    ))
                }
               </div>

               <div className='flex flex-col'>
                {
                    options.map((option) => (
                        <div key={option.id} className='m-[10px]'>
                            <span className='material-symbols-outlined text-[25px] text-dimWhite font-normal hover:text-color'>{option.title}</span>
                        </div>
                    ))
                }
               </div>
            </div>
        </div>
    );
}

export default Sidebar