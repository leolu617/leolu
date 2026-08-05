import {
  ArrowLeft,
  ArrowRight,
  Calendar
} from "lucide-react";


import {
  motion
} from "framer-motion";


import {
  Link
} from "react-router-dom";


import {
  useState
} from "react";



const activities = [



  {
    id: 1,
    title: "Industry AI Empowerment Workshop Series",
    description:
      "Had a great opportunity to attend the events from the Industry AI Empowerment Workshop Series, hosted by the MODA and the III ...",
    date: "2026.08.04",
    category: "Event",
    image: `${import.meta.env.BASE_URL}images/blogs/20260805-ai.png`
  },



  {
    id: 2,
    title: "Entrepreneurial Management: iiLABs’ book discussion event",
    description:
      "Participated in iiLABs’ book discussion event on Entrepreneurial Management, gaining valuable insights into ...",
    date: "2026.02.25",
    category: "Event",
    image: `${import.meta.env.BASE_URL}images/blogs/20260225-iiLABs.jpg`
  },
  
   {
    id: 3,
    title: "preparing",
    description:
      "This content is still being prepared and will be available soon.",
    date: "2026.06",
    category: "Blog",
    image: `${import.meta.env.BASE_URL}images/blogs/1461208.jpg`
  },





  {
    id: 4,
    title: "preparing",
    description:
      "This content is still being prepared and will be available soon.",
    date: "2026.07",
    category: "Learning",
    image: `${import.meta.env.BASE_URL}images/blogs/1461082.jpg`
  },


 

  {
    id: 5,
    title: "AI RAG Architecture",
    description:
      "Researching enterprise AI applications and Retrieval-Augmented Generation.",
    date: "2026.06",
    category: "AI",
    image: `${import.meta.env.BASE_URL}images/blogs/Image.png`
  }

];





function RecentActivities(){


  const cardsPerView = 3;


  const cardWidth = 320;


  const gap = 24;



  const [
    currentIndex,
    setCurrentIndex
  ] = useState(0);



  const maxIndex =
    activities.length - cardsPerView;







  const nextSlide = ()=>{


    if(
      currentIndex < maxIndex
    ){

      setCurrentIndex(
        currentIndex + 1
      );

    }


  };






  const previousSlide = ()=>{


    if(
      currentIndex > 0
    ){

      setCurrentIndex(
        currentIndex - 1
      );

    }


  };





  return (

    <section

      className="
      py-10
      px-6
      bg-white
      "

    >


      <div

        className="
        max-w-7xl
        mx-auto
        "

      >


<div

  className="
  mb-10
  "

>


  <h2

    className="
    text-4xl
    font-bold
    text-black
    mb-2
    "

  >

    Recent Activities

  </h2>



  <p

    className="
    text-slate-500
    text-base
    leading-relaxed
    "

  >

    Sharing my latest learning journey, technical insights,
    professional experiences, and event highlights.

  </p>


</div>




        <div

          className="
          flex
          items-center
          gap-6
          "

        >






          {/* Left Button Space */}


          <div

            className="
            shrink-0
            w-12
            h-12
            flex
            items-center
            justify-center
            "

          >


            {
              currentIndex > 0 &&

              (

                <button


                  onClick={previousSlide}


                  className="
                  w-12
                  h-12
                  rounded-full
                  border
                  border-slate-300
                  bg-white
                  shadow-md
                  flex
                  items-center
                  justify-center
                  text-slate-700
                  hover:bg-slate-100
                  transition
                  "

                >


                  <ArrowLeft
                    size={22}
                  />


                </button>


              )

            }



          </div>









          {/* Carousel Viewport */}


          <div

            className="
            flex-1
            overflow-hidden
            py-8
            px-2
            "

          >





            {/* Carousel Track */}



            <motion.div


              animate={{

                x:
                -(currentIndex * (cardWidth + gap))

              }}



              transition={{

                type:"spring",

                stiffness:160,

                damping:24,

                mass:0.9

              }}



              className="
              flex
              gap-6
              will-change-transform
              "

            >






              {
                activities.map(

                  (activity)=>(



                    <Link


                      key={activity.id}


                      to="/blogs"


                      className="
                      min-w-[320px]
                      "

                    >




                      <motion.div


                        whileHover={{

                          y:-6,

                          scale:1.02

                        }}



                        transition={{

                          duration:0.3,

                          ease:"easeOut"

                        }}



                        className="
                        rounded-2xl
                        overflow-hidden
                        bg-white
                        border
                        border-slate-200
                        shadow-md
                        hover:shadow-xl
                        cursor-pointer
                        h-full
                        "

                      >







                        {/* Image */}



                        <div

                          className="
                          h-48
                          overflow-hidden
                          "

                        >


                          <img

                            src={
                              activity.image
                            }


                            alt={
                              activity.title
                            }



                            className="
                            w-full
                            h-full
                            object-cover
                            hover:scale-110
                            transition-transform
                            duration-500
                            "

                          />


                        </div>









                        {/* Content */}



                        <div

                          className="
                          p-6
                          "

                        >





                          <span

                            className="
                            text-sm
                            font-medium
                            text-blue-600
                            "

                          >

                            {
                              activity.category
                            }


                          </span>








                          <h3


                            className="
                            mt-3
                            text-xl
                            font-semibold
                            text-slate-900
                            "

                          >


                            {
                              activity.title
                            }


                          </h3>








                          <p

                            className="
                            mt-3
                            text-sm
                            leading-relaxed
                            text-slate-600
                            "

                          >


                            {
                              activity.description
                            }


                          </p>








                          <div


                            className="
                            mt-6
                            flex
                            items-center
                            gap-2
                            text-sm
                            text-slate-500
                            "

                          >



                            <Calendar
                              size={16}
                            />



                            {
                              activity.date
                            }



                          </div>






                        </div>






                      </motion.div>






                    </Link>




                  )


                )

              }






            </motion.div>






          </div>









          {/* Right Button Space */}


          <div

            className="
            shrink-0
            w-12
            h-12
            flex
            items-center
            justify-center
            "

          >



            {
              currentIndex < maxIndex &&

              (

                <button


                  onClick={nextSlide}



                  className="
                  w-12
                  h-12
                  rounded-full
                  border
                  border-slate-300
                  bg-white
                  shadow-md
                  flex
                  items-center
                  justify-center
                  text-slate-700
                  hover:bg-slate-100
                  transition
                  "

                >


                  <ArrowRight
                    size={22}
                  />


                </button>


              )

            }




          </div>






        </div>









        {/* Pagination */}



        <div

          className="
          flex
          justify-center
          gap-3
          mt-8
          "

        >




          {
            Array.from({

              length:
              maxIndex + 1

            }).map(

              (_,index)=>(



                <button


                  key={index}



                  onClick={

                    ()=>setCurrentIndex(index)

                  }



                  className={`

                  w-3
                  h-3
                  rounded-full
                  transition-all
                  duration-300


                  ${
                    currentIndex === index

                    ?

                    "bg-blue-600 scale-125"

                    :

                    "bg-slate-300 hover:bg-slate-400"

                  }

                  `}


                />



              )


            )

          }




        </div>





      </div>



    </section>


  );


}



export default RecentActivities;