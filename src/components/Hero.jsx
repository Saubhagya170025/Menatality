import {motion} from 'framer-motion';
import {styles} from '../styles';


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      {/* removed mx-auto from below div to set the contents at left  */}
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl flex flex-row items-start gap-5`}>    





{/* //this div is for  line and dot of gradient style */}
      {/* <div className='flex flex-col justify-center items-center mt-5'>
        <div className='w-5 h-5 rounded-full bg-[#2aceeb]'/>
        <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-[#2aceeb] to-[#020104]'/>
      </div> */}





{/* this div is for the content and text  */}
      <div>
        <h1 className={`${styles.heroHeadText}`}><span className='text-[#2aceeb]'>Mentality</span></h1>
        <p className={`${styles.heroSubText} mt-14 text-white-100`}>
        Empowering individuals to take control of their mental well-being through <br className='sm:block hidden'/>personalized support and insightful tools.
        </p>
      </div>

      </div>
    




{/* this is for the scroll icon */}

      {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div> */}
      
    </section>
  )
}

export default Hero