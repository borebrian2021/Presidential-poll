import react, { useState } from 'react'

import {useNavigate} from 'react-router-dom'


import { motion } from 'framer-motion'





const variants_ = {
    hidden: {
        opacity: 0,
        x: '-100vw'
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            delay: 0.3
        }
    },
    exit: {
        x: '-100vw',
        transition: { ease: 'easeInOut' }

    }
}
function UploadForm() {
    const navigate= useNavigate();
    const BASE_URL = "https://carracedrinks.herokuapp.com/drinks"
    const [category, setCategory] = useState()
    const [name, setName] = useState()
    const [capacity, setCapacity] = useState()
    const [image, setImage] = useState()
    const [price, setPrice] = useState()
    const [percentage, setPercentage] = useState()
    const [description, setDescription] = useState()
    const [cog, setCog] = useState()

    function handleSetCategory(event) {
        setCategory(event.target.value)
    }
    function handleSetName(e) {
        setName(e.target.value)
    }
    function handleSetCapacity(e) {
        setCapacity(e.target.value)
    }

    function handleSetPrice(e) {
        setPrice(e.target.value)
    }

    function handleSetPercentage(e) {
        setPercentage(e.target.value)
    }
    function handleSetDescription(e) {
        setDescription(e.target.value)
    }
    function handleSetCog(e) {
        setCog(e.target.value)
    }

    function handleSetImage(e) {
        setImage(e.target.value)
    }
    function handleSubmit(event) {
        event.preventDefault()
        const toSubmit = {
            category: category,
            name: name,
            capacity: capacity,
            imageSrc: image,
            price: price,
            percentage: percentage,
            description: description,
            CountryOfOrigin: cog,

        }
        fetch(BASE_URL,
            {
                headers: { "Content-type": "application/json" },
                method: "POST",
                body: JSON.stringify(toSubmit)
            }).then(
                (data) => data.json()
            ).then(
                (data1) => {
                    event.target.reset();
                   alert("Bevarage Submitted Successfully!")
                   navigate('/DrinksDetails')
                }
            )
        console.log(toSubmit)
    }

    return (
        <motion.div variants={variants_} initial="hidden" exit="exit" animate="visible" className="ddrinksDetails pt-4 ">
            <form class="row bg_dark2" onSubmit={handleSubmit}>
                <div class="col-12 col-lg-6 col-md-6 col-sm-12 p-5 center_first_flex">
                    <motion.img initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 4, delay: 0.2, stiffness: 120, type: "spring" }} src="./images/bottles.png" className='bottles' />
                    <h6 class="text-white">Brian Kimutai Koskei</h6>
                    <h6 class="text-white">Admin</h6>
                    <h6 class="text-white">Bevarage upload form.</h6>
                </div>
                <div class="col-12 col-lg-6 col-md-6 col-sm-12 p-5  text-left">
                    <h4 class="text-white">Upload bevarage</h4>

                    <motion.label initial={{ x: "100vw" }} animate={{ x: 0 }} transition={{ duration: 0.3, delay: 0.2, stiffness: 120, type: "spring" }} class="text-white">Brand Name:</motion.label>
                    <motion.input value={name} initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.3, delay: 0.3, stiffness: 120, type: "spring" }} required onChange={handleSetName} type="text" placeholder='Enter Brand name...' class="form-control m-2" />
                    <motion.label initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.3, delay: 0.4, stiffness: 120, type: "spring" }} class="text-white">Capacity:</motion.label>
                    <motion.input initial={{ x: -1500 }} value={capacity} animate={{ x: 0 }} transition={{ duration: 0.3, delay: 0.5, stiffness: 120, type: "spring" }} required onChange={handleSetCapacity} type="text" placeholder='Enter capacity...' class="form-control m-2" />
                    <motion.label initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.3, delay: 0.6, stiffness: 120, type: "spring" }} class="text-white">Category:</motion.label>
                    <motion.select initial={{ x: -1500 }} required onChange={handleSetCategory} value={category} animate={{ x: 0 }} transition={{ duration: 0.3, delay: 0.7, stiffness: 120, type: "spring" }} className="form-control m-2">
                        <option value=" Not Selected" >--Selected Category--</option>

                        <option value="Wine" >Wine</option>
                        <option value="Spirit" >Spirit</option>
                        <option value="Gin" >Gin</option>
                        <option value="Wiskey" >Wiskey</option>
                        <option value="rum" >rum</option>
                        <option value="Tequila" >Tequila</option>
                    </motion.select>
                    <motion.label initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.3, delay: 0.8, stiffness: 120, type: "spring" }} class="text-white">Price:</motion.label>
                    <motion.input required value={price} initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.3, delay: 0.9, stiffness: 120, type: "spring" }} type="text" placeholder='Enter price...' class="form-control m-2" onChange={handleSetPrice} />
                    <motion.label initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.3, delay: 1.0, stiffness: 120, type: "spring" }} class="text-white">Alcohol Percentage (%):</motion.label>
                    <motion.input required initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.3, delay: 1.1, stiffness: 120, type: "spring" }} value={percentage} type="text" placeholder='Enter alcohol percentage...' onChange={handleSetPercentage} class="form-control m-2" />
                    <motion.label initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.3, delay: 1.2, stiffness: 120, type: "spring" }} class="text-white">Description:</motion.label>
                    <motion.textarea rows="5" required initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.3, delay: 1.3, stiffness: 120, type: "spring" }} value={description} type="text" placeholder='Enter description...' onChange={handleSetDescription} class="form-control m-2" />
                    <motion.label initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.3, delay: 1.4, stiffness: 120, type: "spring" }} class="text-white">Image URL:</motion.label>
                    <motion.input required initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.3, delay: 1.5, stiffness: 120, type: "spring" }} value={image} placeholder='Enter image URL...' onChange={handleSetImage} class="form-control m-2" />
                    <motion.label initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.3, delay: 1.4, stiffness: 120, type: "spring" }} class="text-white">Country Of Origin:</motion.label>
                    <motion.input required initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.3, delay: 1.5, stiffness: 120, type: "spring" }} value={cog} placeholder='Enter country of origin...' onChange={handleSetCog} class="form-control m-2" />
                    <motion.Button className="getStarted" initial={{ x: 1500 }} animate={{ x: 0 }} transition={{ duration: 0.3, delay: 1.6, stiffness: 120, type: "spring" }} type="submit">Submit</motion.Button>
                </div>
            </form>


        </motion.div>
    )
}

export default UploadForm