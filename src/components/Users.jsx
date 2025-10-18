import Navbar from "./Navbar"
import sebaPic from "./sebaPic.jpg"
import maxPic from "./maxPic.jpg"
import josephPic from "./josephPic.jpg"

export default function Users(props) {






    return (


        <>

        <div className="hidden lg:block">
            <Navbar setCurrentPage={props.setCurrentPage} />
        </div>

        <div className="lg:pl-[7vw] bg-[#fffcf2]">
            <div className="py-12  ">
                <p className="kanit text-5xl text-center">Our <i className="font-extrabold">dedicated</i> employees</p>
            </div>

            <div className="grid lg:grid-cols-2 grid-cols-1 w-5/6 mx-auto gap-4 items-center justify-items-center mt-[5%]">
                <div className="grid lg:grid-cols-2 grid-cols-1  p-4 lg:gap-x-12 items-center justify-items-center bg-[#fdf0d5] rounded-lg max-w-[600px]">
                    <div className="">
                        <p className="manrope text-4xl font-semibold italic lg:text-right text-left"><span className="!font-extrabold not-italic">Sebastian</span><br/>Hernandez</p>
                        <p className="italics manrope lg:text-right text">CoFounder</p>
                        <p className="kanit text-base lg:p-5 py-3 text-gray-600 lg:text-right text-left"><span className="font-extrabold">Sebastian H.</span> is the cofounder of treats that treats as well as creator of MCPS's unofficial dating app, Laylnk. During my spare time, I work on other webapps to change my community.</p>
                    </div>
                    
                
                    <div className="lg:w-full w-5/6 lg:mx-0 mx-auto self-start justify-self-start border-2">
                        <img alt="seba pic" src={sebaPic} className="max-h-[350px] w-full object-cover" />

                    </div>
                </div>



                <div className="grid lg:grid-cols-2 grid-cols-1  p-4 lg:gap-x-12 items-center justify-items-center bg-[#fdf0d5] rounded-lg max-w-[600px]">
                    <div className="">
                        <p className="manrope text-4xl font-semibold italic lg:text-right text-left"><span className="!font-extrabold not-italic">Max</span><br/>Ekstein</p>
                        <p className="italics manrope lg:text-right text">CoFounder</p>
                        <p className="kanit text-base lg:p-5 py-3 text-gray-600 lg:text-right text-left"><span className="font-extrabold">Max Ekstein</span> is the vice president of Walter Johnson’s Model UN, as well as the Treasurer for the Daily Announcements. In his free time, he works on an initiative to reinstate culinary classes at Walter Johnson</p>
                    </div>
                    
                
                    <div className=" lg:mx-0 mx-auto self-start justify-self-start border-2 lg:w-full w-5/6">
                        <img alt="max pic" src={maxPic} className="max-h-[350px] w-full object-cover" />

                    </div>
                </div>



                <div className="grid lg:col-span-2 col-span-1 lg:grid-cols-2 grid-cols-1  p-4 lg:gap-x-12 items-center justify-items-center bg-[#fdf0d5] rounded-lg max-w-[600px]">
                    <div className="">
                        <p className="manrope text-4xl font-semibold italic lg:text-right text-left"><span className="!font-extrabold not-italic">Joseph</span><br/>Kelly</p>
                        <p className="italics manrope lg:text-right text">CoFounder</p>
                        <p className="kanit text-base lg:p-5 py-3 text-gray-600 lg:text-right text-left"><span className="font-extrabold text-base">Joseph Kelly</span> facilitates the distribution, baking, and logistical work needed to deliver these treats to the great people of Bethesda! Joseph has more than 540 logged community service hours.</p>
                    </div>
                    
                
                    <div className=" lg:mx-0 mx-auto self-start justify-self-start border-2 w-full lg:max-h-[10000vh]">
                        <img alt="joseph pic" src={josephPic} className="max-h-[350px] w-full object-cover" />

                    </div>
                </div>


                
                
                


            </div>

        



            <div className="py-5 bg-[#fffcf2] mt-12 lg:block hidden">
            <p className="kanit text-lg p-4">
                A Hernandez Production
                <br></br>
                Email: treatsthatreat@gmail.com
            </p>

            </div>
            

        </div>





        </>
    )
}



