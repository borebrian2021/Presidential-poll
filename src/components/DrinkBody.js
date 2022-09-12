import react, { useState } from 'react'
import { motion } from 'framer-motion'
import { useHistory } from 'react-router'
import { Link, useNavigate } from 'react-router-dom'
const variants_ = {
    hidden: {
        opacity: 0,
        // x:'100vw'
    },
    visible: {
        opacity: 1,
        // x:0,
        transition: {
            type: 'spring',
            delay: 0.8
        }
    },
    exit: {
        x: '-100vw',
        transition: { ease: 'easeInOut' }

    }
}
function DrinkBody() {
    const history = useNavigate();
    const proceed = (() => {
        history('/DrinksDetails')
    }
    );
    return (
        <motion.div variants={variants_} initial="hidden" animate="visible" exit="exit" className="container-fluid mt-5  hundred">
            <div class="row bg_dark">
                <div class="col-12 col-lg-6 col-md-6 col-sm-6  mb-3 center_first ">
                    {/* <motion.img initial={{x:1500}} animate={{x:-200}} transition={{duration:0.8, delay:1, stiffness:200,type: "spring"}} src="https://i.ibb.co/wQ4G0w1/flatiron-brew.png" class="spring1"/>
                  <motion.img initial={{x:1500}} animate={{x:-70}} transition={{duration:0.8, delay:1.6, stiffness:200,type: "spring"}} src="https://images.punkapi.com/v2/5.png" class="spring1"/>
                  <motion.img initial={{x:1500}} animate={{x:-70}} transition={{duration:0.8, delay:1.6, stiffness:200,type: "spring"}} src="http://images.squarespace-cdn.com/content/v1/6159b81b83700f2629a0a5d4/1639728422593-TOXWZTBTET80PQL5KW1R/glenfiddich+15.png" class="spring1"/>

                  <motion.img initial={{x:1500}} animate={{x:-220}} transition={{duration:1.2, delay:1.3, stiffness:200,type: "spring"}} src="https://images.punkapi.com/v2/4.png" class="spring2"/>
                */}
                    <motion.img initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.8, delay: 1, stiffness: 120, type: "spring" }} src="../../images/onWelcome.png" className="logoBig" />
                    <motion.h4 className="p_white " initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.8, delay: 1.2, stiffness: 120, type: "spring" }} >Carrace Drinks</motion.h4>
                    <motion.p className="p_white" initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.8, delay: 1.4, stiffness: 120, type: "spring" }} >Carrace Drinks,we are trusted by millions to  discover vast collection of liquor,choose the right drink for you every moment.</motion.p>
                    <motion.Button onClick={proceed} className="getStarted" initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.8, delay: 1.6, stiffness: 120, type: "spring" }}>Get Started
                    </motion.Button>
                </div>

                <div class="col-12 col-lg-6 col-md-6 col-sm-6  center_first  text-left">
                    <motion.h4 className="text-white" initial={{ scaleX: 0, scaleY: 0 }} animate={{ scaleX: 1, scaleY: 1 }} transition={{ duration: 0.3, delay: 1 }} exit={{ opacity: 0 }} >Popular Brands</motion.h4>


                    <div className="center_flex">
                        <motion.div initial={{ scaleX: 0, scaleY: 0 }} animate={{ scaleX: 1, scaleY: 1 }} transition={{ duration: 0.3, delay: 1 }} exit={{ opacity: 0 }} class="image_shoot_card"><div><img src="https://iili.io/SURbnI.png" class="image_shoot" /></div> <div class="cardTextSide"><h6 className="text-warning">Whisky</h6>
                            <small className="text-white">Uniquely selected premium whiskeys.</small></div></motion.div>
                        <motion.div initial={{ scaleX: 0, scaleY: 0 }} animate={{ scaleX: 1, scaleY: 1 }} transition={{ duration: 0.3, delay: 1.2 }} exit={{ opacity: 0 }} class="image_shoot_card"><div><img src="https://iili.io/SURj3u.png" class="image_shoot" /></div> <div class="cardTextSide"><h6 className="text-warning">Vodka</h6>
                            <small className="text-white m-0">Selected Vodka with brown sauce for more brownness.</small></div></motion.div>
                        <motion.div initial={{ scaleX: 0, scaleY: 0 }} animate={{ scaleX: 1, scaleY: 1 }} transition={{ duration: 0.3, delay: 1.4 }} exit={{ opacity: 0 }} class="image_shoot_card"><div><img src="https://iili.io/SU5RtV.png" class="image_shoot" /></div> <div class="cardTextSide"><h6 className="text-warning">Gin</h6>
                            <small className="text-white">Selected drinkable milk sugar- infused gin</small></div></motion.div>
                        <motion.div initial={{ scaleX: 0, scaleY: 0 }} animate={{ scaleX: 1, scaleY: 1 }} transition={{ duration: 0.3, delay: 1.6 }} exit={{ opacity: 0 }} class="image_shoot_card"><div><img src="https://iili.io/SU5Pi7.png" class="image_shoot" /></div> <div class="cardTextSide"><h6 className="text-warning">Brandy</h6>
                            <small className="text-white">Brewed with a toasty biscuit flavour. </small></div></motion.div>
                        <motion.div initial={{ scaleX: 0, scaleY: 0 }} animate={{ scaleX: 1, scaleY: 1 }} transition={{ duration: 0.3, delay: 1.8 }} exit={{ opacity: 0 }} class="image_shoot_card"><div><img src="https://iili.io/SU7xsI.png" class="image_shoot" /></div> <div class="cardTextSide"><h6 className="text-warning">Rum</h6>
                            <small className="text-white">  Contains aroma and flavour from switching  yeast.</small></div></motion.div>
                        <motion.div initial={{ scaleX: 0, scaleY: 0 }} animate={{ scaleX: 1, scaleY: 1 }} transition={{ duration: 0.3, delay: 2 }} exit={{ opacity: 0 }} class="image_shoot_card"><div><img src="https://iili.io/SU7p7s.png" class="image_shoot" /></div> <div class="cardTextSide"><h6 className="text-warning">Tequila</h6>
                            <small className="text-white">Made  of fruity esters  and butterscotch.</small></div></motion.div>
                    </div>
                </div>
            </div>


        </motion.div>
    )
}
export default DrinkBody